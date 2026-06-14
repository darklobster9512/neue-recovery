# Rebranding zu „Breuer & Partner"

## 1. Textuelle Umbenennung
Ersetze `Bovensiepen & Partner` durch `Breuer & Partner` in allen sichtbaren UI-/SEO-/E-Mail-Texten. **E-Mail-Adresse / Domain `bovensiepenpartner.de` bleibt unverändert** (gemäß Projekt-Memory).

Betroffene Dateien:
- `index.html` – `<title>`, Author, OG, Twitter Meta
- `src/components/Header.tsx` (Desktop + Mobile Logo-Text)
- `src/components/Footer.tsx` (Logo-Text + Copyright)
- `src/components/KompetenzLayout.tsx` (eyebrow, aria-label)
- `src/components/EditorialHero.tsx` (Kommentar, aria-label)
- `src/components/NewsCarousel.tsx` (Fließtext)
- `src/pages/Index.tsx` (aria-label, Hero-Subline)
- `src/pages/Blog.tsx`, `BlogPost.tsx`, `BlogPostCeoFraud.tsx`, `BlogPostKreditgebuehr.tsx` (eyebrow + Fließtext)
- `src/pages/Kontakt.tsx`, `Stellenangebote.tsx`, `UnserePartner.tsx` (eyebrow, Titel, `document.title`)
- `src/pages/Impressum.tsx` – Firma; **`Bernhard Bovensiepen` → `Dr. Thomas Breuer`** (Geschäftsführer-Name)
- `src/pages/Datenschutz.tsx`, `Haftungsausschluss.tsx`, `AGB.tsx` (Firmenname in Adressblöcken)
- `supabase/functions/send-confirmation-email/index.ts` (Header, Footer, Subject, From-Name, Signatur)

## 2. Logo / Brand-Wort
Aktuell ist „das Logo" reiner Schriftzug in `Header.tsx` und `Footer.tsx` — der wird durch die Textersetzung automatisch zu „Breuer & Partner". Der `favicon-and-blue.png` enthält **keinen Namen** (nur blaues Monogramm) und bleibt unverändert.

→ **Es wird keine neue Logo-Grafik erzeugt**, da der Brand-Schriftzug ein reiner Textbestandteil ist. Falls eine eigenständige Bild-Logo-Datei gewünscht ist, bitte separat melden.

## 3. Award-Grafiken (Sektion „Ausgezeichnete Kompetenz")
Auf der Startseite sind zwei Bilder eingebunden:

| Datei | Inhalt | Aktion |
|---|---|---|
| `public/lovable-uploads/9a06dfc4-…png` | anwalt.de 5.0-Sterne-Karte – enthält Kanzleinamen | **Bearbeiten:** nur Textfeld `Bovensiepen & Partner` → `Breuer & Partner`, Layout/Farben/Sterne/Logo 1:1 erhalten |
| `public/lovable-uploads/f083500d-…png` | Auszeichnungs-Badges 2024/2025 | Wird vor Bearbeitung geprüft. Steht der Name drauf → Text ersetzen. Steht er **nicht** drauf → unverändert lassen |

Methode: `imagegen--edit_image` mit Original-PNG als Input und Prompt, der ausschließlich den Namens-Text austauscht und das restliche Design unangetastet lässt. Ergebnis ersetzt die bestehende Datei am gleichen Pfad (Referenzen im Code bleiben gültig).

## 4. Verifikation
- `rg "Bovensiepen & Partner"` muss anschließend leer sein (außer Domain/E-Mail).
- Visuelle Prüfung der beiden Award-Bilder im Preview (`/` Sektion „Ausgezeichnete Kompetenz").
- Header/Footer/Impressum sichtprüfen.

## Hinweis
Die Backend-Domain `bovensiepenpartner.de` (E-Mails, Resend-From-Adresse) bleibt erhalten — nur der Anzeige-Name vor `<…>` wird angepasst.
