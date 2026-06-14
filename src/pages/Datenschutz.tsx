import { HeaderWithDarkBg } from "@/components/HeaderWithDarkBg";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Separator } from "@/components/ui/separator";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderWithDarkBg />
      
      <main className="pt-24">
        <Section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeader>
              <SectionTitle>Datenschutzerklärung</SectionTitle>
              <SectionDescription>
                Informationen zum Umgang mit Ihren personenbezogenen Daten gemäß DSGVO
              </SectionDescription>
            </SectionHeader>

            <div className="space-y-8 text-left">
              {/* Verantwortlicher */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">1. Verantwortlicher</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="font-medium text-foreground">Bovensiepen & Partner</p>
                  <p>Nymphenburger Str. 20</p>
                  <p>80335 München</p>
                  <p>Deutschland</p>
                  <p><span className="font-medium">E-Mail:</span> info@bovensiepenpartner.de</p>
                </div>
              </div>

              <Separator />

              {/* Datenschutzbeauftragter */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">2. Datenschutzbeauftragter</h3>
                <p className="text-muted-foreground">
                  Für Fragen zum Datenschutz wenden Sie sich bitte an unseren Datenschutzbeauftragten 
                  unter datenschutz@bovensiepenpartner.de
                </p>
              </div>

              <Separator />

              {/* Datenverarbeitung auf dieser Website */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">3. Datenverarbeitung auf dieser Website</h3>
                
                <h4 className="text-lg font-medium mb-3 text-foreground">3.1 Server-Log-Dateien</h4>
                <div className="space-y-4 text-muted-foreground text-sm mb-6">
                  <p>
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in 
                    so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt:
                  </p>
                  <ul className="ml-6 space-y-1 list-disc">
                    <li>Browsertyp und Browserversion</li>
                    <li>Verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p>
                    Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Erfassung 
                    erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung der 
                    Funktionsfähigkeit und Sicherheit unserer Website.
                  </p>
                </div>

                <h4 className="text-lg font-medium mb-3 text-foreground">3.2 Cookies</h4>
                <div className="space-y-4 text-muted-foreground text-sm mb-6">
                  <p>
                    Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf 
                    Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, 
                    unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                  </p>
                  <p>
                    Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". 
                    Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben 
                    auf Ihrem Endgerät gespeichert bis Sie diese löschen.
                  </p>
                  <p>
                    Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies 
                    informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von 
                    Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische 
                    Löschen der Cookies beim Schließen des Browser aktivieren.
                  </p>
                </div>

                <h4 className="text-lg font-medium mb-3 text-foreground">3.3 Kontaktformular und E-Mail-Kontakt</h4>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden 
                    Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen 
                    Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen 
                    bei uns gespeichert.
                  </p>
                  <p>
                    Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern 
                    Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                    vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die 
                    Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der 
                    an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                </div>
              </div>

              <Separator />

              {/* Mandantendaten */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">4. Verarbeitung von Mandantendaten</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Bei der Beratung und Vertretung unserer Mandanten verarbeiten wir personenbezogene 
                    Daten im Rahmen des Mandatsverhältnisses. Die Rechtsgrundlage hierfür ist 
                    Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6 Abs. 1 lit. c DSGVO 
                    (rechtliche Verpflichtung).
                  </p>
                  <p>
                    Wir unterliegen der anwaltlichen Verschwiegenheitspflicht nach § 43a BRAO. 
                    Die Verarbeitung von Mandantendaten erfolgt ausschließlich zum Zweck der 
                    Rechtsberatung und -vertretung. Eine Weitergabe an Dritte erfolgt nur mit 
                    Ihrer ausdrücklichen Einwilligung oder soweit dies zur Wahrnehmung Ihrer 
                    Interessen erforderlich ist.
                  </p>
                  <p>
                    Mandantendaten werden entsprechend den gesetzlichen Aufbewahrungsfristen 
                    (in der Regel 6 Jahre nach Beendigung des Mandats) gespeichert und 
                    anschließend gelöscht.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Betroffenenrechte */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">5. Ihre Rechte als Betroffener</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>Sie haben folgende Rechte:</p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-foreground">Auskunftsrecht (Art. 15 DSGVO)</p>
                      <p>Sie haben das Recht, Auskunft über die von uns verarbeiteten personenbezogenen Daten zu verlangen.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium text-foreground">Berichtigungsrecht (Art. 16 DSGVO)</p>
                      <p>Sie haben das Recht, die Berichtigung unrichtiger oder die Vervollständigung unvollständiger Daten zu verlangen.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium text-foreground">Löschungsrecht (Art. 17 DSGVO)</p>
                      <p>Sie haben das Recht auf Löschung Ihrer personenbezogenen Daten, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium text-foreground">Einschränkung der Verarbeitung (Art. 18 DSGVO)</p>
                      <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium text-foreground">Datenübertragbarkeit (Art. 20 DSGVO)</p>
                      <p>Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen Format zu erhalten oder an einen anderen Verantwortlichen übertragen zu lassen.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium text-foreground">Widerspruchsrecht (Art. 21 DSGVO)</p>
                      <p>Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium text-foreground">Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</p>
                      <p>Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Beschwerderecht */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">6. Beschwerderecht</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    Sie haben das Recht, sich bei einer Aufsichtsbehörde über die Verarbeitung 
                    Ihrer personenbezogenen Daten durch uns zu beschweren.
                  </p>
                  <p>
                    Zuständige Aufsichtsbehörde in Bayern:<br />
                    Bayerisches Landesamt für Datenschutzaufsicht<br />
                    Promenade 18<br />
                    91522 Ansbach<br />
                    Telefon: 0981 180093-0<br />
                    E-Mail: poststelle@lda.bayern.de
                  </p>
                </div>
              </div>

              <Separator />

              {/* SSL-Verschlüsselung */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">7. SSL-Verschlüsselung</h3>
                <p className="text-muted-foreground text-sm">
                  Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung 
                  vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung 
                  erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" 
                  wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>

              <Separator />

              {/* Aktualität */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">8. Aktualität der Datenschutzerklärung</h3>
                <p className="text-muted-foreground text-sm">
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2025. 
                  Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund 
                  geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig 
                  werden, diese Datenschutzerklärung zu ändern.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Datenschutz;