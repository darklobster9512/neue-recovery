import { HeaderWithDarkBg } from "@/components/HeaderWithDarkBg";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { PhoneDisplay } from "@/components/PhoneDisplay";
import { useSettings } from "@/hooks/useSettings";
import { Separator } from "@/components/ui/separator";

const Impressum = () => {
  const { phoneEnabled } = useSettings();
  return (
    <div className="min-h-screen bg-background">
      <HeaderWithDarkBg />
      
      <main className="pt-24">
        <Section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeader>
              <SectionTitle>Impressum</SectionTitle>
              <SectionDescription>
                Angaben gemäß § 5 TMG und § 2 DL-InfoV
              </SectionDescription>
            </SectionHeader>

            <div className="space-y-8 text-left">
              {/* Anwaltskanzlei */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Anwaltskanzlei</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="font-medium text-foreground">Bovensiepen & Partner</p>
                  <p>Nymphenburger Str. 20</p>
                  <p>80335 München</p>
                  <p>Deutschland</p>
                </div>
              </div>

              <Separator />

              {/* Kontakt */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Kontakt</h3>
                <div className="space-y-2 text-muted-foreground">
                  {phoneEnabled && <p><span className="font-medium">Telefon:</span> <PhoneDisplay /></p>}
                  <p><span className="font-medium">E-Mail:</span> info@bovensiepenpartner.de</p>
                </div>
              </div>

              <Separator />

              {/* Geschäftsführung */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Geschäftsführung</h3>
                <p className="text-muted-foreground">Bernhard Bovensiepen</p>
              </div>

              <Separator />

              {/* Registereintrag */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Registereintrag</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-medium">Registergericht:</span> Amtsgericht München</p>
                  <p><span className="font-medium">Registernummer:</span> PR 318</p>
                </div>
              </div>

              <Separator />

              {/* Umsatzsteuer-ID */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Umsatzsteuer-Identifikationsnummer</h3>
                <p className="text-muted-foreground">
                  <span className="font-medium">USt-IdNr.:</span> DE192726024
                </p>
              </div>

              <Separator />

              {/* Berufsrechtliche Angaben */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Berufsrechtliche Angaben</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><span className="font-medium">Berufsbezeichnung:</span> Rechtsanwalt (verliehen in Deutschland)</p>
                  <p><span className="font-medium">Zuständige Rechtsanwaltskammer:</span> Rechtsanwaltskammer München</p>
                  <p><span className="font-medium">Berufsrechtliche Regelungen:</span></p>
                  <ul className="ml-6 space-y-1 list-disc">
                    <li>Bundesrechtsanwaltsordnung (BRAO)</li>
                    <li>Berufsordnung für Rechtsanwälte (BORA)</li>
                    <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
                    <li>Fachanwaltsordnung (FAO)</li>
                  </ul>
                  <p className="text-sm">
                    Diese Regelungen finden Sie unter: 
                    <a href="http://www.brak.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                      www.brak.de
                    </a>
                  </p>
                </div>
              </div>

              <Separator />

              {/* Berufshaftpflichtversicherung */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Berufshaftpflichtversicherung</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-medium">Versicherer:</span> HDI Versicherung AG</p>
                  <p><span className="font-medium">Räumlicher Geltungsbereich:</span> Europa</p>
                  <p><span className="font-medium">Versicherungssumme:</span> € 2.500.000,-- je Versicherungsfall</p>
                </div>
              </div>

              <Separator />

              {/* Aufsichtsbehörde */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Aufsichtsbehörde</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Rechtsanwaltskammer München</p>
                  <p>Tal 33</p>
                  <p>80331 München</p>
                  <p>Telefon: 089 53029-0</p>
                  <p>
                    Website: 
                    <a href="http://www.rak-muenchen.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                      www.rak-muenchen.de
                    </a>
                  </p>
                </div>
              </div>

              <Separator />

              {/* Streitschlichtung */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Streitschlichtung</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    https://ec.europa.eu/consumers/odr/
                  </a>. 
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
                <p className="text-muted-foreground text-sm mt-4">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <Separator />

              {/* Haftung für Inhalte */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Haftung für Inhalte</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                    nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                    Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                    fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                    rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p>
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                    allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                    erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                    Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend 
                    entfernen.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Haftung für Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Haftung für Links</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                    Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                    Seiten verantwortlich.
                  </p>
                  <p>
                    Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße 
                    überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. 
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
                    Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen 
                    werden wir derartige Links umgehend entfernen.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Urheberrecht */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Urheberrecht</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                    dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                    der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                    Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                  <p>
                    Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch 
                    gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden 
                    die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
                    gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
                    bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden 
                    wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impressum;