# Hero-Section Redesign — Crypto Recovery Fokus

## Ziel
Die aktuelle Hero ist generisch („Recht für die digitale Ökonomie"). Sie soll klar und unmissverständlich auf **Crypto Recovery / Rückführung gestohlener Krypto-Vermögenswerte** ausgerichtet sein — als erstes Versprechen, nicht als Nebensatz.

## Neue Inhalte

**Eyebrow:** `Crypto Recovery · Cybercrime · Seit 2014`

**Headline (H1, serif):**
> Ihre verlorenen Krypto-Werte. Zurückgeholt.

**Sub-Headline (serif, kleiner):**
> Spezialisierte Kanzlei für die Nachverfolgung und Rückführung gestohlener Bitcoin, Ethereum und Stablecoins.

**Fließtext:**
> Ob Wallet-Hack, Exchange-Betrug, Phishing oder Investment-Scam — wir kombinieren juristische Durchsetzungskraft mit forensischer Blockchain-Analyse. Über 500 begleitete Fälle, Zusammenarbeit mit Strafverfolgungsbehörden und führenden Exchanges weltweit.

**CTAs:**
- Primär: `Kostenlose Fallprüfung` → `/kontakt`
- Sekundär: `24/7 Notfall-Hotline` (Telefon-Icon) → `/kontakt`

## Neue Struktur (Split Screen bleibt, aber dichter)

```text
┌──────────────────────────────┬─────────────────────────┐
│ Eyebrow                      │                         │
│ H1 (Recovery-Fokus)          │   Video (bleibt)        │
│ Sub-Headline                 │   + Overlay-Card:       │
│ Fließtext                    │   "BTC · ETH · USDT     │
│ [CTA] [CTA]                  │    Multi-Chain Tracing" │
│                              │                         │
│ ── Trust-Strip ──            │                         │
│ 500+ Fälle | €Mio. zurück    │                         │
│ geführt | 10+ Jahre          │                         │
└──────────────────────────────┴─────────────────────────┘
── Unterleiste: BKA · Coinbase · Binance · Chainalysis ──
```

### Konkrete Änderungen gegenüber jetzt
1. **H1 ersetzen** durch Recovery-Headline, zusätzlich Sub-Headline einführen.
2. **Fließtext** umschreiben (Scam-Typen + Methodik benennen).
3. **CTA-Labels** schärfen (`Mandat anfragen` → `Kostenlose Fallprüfung`; `Erstberatung` → `24/7 Notfall-Hotline`).
4. **Trust-Strip in linker Spalte einbauen** (3 KPIs in Reihe, klein, mit serif-Zahlen): `500+ Fälle` · `€ zweistelliger Mio.-Betrag zurückgeführt` · `10+ Jahre`.
5. **Overlay-Card auf Video** (ersetzt bisherige Card unten links): zeigt unterstützte Chains/Assets statt generischem Text.
6. **Untere Leiste** (innerhalb Hero) ersetzt durch Logo-Reihe (BKA, Polizei NRW, Coinbase, Binance, IOSCO) — bestehende Logos aus `partnerLogos` wiederverwendet, monochrom/opacity-50, klein.
7. Spacing leicht reduzieren (`pt-32 pb-20`), damit die Hero auf 1166×866 ohne Scroll wirkt.

## Was unverändert bleibt
- Video, Bilder, Farb-Tokens (Navy), Typografie, Layout-System (Split Screen).
- Alle übrigen Sections der Startseite.
- Routen, Backend, Logik.

## Technische Umsetzung
- Nur `src/pages/Index.tsx` ändert sich — Block Zeilen ~86–150 (Hero-Section).
- Keine neuen Dependencies, keine Token-Änderungen.
- Logos werden aus dem bereits definierten `partnerLogos`-Array referenziert.
