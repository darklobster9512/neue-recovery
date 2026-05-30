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

const BlogPostCeoFraud2 = () => {
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
                <BreadcrumbPage className="text-white">Cybercrime</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Cybercrime</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed" style={{ textShadow: 'var(--text-glow), 0 0 30px hsl(214 100% 60% / 0.4)' }}>
              Rechtliche Aufarbeitung digitaler Angriffe — mit eigener Blockchain-Forensik
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
                Cybercrime ist heute eine der häufigsten Ursachen erheblicher Vermögensschäden — bei Unternehmen ebenso wie bei Privatpersonen. Anlagebetrug über vermeintliche Krypto-Plattformen, CEO Fraud, Phishing, Ransomware und Identitätsdiebstahl gehören längst zum Tagesgeschäft organisierter Tätergruppen.
              </p>

              <p className="mb-8 text-foreground">
                Unsere Kanzlei begleitet Mandant:innen durch die gesamte rechtliche Aufarbeitung: Beweissicherung, Strafanzeige, zivilrechtliche Durchsetzung und — wo Krypto-Werte betroffen sind — die forensische Nachverfolgung der Geldflüsse bis zur Empfänger-Börse. Wir koordinieren das Zusammenspiel von Strafverfolgung, Krypto-Börsen und Finanzinstituten mit dem Ziel, entwendete Vermögenswerte einzufrieren und zurückzuführen.
              </p>

              <p className="mb-8 text-foreground">
                Als zertifizierte Datenschutz- und Geldwäschebeauftragte mit eigener Blockchain-Forensik-Kompetenz verbinden wir juristische und technische Analyse in einer Hand. Wir vertreten Sie gegenüber Behörden, Plattformbetreibern, Banken und Krypto-Börsen — national wie grenzüberschreitend.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Schnelles Handeln entscheidet</h2>
              <p className="mb-8 text-foreground">
                In den ersten Stunden nach einem Vorfall entscheidet sich häufig, ob Vermögenswerte noch erreichbar sind. Wir nehmen Ihren Sachverhalt umgehend auf, sichern Beweise und leiten die nötigen Schritte ein — diskret und in enger Abstimmung mit Ihnen.
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
                Prävention, Reaktion und Rückführung entwendeter Vermögenswerte
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="prevention" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Prävention – Cyber Resilienz
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Mit NIS2 (NISG 2024) und dem Cyber Resilience Act steigen die regulatorischen Anforderungen an Unternehmen erheblich. Wir begleiten Sie bei Gap-Analyse, Umsetzung der organisatorischen und technischen Pflichten sowie der Dokumentation gegenüber Aufsichtsbehörden.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ransomware" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Ransomware – Incident Response
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Bei Ransomware-Angriffen koordinieren wir gemeinsam mit erfahrenen IT-Forensikern die Incident Response — von der Eindämmung über die rechtliche Bewertung einer etwaigen Lösegeldforderung bis zur Meldung an Datenschutz- und Aufsichtsbehörden. Bei Krypto-Lösegeldzahlungen verfolgen wir die Transaktionen on-chain, um spätere Rückführungen vorzubereiten.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="fraud" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Anlagebetrug – Datenmissbrauch
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Vermeintlich lukrative Krypto-Investments, gefälschte Trading-Plattformen und der Missbrauch persönlicher Daten zählen zu den häufigsten Schadensbildern. Wir analysieren die Geldflüsse — bei Krypto-Zahlungen on-chain bis zur Empfänger-Börse — und leiten Auskunfts-, Einfrierungs- und Herausgabeverfahren ein. Entscheidend ist ein abgestimmtes Vorgehen aus Strafanzeige, zivilrechtlicher Sicherung und Kommunikation mit Banken und Krypto-Dienstleistern.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cyberbullying" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Hass im Netz
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Hasspostings, Beleidigungen in sozialen Medien und Cybermobbing sind rechtswidrig. Wir betreiben die Identifizierung der Verantwortlichen, leiten Straf- und Unterlassungsverfahren ein und setzen Ihre zivil- und medienrechtlichen Ansprüche konsequent durch.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tracing" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Asset-/Krypto Tracing
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Als zertifizierte Blockchain-Forensiker rekonstruieren wir Krypto-Transaktionsketten und ordnen Wallets realen Gegenparteien zu. Diese Analyse ist die Grundlage für die Rückholung entwendeter Krypto-Werte — in Strafverfahren ebenso wie in zivilrechtlichen Streitigkeiten, Insolvenzen und Erbsachen.
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
                Lernen Sie unser spezialisiertes Cybercrime-Team kennen
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

      <Footer />
    </div>
  );
};

export default BlogPostCeoFraud2;