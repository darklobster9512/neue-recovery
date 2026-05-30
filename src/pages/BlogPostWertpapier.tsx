import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, Clock, User, Scale, Mail, ChevronRight, MapPin, Phone, AlertTriangle, Shield, Award, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const BlogPostWertpapier = () => {
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
                <BreadcrumbPage className="text-white">Wertpapier- und Kapitalmarktrecht</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Wertpapier- und Kapitalmarktrecht</span>
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
                Wir verstehen den Kapitalmarkt/komplexe Finanzinstrumente und stehen auf Herausforderungen.
              </p>

              <p className="mb-8 text-foreground">
                Die Dynamik des Kapitalmarkts und die Vielzahl an gesetzlichen Spielregeln macht es professionellen Marktteilnehmern ebenso wie Anlegern schwer den Durchblick zu behalten. Komplexe Finanzprodukte sind schon lange nicht mehr institutionellen Anlegern vorbehalten, sondern werden allzu oft auch an private Kunden verkauft. Mit dem Vormarsch von „Kryptowährungen" drängt nunmehr eine gänzlich neue Assetklasse in den Markt.
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
                Unsere Schwerpunkte im Wertpapier- und Kapitalmarktrecht
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="fintechs" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Beratung von FinTechs, Wertpapierfirmen und -dienstleister
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Von der Mitarbeiterschulung (Compliance) bis hin zur rechtskonformen Umsetzung neuer Produktideen. Wir bringen Know-How ein und stehen unseren Mandant:innen beratend und gestaltend zur Seite.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="schadenersatz" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Schadenersatzansprüche iZm (Krypto-) Futures, Swaps, Investmentfonds, Anleihen
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Aus über 10 Jahren Erfahrung im Zusammenhang mit Schadenersatzprozessen wissen wir worauf es ankommt. Verständnis von Finanzprodukten und Verhandlungsgeschick sind der Schlüssel zum Erfolg.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="krypto" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Kryptowährungen, Finanzierungen
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Streitigkeiten im Zusammenhang mit Kreditverträgen und Finanzierungen beschäftigen uns seit Beginn unserer juristischen Tätigkeit. Kryptowährungen sind unser Steckenpferd.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="verfahren" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Zivilrechtliche-, aufsichts- und verwaltungsbehördliche Verfahren
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Verfahren im Zusammenhang mit Finanzprodukten stellen eine besondere Herausforderung dar. Wir nehmen die Herausforderung an und sorgen mit Akribie und Verhandlungsgeschick für das beste Ergebnis.
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

            {/* Team Carousel - Only relevant team members */}
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
                {/* Bernhard Bovensiepen - Wertpapierrecht Expert */}
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

                {/* Martin Willig - Financial Analyst */}
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

                {/* Add more team members as needed */}
              </CarouselContent>
              <CarouselPrevious className="bg-white/80 hover:bg-white border-gray-200" />
              <CarouselNext className="bg-white/80 hover:bg-white border-gray-200" />
            </Carousel>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Benötigen Sie rechtliche Beratung im Wertpapier- und Kapitalmarktrecht?
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Kontaktieren Sie unsere Experten für eine unverbindliche Erstberatung. Wir helfen Ihnen bei allen Fragen rund um Wertpapiere, Kapitalmarktrecht und digitale Assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/kontakt">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                    <Mail className="mr-2 h-5 w-5" />
                    Beratung anfragen
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  +43 512 313 313
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default BlogPostWertpapier;