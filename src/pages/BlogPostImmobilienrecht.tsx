import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, Clock, User, Scale, Mail, ChevronRight, MapPin, Phone, AlertTriangle, Shield, Award, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const BlogPostImmobilienrecht = () => {
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
                  <BreadcrumbLink href="/kompetenzen" className="text-white/80 hover:text-white">Kompetenzen</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbPage className="text-white">Immobilienrecht</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Immobilienrecht</span>
            </h1>
          </div>
        </div>
      </Section>

      {/* Article Content - transparent background */}
      <Section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                Eigentumswohnungen, Einfamilienhäuser, Zinshäuser oder Zweitwohnsitze – jede Immobilie ist einzigartig und bedarf daher besonderer Expertise. Ganz gleich, ob Sie Privatperson oder Unternehmer, Verkäufer oder Käufer, Investor oder Bauträger sind, bei uns erhalten Sie umfassende Beratung in allen immobilien- und baurechtlichen Angelegenheiten. Von der Planungsphase bis zur Realisierung Ihres Immobilienprojekts stehen wir Ihnen mit unserem Know-How zur Seite und unterstützen Sie bei der Erstellung und Prüfung von Vertragsdokumenten sowie in der gesamten rechtlichen Umsetzung Ihres Vorhabens.
              </p>

              <p className="mb-8 text-foreground">
                Als Mediatoren setzen wir uns dafür ein, im Falle von Konflikten eine rasche und effektive Lösung zu finden. Für den Fall, dass der Weg zu Gericht dennoch unvermeidbar ist, vertreten wir Sie auch bei Gerichtsprozessen oder Behörden in allen bau-, miet- oder wohnungseigentumsrechtlichen Angelegenheiten.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Unsere Schwerpunkte Section - FAQ Style */}
      <Section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Unsere Schwerpunkte
              </h2>
              <p className="text-lg text-white leading-relaxed max-w-2xl mx-auto">
                Unsere Spezialgebiete im Immobilienrecht
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="bautraeger" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Bauträgerprojekte
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Von der ersten Idee bis zur finalen Umsetzung unterstützen wir Bauträger und Immobilienentwickler bei jedem Schritt ihres Projekts. Ob es um die Beschaffung von Baugenehmigungen, die Verhandlung von Verträgen mit Auftragnehmern oder die rechtliche Absicherung von Verkaufs- und Marketingaktivitäten geht – unsere Expertise im Immobilienrecht stellt sicher, dass Ihr Projekt auf einer soliden rechtlichen Grundlage steht.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="verkauf" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    (Ver-)Kauf von Immobilien
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Sie planen den Kauf oder Verkauf einer Immobilie? Unser erfahrenes Anwaltsteam steht Ihnen zur Seite. Wir prüfen und gestalten Verträge, bieten umfassende rechtliche Beratung und sorgen für eine reibungslose Abwicklung. Von der Titelprüfung bis zur Treuhandabwicklung - wir kümmern uns um alle Details, damit Sie sich entspannt zurücklehnen können.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="planung" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Planung und Strukturierung von Bauprojekten (Asset-/Share Deals)
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Der Schlüssel zu einem erfolgreichen Immobilienprojekt liegt bereits in einer gründlichen Vorbereitungsphase. Wir verstehen die Notwendigkeit, eiffizient zu arbeiten, Kosten zu senken, Haftungsrisiken zu minimieren und gleichzeitig Wachstum und Profit zu maximieren. Als erfahrene M&A- und Immobilien-Rechtsanwält:innen bieten wir umfassende Beratung aus einer Hand, um Ihre Ziele zu erreichen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="due-diligence" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Rechtliche Due Diligence für Immobilienprojekte
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Um die rechtliche Situation eines Unternehmens oder einer Immobilie vor einer Transaktion vollständig zu bewerten, ist eine rechtliche Due Diligence erlässlich. Durch unsere Expertise unterstützen wir bei fundierten Entscheidungen und tragen dazu bei, rechtliche Risiken zu minimieren und den Erfolg von Immobilienprojekten zu sichern.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="parifizierung" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Parifizierungen / Wohnungeigentumsbegründung
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Wenn eine bestehende Liegenschaft in Eigentumswohnungen aufgeteilt oder bei Neubauten mehrere Wohn- bzw Geschäftseinheiten entstehen sollen, ist eine Parifizierung erforderlich. Wir unterstützen Sie bei diesem komplexen Prozess und stellen sicher, dass alle rechtlichen Anforderungen erfüllt werden, um einen reibungslosen Ablauf zu gewährleisten.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="mietrecht" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Miet- und Pachtverträge
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Das Miet- und Wohnrecht berührt nahezu jeden im Laufe seines Lebens, sei es als (Ver-)Mieter:in oder Eigentümer:in von Wohnungen, Einfamilienhäusern oder Geschäftsräumen. Durch ständige gesetzliche Anpassungen und neue oberstgerichtliche Urteile ist dieses Rechtsgebiet äußerst komplex geworden. Sie können sich bei Ihren Anliegen auf unsere Expertise verlassen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="streitigkeiten" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Vertretung in bau- und immobilienrechtlichen Rechtsstreitigkeiten
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Im Bereich von Immobilien können oft unerwünschte Probleme auftreten. Seien es Bauverzögerungen, Mängel, Kostenüberschreitungen, Gewährleistungsthematiken oder etwa Miet- und Wohnungseigentümerstreitigkeiten. Mit fundiertem Fachwissen und jahrelanger Erfahrung setzen wir die Rechte unserer Mandant:innen sowohl gerichtlich als auch außergerichtlich erfolgreich durch.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </Section>

      {/* Unsere Expert:innen Section */}
      <Section className="py-16 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Unsere Expert:innen
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Lernen Sie unser spezialisiertes Immobilienrecht-Team kennen
              </p>
            </div>

            {/* Team Carousel - Real estate law relevant team members */}
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                })
              ]}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {/* Michael Dorn - Real Estate Expert */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="text-left">
                    <div className="mb-6">
                      <img
                        src="/lovable-uploads/49592374-fd61-4f95-b984-a0cbeeaad8f5.png"
                        alt="Michael Dorn"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Dorn</h3>
                    <p className="text-gray-600 mb-2">Rechtsanwalt</p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Immobilienrecht, Prozessführung, Datenschutz und Compliance
                    </p>
                  </div>
                </CarouselItem>

                {/* Steffen Rheinböcker - Real Estate and Litigation Expert */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="text-left">
                    <div className="mb-6">
                      <img
                        src="/lovable-uploads/709d1496-f015-4b38-b331-9cb17b1b6eaa.png"
                        alt="Steffen Rheinböcker"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Steffen Rheinböcker</h3>
                    <p className="text-gray-600 mb-2">Rechtsanwalt</p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Immobilienrecht, Prozessführung und Streitbeilegung, Cybercrime
                    </p>
                  </div>
                </CarouselItem>
              </CarouselContent>
              
              {/* Navigation Buttons - Glasmorphic design matching NewsCarousel */}
              <CarouselPrevious className="absolute -left-20 top-1/2 -translate-y-1/2 h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-blue-600 hover:text-blue-700 transition-all duration-300" />
              <CarouselNext className="absolute -right-20 top-1/2 -translate-y-1/2 h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-blue-600 hover:text-blue-700 transition-all duration-300" />
            </Carousel>
          </div>
        </div>
      </Section>

      {/* CTA Section - Same design as landing page */}
      <Section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Opfer von Cybercrime geworden?
              </h2>
              <p className="text-lg text-white mb-8 leading-relaxed">
                Verlieren Sie keine Zeit! Je schneller Sie handeln, desto größer sind Ihre Chancen auf Erfolg.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 hover:border-white/50 transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Sofort-Beratung: +43 (0) 512 563020
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 hover:border-white/50 transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  info@bovensiepenpartner.de
                </Button>
              </div>
              <p className="text-sm text-white/80 mt-4">
                📧 Erstberatung kostenlos | 🔒 Absolut vertraulich | ⚡ 24/7 Erreichbarkeit
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default BlogPostImmobilienrecht;