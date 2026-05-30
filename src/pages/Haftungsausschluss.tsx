import { HeaderWithDarkBg } from "@/components/HeaderWithDarkBg";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Separator } from "@/components/ui/separator";

const Haftungsausschluss = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderWithDarkBg />
      
      <main className="pt-24">
        <Section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeader>
              <SectionTitle>Haftungsausschluss</SectionTitle>
              <SectionDescription>
                Haftungsausschluss und rechtliche Hinweise zur Nutzung unserer Website
              </SectionDescription>
            </SectionHeader>

            <div className="space-y-8 text-left">
              {/* Allgemeine Hinweise */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">1. Allgemeine Hinweise und Rechtsinformationen</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Die Rechtsanwaltskanzlei Bovensiepen & Partner stellt auf dieser Website 
                    allgemeine Informationen zur Verfügung. Diese Informationen stellen keine 
                    Rechtsberatung dar und können eine individuelle anwaltliche Beratung nicht ersetzen.
                  </p>
                  <p>
                    Die bereitgestellten Informationen wurden nach bestem Wissen und Gewissen erstellt. 
                    Für die Vollständigkeit, Richtigkeit und Aktualität der Inhalte kann jedoch 
                    keine Gewähr übernommen werden.
                  </p>
                  <p>
                    Rechtsprechung und Gesetze unterliegen ständigen Änderungen. Die Informationen 
                    auf dieser Website spiegeln den Stand zum Zeitpunkt der Veröffentlichung wider 
                    und werden regelmäßig aktualisiert, können jedoch zwischenzeitlich überholt sein.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Keine Rechtsberatung */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">2. Keine Rechtsberatung</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Die auf dieser Website bereitgestellten Informationen dienen ausschließlich 
                    der allgemeinen Information und stellen keine Rechtsberatung im Sinne des 
                    Rechtsdienstleistungsgesetzes (RDG) dar.
                  </p>
                  <p>
                    Jeder Einzelfall ist unterschiedlich und erfordert eine individuelle rechtliche 
                    Bewertung. Die allgemeinen Informationen auf dieser Website können daher niemals 
                    eine persönliche Beratung durch einen qualifizierten Rechtsanwalt ersetzen.
                  </p>
                  <p>
                    Wir empfehlen Ihnen dringend, bei konkreten Rechtsfragen oder rechtlichen 
                    Problemen eine individuelle anwaltliche Beratung in Anspruch zu nehmen.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Haftungsausschluss für Inhalte */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">3. Haftungsausschluss für Inhalte</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Die Kanzlei übernimmt keine Haftung für die Richtigkeit, Vollständigkeit oder 
                    Aktualität der bereitgestellten Informationen. Haftungsansprüche gegen die 
                    Kanzlei, welche sich auf Schäden materieller oder ideeller Art beziehen, die 
                    durch die Nutzung der dargebotenen Informationen verursacht wurden, sind 
                    grundsätzlich ausgeschlossen.
                  </p>
                  <p>
                    Die Kanzlei haftet nur bei nachweislichem Vorsatz oder grober Fahrlässigkeit. 
                    Alle Angebote sind freibleibend und unverbindlich. Teile der Seiten oder das 
                    gesamte Angebot können ohne gesonderte Ankündigung verändert, ergänzt oder 
                    gelöscht werden.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Externe Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">4. Haftungsausschluss für externe Links</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte 
                    wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch 
                    keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der 
                    jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                  <p>
                    Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche 
                    Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                    Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der 
                    verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung 
                    nicht zumutbar.
                  </p>
                  <p>
                    Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend 
                    entfernen. Wir distanzieren uns hiermit ausdrücklich von allen Inhalten aller 
                    verlinkten Seiten auf unserer Homepage und machen uns diese Inhalte nicht zu eigen.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Technische Hinweise */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">5. Technische Hinweise und Verfügbarkeit</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Wir übernehmen keine Gewähr für die ständige Verfügbarkeit der Website. 
                    Technische Störungen, Wartungsarbeiten oder andere Umstände können zu 
                    vorübergehenden Ausfällen führen.
                  </p>
                  <p>
                    Die Übertragung von Daten über das Internet kann Sicherheitslücken aufweisen. 
                    Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. 
                    Die Nutzung der Website erfolgt auf eigenes Risiko.
                  </p>
                  <p>
                    Wir behalten uns vor, ohne Vorankündigung Änderungen oder Ergänzungen der 
                    bereitgestellten Informationen vorzunehmen.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Urheberrecht */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">6. Urheberrecht und Schutzrechte</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Alle auf dieser Website veröffentlichten Inhalte (Texte, Bilder, Grafiken, 
                    Ton-, Video- und Animationsdateien sowie deren Anordnung) unterliegen dem 
                    Urheberrecht und anderen Gesetzen zum Schutz geistigen Eigentums.
                  </p>
                  <p>
                    Die Inhalte dürfen nicht zu kommerziellen Zwecken kopiert, verbreitet, verändert 
                    oder Dritten zugänglich gemacht werden. Einige Bereiche der Website enthalten 
                    auch Bilder, die dem Copyright Dritter unterliegen.
                  </p>
                  <p>
                    Jede Verwertung außerhalb der engen Grenzen des Urheberrechtsgesetzes ist 
                    ohne Zustimmung des Anbieters unzulässig und strafbar. Dies gilt insbesondere 
                    für Vervielfältigung, Übersetzung, Mikroverfilmung sowie die Einspeicherung 
                    und Bearbeitung in elektronischen Systemen.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Anwendbares Recht */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">7. Anwendbares Recht und Gerichtsstand</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Für sämtliche Rechtsbeziehungen der Parteien gilt das Recht der Bundesrepublik 
                    Deutschland unter Ausschluss der Gesetze über den internationalen Kauf beweglicher 
                    Waren (UN-Kaufrecht).
                  </p>
                  <p>
                    Bei Vollkaufleuten, juristischen Personen des öffentlichen Rechts oder 
                    öffentlich-rechtlichen Sondervermögen ist München ausschließlicher Gerichtsstand 
                    für alle sich aus dem Vertragsverhältnis ergebenden Streitigkeiten.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Salvatorische Klausel */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">8. Salvatorische Klausel</h3>
                <p className="text-muted-foreground text-sm">
                  Sollten einzelne Bestimmungen dieses Haftungsausschlusses unwirksam sein oder 
                  werden, bleibt davon die Wirksamkeit der übrigen Bestimmungen unberührt. 
                  An die Stelle der unwirksamen Bestimmung tritt eine wirksame Bestimmung, die 
                  dem Sinn und Zweck der unwirksamen Bestimmung am nächsten kommt.
                </p>
              </div>

              <Separator />

              {/* Kontakt */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Kontakt bei Rechtsfragen</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="font-medium text-foreground">Bovensiepen & Partner</p>
                  <p>Nymphenburger Str. 20</p>
                  <p>80335 München</p>
                  <p><span className="font-medium">E-Mail:</span> info@bovensiepenpartner.de</p>
                  <p className="text-xs mt-4 p-3 bg-amber-50 dark:bg-amber-950 rounded border-l-4 border-amber-400">
                    <strong>Wichtiger Hinweis:</strong> Für eine verbindliche Rechtsberatung 
                    kontaktieren Sie uns bitte direkt. Die Informationen auf dieser Website 
                    ersetzen keine individuelle anwaltliche Beratung.
                  </p>
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

export default Haftungsausschluss;