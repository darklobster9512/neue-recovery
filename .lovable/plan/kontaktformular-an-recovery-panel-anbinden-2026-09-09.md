# Kontaktformular an recovery-panel anbinden

Das Formular auf /kontakt schickt Anfragen künftig direkt an das Backend des Projekts "recovery-panel". Die bisherige Speicherung in dieser Seite sowie Telegram- und Bestätigungs-E-Mail werden dabei abgeschaltet.

## Was sich ändert

- Beim Absenden geht die Anfrage an die Funktion `contact-submit` von recovery-panel und landet dort in der Anfragenliste.
- Vor- und Nachname werden aus dem Namensfeld automatisch getrennt (letztes Wort = Nachname).
- Schadenshöhe wird als Zahl übergeben (z. B. "50.000 EUR" wird zu 50000).
- Als Herkunft wird "korte-kanzlei.de" mitgeschickt, damit im Panel erkennbar ist, woher die Anfrage kommt.
- Erfolgsmeldung bleibt wie bisher; bei Fehler erscheint eine Fehlermeldung und die Eingaben bleiben erhalten.
- Nicht mehr aktiv: Speicherung in der bisherigen Datenbank, Telegram-Nachricht dieser Seite, Bestätigungs-E-Mail an den Absender.

## Hinweis

Der Anfragen-Tab im Admin-Bereich dieser Seite zeigt danach keine neuen Einträge mehr — alle neuen Anfragen laufen im recovery-panel auf. Der Tab bleibt bestehen, alte Einträge bleiben sichtbar.

## Technisch

- Datei: `src/pages/Kontakt.tsx`, Funktion `onSubmit`.
- Ziel: `POST https://pcfmaslrlferrnoopgqn.supabase.co/functions/v1/contact-submit`, Header `apikey` + `Authorization: Bearer <anon key von recovery-panel>` (öffentlicher Publishable-Key, darf im Code stehen), `Content-Type: application/json`.
- Body: `{ first_name, last_name, email, phone, topic, damage_amount, message, source: "korte-kanzlei.de" }`.
- Die Funktion ist mit `verify_jwt = false` und `Access-Control-Allow-Origin: *` deployed, also direkt vom Browser aufrufbar.
- Honeypot-/Spam-Prüfung (zu schnelles Absenden) bleibt clientseitig erhalten; Bot-Einsendungen werden weiterhin abgewiesen.
- Entfernt werden im `onSubmit`: der Insert in `contact_messages` sowie die Aufrufe von `send-telegram-notification` und `send-confirmation-email`. Die Edge Functions selbst bleiben unangetastet.
