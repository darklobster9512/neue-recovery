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

const BlogPostDatenschutz = () => {
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
                <BreadcrumbPage className="text-white">Datenschutz und Compliance</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Datenschutz und Compliance</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed" style={{ textShadow: 'var(--text-glow), 0 0 30px hsl(214 100% 60% / 0.4)' }}>
              Expertise in Datenschutz und rechtlicher Compliance
            </p>
          </div>
        </div>
      </Section>

      {/* Article Content - transparent background */}
      <Section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                An Datenschutz und Compliance führt kein Weg mehr vorbei. Strenge gesetzliche Regulierungen mit hohen Strafdrohungen haben diese Rechtsgebiete von einem Schattendasein in das Zentrum der unternehmerischen Aufmerksamkeit gerückt. Laufend neue gesetzliche Vorgaben und gerichtliche/behördliche Entscheidungen stellen alle Beteiligten vor große Herausforderungen. Als zertifizierte Datenschutz- und Geldwäschebeauftragte sind wir mit den aktuellen Spielregeln vertraut und meistern mit unseren Mandant:innen die Herausforderungen der neuesten Judikatur und Gesetzgebung.
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
                Expertise in allen Bereichen des Datenschutzes und der Compliance
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="datenschutz" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Datenschutzrechtliche Beratung und Umsetzung
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Seit dem Inkrafttreten der Datenschutzgrundverordnung (DSGVO) im Jahr 2018 sind bereits mehr als sechs Jahre vergangen - die "Schonfrist" ist vorbei. Datenschutzverstöße werden von der Datenschutzbehörde mittlerweile mit empfindlichen Strafen geahndet und sehen sich Unternehmen neben Reputationsverlusten auch vermehrt mit Schadenersatzansprüchen konfrontiert. Setzen Sie auf unsere Expertise als zertifizierte Datenschutzexperten und vermeiden Sie unnötige Risiken.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="geldwaesche" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Beratung bei Geldwäscheprävention
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Risikoanalyse, Geldwäschepräventionskonzept, Schulungen? Unser Team begleitet Sie auf dem Weg durch die komplexen gesetzlichen Vorgaben iZm der Prävention von Geldwäsche und Terrorismusfinanzierung und stellt sicher, dass Sie alle rechtlichen Anforderungen erfüllen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="mittelherkunft" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Erstellung von Mittelherkunftsnachweisen
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Wer in Kryptowährungen investiert, wird von seiner Kryptohandelsbörse und/oder Bank regelmäßig nach einem Mittelherkunftsnachweis gefragt. Die Erbringung eines solchen Nachweises ist häufig mit scheinbar unüberwindbaren Hindernissen verbunden. Als Rechtsanwälte, zertifizierte Geldwäschebeauftragte und Blockchain-Forensiker unterstützen wir unsere Mandant:innen bei der raschen Bescheinigung der Unbedenklichkeit ihrer Vermögenswerte und deren Herkunft.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="vertretung" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Rechtliche Vertretung bei Datenschutzverletzungen
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Ob vor der Datenschutzbehörde oder vor dem Zivilgericht. Auf unsere Erfahrung bei der Durchsetzung/Abwehr von Ansprüchen aus Datenschutzverletzungen können unsere Mandant:innen zählen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="nis2" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Beratung bei NIS 2 Vorgaben
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Die NIS 2-Richtlinie verpflichtet Unternehmen in kritischen Sektoren, wie Energie, Gesundheit, Transport und digitale Infrastruktur, strenge Cybersicherheitsstandards zu erfüllen. Wir unterstützen Sie dabei, Ihre IT-Sicherheitsstrategien zu überprüfen und anzupassen, geeignete Sicherheitsmaßnahmen zu implementieren und die notwendige Dokumentation für eine lückenlose Compliance zu erstellen. Darüber hinaus bieten wir die gesetzlich vorgeschriebenen Schulungen für Ihre Führungskräfte an.
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
                Lernen Sie unser spezialisiertes Datenschutz- und Compliance-Team kennen
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
                {/* Bernhard Bovensiepen - Datenschutz Expert */}
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

                {/* Leonard Grimm - Datenschutz Expert */}
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

                {/* Michael Dorn - Datenschutz Expert */}
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

      <Footer />
    </div>
  );
};

export default BlogPostDatenschutz;