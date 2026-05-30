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

const BlogPostGesellschaftsrecht = () => {
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
                <BreadcrumbPage className="text-white">Gesellschafts- und Unternehmensrecht</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Gesellschafts- und Unternehmensrecht</span>
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
                Unternehmensrecht verstehen wir als Querschnitt verschiedener Rechtsgebiete.
              </p>

              <p className="mb-8 text-foreground">
                In unserer täglichen Arbeit mit erfolgreichen nationalen sowie internationalen Unternehmen werden wir mit unterschiedlichsten unternehmerischen Problemstellungen und Bedürfnissen konfrontiert. Aufgrund der breit-gefächerten Spezialgebiete bei Bovensiepen & Partner ist es uns möglich, Unternehmen interdisziplinär und vollumfänglich zu betreuen. Wir stehen Ihnen vom allgemeinen Gesellschaftsrecht und der Betreuung bei alltäglichen unternehmensrechtlichen Fragestellungen, über Herausforderungen im Datenschutz/Compliance bis hin zu Fragen im Marken-, Medien- und Arbeitsrecht zur Verfügung.
              </p>

              <p className="mb-8 text-foreground">
                Im Bereich des Gesellschaftsrechts gestalten wir Lösungen, die auf Ihre individuellen Bedürfnisse zugeschnitten sind – von der Wahl der geeigneten Gesellschaftsform und der Gesellschaftsgründung, bis hin zur rechtlichen Abwicklung des Kaufs oder Verkaufs Ihres Unternehmens. Bei Gesellschafterstreitigkeiten können Sie auf ein erfahrenes Team an Mediatoren und Prozessanwälten vertrauen (Dispute Resolution), dies sowohl auf nationaler als auch internationaler Ebene.
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
                Unsere Spezialgebiete im Gesellschafts- und Unternehmensrecht
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="general-corporate" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Allgemeines Unternehmensrecht (interdisziplinär) / externe Rechtsabteilung
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Eine gute Beratung im Unternehmensrecht erfordert nicht nur eine fächerübergreifende Kenntnis der rechtlichen Anforderungen, sondern insbesondere ein gutes Verständnis für wirtschaftliche und operative Zusammenhänge. Wir unterstützen laufend Unternehmen unterschiedlicher Größe als „externe Rechtsabteilung".
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="corporate-law" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Rechtliche Beratungen zu sämtlichen Bereichen des Gesellschaftsrechts
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Die richtige Wahl der Rechtsform, optimal gestaltete Gesellschaftsverträge, Geschäftsordnungen für Geschäftsführer sowie Gesellschaftervereinbarungen können Konflikte von Gesellschaftern und Managern verhindern, sodass sich unsere Mandant:innen auf das Wesentliche konzentrieren können – das operative Geschäft und dessen Erfolg.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="incorporation" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Gesellschaftsgründungen
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Für uns als „Gesellschaftsrechtler" gehört die Gründung von Gesellschaften zu den wesentlichen kreativen Tätigkeiten. Ausgeklügelte vertragliche Grundlagen, welche bestmöglich zukünftige Entwicklungen und Szenarien berücksichtigen, bieten die Basis für unternehmerischen Erfolg.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ma" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Unternehmenskauf/ -verkauf (M&A)
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Ein vorteilhafter Unternehmenskauf/ -verkauf erfordert umfassende Vorbereitung, um rechtliche Risiken auszuschließen und eine lösungsorientierte Umsetzung zu gewährleisten. Als erfahrene M&A-Rechtsanwält:innen bieten wir Ihnen eine ergebnisorientierte Transaktionsberatung. Mit unserem ganzheitlichen Ansatz sehen wir uns als deal-maker und nicht deal-breaker.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="restructuring" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Umgründungen, Einbringungen und Verschmelzungen
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Das Umgründungssteuergesetz bietet kreative Möglichkeiten für Unternehmer, die z.B. durch Umwandlung, Einbringung oder Spaltung ihre Effektivität steigern, Kosten senken, Haftungsrisiken minimieren und gleichzeitig Wachstum und Profit maximieren möchten. Wir führen Sie kompetent und erfahren durch diesen Dschungel der Gestaltungsmöglichkeiten.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="disputes" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Gesellschafterstreitigkeiten
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Wenn eine effektive Zusammenarbeit unter Mitgesellschaftern nicht mehr möglich sein sollte, ist eine rasche Lösungsfindung für das Unternehmenswohl essentiell. Bei Gesellschafterstreitigkeiten kommen wir als versierte, streiterfahrene, aber auch lösungsfördernde Rechtsanwält:innen mit Verhandlungserfahrung oft zum Einsatz.
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
                Lernen Sie unser spezialisiertes Gesellschaftsrecht-Team kennen
              </p>
            </div>

            {/* Team Carousel - Corporate law relevant team members */}
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
                {/* Bernhard Bovensiepen - General Legal Expert */}
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

                {/* Leonard Grimm - Corporate Law Expert */}
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

                {/* Michael Dorn - Corporate and Real Estate */}
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

                {/* Steffen Rheinböcker - Litigation and Corporate Disputes */}
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

export default BlogPostGesellschaftsrecht;