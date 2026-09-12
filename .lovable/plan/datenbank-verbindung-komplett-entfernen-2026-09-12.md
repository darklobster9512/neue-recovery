# Datenbank-Verbindung komplett entfernen

## Warum

Die Landingpage wartet beim Start auf die Datenbank (Einstellungen wie Telefonnummer).
Da die Datenbank entfernt wurde, laufen die Anfragen in Wiederholversuche und einen
Timeout — das sind die ~20 Sekunden "Laden...". Das Kontaktformular ist davon nicht
betroffen: es sendet direkt an dein recovery-panel und bleibt unverändert.

## Was passiert

1. Ladescreen und Datenbank-Abfrage der Einstellungen entfallen. Telefonnummer
   (040 573086462) und die Telefon-Anzeige stehen fest im Code — Seite lädt sofort.
2. Login und Admin-Bereich werden entfernt, da beide nur mit Datenbank funktionieren:
   - Seiten `/auth` und `/admin` fallen weg (führen künftig auf die 404-Seite)
   - Admin-Einstellungen und Telegram-Einstellungen fallen weg
3. Alle Datenbank-Dateien und Verweise werden gelöscht, damit keine Verbindung mehr
   versucht wird.
4. Das Kontaktformular bleibt genau wie es ist (Versand an recovery-panel).

Folge: Telefonnummer und Telefon-Sichtbarkeit sind danach nicht mehr über ein
Admin-Panel änderbar, sondern nur durch eine Textänderung im Code — sag einfach
Bescheid, dann ändere ich sie.

## Technische Details

- Löschen: `src/integrations/supabase/*`, `src/hooks/useAuth.tsx`,
  `src/pages/Auth.tsx`, `src/pages/Admin.tsx`, `src/components/AdminSettings.tsx`,
  `src/components/TelegramSettings.tsx`, `src/components/ProtectedRoute.tsx`,
  `src/components/AdminAutoRedirect.tsx`, `supabase/` (config + functions),
  `.env`-Supabase-Variablen.
- `src/hooks/useSettings.tsx`: auf statische Konstanten reduzieren (`phone`,
  `phoneEnabled`), Provider-API bleibt, damit `PhoneDisplay`/`PhoneLink`/Footer/
  Impressum/AGB/Index unverändert weiterlaufen; `isLoading` immer `false`.
- `src/App.tsx`: `AuthProvider`, `AdminAutoRedirect`, `LoadingScreen`-Gate sowie
  die Routen `/auth` und `/admin` entfernen.
- `@supabase/supabase-js` aus den Abhängigkeiten entfernen.
- Prüfen: Landingpage rendert ohne Verzögerung, keine `supabase.co`-Anfragen mehr
  außer dem Kontaktformular-Versand, Typprüfung ohne Fehler.
