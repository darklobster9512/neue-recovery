# Domain-Wechsel zu korte-kanzlei.de

Alle Vorkommen von `korte-partner.de` werden durch `korte-kanzlei.de` ersetzt. Der Firmenname "Korte & Partner" bleibt unverändert.

## Betroffene Stellen (19)

- **E-Mail-Adressen**: `info@korte-partner.de` → `info@korte-kanzlei.de`, `datenschutz@korte-partner.de` → `datenschutz@korte-kanzlei.de`
  - Footer, Kontakt, Impressum, Datenschutz, AGB, Haftungsausschluss
  - Blog-Seiten: BlogPost, BlogPostCeoFraud, BlogPostKreditgebuehr
- **Domain-Host**: `vite.config.ts` → `allowedHosts: ['korte-kanzlei.de']`
- **Edge Function** `send-confirmation-email`: Absender `Korte & Partner <info@korte-kanzlei.de>` sowie Kontaktangaben in der E-Mail-Vorlage; Funktion wird danach neu deployed

## Hinweis

Damit der Versand über Resend funktioniert, muss die neue Domain `korte-kanzlei.de` in Resend verifiziert sein — sonst schlagen Bestätigungs-E-Mails fehl.

## Speicher

Projekt-Memory (Brand Info / Index) wird auf die neue Domain aktualisiert.
