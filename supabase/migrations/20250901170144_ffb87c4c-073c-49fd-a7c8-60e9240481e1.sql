
-- Ensure RLS is enabled (idempotent)
alter table public.user_roles enable row level security;

-- Remove existing restrictive admin-only SELECT policy if present
drop policy if exists "Admins can view user roles" on public.user_roles;

-- Recreate admin SELECT policy as permissive
create policy "Admins can view user roles"
  on public.user_roles
  for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- Allow authenticated users to view their own roles
create policy "Users can view their own roles"
  on public.user_roles
  for select
  to authenticated
  using (auth.uid() = user_id);
