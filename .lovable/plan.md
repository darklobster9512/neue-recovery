## Hero-Headline seriöser gestalten

### Ziel
Den aktuellen hellblauen Gradient-Effekt der Hero-H1 in `src/pages/Index.tsx` entfernen und stattdessen einen seriöseren, zurückhaltenden Look umsetzen: reines Weiß für die Headline plus eine schmale hellblaue Akzentlinie darunter.

### Änderungen in `src/pages/Index.tsx` (Hero-Block)

1. **Hauptzeile** (`"Wir holen Ihre Krypto-Werte zurück"`)
   - Entferne: `bg-gradient-to-b`, `bg-clip-text`, `text-transparent`, `drop-shadow`
   - Setze stattdessen: `text-white` (oder `text-primary-foreground`)
   - Schrift bleibt `font-serif`, gleiche Größe und Gewicht

2. **Akzentlinie**
   - Neue Element direkt unter der Headline oder unter der Subline
   - Dünne Linie (`h-px` oder `h-[1px]`), zentriert
   - Farbe: `bg-sky-500/40` oder `bg-sky-400/30`
   - Breite: z. B. `w-24` oder `w-32` — dezent, nicht zu breit

3. **Subline** bleibt unverändert
   - Weiterhin `uppercase`, `tracking-wide`, `text-primary-foreground/70`

### Technische Details
- Keine neuen Design-Tokens nötig
- Keine Änderungen an Layout, Navigation oder anderen Sektionen
- Nur visuelle Anpassung im Hero-Bereich

### Ergebnis
Headline wirkt klarer, schärfer und seriöser. Die einzelne blaue Linie gibt einen ruhigen, professionellen Akzent ohne visuellen Lärm.