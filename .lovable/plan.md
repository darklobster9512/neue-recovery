# Logo-Export als PNG

## Ziel
Der Schriftzug "Korte & Partner" (aktuell nur als Text im Header) wird als hochauflösende PNG-Datei exportiert.

## Gestaltung
- Schrift: Libre Baskerville (Serif) — identisch zur Website
- "Korte" und "Partner": Schwarz
- "&": modernes Blau (kräftiges Stahlblau, passend zur Website-Akzentfarbe)
- Transparenter Hintergrund, hohe Auflösung (ca. 2400 px Breite)

## Lieferung
- `logo-korte-partner.png` (transparent, für helle Hintergründe)
- Zusätzlich eine Variante mit weißem Hintergrund für Dokumente/Briefpapier

## Technisch
Rendering per Python/PIL mit der eingebundenen Libre-Baskerville-Schriftdatei, Ausgabe nach `/mnt/documents/`. Am Code der Website wird nichts geändert.
