import { HeaderWithDarkBg } from "@/components/HeaderWithDarkBg";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Separator } from "@/components/ui/separator";
import { PhoneDisplay } from "@/components/PhoneDisplay";
import { useSettings } from "@/hooks/useSettings";

const AGB = () => {
  const { phoneEnabled } = useSettings();
  return (
    <div className="min-h-screen bg-background">
      <HeaderWithDarkBg />
      
      <main className="pt-24">
        <Section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeader>
              <SectionTitle>Allgemeine Geschäftsbedingungen</SectionTitle>
              <SectionDescription>
                Geschäftsbedingungen für die Nutzung unserer Website und Dienstleistungen
              </SectionDescription>
            </SectionHeader>

            <div className="space-y-8 text-left">
              {/* Geltungsbereich */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">§ 1 Geltungsbereich</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Leistungen der 
                    Rechtsanwaltskanzlei Bovensiepen & Partner, Nymphenburger Str. 20, 80335 München, 
                    nachfolgend "Kanzlei" genannt.
                  </p>
                  <p>
                    Die AGB gelten sowohl für die Nutzung unserer Website als auch für alle 
                    Beratungs- und Vertretungsleistungen. Abweichende Bedingungen des Mandanten 
                    werden nur wirksam, wenn sie ausdrücklich schriftlich anerkannt werden.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Vertragsschluss */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">§ 2 Vertragsschluss</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Ein Mandatsverhältnis kommt durch schriftliche Vereinbarung oder durch 
                    konkludente Handlungen (z.B. Auftragserteilung und Annahme durch Tätigwerden) 
                    zustande. Die Kanzlei ist berechtigt, Mandate ohne Angabe von Gründen abzulehnen.
                  </p>
                  <p>
                    Interessenkonflikte werden vor Mandatsübernahme geprüft. Bei Vorliegen eines 
                    Interessenkonflikts wird das Mandat nicht übernommen oder beendet.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Leistungsumfang */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">§ 3 Leistungsumfang</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Der Umfang der anwaltlichen Tätigkeit bestimmt sich nach der jeweiligen 
                    Vereinbarung. Soweit nicht ausdrücklich etwas anderes vereinbart wird, 
                    umfasst das Mandat nur die Tätigkeit in der beauftragten Angelegenheit 
                    und Instanz.
                  </p>
                  <p>
                    Die Kanzlei erbringt ihre Leistungen nach den Regeln der anwaltlichen 
                    Sorgfaltspflicht und den Grundsätzen ordnungsgemäßer anwaltlicher Tätigkeit. 
                    Ein Erfolg der Tätigkeit wird nicht geschuldet.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Vergütung */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">§ 4 Vergütung</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Die Vergütung richtet sich nach dem Rechtsanwaltsvergütungsgesetz (RVG), 
                    soweit nicht eine abweichende Vergütungsvereinbarung getroffen wurde.
                  </p>
                  <p>
                    Bei Vergütungsvereinbarungen werden diese schriftlich dokumentiert. 
                    Auslagen und Kosten Dritter (Gerichtskosten, Sachverständigenkosten etc.) 
                    sind vom Mandanten zusätzlich zu erstatten.
                  </p>
                  <p>
                    Rechnungen sind innerhalb von 14 Tagen nach Zugang ohne Abzug zur Zahlung fällig. 
                    Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem 
                    Basiszinssatz berechnet.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Mitwirkungspflichten */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">§ 5 Mitwirkungspflichten des Mandanten</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Der Mandant ist verpflichtet, die für die Bearbeitung erforderlichen 
                    Informationen vollständig und wahrheitsgemäß mitzuteilen sowie alle 
                    relevanten Unterlagen zur Verfügung zu stellen.
                  </p>
                  <p>
                    Änderungen der Sachlage oder neue Erkenntnisse sind der Kanzlei unverzüglich 
                    mitzuteilen. Bei unvollständigen oder unrichtigen Angaben haftet die Kanzlei 
                    nicht für daraus entstehende Nachteile.
                  </p>
                  <p>
                    Der Mandant hat Fristen und Termine zu beachten und auf Anfrage der Kanzlei 
                    zeitnah zu antworten. Bei nicht rechtzeitiger Mitwirkung kann die Kanzlei 
                    das Mandat kündigen.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Verschwiegenheit */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">§ 6 Verschwiegenheit und Datenschutz</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Die Kanzlei unterliegt der anwaltlichen Verschwiegenheitspflicht nach § 43a BRAO. 
                    Alle Informationen werden streng vertraulich behandelt.
                  </p>
                  <p>
                    Die Verarbeitung personenbezogener Daten erfolgt entsprechend unserer 
                    Datenschutzerklärung und den gesetzlichen Bestimmungen der DSGVO.
                  </p>
                  <p>
                    Mandanten können jederzeit Auskunft über die gespeicherten Daten verlangen 
                    und deren Berichtigung oder Löschung fordern, soweit gesetzliche 
                    Aufbewahrungspflichten dem nicht entgegenstehen.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Haftung */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">§ 7 Haftung</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Die Kanzlei haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit. 
                    Bei einfacher Fahrlässigkeit haftet die Kanzlei nur bei Verletzung 
                    wesentlicher Vertragspflichten und nur in Höhe des vorhersehbaren Schadens.
                  </p>
                  <p>
                    Die Haftung ist der Höhe nach auf die Deckungssumme der Berufshaftpflichtversicherung 
                    (€ 2.500.000 je Schadensfall) begrenzt, soweit gesetzlich zulässig.
                  </p>
                  <p>
                    Für mittelbare Schäden, Folgeschäden und entgangenen Gewinn haftet die 
                    Kanzlei nur bei Vorsatz und grober Fahrlässigkeit.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Kündigung */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">§ 8 Kündigung</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Das Mandatsverhältnis kann von beiden Seiten jederzeit gekündigt werden. 
                    Die Kündigung bedarf der Schriftform.
                  </p>
                  <p>
                    Bei Kündigung durch den Mandanten bleibt der Vergütungsanspruch für bereits 
                    erbrachte Leistungen bestehen. Bei wichtigem Grund kann die Kanzlei das 
                    Mandat fristlos kündigen.
                  </p>
                  <p>
                    Nach Beendigung des Mandats werden die Handakten dem Mandanten auf Verlangen 
                    herausgegeben, soweit nicht gesetzliche Zurückbehaltungsrechte bestehen.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Website-Nutzung */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">§ 9 Nutzung der Website</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Die Inhalte unserer Website dienen ausschließlich der allgemeinen Information. 
                    Sie stellen keine Rechtsberatung dar und können eine individuelle Beratung 
                    nicht ersetzen.
                  </p>
                  <p>
                    Für die Vollständigkeit, Richtigkeit und Aktualität der Inhalte wird keine 
                    Gewähr übernommen. Die Nutzung der Website erfolgt auf eigene Verantwortung.
                  </p>
                  <p>
                    Alle Inhalte der Website sind urheberrechtlich geschützt. Eine Vervielfältigung 
                    oder Verwendung bedarf der vorherigen schriftlichen Zustimmung.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Schlussbestimmungen */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">§ 10 Schlussbestimmungen</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Es gilt deutsches Recht. Erfüllungsort und Gerichtsstand ist München, 
                    sofern der Mandant Vollkaufmann, juristische Person des öffentlichen 
                    Rechts oder öffentlich-rechtliches Sondervermögen ist.
                  </p>
                  <p>
                    Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, 
                    berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.
                  </p>
                  <p>
                    Änderungen und Ergänzungen bedürfen der Schriftform. Nebenabreden bestehen nicht.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Kontakt */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Kontakt bei Fragen</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="font-medium text-foreground">Bovensiepen & Partner</p>
                  <p>Nymphenburger Str. 20</p>
                  <p>80335 München</p>
                  {phoneEnabled && <p><span className="font-medium">Telefon:</span> <PhoneDisplay /></p>}
                  <p><span className="font-medium">E-Mail:</span> info@bovensiepenpartner.de</p>
                </div>
              </div>

              <div className="text-center text-sm text-muted-foreground mt-8 pt-8 border-t">
                <p>Stand: Januar 2025</p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AGB;