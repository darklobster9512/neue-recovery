## Hero-Headline visuell aufwerten

In `src/pages/Index.tsx` wird die aktuelle H1 so umgebaut, dass der Hauptsatz "Wir holen Ihre Krypto-Werte zurück" durch einen dezenten hellblauen Vertikal-Gradient hervorgehoben wird und sich klar von der Subline absetzt.

### Änderungen

1. **Hauptzeile** ("Wir holen Ihre Krypto-Werte zurück")
   - Gradient-Text: `from-sky-300 via-sky-400 to-sky-500` (vertikal, oben→unten)
   - Dezenter blauer Glow: `drop-shadow` mit ~20 % Sky-500
   - Bleibt `font-bold`, gleiche Größe wie bisher

2. **Subline** ("rechtlich, international, nachweisbar")
   - Wird optisch zurückgenommen: kleinere Größe, `uppercase`, `tracking-wide`
   - Farbe: gedecktes Slate-Grau (`text-slate-400`)
   - Trennzeichen werden zu schmalen vertikalen Strichen `|` zwischen den Wörtern

3. **Akzentlinie**
   - Dünne, mittig zentrierte Linie unter dem Block mit horizontalem Gradient (transparent → sky-500/50 → transparent)

### Technische Details

- Nur visuelle Änderung in `src/pages/Index.tsx` (Hero-Block, ca. Zeile 110–115)
- Falls Tailwind v3 im Projekt: `bg-gradient-to-b` statt `bg-linear-to-b` verwenden
- Farben über Tailwind-Klassen (sky-300/400/500, slate-400/600) — keine neuen Design-Tokens nötig
- Keine Änderungen an Layout, Navigation, anderen Sektionen oder Business-Logik

### Ergebnis

Der Hauptsatz wirkt wie "in das dunkle Hintergrundbild eingraviert", mit einem kühlen, seriösen Hellblau-Schimmer — die Subline tritt als zurückhaltender Untertitel auf, was die Hierarchie deutlich verstärkt.
