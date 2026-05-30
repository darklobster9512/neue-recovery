## Ziel

Die gesamte Website (Startseite + alle Unterseiten) wird visuell komplett neu aufgesetzt – seriöser, ruhiger, Kanzlei-würdig. **Inhalte, Texte, Bilder und Videos bleiben unverändert**, nur die Gestaltung wird ausgetauscht.

## Design-Direktion

**Farbwelt – „Navy Trust"**
- Primär: tiefes Navy `#0f1b3d` (HSL 222 62% 15%)
- Sekundär: gedecktes Mittelblau `#1e3a5f`
- Akzent: Stahlblau `#3b6fa0` (sparsam, für CTAs & Links)
- Flächen: Off-White `#e8edf3` und reines Weiß
- Keine Glows, keine Neon-Effekte, keine Verläufe mit hoher Sättigung – stattdessen flache Flächen, feine Linien, dezente Schatten

**Typografie**
- Headlines: **Libre Baskerville** (Serif, klassisch, juristisch)
- Body & UI: **IBM Plex Sans** (klar, technisch-präzise)
- Über `@fontsource` eingebunden, in `tailwind.config.ts` als `font-serif` / `font-sans` gemappt
- Großzügige Zeilenhöhen, viel Weißraum, ruhige Hierarchie

**Layout-Sprache – Split Screen**
- Hero: zweispaltig – links Headline + Claim + CTA, rechts großes Bild/Video
- Unterseiten: konsequent zweispaltige Bänder (Text | Bild, Bild | Text alternierend)
- Klare horizontale Trennlinien (hairline borders) statt Cards mit Schatten
- Container max-w-7xl, viel `py-24`-Rhythmus

**Mikro-Design**
- Border-Radius reduziert (`--radius: 0.25rem`) – kantiger, seriöser
- Buttons: flach, mit feiner Border; Primär in Navy
- Cards: ohne starke Schatten, nur 1px Border in Navy/10%
- Animationen: nur dezente Fade-ins, keine Glow-Pulses

## Umsetzungsschritte

1. **Design-System neu aufsetzen**
   - `src/index.css`: Farben, Radius, Shadows, Gradients auf Navy-Trust-Tokens umstellen (Light + Dark)
   - `tailwind.config.ts`: `fontFamily.serif` / `fontFamily.sans` ergänzen
   - `bun add @fontsource/libre-baskerville @fontsource/ibm-plex-sans` + Import in `src/main.tsx`
   - Glow- und Mystery-Tokens entfernen bzw. neutralisieren

2. **Globale Komponenten neu stylen**
   - `Header.tsx` / `HeaderWithDarkBg.tsx`: schlanke, hohe Bar, Serif-Logo, dünne Trennlinie unten
   - `Footer.tsx`: mehrspaltig, ruhig, Navy-Hintergrund mit hellem Text
   - `NewsCarousel.tsx`: editorialer Look statt Card-Schatten

3. **Startseite (`Index.tsx`) neu komponieren**
   - Split-Screen Hero
   - Leistungen als zweispaltige Liste mit Serif-Nummerierung
   - Zahlen/Counter ruhiger, Serif, ohne Glow
   - Testimonials/News editorial

4. **Alle Unterseiten redesignen** (gleiche Tokens, Split-Screen-Bänder, gleicher Inhalt):
   - Kontakt, Blog, BlogPost + alle 10 BlogPost-Varianten
   - AGB, Datenschutz, Impressum, Haftungsausschluss
   - Stellenangebote, UnserePartner, Auth, Admin, NotFound

5. **QA**
   - Preview prüfen (Hero, eine Blog-Detailseite, Footer)
   - Konsole/Netzwerk auf Fehler prüfen
   - Mobile-Breakpoint kurz visuell verifizieren

## Was nicht geändert wird

- Texte, Bilder, Videos, Routen, Backend, Edge Functions, Formularlogik, Admin-Funktionen
- Sprache (Deutsch bleibt)
