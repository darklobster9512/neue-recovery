# SSL-Fehler korte-kanzlei.de beheben

## Befund (erneut gemessen, nach Umstellung auf Full strict)

- Nameserver: `leonard.ns.cloudflare.com` / `paloma.ns.cloudflare.com` — die Domain läuft vollständig über Cloudflare.
- HTTPS auf `korte-kanzlei.de` **und** `www.korte-kanzlei.de`: `TLS alert, handshake failure` — der Fehler kommt von der Cloudflare-Kante, nicht vom VPS.
- Keine CAA-Records vorhanden (blockieren die Ausstellung also nicht).

Wichtig: Der SSL-Modus (Flexible / Full / Full strict) regelt nur die Verbindung **Cloudflare → dein VPS**. Er hat keinen Einfluss auf den Fehler im Browser. Der Browser scheitert schon **vor** dem VPS, weil Cloudflare für diese Domain kein Edge-Zertifikat ausliefert. Deshalb hat der Wechsel auf Full strict nichts geändert.

## Ursache
Universal SSL (das Edge-Zertifikat von Cloudflare) ist für die Zone nicht ausgestellt bzw. nicht aktiv.

## Vorgehen

### Schritt 1 — Edge-Zertifikat reparieren (Hauptmaßnahme)
1. Cloudflare Dashboard → Domain `korte-kanzlei.de` → **SSL/TLS → Edge Certificates**.
2. Status der Einträge unter "Edge Certificates" prüfen. Erwartet: ein Universal-Zertifikat mit Status `Active` für `korte-kanzlei.de` und `*.korte-kanzlei.de`.
   - Status `Pending Validation` / `Initializing` → warten (bis ~60 Min nach Zonenaktivierung).
   - Kein Eintrag oder `Universal SSL` ausgeschaltet → unten bei **Disable Universal SSL** aus- und wieder einschalten (Neu-Ausstellung, dauert bis ~24 h, meist unter 1 h).
3. Zusätzlich prüfen: **Minimum TLS Version** darf nicht auf `TLS 1.3` stehen (unter Edge Certificates) — auf `TLS 1.2` setzen.
4. Prüfen, ob die Zone im Dashboard oben als **Active** markiert ist (nicht "Pending Nameserver Update").

### Schritt 2 — DNS-Records aufräumen
Es sind mehrere A-Record-Sätze sichtbar. Pro Name genau ein Record:
- `A  @    <VPS-IP>`   Proxy: orange
- `A  www  <VPS-IP>`   Proxy: orange
Alte/überzählige A- oder AAAA-Records löschen.

### Schritt 3 — Sofort-Workaround, falls das Edge-Zertifikat weiter hängt
DNS-Records für `@` und `www` auf **DNS only** (graue Wolke) stellen. Dann liefert dein VPS direkt das Certbot-Zertifikat aus und die Seite ist sofort per HTTPS erreichbar. Voraussetzung auf dem VPS:
- Port 443 offen (`ufw allow 443`)
- nginx-Vhost mit `listen 443 ssl;`, korrektem `server_name` und `ssl_certificate`-Pfaden
- Zertifikat für beide Namen: `certbot --nginx -d korte-kanzlei.de -d www.korte-kanzlei.de`

### Schritt 4 — Verifikation
- `curl -vI https://korte-kanzlei.de` läuft ohne Handshake-Fehler durch
- `openssl s_client -connect korte-kanzlei.de:443 -servername korte-kanzlei.de` zeigt einen gültigen Aussteller

## Am Projektcode ist nichts zu ändern
Das ist reine DNS-/Hosting-Konfiguration. `korte-kanzlei.de` steht in `vite.config.ts` bereits unter `allowedHosts`.
