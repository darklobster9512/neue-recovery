# SSL-Fehler korte-kanzlei.de beheben

## Befund (erneut gemessen, nach Umstellung auf Full strict)

- Nameserver: `leonard.ns.cloudflare.com` / `paloma.ns.cloudflare.com` — die Domain läuft vollständig über Cloudflare.
- HTTPS auf `korte-kanzlei.de` **und** `www.korte-kanzlei.de`: `TLS alert, handshake failure` — der Fehler kommt von der Cloudflare-Kante, nicht vom VPS.
- Keine CAA-Records vorhanden (blockieren die Ausstellung also nicht).

Wichtig: Der SSL-Modus (Flexible / Full / Full strict) regelt nur die Verbindung **Cloudflare → dein VPS**. Er hat keinen Einfluss auf den Fehler im Browser. Der Browser scheitert schon **vor** dem VPS, weil Cloudflare für diese Domain kein Edge-Zertifikat ausliefert. Deshalb hat der Wechsel auf Full strict nichts geändert.

## Ursache (bestätigt)
Unter **SSL/TLS → Edge Certificates** steht "Cloudflare will validate the certificate on your behalf. No action is required." — das Universal-SSL-Zertifikat ist also **noch in Ausstellung/Validierung** und noch nicht `Active`. Solange kein aktives Edge-Zertifikat existiert, bricht jeder Browser mit `ERR_SSL_VERSION_OR_CIPHER_MISMATCH` ab. Das ist erwartbar bei einer frisch zu Cloudflare umgezogenen Domain.

## Vorgehen

### Schritt 1 — Ausstellung abwarten
Typisch 15–60 Minuten, im Worst Case bis 24 Stunden. In der Zwischenzeit bleibt die Seite über HTTPS nicht erreichbar. Kein manueller Eingriff nötig, solange der Status sich weiterbewegt.

Falls nach ~24 h weiter kein `Active`:
1. Unter **Edge Certificates** ganz unten **Disable Universal SSL** → speichern → wieder aktivieren. Das erzwingt eine Neu-Ausstellung.
2. Prüfen, dass die Zone oben im Dashboard als **Active** markiert ist (nicht "Pending Nameserver Update").
3. **Minimum TLS Version** auf `TLS 1.2` stellen (nicht `TLS 1.3`).

### Schritt 2 — DNS-Records aufräumen
Es sind mehrere A-Record-Sätze sichtbar. Pro Name genau ein Record:
- `A  @    <VPS-IP>`   Proxy: orange
- `A  www  <VPS-IP>`   Proxy: orange
Alte/überzählige A- oder AAAA-Records löschen.

### Schritt 3 — Sofort-Workaround (empfohlen, damit die Seite jetzt online geht)
DNS-Records für `@` und `www` auf **DNS only** (graue Wolke) stellen. Dann übernimmt dein VPS die TLS-Terminierung mit dem bereits vorhandenen Certbot-Zertifikat und die Seite ist innerhalb weniger Minuten per HTTPS erreichbar. Sobald Universal SSL `Active` ist, kannst du den Proxy wieder auf orange schalten. Voraussetzung auf dem VPS:
- Port 443 offen (`ufw allow 443`)
- nginx-Vhost mit `listen 443 ssl;`, korrektem `server_name` und `ssl_certificate`-Pfaden
- Zertifikat für beide Namen: `certbot --nginx -d korte-kanzlei.de -d www.korte-kanzlei.de`

### Schritt 4 — Verifikation
- `curl -vI https://korte-kanzlei.de` läuft ohne Handshake-Fehler durch
- `openssl s_client -connect korte-kanzlei.de:443 -servername korte-kanzlei.de` zeigt einen gültigen Aussteller

## Am Projektcode ist nichts zu ändern
Das ist reine DNS-/Hosting-Konfiguration. `korte-kanzlei.de` steht in `vite.config.ts` bereits unter `allowedHosts`.
