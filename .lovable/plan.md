# Standortdaten auf Hamburg umstellen

Alle Kanzleidaten werden von Mülheim an der Ruhr / Düsseldorf auf Hamburg umgestellt. E-Mail (info@breuer-partner.de), Geschäftsführung und USt-IdNr. bleiben unverändert.

## Neue Daten

- Breuer & Partner, Domstraße 15, 20095 Hamburg
- Telefon: 040 573086460
- Registergericht: Amtsgericht Hamburg, Registernummer PR 317
- Zuständige Kammer: Hanseatische Rechtsanwaltskammer Hamburg, Valentinskamp 88, 20355 Hamburg

## Änderungen

1. **Adresse überall ersetzen** — Impressum, Datenschutz, AGB, Haftungsausschluss, Kontakt, Footer und die Bestätigungs-E-Mail (Edge Function).
2. **Gerichtsstand / Erfüllungsort** in AGB und Haftungsausschluss: Mülheim an der Ruhr → Hamburg.
3. **Impressum**: Registergericht Amtsgericht Hamburg, PR 317, Kammer-Angaben und Aufsichtsbehörde auf die Hanseatische Rechtsanwaltskammer Hamburg mit Hamburger Adresse und Telefonnummer.
4. **Stellenangebote**: alle Stellen-Standorte „Mülheim an der Ruhr“ → „Hamburg“.
5. **Telefonnummer**: der Wert `phone` in der Settings-Tabelle wird auf `040 573086460` gesetzt, damit alle Telefonanzeigen (Header, Footer, Kontakt, E-Mail-Template) die neue Nummer zeigen. Der Schalter `phone_enabled` bleibt wie er ist.
6. **Projekt-Memory** (Brand Info) wird auf den neuen Sitz Hamburg aktualisiert.

## Technisch

- Textersetzungen in `src/pages/{Impressum,Datenschutz,AGB,Haftungsausschluss,Kontakt,Stellenangebote}.tsx`, `src/components/Footer.tsx`, `supabase/functions/send-confirmation-email/index.ts` (Function wird neu deployed).
- Ein UPDATE auf `public.settings` für den Key `phone`.
