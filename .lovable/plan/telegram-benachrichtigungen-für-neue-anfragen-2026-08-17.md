# Telegram-Benachrichtigungen für neue Anfragen

Neuer Tab „Telegram" im Admin-Panel. Dort wird die Chat-ID gespeichert; bei jeder neuen Kontaktanfrage geht automatisch eine Nachricht an diese Chat-ID.

## Admin-Tab

- Feld für die Telegram Chat-ID (gespeichert in der Settings-Tabelle, Key `telegram_chat_id`)
- Schalter „Benachrichtigungen aktiv" (Key `telegram_enabled`)
- Button „Testnachricht senden", um die Einrichtung sofort zu prüfen
- Kurze Anleitung, wie man die Chat-ID über @userinfobot herausfindet

## Bot-Token

Der Bot-Token wird als Secret `TELEGRAM_BOT_TOKEN` hinterlegt — beim Umsetzen wird nach dem Wert gefragt. Der Token liegt nur serverseitig und ist nie im Frontend sichtbar.

## Vorschau der Nachricht

```text
🔔 Neue Kontaktanfrage

Name: Max Mustermann
E-Mail: max.mustermann@example.com
Telefon: 040 1234567
Thema: Krypto-Recovery
Schadenshöhe: 50.000 - 100.000 EUR

Nachricht:
Mir wurden über eine gefälschte Trading-Plattform 78.000 EUR
in Bitcoin entzogen. Ich habe noch die Wallet-Adressen und
alle E-Mails der angeblichen Broker.
```

Telefon und Schadenshöhe erscheinen nur, wenn ausgefüllt. Kein Zeitstempel.

## Technisch

- Neue Edge Function `send-telegram-notification`: liest `TELEGRAM_BOT_TOKEN` (Secret) sowie `telegram_chat_id` / `telegram_enabled` aus `public.settings` und ruft `sendMessage` der Telegram Bot API auf (HTML-Formatierung, Eingaben werden escaped).
- `src/pages/Kontakt.tsx`: nach erfolgreichem Insert wird die Function zusätzlich zur Bestätigungs-E-Mail aufgerufen; Fehler brechen das Formular nicht ab.
- `src/components/AdminSettings.tsx` bzw. eine neue Komponente `TelegramSettings.tsx` + neuer Tab in `src/pages/Admin.tsx`.
- Settings-Keys `telegram_chat_id` und `telegram_enabled` werden mit Standardwerten angelegt; Schreibrechte nur für Admins (bestehende RLS-Policies decken das ab). Die Chat-ID ist über die öffentliche Settings-Leseregel sichtbar — falls das nicht gewünscht ist, kann die Leseregel auf einzelne Keys eingeschränkt werden.
