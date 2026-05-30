import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Scale, Mail, ChevronRight, MapPin, Phone, AlertTriangle, Shield, Award, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhoneLink } from "@/components/PhoneLink";

const BlogPostCeoFraud = () => {
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
                <BreadcrumbPage className="text-white">CEO-Fraud und Überweisungsbetrug</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              CEO-Fraud und <span className="bg-gradient-primary bg-clip-text text-transparent">Überweisungsbetrug</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed" style={{ textShadow: 'var(--text-glow), 0 0 30px hsl(214 100% 60% / 0.4)' }}>
              Was tun bei Falschüberweisung nach gefälschten E-Mails?
            </p>
            
          </div>
        </div>
      </Section>

      {/* Article Content - transparent background */}
      <Section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8 italic border-l-4 border-primary pl-6">
                Ein Klick, eine kurze Unachtsamkeit und eine erhebliche Geldsumme wurde auf ein Konto überwiesen, das sich später als Empfängerkonto von Betrügern anstatt des eigenen Geschäftspartners hausstellt. In vielen Fällen liegt ein gezielter Angriff durch CEO-Fraud vor – eine professionelle Betrugsmasche, bei der sich Täter als Entscheidungsträger oder Geschäftspartner ausgeben und Mitarbeiter (oft der Buchhaltung) durch Vorspielen falscher Tatsachen zur Überweisung bewegen.
              </p>

              <p className="mb-8 text-foreground">
                Als spezialisierte Rechtsanwaltskanzlei im Bereich Cybercrime begleiten wir regelmäßig Mandanten, die Opfer solcher Täuschungshandlungen wurden.
              </p>

              <p className="mb-8 text-foreground">
                Durch schnelles, rechtlich fundiertes Handeln und enger Zusammenarbeit mit den Strafverfolgungsbehörden ist es möglich die Sicherstellung bzw. Beschlagnahme der überwiesenen Gelder zu erwirken, bevor diese von den Tätern weiter transferiert werden und damit der Zugriff durch die Strafverfolgungsbehörden erheblich erschwert wird.
              </p>

              {/* CEO Fraud Illustration */}
              <div className="my-12">
                <img 
                  src="/lovable-uploads/e6fcfe46-5300-4b17-bafe-fda583555ddc.png"
                  alt="CEO-Fraud und Überweisungsbetrug - Illustration"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-muted-foreground mt-4 italic">
                  CEO-Fraud: Professionelle Betrugsmasche mit gefälschten E-Mails
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Was ist CEO-Fraud?</h2>
              <p className="mb-6 text-foreground">
                Beim CEO-Fraud handelt es sich um eine Form des Social Engineering: Die Täter geben sich mittels gefälschter, täuschend echt wirkender E-Mails als Geschäftsführer, leitende Mitarbeitende oder externe Geschäftspartner aus.
              </p>
              <p className="mb-8 text-foreground">
                Unter Ausnutzung interner Informationen und mit hohem psychologischem Druck werden Mitarbeiter dazu gebracht, (Sofort-)Überweisungen auf (meist) ausländische Bankkonten zu tätigen – häufig unter dem Hinweis auf Diskretion oder zeitkritische Transaktionen.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Erste Schritte nach einer Falschüberweisung</h2>
              <div className="bg-accent/30 p-6 rounded-lg my-8">
                <ol className="space-y-3">
                  <li className="text-foreground"><strong>1.</strong> Kontaktieren Sie umgehend Ihre Bank, um – falls möglich – die Transaktion zu stoppen oder rückgängig zu machen.</li>
                  <li className="text-foreground"><strong>2.</strong> Sichern Sie alle relevanten Kommunikationsverläufe, insbesondere E-Mails, Anhänge und Zahlungsanweisungen.</li>
                  <li className="text-foreground"><strong>3.</strong> Nehmen Sie rechtlichen Beistand in Anspruch, um gezielt und ohne Zeitverlust Anzeige zu erstatten.</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Warum fundierter rechtlicher Beistand entscheidend ist</h2>
              <p className="mb-6 text-foreground">
                In der Praxis zeigt sich: Eine Anzeige allein bei der örtlichen Polizeiinspektion führt nicht zwangsläufig zu raschen und effizienten Ermittlungshandlungen. Gerade bei Überweisungsbetrug / CEO-Fraud ist es essenziell, dass die Ermittlungen von den zuständigen Spezialisten durchgeführt werden und keine Zeit verloren geht.
              </p>

              <p className="mb-6 text-foreground">Als erfahrene Kanzlei können wir</p>

              <div className="bg-primary/10 p-6 rounded-lg my-8">
                <ul className="space-y-3">
                  <li className="text-foreground">• den Sachverhalt rechtlich korrekt einordnen</li>
                  <li className="text-foreground">• die Anzeigeerstattung professionell abwickeln sowie die zuständigen Spezialisten der Kriminalpolizei in Kenntnis setzen</li>
                  <li className="text-foreground">• notwendige Ermittlungsmaßnahmen beantragen und unmittelbare Anordnungen von Sicherstellungen und Beschlagnahmen erwirken</li>
                  <li className="text-foreground">• Geldwäscheverdachtsmeldungen bei den Empfängerbanken erstatten und dadurch die Verfügungsgewalt über die Gelder faktisch einschränken</li>
                  <li className="text-foreground">• Haftpflichtversicherungsmeldung zur Erfüllung der versicherungsrechtlichen Obliegenheitspflichten erstatten</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Fazit</h2>
              <p className="mb-6 text-foreground">
                Bei CEO-Fraud und vergleichbaren Formen des Überweisungsbetrugs handelt es sich um professionell geplante Straftaten, die schnelle und gezielte Gegenmaßnahmen erfordern. Unsere Kanzlei verfügt über die nötige Erfahrung, die rechtliche Expertise und die notwendigen Kontakte, damit ihn Ihrem Fall die richtigen Schritte gesetzt werden und Sie eine Chance auf Rückführung der herausgelockten Gelder haben.
              </p>
              <p className="mb-8 text-foreground">
                Neben der akuten Soforthilfe stehen wir Ihnen auch zu Fragen der zivilrechtlichen Haftung und/oder interner Verantwortlichkeiten zur Verfügung. Gerade Fragen zur Geschäftsführerhaftung oder internen Kontrollpflichten spielen im Nachgang häufig eine zentrale Rolle.
              </p>

              <div className="mt-12 p-8 bg-card border rounded-lg">
                <h3 className="text-xl font-bold mb-4">Ihre Experten für CyberCrime & Überweisungsbetrug</h3>
                <p className="mb-4">
                  Bei CEO-Fraud und Überweisungsbetrug ist schnelles Handeln entscheidend. Als spezialisierte CyberCrime Anwälte unterstützen wir Sie umfassend – juristisch fundiert, schnell und effizient.
                </p>
                <p className="text-sm text-muted-foreground">
                  Für weitere Informationen und individuelle Beratung stehen Ihnen <strong>Bernhard Bovensiepen</strong> und <strong>Steffen Rheinböcker</strong> jederzeit zur Verfügung.
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

export default BlogPostCeoFraud;