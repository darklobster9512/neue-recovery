## Datenbank neu aufbauen

Konsolidierte Migration, die das gesamte vorherige Schema in der neu angebundenen Supabase wiederherstellt. Daten (Kontaktnachrichten, bestehende Nutzer-Rollen) sind verloren – Struktur, Policies, Trigger und Default-Settings werden 1:1 nachgebaut.

### Inhalt der Migration

**Enum**
- `app_role` (`admin`, `moderator`, `user`)

**Tabellen** (+ GRANTs + RLS + Policies)
- `public.user_roles` — `id`, `user_id` (→ `auth.users`, ON DELETE CASCADE), `role`, `created_at`; unique (`user_id`, `role`)
  - Policies: Admins SELECT/INSERT/UPDATE/DELETE, Users SELECT eigene Rollen
- `public.contact_messages` — `name`, `email`, `phone`, `topic`, `damage_amount`, `message`, `consent`, `source`, `status`, `spam_score`, `submit_duration`, Timestamps
  - Policies: anon+authenticated INSERT, Admins SELECT/UPDATE/DELETE
  - Realtime aktiv, `REPLICA IDENTITY FULL`
- `public.settings` — `key` (PK), `value`, `updated_at`
  - Policies: Public SELECT, Admins INSERT/UPDATE/DELETE

**Funktionen**
- `public.has_role(_user_id uuid, _role app_role)` — SECURITY DEFINER
- `public.update_updated_at_column()` — Trigger-Helper
- `public.handle_new_user_role()` — erster Nutzer wird automatisch Admin, alle weiteren `user`

**Trigger**
- `update_contact_messages_updated_at` auf `contact_messages`
- `update_settings_updated_at` auf `settings`
- `on_auth_user_created_set_role` auf `auth.users` (führt `handle_new_user_role` aus)

**Seed-Daten in `settings`**
- `phone` = `06131-6365850`
- `phone_enabled` = `true`

### Hinweise nach Migration

1. **Erster Login = Admin**: Sobald du dich neu registrierst, bekommst du automatisch die Admin-Rolle (alle alten User-Accounts sind weg).
2. **RESEND_API_KEY**: Die Edge Function `send-confirmation-email` braucht den Resend-Key. Falls noch nicht in den neuen Secrets, muss er ergänzt werden – ich frage danach, sobald die Migration durch ist.
3. **Auth-Provider** (E-Mail-Bestätigung, evtl. Google/Apple) müssen ggf. im Supabase-Dashboard erneut konfiguriert werden – das liegt außerhalb der Migration.
