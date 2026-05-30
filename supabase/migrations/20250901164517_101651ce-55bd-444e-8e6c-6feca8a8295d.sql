
-- 1) Funktion: Automatische Rollenzuweisung bei neuer Registrierung
create or replace function public.handle_new_user_role()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  is_first boolean;
begin
  select count(*) = 0 into is_first from public.user_roles;
  if is_first then
    insert into public.user_roles (user_id, role) values (new.id, 'admin'::app_role);
  else
    insert into public.user_roles (user_id, role) values (new.id, 'user'::app_role);
  end if;
  return new;
end;
$$;

-- 2) Trigger: Bei jedem neuen auth.users-Eintrag die Funktion ausführen
drop trigger if exists on_auth_user_created_set_role on auth.users;
create trigger on_auth_user_created_set_role
  after insert on auth.users
  for each row execute procedure public.handle_new_user_role();

-- 3) Optional: Eindeutigkeit absichern (verhindert doppelte Rollen pro Nutzer)
do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'user_roles_user_id_role_key'
      and conrelid = 'public.user_roles'::regclass
  ) then
    alter table public.user_roles
      add constraint user_roles_user_id_role_key unique (user_id, role);
  end if;
end $$;

-- 4) Backfill: Ältesten Benutzer als Admin setzen, wenn noch keine Rollen existieren
do $$
begin
  if not exists (select 1 from public.user_roles) then
    insert into public.user_roles (user_id, role)
    select id, 'admin'::app_role
    from auth.users
    order by created_at asc
    limit 1;
  end if;
end $$;

-- 5) Backfill: Allen übrigen Benutzern ohne Rolle die Rolle "user" geben
insert into public.user_roles (user_id, role)
select u.id, 'user'::app_role
from auth.users u
where not exists (
  select 1 from public.user_roles ur
  where ur.user_id = u.id
);
