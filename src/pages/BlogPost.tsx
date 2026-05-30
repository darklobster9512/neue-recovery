import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Scale, Mail, ChevronRight, MapPin, Phone, AlertTriangle, Shield, Award, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhoneLink } from "@/components/PhoneLink";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <Section className="py-20 lg:py-32 relative overflow-hidden h-[50vh] flex items-center bg-gray-800">
        <div className="absolute inset-0 w-full h-full" style={{ top: '-64px', height: 'calc(100% + 64px)' }}>
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
            style={{width:"177.78vh", height:"calc(100vh + 64px)", minWidth:"100%", minHeight:"calc(100% + 64px)"}}
            aria-label="Crypto Background Video"
          />
        </div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-white/80 hover:text-white">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/blog" className="text-white/80 hover:text-white">Blog</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbPage className="text-white">Krypto Betrugsopfer bekommt 8,69 Bitcoin zurück</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">CyberCrime</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Kryptowährung</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Betrugsbekämpfung</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              Krypto Betrugsopfer bekommt <span className="bg-gradient-primary bg-clip-text text-transparent">8,69 Bitcoin</span> zurück
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed" style={{ textShadow: 'var(--text-glow), 0 0 30px hsl(214 100% 60% / 0.4)' }}>
              Ein österreichisches Betrugsopfer erhielt kürzlich 8,69 Bitcoin zurück – ein Wert von rund 800.000 EUR (Stand Juli 2025).
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>7. Juli 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min Lesezeit</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Bovensiepen & Partner Team</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Article Content - transparent background */}
      <Section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8 italic border-l-4 border-primary pl-6">
                Möglich wurde dies durch die Zusammenarbeit zwischen unserer Kanzlei Bovensiepen & Partner, den Strafverfolgungsbehörden und dem gezielten Einsatz von Blockchain-Forensik. Wir berichten über einen Fall, der zeigt, wie effektiver Rechtsschutz im digitalen Raum aussehen kann – und welche juristischen Herausforderungen es zu meistern galt.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Was ist ein PigButchering Scam?</h2>
              <p className="mb-6 text-foreground">
                Ein Pig Butchering Scam ist eine Form des Anlagebetrugs, bei dem Täter gezielt Vertrauen aufbauen, um Opfer zur Investition großer Geldsummen zu verleiten. Der Begriff stammt aus China und beschreibt das „Mästen" eines Opfers, bevor es „geschlachtet" wird – also alles verliert.
              </p>
              <p className="mb-6 text-foreground">
                Die Täter nehmen über Dating-Apps oder soziale Medien Kontakt auf und geben sich als erfolgreiche Investoren aus. Über manipulierte Trading-Apps oder Webseiten täuschen sie hohe Gewinne vor. Das Opfer wird schrittweise zu immer größeren Einzahlungen verleitet. Sobald hohe Summen investiert wurden, werden Auszahlungen blockiert oder mit Gebühren verhindert.
              </p>

              <div className="bg-accent/30 p-6 rounded-lg my-8">
                <h4 className="font-semibold mb-3">Typische Warnzeichen:</h4>
                <ul className="space-y-2">
                  <li>• Unrealistische Renditeversprechen</li>
                  <li>• Emotionale Bindung und Manipulation</li>
                  <li>• Druck zu weiteren Zahlungen</li>
                  <li>• Kommunikation über Messenger wie WhatsApp oder Telegram</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Nachverfolgung Kryptowährung – Schlüssel zum Erfolg bei der Rückholung</h2>
              <p className="mb-6 text-foreground">
                Über Anleitung der Betrüger überwies unser Mandant im Jahr 2022 rd EUR 350.000,00 auf diverse Krypto-Exchanges (Coinbase, Bitpanda, Nexo) um diese dort in Bitcoin zu wechseln und an eine vermeintliche Handelsplattform zu transferieren. Nachdem er trotz mehrfacher Zusicherung die versprochenen Auszahlungen nicht erhielt sondern vielmehr aufgefordert wurde weiteres Geld einzuzahlen wandte sich das Opfer an die auf CyberCrime und Nachverfolgung von Kryptowährungen spezialisierten Rechtsanwälte von Bovensiepen & Partner sowie an die Kriminalpolizei.
              </p>
              <p className="mb-8 text-foreground">
                Durch gezielte Nachverfolgung der Kryptowährung auf der Blockchain war es möglich, den Weg der gestohlenen Assets zu rekonstruieren. Mithilfe modernster forensischer Tools und Know-how im Bereich der Blockchainanalyse konnten die BTC von den Wallets des Opfers zu einer Adresse bei der Kryptohandelsbörse Binance nachverfolgt werden.
              </p>

              {/* Bitcoin Tracking Diagram */}
              <div className="my-12">
                <img 
                  src="/lovable-uploads/681b548e-7cfe-4c26-b050-76226bf9cead.png"
                  alt="Nachverfolgung Bitcoin - Blockchain-Forensik Diagramm"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-muted-foreground mt-4 italic">
                  Nachverfolgung Bitcoin: Die Spur der Kryptowährung auf der Blockchain
                </p>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg my-8">
                <p className="font-medium text-center">
                  💡 Die Nachverfolgung der Krypto-Assets auf der Blockchain nehmen wir selbst vor – damit sparen wir Zeit und Kosten
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Sicherstellung / Beschlagnahme durch Staatsanwaltschaft</h2>
              <p className="mb-6 text-foreground">
                Auf Grundlage der erfolgten Nachverfolgung der BTC richtete die Kriminalpolizei unmittelbar eine direkte Anfrage an die Kryptohandelsbörse die die inkriminierten Vermögenswerte erhalten hatte und ließ die sich auf dem Konto befindlichen Gelder vorläufig einfrieren. Seitens der Staatsanwaltschaft Innsbruck wurde daraufhin eine sogenannte Sicherstellungsanordnung erlassen und die Beschlagnahme der dem Opfer betrügerisch herausgelockten Bitcoin angeordnet.
              </p>

              {/* Legal Document */}
              <div className="my-12">
                <img 
                  src="/lovable-uploads/bbde2e85-c4fa-4b33-a468-08b4ef5956a9.png"
                  alt="Sicherstellungsanordnung der Staatsanwaltschaft Innsbruck"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-muted-foreground mt-4 italic">
                  Sicherstellungsanordnung der Staatsanwaltschaft Innsbruck über 8,69532127 BTC
                </p>
              </div>

              <p className="mb-6 text-foreground">
                Die Bitcoin des Opfers wurden daraufhin auf ein Wallet des Bundeskriminalamts – Cybercrime Competence Center (C4) übertragen.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Rechtliche Herausforderungen – Warum ist die Beiziehung von auf CyberCrime spezialisierten Anwälten sinnvoll?</h2>
              <p className="mb-6 text-foreground">
                Der weitere juristische Weg von der Beschlagnahme bis zur Wiedererlangung der Verfügungsmacht über die Bitcoin war steinig und von zahlreichen juristischen Hürden geprägt. Zunächst beabsichtigte die Staatsanwaltschaft, die sichergestellten Bitcoin in Euro umzutauschen. Dies entsprach jedoch nicht dem Wunsch unseres Mandanten.
              </p>
              <p className="mb-6 text-foreground">
                Hätte die Staatsanwaltschaft die Bitcoin zum Zeitpunkt der Beschlagnahme in EUR gewechselt, hätte das Opfer einen <strong>Verlust von über EUR 100.000,00</strong> erlitten. Durch konsequentes und argumentativ fundiertes Vorgehen konnten wir den Wechsel der beschlagnahmten Bitcoin in EUR gerichtlich verhindern.
              </p>
              <p className="mb-6 text-foreground">
                Mit Inkrafttreten des Strafprozessrechtsänderungsgesetzes 2024 wurden die gesetzlichen Voraussetzungen geschaffen, um bereits im Ermittlungsverfahren (ohne Ausforschung und Verurteilung des Täters) eine vorzeitige Ausfolgung von beschlagnahmten Kryptowährungen zu ermöglichen. In der Folge stellten wir einen entsprechenden Antrag gemäß der neuen Rechtslage.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Zusammenarbeit mit Behörden: Ein Erfolgsmodell</h2>
              <p className="mb-6 text-foreground">
                Besonders hervorzuheben ist die konstruktive Kooperation mit dem Landeskriminalamt Tirol, dem Bundeskriminalamt Cybercrime Competence Center (C4) sowie der Staatsanwaltschaft Innsbruck. Durch klare Kommunikation, gut dokumentierte Beweisketten und exakte rechtliche Argumentation wurde ein Ergebnis erzielt, das in dieser Form keineswegs selbstverständlich ist.
              </p>
              <p className="mb-8 text-foreground">
                Ein möglichst effizient gehaltener Austausch zwischen Opfer, Rechtsanwalt, Polizei und Staatsanwaltschaft ist notwendig um im Kampf gegen die Cyberkriminalität erfolgreich zu sein.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Fazit – Was tun bei Krypto Betrug?</h2>
              <p className="mb-6 text-foreground">
                Viele Betroffene von Krypto-Betrug geben die Hoffnung zu früh auf. Unser Fall zeigt: Wer rasch handelt, einen spezialisierten CyberCrime Anwalt kontaktiert und auf fundierte Nachverfolgung setzt, hat Chancen auf Rückholung.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Wenn Sie Opfer eines ähnlichen Betrugs geworden sind:</h3>
                <ol className="space-y-3">
                  <li><strong>1.</strong> Dokumentieren Sie alle Transaktionen und Kommunikationsverläufe.</li>
                  <li><strong>2.</strong> Kontaktieren Sie umgehend einen erfahrenen Rechtsanwalt für CyberCrime / Online Betrug.</li>
                  <li><strong>3.</strong> Lassen Sie die Nachverfolgung der Kryptowährung durch Experten durchführen.</li>
                </ol>
              </div>

              <div className="mt-12 p-8 bg-card border rounded-lg">
                <h3 className="text-xl font-bold mb-4">Ihre Experten für CyberCrime & Kryptowährung</h3>
                <p className="mb-4">
                  Als CyberCrime Anwälte mit Spezialisierung auf die Nachverfolgung von Kryptowährungen unterstützen wir Sie umfassend – juristisch fundiert, schnell und effizient.
                </p>
                <p className="text-sm text-muted-foreground">
                  Für weitere Informationen und individuelle Beratung stehen Ihnen <strong>Bernhard Bovensiepen</strong> und <strong>Leonard Grimm</strong> jederzeit zur Verfügung.
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <a href="mailto:info@bovensiepenpartner.de" className="text-primary hover:underline font-medium">
                    info@bovensiepenpartner.de
                  </a>
                  <PhoneLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default BlogPost;