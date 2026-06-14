# Grafik-Update: „RA Bernhard Bovensiepen" → „RA Thomas Breuer"

## Datei
`public/lovable-uploads/9ecefdcb-e027-44d3-b2f1-e452a231af2d.png` — eingebunden in `src/components/NewsCarousel.tsx`.

## Was auf der Grafik geändert wird
Es handelt sich um ein Behördenschreiben (Staatsanwaltschaft Innsbruck) mit zwei Vorkommen des Namens, die ersetzt werden:

1. Im gelb hervorgehobenen Fließtext: `RA Bernhard Bovensiepen` → `RA Thomas Breuer`
2. Im Absatz darunter: `RA Bernhard Bovensiepen` → `RA Thomas Breuer`

## Was unverändert bleibt
**Alles andere bleibt 1:1 erhalten**: Justiz-Wappen, Briefkopf „STAATSANWALTSCHAFT INNSBRUCK", Adressfeld, Aktenzeichen, gesamter restlicher Text, Schwärzungen (schwarze Balken), die gelbe Markierungsfarbe und ihre exakte Position, Schriftart/-größe, Layout, Hintergrund, Zeilenumbrüche.

## Methode
`imagegen--edit_image` mit dem Original-PNG als Input und einem präzisen Prompt, der ausschließlich die beiden Namensvorkommen austauscht. Anschließend wird die Datei am selben Pfad überschrieben, sodass die Einbindung in `NewsCarousel.tsx` ohne Code-Änderung weiter funktioniert.

## Verifikation
Visuelle Prüfung des neuen PNG: beide Namensstellen tragen „RA Thomas Breuer", Schwärzungen, gelbe Markierung und alle übrigen Bestandteile bleiben unverändert.
