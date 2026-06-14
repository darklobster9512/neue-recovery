# Kontaktanfragen reparieren

## Problem
Test-Insert über die anon-API liefert:
`new row violates row-level security policy for table "contact_messages"`

Ursache: Beim Wiederaufbau der Datenbank wurden zwar Tabellen, RLS-Policies und Trigger angelegt, aber **keine GRANTs**. Ohne explizite GRANTs an `anon`/`authenticated`/`service_role` lehnt PostgREST jeden Zugriff ab — RLS wird gar nicht erst ausgewertet. Betroffen sind alle drei Tabellen: `contact_messages`, `settings`, `user_roles`.

## Fix — Migration mit GRANTs

```sql
-- Kontaktformular: anon darf inserten, Admins (authenticated) lesen/ändern
GRANT INSERT ON public.contact_messages TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contact_messages TO authenticated;
GRANT ALL ON public.contact_messages TO service_role;

-- Settings: jeder darf lesen (Policy "Everyone can read"), Admins schreiben
GRANT SELECT ON public.settings TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.settings TO authenticated;
GRANT ALL ON public.settings TO service_role;

-- user_roles: nur eingeloggte User, kein anon
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
```

## Verifikation nach dem Fix
1. Erneuter anon-Insert via REST → erwartet `201`.
2. Eintrag erscheint im Admin-Panel (`/admin`, Tab Kontaktanfragen) per Realtime-Toast.
3. Test-Datensatz (`source = 'plan_test'`) wieder löschen.

## Hinweis Bestätigungsmail
`send-confirmation-email` benötigt `RESEND_API_KEY`. Insert in DB funktioniert auch ohne — der Mail-Versand wird im Code bereits in try/catch gekapselt und blockiert das Speichern nicht. Falls die Bestätigungsmail aktiv genutzt werden soll, müsste der Resend-Key separat hinterlegt werden (nicht Teil dieses Plans).
