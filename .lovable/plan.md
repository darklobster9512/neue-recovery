## Texte auf allen Unterseiten überarbeiten

Ziel: alle Seiten außer der Startseite bekommen seriösere, präzisere juristische Tonalität, und wo inhaltlich passend einen Bezug zum Schwerpunkt **Crypto Recovery / Blockchain-Forensik**. Layout, Komponenten und Routing bleiben unverändert.

### Tonalitäts-Leitlinien (für alle Seiten)
- Knapper, juristisch-präziser Stil — keine werblichen Floskeln
- Aktiv statt passiv, keine Buzzwords
- Headlines: nominal, ruhig (z. B. "Mandantenkontakt" statt "Lassen Sie uns sprechen!")
- Wo passend: ein Satz Brückenschlag zur Krypto-/Blockchain-Kompetenz der Kanzlei

### Seiten & Bearbeitungslogik

**Kontakt-Bezogen**
- `Kontakt.tsx` — seriösere Anrede, Hinweis auf Erstberatung auch für Crypto-Recovery-Mandate
- `UnserePartner.tsx` — sachliche Profile, Crypto-Recovery-Expertise hervorheben wo zutreffend
- `Stellenangebote.tsx` — sachlicher Ton, Nennung Schwerpunktbereiche inkl. Blockchain-Forensik

**Kompetenzseiten** (`/kompetenz/*`)
- `BlogPostKryptonachverfolgung.tsx` — Hauptseite, voller Fokus
- `BlogPostCeoFraud2.tsx` (Cybercrime) — direkter Crypto-Bezug ausbauen
- `BlogPostWertpapier.tsx` — Brücke zu Krypto-Assets als Kapitalmarktinstrumente
- `BlogPostPrivateClients.tsx` — Krypto-Vermögen in Family-Office-Kontext
- `BlogPostProzessfuehrung.tsx` — internationale Durchsetzung inkl. Krypto-Fälle
- `BlogPostImmobilienrecht.tsx` — sachlicher Ton, dezenter Hinweis auf Mittelherkunftsnachweise (Krypto → Immobilie)
- `BlogPostGesellschaftsrecht.tsx` — sachlicher Ton, knapper Hinweis auf Krypto-Unternehmen
- `BlogPostDatenschutz.tsx` — sachlicher Ton, kein erzwungener Krypto-Bezug

**Blog-Übersicht & Blog-Posts**
- `Blog.tsx` — seriösere Intro-Texte
- 4 Blog-Post-Seiten (`BlogPost.tsx`, `BlogPostCeoFraud.tsx`, `BlogPostKreditgebuehr.tsx`) — Einleitungen und Fließtext seriöser, faktischer

**Ausgeschlossen** (laut Antwort):
- `Index.tsx` (Startseite)
- `Impressum.tsx`, `Datenschutz.tsx`, `AGB.tsx`, `Haftungsausschluss.tsx` (formale Pflichttexte)
- `Auth.tsx`, `Admin.tsx`, `NotFound.tsx` (System-Seiten)

### Vorgehen
1. Pro Seite: bestehenden Text lesen, ersetzen mit überarbeiteter Version
2. Reine Text-Änderungen — keine Komponenten, Imports, Routen, Styles, Bilder
3. SEO-relevante Felder (Title, Meta-Description, H1) mit anpassen, falls vorhanden
4. Keine Änderungen an Datenbank, Settings oder Edge Functions

### Größe & Aufteilung
Da es ~14 Seiten sind, arbeite ich sie thematisch in zwei Wellen ab:
- **Welle 1**: Kompetenzseiten (7 Dateien) — höchster Hebel für Crypto-Recovery-Bezug
- **Welle 2**: Kontakt, Partner, Stellenangebote, Blog-Übersicht + Blog-Posts (7 Dateien)

Das hält jede Welle überschaubar und du kannst nach Welle 1 stoppen oder Feedback geben.