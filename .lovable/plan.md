## Kompetenzseiten neu gestalten – im Look der neuen Startseite

Ziel: Alle 7 Kompetenzseiten unter `/kompetenz/*` bekommen die gleiche visuelle Sprache wie die überarbeitete `Index.tsx` (cinematischer Hero, Serif-Headlines, Akzentlinie, ruhige Sektionen, Uppercase-Tracking-Labels). Inhalte bleiben unverändert – nur Gestaltung.

### Betroffene Seiten
- `BlogPostKryptonachverfolgung.tsx`
- `BlogPostCeoFraud2.tsx` (Cybercrime)
- `BlogPostWertpapier.tsx` (Kapitalmarktrecht)
- `BlogPostPrivateClients.tsx`
- `BlogPostProzessfuehrung.tsx`
- `BlogPostImmobilienrecht.tsx`
- `BlogPostGesellschaftsrecht.tsx`
- `BlogPostDatenschutz.tsx`

### Einheitliches Layout-Template

**1. Hero (full-bleed, cinematic)**
- Vollflächiges `bg-primary` mit `video.mp4`, Gradient-Overlay wie Startseite (`from-primary/85 via-primary/55 to-primary/30` + Top-Gradient)
- Eyebrow-Label in Uppercase/Tracking: `BOVENSIEPEN & PARTNER — KOMPETENZ`
- H1 in `font-serif`, `text-4xl md:text-6xl lg:text-7xl`, reines Weiß (kein Gradient-Text, kein Glow) – konsistent zur Vorgabe „Reines Weiß + blaue Akzentlinie"
- Blaue Akzentlinie `h-px w-24 bg-sky-400/40`
- Kurzer Lead-Text (1 Satz) in `text-primary-foreground/80`
- Breadcrumb dezent oben in `text-primary-foreground/60`
- Höhe `min-h-[70vh]`

**2. Intro-Sektion**
- Heller Hintergrund, zweispaltig (Eyebrow + großes Serif-Statement links, Fließtext rechts)
- Akzentlinie zur Trennung

**3. Schwerpunkte / Leistungen**
- Nummerierte Liste im Stil der `kompetenzen`-Sektion auf der Startseite (01, 02, 03 … in Serif, Trennlinien, Hover-Akzent)
- Ersetzt den bisherigen FAQ-Accordion-Block mit Gradient-Primary-Hintergrund

**4. CTA-Sektion**
- Ruhig, `bg-primary`, Serif-Headline, blaue Akzentlinie, einzelner Button → Kontakt

**5. Footer** – unverändert

### Technische Eckpunkte
- Keine Änderungen an Routen, Komponenten-Imports, Daten oder Settings
- `Section`-Komponente weiterhin nutzbar, Hero aber als eigenständige `<section>` wie auf der Startseite
- Glow-Textshadows (`var(--text-glow-strong)`) und `bg-gradient-primary bg-clip-text` werden entfernt – konsistent zur neuen Startseite
- Inhalte (Texte, Akkordeon-Items, Listen) bleiben 1:1 erhalten, nur in neue Struktur überführt
- Keine neuen Bilder/Assets

### Vorgehen
Welle 1 (4 Seiten): Kryptonachverfolgung, CeoFraud2, Wertpapier, Immobilienrecht
Welle 2 (4 Seiten): PrivateClients, Prozessfuehrung, Gesellschaftsrecht, Datenschutz

Nach Welle 1 kurzer Check möglich, bevor Welle 2 läuft.