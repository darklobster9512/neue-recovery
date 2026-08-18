# SSL-Fehler korte-kanzlei.de beheben

## Befund (gemessen)

- `korte-kanzlei.de` löst auf Cloudflare-IPs auf (188.114.96.2 / 188.114.97.2, sowie 104.21.83.250 / 172.67.184.1), **nicht** auf deinen VPS.
- HTTP-Antwort kommt von `Server: cloudflare` mit Redirect auf HTTPS.
- Der TLS-Handshake auf Port 443 endet mit `handshake failure` — also direkt an der Cloudflare-Kante, bevor dein VPS überhaupt gefragt wird.

Ergebnis: Dein Certbot-Zertifikat auf dem VPS ist nicht das Problem — es wird nie benutzt. Cloudflare terminiert TLS und hat für diese Domain kein gültiges Edge-Zertifikat (Universal SSL nicht ausgestellt/aktiv). Daher `ERR_SSL_VERSION_OR_CIPHER_MISMATCH`.

## Lösungsweg (eine der zwei Varianten)

### Variante A — Cloudflare weiter nutzen (empfohlen, wenn Proxy gewollt)
1. Cloudflare Dashboard → Domain → **SSL/TLS → Overview**: Modus auf **Full (strict)** setzen (nicht "Off", nicht "Flexible").
2. **SSL/TLS → Edge Certificates**: prüfen, ob **Universal SSL** aktiviert ist und der Status `Active` lautet. Falls `Pending`/deaktiviert: Universal SSL aus- und wieder einschalten, dann bis zu ~15–60 Min warten.
3. Prüfen, dass die Domain bei Cloudflare wirklich `Active` ist (Nameserver am Registrar auf die Cloudflare-NS gesetzt). Bei Status "Pending Nameserver Update" wird kein Edge-Zertifikat ausgestellt.
4. Auf dem VPS das Certbot-Zertifikat behalten (Full strict braucht ein gültiges Origin-Zertifikat) oder alternativ ein **Cloudflare Origin Certificate** installieren.
5. Doppelte A-Records aufräumen: aktuell sind zwei verschiedene IP-Paare sichtbar — pro Name (`@`, `www`) nur ein Record auf die VPS-IP, Proxy-Wolke orange.

### Variante B — Cloudflare-Proxy abschalten, direkt auf den VPS
1. In Cloudflare DNS die Records für `@` und `www` auf **DNS only** (graue Wolke) stellen und auf die echte VPS-IP zeigen lassen.
2. Nach DNS-Propagation liefert nginx/Apache direkt das Certbot-Zertifikat aus.
3. Auf dem VPS sicherstellen: Port 443 in der Firewall offen, `listen 443 ssl;` mit `ssl_certificate`/`ssl_certificate_key` gesetzt, `server_name korte-kanzlei.de www.korte-kanzlei.de;`, danach `nginx -t && systemctl reload nginx`.
4. Zertifikat muss beide Namen abdecken: `certbot --nginx -d korte-kanzlei.de -d www.korte-kanzlei.de`.

## Verifikation
- `curl -vI https://korte-kanzlei.de` muss ohne Handshake-Fehler durchlaufen.
- `openssl s_client -connect korte-kanzlei.de:443 -servername korte-kanzlei.de` zeigt den Aussteller (Let's Encrypt bei Variante B, Google Trust/Let's Encrypt via Cloudflare bei Variante A).

## Am Code ist nichts zu ändern
Das ist reine Hosting-/DNS-Konfiguration. Optional könnte ich `korte-kanzlei.de` bereits vorhandene `allowedHosts` in `vite.config.ts` prüfen — dort steht die Domain schon drin.
