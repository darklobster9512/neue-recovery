# Rebrand zu "Breuer & Partner"

## 1. Text-Logo (Header & Footer)
Aktuelles "Logo" ist serif-Text — kein Bild. Ersetzen in:
- `src/components/Header.tsx` (Z. 65, 135, aria-label)
- `src/components/Footer.tsx` (Z. 15, 89 Copyright)

→ `Breuer <span class="opacity-60">&</span> Partner`

## 2. Markenname-Anzeige (überall, E-Mail-Adressen bleiben)
Ersetze "Bovensiepen & Partner" → "Breuer & Partner" in:
- `src/components/EditorialHero.tsx`, `KompetenzLayout.tsx`, `NewsCarousel.tsx`
- `src/pages/Index.tsx`, `Blog.tsx`, `BlogPost.tsx`, `BlogPostCeoFraud.tsx`, `BlogPostKreditgebuehr.tsx`
- `src/pages/Kontakt.tsx`, `Stellenangebote.tsx`, `UnserePartner.tsx`
- `index.html` (`<title>`, `og:title`, `twitter:title`, `meta author`)

E-Mail-Adressen `info@bovensiepenpartner.de` und die Domain `bovensiepenpartner.de` **bleiben unverändert**.

## 3. Legal-Seiten (komplett umbenennen)
- `src/pages/Impressum.tsx`: Kanzlei-Name → "Breuer & Partner", **Geschäftsführung** "Bernhard Bovensiepen" → **"Dr. Thomas Breuer"**
- `src/pages/AGB.tsx` (Z. 31, 242)
- `src/pages/Datenschutz.tsx` (Z. 26)
- `src/pages/Haftungsausschluss.tsx` (Z. 27, 202)

Adresse / Registernummer / USt-IdNr. bleiben unverändert.

## 4. E-Mail-Templates (Resend)
`supabase/functions/send-confirmation-email/index.ts`: Alle Anzeige-Strings ("Bovensiepen & Partner") auf "Breuer & Partner", inkl. `from: "Breuer & Partner <info@bovensiepenpartner.de>"` und Betreff. Domain bleibt.

## 5. Award-Grafiken neu generieren
Die 2 PNGs auf der Startseite ("Ausgezeichnete Kompetenz", Z. 327 + 330 in `Index.tsx`) zeigen aktuell "Bovensiepen & Partner". Neu generieren via `imagegen` mit gleichem Stil:
- **Badge 1** — `anwalt.de` 5,0-Sterne-Bewertung für "Breuer & Partner"
- **Badge 2** — Auszeichnungs-Collage 2024/2025 ("Top Wirtschaftskanzlei", "Beste Anwälte" usw.) für "Breuer & Partner"

Speichern unter `src/assets/award-anwaltde.png` und `src/assets/award-2024-2025.png`, in `Index.tsx` per ES-Import einbinden und alte `/lovable-uploads/...png`-Pfade ersetzen.

Hinweis: AI-Bild-Modelle können Text auf Badges manchmal verzerrt rendern. Falls die generierten Badges nicht überzeugen, kommen wir als Fallback auf typografische HTML-Karten zurück.

## 6. Memory aktualisieren
`mem://index.md` und `mem://brand/identity`: Brand-Eintrag von "Bovensiepen & Partner" auf "Breuer & Partner" (Domain `bovensiepenpartner.de` bleibt als technische Domain notiert).
