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

const BlogPostProzessfuehrung = () => {
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
                <BreadcrumbPage className="text-white">Prozessführung</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Prozessführung</span>
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
                Ist ein gerichtliches Verfahren unausweichlich, steigen wir gemeinsam „in den Ring".
              </p>

              <p className="mb-8 text-foreground">
                Das Verhandeln ist der Inbegriff der klassischen rechtsanwaltlichen Tätigkeit. Das bestmögliche Ergebnis für unsere Mandant:innen hat dabei oberste Priorität. Breites juristisches Wissen und taktisches sowie menschliches Feingefühl zeichnen uns als gute Verhandler aus. Für uns beginnen Verhandlungen jedoch nicht erst im Gerichtssaal. Gut verhandelte außergerichtliche Lösungen – auch im Mediationsweg – sind unseres Erachtens einem Gerichtsprozess regelmäßig vorzuziehen.
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
                Unsere Schwerpunkte in der Prozessführung
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="immobilien" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Immobilien- und Bauprozesse
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Im Bereich von Immobilien können oft unerwünschte Probleme auftreten. Seien es Bauverzögerungen, Mängel, Kostenüberschreitungen, Gewährleistungsthematiken oder etwa Miet- und Wohnungseigentümerstreitigkeiten. Mit fundiertem Fachwissen und jahrelanger Erfahrung setzen wir die Rechte unserer Mandant:innen sowohl gerichtlich als auch außergerichtlich erfolgreich durch.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="mietrecht" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Miet- und wohnrechtliche Streitigkeiten
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Wir setzen die miet- und wohnrechtlichen Anliegen unserer Mandant:innen, wie Mietzinsminderungsansprüche, Schadenersatzforderungen oder Mieterkündigungen, erfolgreich durch.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="zivilrecht" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Allgemeine zivilrechtliche Verfahren
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Ob Vertragsstreitigkeiten, Schadensersatz, Forderungseinzüge oder Haftungsfragen – unsere Mandant:innen vertrauen auf unsere Expertise für eine erfolgreiche Durchsetzung ihrer Rechte.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="anleger" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Anlegerverfahren
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Verfahren im Zusammenhang mit Finanzprodukten sind eine besondere Herausforderung. Wir nehmen die Herausforderung an und sorgen mit unserer langjährigen Expertise für das beste Ergebnis.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="gesellschafter" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Gesellschafterstreitigkeiten
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Wenn eine effektive Zusammenarbeit unter Mitgesellschaftern nicht mehr möglich sein sollte, ist eine rasche Lösungsfindung für das Unternehmenswohl essentiell. Bei Gesellschafterstreitigkeiten stehen wir als streiterfahrene, aber lösungsorientierte Rechtsanwält:innen an der Seite unserer Mandant:innen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="datenschutz" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Datenschutzverletzungen
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Ob vor der Datenschutzbehörde oder dem Zivilgericht. Auf unsere Erfahrung bei der Durchsetzung/Abwehr von Ansprüchen aus Datenschutzverletzungen können unsere Mandant:innen zählen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="versicherung" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Versicherungsrechtliche Streitigkeiten
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Spätestens bei Verweigerung der Leistung durch die Versicherung wird der Versicherungsvertrag und die zugehörige Beratung des Versicherungsnehmers auf Herz und Nieren geprüft werden. Bei Sach-, Haftpflicht-, Unfall-, Rechtsschutz und Lebensversicherungen sind im Schadensfall daher langwierige Gerichtsprozesse oftmals vorprogrammiert. In sämtlichen versicherungsrechtlichen Belangen vertreten wir Versicherungsnehmer, Versicherungsmakler und Versicherungsagenten sowohl in der außergerichtlichen Lösungsfindung als auch bei der Durchsetzung ihrer Ansprüche vor Gericht.
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
                Hier dann nochmal auf der Landingpage abgleichen bei der Sektion Unser Team, wer hierfür zuständig ist, und dann die Anwälte austauschen in der Sektion
              </p>
            </div>

            {/* Team Carousel - Only cybercrime relevant team members */}
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
                {/* Bernhard Bovensiepen - Cybercrime Expert */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="text-left">
                    <div className="mb-6">
                      <img
                        src="/lovable-uploads/2cad25d9-8d15-482b-bc38-5b1378991be6.png"
                        alt="Bernhard Bovensiepen"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Bernhard Bovensiepen</h3>
                    <p className="text-gray-600 mb-2">Rechtsanwalt</p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Cybercrime, Datenschutz/Compliance, Wertpapier- und Kapitalmarktrecht, Kryptonachverfolgung und Mittelherkunftsnachweis
                    </p>
                  </div>
                </CarouselItem>

                {/* Martin Willig - Blockchain Analyst */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="text-left">
                    <div className="mb-6">
                      <img
                        src="/lovable-uploads/fb9c5d6b-b0d1-44b0-9835-4301827237bb.png"
                        alt="Martin Willig"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Martin Willig</h3>
                    <p className="text-gray-600">Blockchain- /Datenanalyst</p>
                  </div>
                </CarouselItem>

                {/* Steffen Rheinböcker - Cybercrime Expert */}
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

export default BlogPostProzessfuehrung;