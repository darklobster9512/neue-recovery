# Telefonnummer auf 040 573076450 ändern

Die Telefonnummer steht an genau einer zentralen Stelle im Code und wird von dort überall angezeigt: Header, Footer, Kontaktseite, Impressum und AGB.

## Änderung

1. Zentraler Wert wird von `040 573086462` auf `040 573076450` gesetzt (in `src/hooks/useSettings.tsx`).
2. Kurzer Check in der Vorschau: Footer und Kontaktseite zeigen die neue Nummer, der Anruf-Link funktioniert.

## Nicht geändert

- Telefonnummer der Hanseatischen Rechtsanwaltskammer im Impressum (040 357441-0) — das ist die Kammer, nicht die Kanzlei.
