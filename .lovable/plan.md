## Problem
1. **Navbar unsichtbar:** Der `Header` schaltet auf der Startseite auf `transparent` (weiße Schrift) und blendet sich erst beim Scrollen ein. Die neue Hero hat aber einen hellen Hintergrund (`bg-background` = Off-White) — weiße Navigation auf weißem Grund ist nicht lesbar.
2. **Hero wirkt amateurhaft:** Das eingezwängte 4/5-Video in der rechten Spalte zeigt kaum etwas vom Bild, die „Status: Active Recovery"-Card und das „Crypto Recovery | Seit 2014"-Eyebrow wirken wie ein SaaS-Startup, nicht wie eine Wirtschaftskanzlei.
3. **Texte zu marketinglastig:** „Ihre verlorenen Krypto-Werte. Zurückgeholt." plus „juristische Durchschlagskraft" — zu reißerisch.

## Neue Hero — „Cinematic Full-Bleed"

### Layout
- **Vollflächige Hero**, Höhe `min-h-[88vh]`, Video als Background über die **gesamte Breite und Höhe** (`object-cover`), damit das Bildmaterial wirklich zur Geltung kommt.
- Dezenter, dunkler Verlauf darüber (`from-primary/85 via-primary/55 to-primary/30`) für Textlesbarkeit, ohne das Bild zu erschlagen.
- **Header bleibt transparent** über der dunklen Hero → weiße Navigation ist wieder lesbar. Keine Änderung am `Header` selbst nötig.
- Content linksbündig, unteres Drittel, max. `max-w-3xl` — Editorial-Stil (Linklaters/Freshfields).

### Inhalt (seriös umformuliert)
- **Eyebrow:** dezent, weiß/70, Sans, tracking-wide: `Bovensiepen & Partner — Rechtsanwälte`
- **H1 Serif, 5xl→7xl, weiß, normal:** „Wirtschaftsrecht mit forensischer Tiefe."
- **Lead, weiß/80, max-w-xl:** „Wir beraten Unternehmen, Family Offices und Privatmandanten in komplexen wirtschafts- und kapitalmarktrechtlichen Verfahren — mit besonderem Fokus auf Cybercrime, Kryptonachverfolgung und Prozessführung."
- **CTA-Reihe:** 
  - Primärbutton outline-weiß, `rounded-none`: „Mandat anfragen" → `/kontakt`
  - Sekundär als Textlink mit Pfeil: „Unsere Kompetenzen" → Anker `#kompetenzen`
  - Telefonblock (nur wenn `phoneEnabled`) rechts daneben, getrennt durch vertikalen Hairline: Label „Ansprechpartner" + Nummer in weiß.

### Architektonisches Detail (zurückhaltend)
- Unten dünne, weiße Hairline `border-t border-white/15` über volle Breite mit drei Mini-Trust-Markern in Mono, sehr klein (`text-[10px] uppercase tracking-widest`): „Seit 2014" · „500+ Mandate" · „International tätig" — ersetzt die verspielte Floating-Card.

### Was entfällt
- Eingerahmtes 4/5-Video rechts.
- „Crypto Recovery" Eyebrow (zu eng, Kanzlei macht mehr).
- Italic-Akzent-Headline und Accent-Stripe.
- „Status: Active Recovery"-Karte (wirkt wie Dashboard, nicht wie Kanzlei).

## Tokens & Scope
- Nur semantische Tokens (`bg-primary`, `text-primary-foreground`, `border-white/15` ist OK über Bild). Keine hartkodierten HSL.
- Schriften: `font-serif` für H1, `font-sans` für alles andere.
- **Nur `src/pages/Index.tsx`**, Hero-Block (Zeilen 89–172) wird ersetzt. Header, Footer, alle anderen Sections unverändert.

## Technisches
```text
<section> bg-primary text-primary-foreground relative min-h-[88vh]
  <video object-cover absolute inset-0 />
  <gradient overlay absolute inset-0 />
  <container relative z-10 flex flex-col justify-end pt-32 pb-16>
    <eyebrow />
    <h1 />
    <p lead />
    <CTA row + phone block />
  </container>
  <bottom border with 3 trust markers />
</section>
```
