# Landingpage lädt 20 Sekunden — Ursache und Fix

## Was passiert

Beim Start blendet die App einen Vollbild-Ladescreen ("Laden...") ein und zeigt die
Seite erst, wenn die globalen Einstellungen (Telefonnummer, Telefon-Anzeige an/aus)
geladen sind. Diese Einstellungen kommen aus der Datenbank.

Die Datenbank ist aktuell nicht erreichbar: die Anfrage an
`.../rest/v1/settings?...` schlägt mit "Failed to fetch" fehl und wird mehrfach
wiederholt (in den Netzwerk-Logs sichtbar: Versuch, Retry 1, Retry 2). Erst wenn
alle Versuche abgelaufen sind, gibt die App auf und rendert — das sind die ~20
Sekunden.

Kurz: Nicht die Seite ist langsam, sondern sie wartet auf eine Antwort, die nie kommt.

## Lösung

Die Seite soll nie auf die Einstellungen warten:

1. Ladescreen entfernen — die Seite rendert sofort mit sinnvollen Standardwerten
   (Telefonnummer aus dem letzten bekannten Stand, Telefon-Anzeige aktiv).
2. Einstellungen im Hintergrund nachladen. Kommt eine Antwort, aktualisiert sich
   die Telefonnummer stillschweigend.
3. Harte Zeitgrenze (2 Sekunden) plus Abbruch statt Wiederholversuche, damit ein
   toter Datenbank-Anschluss die Seite niemals mehr blockiert.

## Technische Details

- `src/App.tsx`: `LoadingScreen`-Gate in `AppContent` entfernen (kein Blockieren
  auf `useSettings().isLoading` mehr).
- `src/hooks/useSettings.tsx`:
  - Startwerte direkt setzen, `isLoading` bleibt für Konsumenten verfügbar, blockiert
    aber nichts mehr.
  - Fetch mit `AbortSignal.timeout(2000)` umschließen, Fehler still abfangen und
    auf Defaults zurückfallen.
- Danach im Preview prüfen: Landingpage rendert sofort, Telefonnummer erscheint
  korrekt bzw. bleibt beim Standard, keine Endlos-Retries in den Netzwerk-Logs.
