## Neues Favicon mit "&"-Zeichen

**Ziel:** Favicon zeigt das "&"-Zeichen aus dem Logo, in Dunkelblau (`hsl(214 100% 14%)` wie Hero-Section), mit transparentem Hintergrund.

### Schritte

1. **Favicon generieren** mit `imagegen` (premium für saubere Typografie):
   - Großes serifenloses `&`-Zeichen, mittig
   - Farbe: Dunkelblau `#001F47` (entspricht `hsl(214 100% 14%)`)
   - Transparenter Hintergrund (PNG)
   - 512×512, quadratisch
   - Speicherort: `public/favicon.png`

2. **`index.html` aktualisieren:**
   - `<link rel="icon">` und `<link rel="apple-touch-icon">` auf `/favicon.png` umstellen (statt `/lovable-uploads/favicon-and-blue.png`)
   - OG- und Twitter-Image-Meta-Tags **unverändert lassen** (für Social Sharing weiterhin das alte Bild – dort braucht es keinen transparenten Mini-Favicon)

3. **Alte `public/favicon.ico` löschen**, damit Browser nicht automatisch die alte Datei laden.

### Hinweis
Die Schriftart des `&` orientiert sich an einer modernen, kanzlei-tauglichen Sans-Serif (vergleichbar zum bestehenden Logo-Stil). Falls du eine bestimmte Schrift (z. B. Serif, Italic) möchtest, sag Bescheid – sonst nehme ich eine klare, geometrische Sans.
