# Rebrand: Breuer & Partner → Korte & Partner

## Ziel
Alle Vorkommen von "Breuer" werden durch "Korte" ersetzt — im Text, in der Domain/E-Mail, im Logo und in den Grafiken.

## Textuelle Änderungen
- "Breuer & Partner" → "Korte & Partner" in: Header, Footer, index.html (Title, Meta, OG, Twitter), Index, Kontakt, Blog, BlogPost, BlogPostCeoFraud, BlogPostKreditgebuehr, Impressum, Datenschutz, AGB, Haftungsausschluss, Stellenangebote, UnserePartner, KompetenzLayout, EditorialHero, NewsCarousel, TelegramSettings.
- "Dr. Thomas Breuer" / "RA Thomas Breuer" → "Dr. Thomas Korte" / "RA Thomas Korte" (Team, Impressum, Blogposts).
- Domain/E-Mail: `info@breuer-partner.de` → `info@korte-partner.de`; `breuer-partner.de` in `vite.config.ts` allowedHosts → `korte-partner.de`.
- Edge Function `send-confirmation-email`: Absendername, Signatur und E-Mail-Adresse anpassen und neu deployen.

## Logo
Das Logo ist Text-basiert (Header/Footer: "Breuer & Partner" mit gedimmtem &) — wird zu "Korte & Partner". Das Favicon (Ampersand) bleibt unverändert, da es keinen Namen enthält.

## Grafiken (1:1 erhalten, nur Namen tauschen)
- `public/lovable-uploads/9a06dfc4-...png` (anwalt.de Bewertungskarte)
- `public/lovable-uploads/f083500d-...png` (Auszeichnungen 2024/2025)
- `public/lovable-uploads/9ecefdcb-e027-44d3-b2f1-e452a231af2d.png` (Schreiben: "RA Thomas Breuer" → "RA Thomas Korte")

Nur die Textstellen mit dem Namen werden ersetzt; Layout, Stempel, Schwärzungen und Farben bleiben identisch. Grafiken ohne Namen werden nicht angefasst.

## Danach
- Prüfen, dass kein "Breuer" mehr im Code steht.
- Projekt-Memory (Brand Info, Core-Regel Markenname) auf "Korte & Partner" aktualisieren.
