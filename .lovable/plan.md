## Einheitlicher Hero-Stil für alle restlichen Seiten

Ziel: Der alte Hero-Block (`bg-gray-800`, `bg-black/70`, `text-glow-strong`, `bg-gradient-primary bg-clip-text`, Badges, eingebettetes `<video>` mit Inline-Style) wird auf allen verbliebenen Seiten durch den neuen cinematischen Editorial-Hero (wie auf Kompetenz- und Startseite) ersetzt. Inhalte bleiben 1:1 erhalten — nur Gestaltung.

### Betroffene Seiten
- `src/pages/BlogPost.tsx` (dynamische Generikseite)
- `src/pages/BlogPostKreditgebuehr.tsx`
- `src/pages/BlogPostCeoFraud.tsx`
- `src/pages/Blog.tsx`
- `src/pages/Kontakt.tsx`
- `src/pages/Stellenangebote.tsx`
- `src/pages/UnserePartner.tsx`

### Neuer Hero (einheitlich)
- `<section class="relative bg-primary text-primary-foreground min-h-[70vh] flex flex-col overflow-hidden">`
- Full-bleed `/video.mp4` mit zwei Gradient-Overlays (`from-primary/85 via-primary/55 to-primary/30` + Top-Gradient)
- Breadcrumb dezent, Uppercase-Tracking, `text-primary-foreground/60`
- Eyebrow-Label (Uppercase, `tracking-[0.3em]`): seitenspezifisch
  - Blog-Posts: `Bovensiepen & Partner — Insights`
  - Blog: `Bovensiepen & Partner — News & Insights`
  - Kontakt: `Bovensiepen & Partner — Kontakt`
  - Stellenangebote: `Bovensiepen & Partner — Karriere`
  - Unsere Partner: `Bovensiepen & Partner — Netzwerk`
- H1 in `font-serif text-4xl md:text-6xl lg:text-7xl`, reines Weiß, **kein Gradient-Text, kein Glow**
- Akzentlinie `h-px w-24 bg-sky-400/40`
- Lead-Text in `text-primary-foreground/80`
- Bei Blog-Posts zusätzlich Meta-Zeile (Datum/Lesezeit/Autor) dezent unter dem Lead in `text-primary-foreground/60`

### Vorgehen
- Hero-Reuse: neue, schlanke Komponente `src/components/EditorialHero.tsx` mit Props (`eyebrow`, `breadcrumb`, `title`, `lead`, `meta?`), damit alle Seiten denselben Hero nutzen und `KompetenzLayout` perspektivisch ebenfalls darauf zurückgreifen kann. Initialer Einsatz nur in den oben genannten Seiten — `KompetenzLayout` bleibt unverändert in dieser Welle.
- Restlicher Seiteninhalt (Artikeltext, Formulare, Listen, Footer) bleibt unverändert.
- Badges/Glow/Inline-Video-Styles werden entfernt.
- Keine Routen-, Daten- oder Settings-Änderungen.

### Welle
- Welle 1: `BlogPost.tsx`, `BlogPostKreditgebuehr.tsx`, `BlogPostCeoFraud.tsx`, `Blog.tsx`
- Welle 2: `Kontakt.tsx`, `Stellenangebote.tsx`, `UnserePartner.tsx`
