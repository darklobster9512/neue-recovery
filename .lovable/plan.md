

## Plan: Domain von `bovensiepen-kanzlei.de` zu `bovensiepenpartner.de` ändern

Globales Suchen-und-Ersetzen in 13 Dateien. Alle Vorkommen von `bovensiepen-kanzlei.de` werden durch `bovensiepenpartner.de` ersetzt:

| Datei | Änderungen |
|-------|------------|
| `src/components/Footer.tsx` | `info@bovensiepenpartner.de` |
| `src/pages/Kontakt.tsx` | mailto + Anzeige |
| `src/pages/Impressum.tsx` | info@ |
| `src/pages/Datenschutz.tsx` | info@ + datenschutz@ |
| `src/pages/Haftungsausschluss.tsx` | info@ |
| `src/pages/AGB.tsx` | info@ |
| `src/pages/BlogPost.tsx` | mailto + Anzeige |
| `src/pages/BlogPostCeoFraud.tsx` | mailto + Anzeige |
| `src/pages/BlogPostKreditgebuehr.tsx` | 3x (Text + mailto + Anzeige) |
| `src/pages/BlogPostImmobilienrecht.tsx` | info@ |
| `src/pages/BlogPostProzessfuehrung.tsx` | info@ |
| `src/pages/BlogPostPrivateClients.tsx` | info@ |
| `supabase/functions/send-confirmation-email/index.ts` | from-Adresse + Footer-Texte |

Einfaches String-Replace in allen Dateien, keine Logikänderung.

