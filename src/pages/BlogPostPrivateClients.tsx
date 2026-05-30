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

const BlogPostPrivateClients = () => {
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
                <BreadcrumbPage className="text-white">Private Clients | Family Offices</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Private Clients | Family Offices</span>
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
                Wir beraten Privatpersonen und Family Offices in allen Fragen der langfristigen Vermögens- und Nachfolgeplanung — diskret, vorausschauend und mit Blick auf die familiäre Gesamtsituation.
              </p>

              <p className="mb-8 text-foreground">
                Unser Fokus liegt auf der rechtssicheren Gestaltung von Testamenten, Schenkungen, Vorsorgevollmachten und Ehe-/Partnerschaftsverträgen sowie der gesellschaftsrechtlichen Strukturierung von Familienvermögen. Zunehmend gehören dazu auch digitale Vermögenswerte: Krypto-Bestände bedürfen einer eigenen Nachlassplanung — von der Zugangs- und Schlüsselverwahrung bis zur dokumentierten Mittelherkunft gegenüber Banken und Erben. Hier greift unsere kanzleieigene Blockchain-Kompetenz unmittelbar.
              </p>

              <p className="mb-8 text-foreground">
                Im Konfliktfall agieren wir zunächst als Mediatoren. Lässt sich eine außergerichtliche Lösung nicht erzielen, vertreten wir Sie konsequent vor Gericht.
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
                Unsere Spezialgebiete im Private Client & Family Office Bereich
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="nachfolgeplanung" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Nachfolgeplanung
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Eine vorausschauende Nachfolgeplanung sichert den geordneten Übergang Ihres Vermögens — einschließlich Beteiligungen, Immobilien und digitaler Assets wie Krypto-Beständen — in die nächste Generation. Wir verbinden juristische Präzision mit der gebotenen Sensibilität für familiäre Konstellationen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="testamente" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Testamente
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Wir analysieren Ihre erbrechtliche Ausgangslage auf Basis der gesetzlichen Erbfolge und gestalten Testamente, die Ihren Wünschen entsprechen — inklusive Regelungen zu Krypto-Wallets, Zugangsdaten und Verwahrlösungen, die im Erbfall typischerweise besondere Anforderungen stellen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="vorsorge" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Vorsorgevollmachten und Patientenverfügungen
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Vorsorgevollmachten und Patientenverfügungen sichern Ihre Selbstbestimmung im Fall einer Entscheidungsunfähigkeit. Wir bestimmen mit Ihnen vertrauenswürdige bevollmächtigte Personen und formulieren medizinische Vorgaben rechtssicher und durchsetzbar.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="schenkungen" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Schenkungsverträge unter Lebenden und auf den Todesfall
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Schenkungen zu Lebzeiten und auf den Todesfall sind zentrale Instrumente der Vermögensübertragung. Wir gestalten sie steuerlich optimiert und konfliktvermeidend — und berücksichtigen dabei die zunehmende Praxis, auch Krypto-Vermögenswerte frühzeitig zu übertragen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ehevertraege" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Partnerschafts- und Eheverträge
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Partnerschafts- und Eheverträge schaffen rechtliche Klarheit über Güterstand, Vermögenszuordnung und Versorgungsregelungen — und damit Sicherheit für beide Seiten.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="uebertragung" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Interfamiliäre Übertragung von Kapitalanlagen, Unternehmen und Immobilien
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Die Übertragung von Kapitalanlagen, Unternehmensbeteiligungen und Immobilien zu Lebzeiten erlaubt eine geordnete Übergabe und steuerlich optimierte Strukturierung. Wir begleiten den gesamten Prozess — vom Übertragungsvertrag bis zu begleitenden Nießbrauch- und Versorgungsregelungen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="nachfolge-unternehmen" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Gesellschafts- und erbrechtliche Planung der Vermögens- und Unternehmensnachfolge
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Wir verbinden gesellschafts- und erbrechtliche Gestaltung zu einem stimmigen Gesamtkonzept — von der Holding-Struktur über Familienpoolverträge bis zur Übertragung digitaler Vermögenswerte. Sachorientiert, mit Augenmaß für die familiäre Dynamik.
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
                Lernen Sie unser spezialisiertes Private Client & Family Office Team kennen
              </p>
            </div>

            {/* Team Carousel - Private Clients relevant team members */}
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
                {/* Bernhard Bovensiepen - General Legal Expert suitable for Private Clients */}
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

                {/* Leonard Grimm - Corporate and Capital Markets relevant for Private Clients */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="text-left">
                    <div className="mb-6">
                      <img
                        src="/lovable-uploads/b4127816-793a-42ef-b5e4-34987580a428.png"
                        alt="Leonard Grimm"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Leonard Grimm</h3>
                    <p className="text-gray-600 mb-2">Rechtsanwalt</p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Prozessführung, Datenschutz/Compliance, Wertpapier- und Kapitalmarktrecht
                    </p>
                  </div>
                </CarouselItem>

                {/* Michael Dorn - Corporate and Real Estate relevant for Family Offices */}
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
                Vertrauliche Erstberatung
              </h2>
              <p className="text-lg text-white mb-8 leading-relaxed">
                Wir nehmen uns Zeit für die Analyse Ihrer Vermögens- und Familiensituation und entwickeln eine tragfähige Gesamtlösung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 hover:border-white/50 transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  +43 (0) 512 563020
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
                Erstberatung kostenlos · Absolut vertraulich · Mandatsannahme nach Konfliktprüfung
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default BlogPostPrivateClients;