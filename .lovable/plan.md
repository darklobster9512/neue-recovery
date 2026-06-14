## Ziel

Alle alten Kanzleidaten (München-Adresse, alte E-Mail, alte USt-IdNr., Amtsgericht/RAK München) durch die neuen Daten ersetzen.

## Neue Daten

- **Adresse:** Wallstraße 13, 45468 Mülheim an der Ruhr
- **E-Mail:** info@breuer-partner.de (auch datenschutz@breuer-partner.de)
- **USt-IdNr.:** DE317391938
- **Registergericht:** Amtsgericht Düsseldorf
- **Gerichtsstand:** Mülheim an der Ruhr
- **Zuständige RAK:** Rechtsanwaltskammer Düsseldorf — Freiligrathstraße 25, 40479 Düsseldorf, www.rechtsanwaltskammer-duesseldorf.de

## Betroffene Dateien & Änderungen

**src/components/Footer.tsx**
- Adresse → Wallstraße 13 / 45468 Mülheim an der Ruhr
- E-Mail → info@breuer-partner.de

**src/pages/Impressum.tsx**
- Adresse, E-Mail, USt-IdNr. → neue Werte
- Registergericht: Amtsgericht München → Amtsgericht Düsseldorf
- RAK-Block: München → Rechtsanwaltskammer Düsseldorf, Freiligrathstraße 25, 40479 Düsseldorf, www.rechtsanwaltskammer-duesseldorf.de

**src/pages/AGB.tsx**
- Kanzleizeile (Adresse), Gerichtsstand München → Mülheim an der Ruhr
- Adresse + E-Mail unten

**src/pages/Datenschutz.tsx**
- Adresse, info@ und datenschutz@bovensiepenpartner.de → @breuer-partner.de

**src/pages/Haftungsausschluss.tsx**
- Gerichtsstand-Satz: München → Mülheim an der Ruhr
- Adresse + E-Mail

**src/pages/Kontakt.tsx**
- mailto + Anzeige-E-Mail → info@breuer-partner.de
- Adresse → Wallstraße 13 / 45468 Mülheim an der Ruhr

**src/pages/Stellenangebote.tsx**
- Alle 6 `location: "München"` → `"Mülheim an der Ruhr"`

**src/pages/BlogPost.tsx, BlogPostCeoFraud.tsx, BlogPostKreditgebuehr.tsx**
- info@bovensiepenpartner.de → info@breuer-partner.de (mailto + Anzeigetext)

**supabase/functions/send-confirmation-email/index.ts**
- Adresse im Footer, beide E-Mail-Erwähnungen, `from:`-Adresse → @breuer-partner.de + neue Anschrift

## Hinweis

Die `from:`-Adresse in der Edge Function (`info@breuer-partner.de`) funktioniert erst, sobald die Domain `breuer-partner.de` in Resend verifiziert ist. Bis dahin schlägt der Mailversand fehl — bitte Domain in Resend hinzufügen/verifizieren.

## Memory-Update

Core-Regel „Email/domain remains bovensiepenpartner.de" und `mem://brand/identity` werden auf die neuen Werte (Adresse Mülheim, Domain breuer-partner.de) aktualisiert.
