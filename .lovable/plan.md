## Ziel
Hero Section im Stil "Architectural Split" (gewählte Direction) implementieren — seriöser Tier-1-Kanzlei-Look mit forensischem Akzent.

## Umsetzung in `src/pages/Index.tsx`

### Layout (Hero Section, ersetzt aktuellen Hero-Block)
- Container mit dezenten vertikalen Hairline-Bordern (`border-x border-primary/10`) als architektonischer Rahmen.
- 12-Spalten-Grid: links 7 Spalten Content, rechts 5 Spalten Visual.
- Background: `bg-background` (warmes Off-White, statt aktuell Navy).

### Linke Spalte (Content)
- Eyebrow in Accent-Farbe: `Crypto Recovery  |  Seit 2014` (mit dezentem Trennstrich).
- H1 Libre Baskerville, 5xl→7xl: "Ihre verlorenen / *Krypto-Werte.* / Zurückgeholt." — mittlere Zeile italic in Accent-Farbe.
- Subheadline mit Accent-Stripe links (1px Steel-Blue vertical bar) + erweiterter Copy: "Spezialisierte Kanzlei für die Nachverfolgung und Rückführung gestohlener Krypto-Assets. Wir vereinen juristische Durchschlagskraft mit technologischer Exzellenz."
- CTA-Reihe: 
  - Primärer Button "Kostenlose Fallprüfung" (dunkles Navy, weißer Text, Hover → Accent).
  - Daneben (nur wenn `phoneEnabled`): "Ansprechpartner 24/7" Mono-Label + dynamische Telefonnummer via `PhoneDisplay`, getrennt durch vertikalen Hairline.

### Rechte Spalte (Visual)
- Verschachtelter Rahmen: outer 4px Offset border in Accent/20 (architektonisch).
- Inner: bestehendes `/video.mp4` im 4/5 Aspect Ratio mit subtilem Navy-Gradient-Overlay (top transparent → bottom Navy/40).
- Floating Status-Card unten links überlappend: weißer Hintergrund, Accent-Top-Border (4px), Mono-Label "Status: Active Recovery", große Zahl "500+" + "Erfolgreiche Mandate".

### Tokens & Styling
- Nur semantische Tokens: `bg-background`, `text-foreground`, `text-primary`, `text-accent`, `border-primary/10` etc. — keine hartkodierten HSL-Werte.
- Schriften: `font-serif` (Libre Baskerville) für Headline & Stats, `font-sans` (IBM Plex) für alles andere.
- Phone-Toggle respektieren: `useSettings().phoneEnabled` Block conditional rendern.

### Was unverändert bleibt
- Alle anderen Sections (Manifest, Stats, Kompetenzen, News, Team, Awards, Partner Logos, Final CTA, Footer).
- Header-Komponente.
- Navy-Trust-Palette, Typografie, alle bestehenden Bilder/Videos.

## Technischer Scope
- Nur `src/pages/Index.tsx`, Hero-Block (Zeilen 86–125) und Imports.