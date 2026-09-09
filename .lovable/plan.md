# Telefonnummer auf 040 573086462 ändern

Die Kanzlei-Telefonnummer ist zentral in der Datenbank hinterlegt (Tabelle `settings`, Schlüssel `phone`) und wird auf allen Seiten dynamisch angezeigt — Header, Footer, Kontaktseite, Impressum, AGB sowie in der Bestätigungs-E-Mail und der Kanzlei-Telefonanzeige. Im Code ist keine Telefonnummer fest verankert (geprüft).

## Änderungen

1. **Datenbank**: Der Wert des Eintrags `phone` in der Tabelle `public.settings` wird auf `040 573086462` gesetzt.
2. Der Schalter `phone_enabled` (Anzeige ein/aus) bleibt unverändert.
3. Danach Kurzer Check im Preview: Kontaktseite und Footer zeigen die neue Nummer mit funktionierendem Anruf-Link.

## Nicht geändert

- Telefonnummer der Hanseatischen Rechtsanwaltskammer im Impressum (040 357441-0) — das ist die Kammer, nicht die Kanzlei.
- Aufsichtsbehörde im Datenschutz — separater Punkt, kann bei Bedarf angepasst werden.
