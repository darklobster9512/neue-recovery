import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Scale, Mail, ChevronRight, MapPin, Phone, AlertTriangle, Shield, Award, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhoneLink } from "@/components/PhoneLink";
import { useSettings } from "@/hooks/useSettings";

const BlogPostKreditgebuehr = () => {
  const { phoneEnabled } = useSettings();
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
                <BreadcrumbPage className="text-white">Kreditbearbeitungsgebühren unzulässig</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Verbraucherrecht</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Bankrecht</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">OGH-Urteil</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              Kreditbearbeitungsgebühren <span className="bg-gradient-primary bg-clip-text text-transparent">unzulässig</span>: OGH-Urteil ermöglicht Rückforderung
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed" style={{ textShadow: 'var(--text-glow), 0 0 30px hsl(214 100% 60% / 0.4)' }}>
              In welchen Fällen Sie die bereits bezahlte Bearbeitungsgebühren zurückfordern können
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>7. Juli 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>6 min Lesezeit</span>
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
                In einem richtungsweisenden Urteil hat der Oberste Gerichtshof (OGH) entschieden, dass bestimmte Kreditbearbeitungsgebühren unzulässig sind. Damit wurde ein deutliches Signal für den Verbraucherschutz gesetzt – und für viele Kreditnehmer:innen die Tür zur Rückforderung bereits bezahlter Gebühren geöffnet.
              </p>

              {/* Image in article */}
              <div className="my-12">
                <img 
                  src="/lovable-uploads/80e2e160-2ba5-459b-b753-58265ea0882e.png"
                  alt="Bearbeitungsgebühr zurückholen"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-muted-foreground mt-4 italic">
                  Bearbeitungsgebühr zurückholen
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Der Anlassfall: Intransparente Klauseln im Kreditvertrag</h2>
              <p className="mb-6 text-foreground">
                Im Mittelpunkt des OGH-Urteils stand eine Klausel der WSK Bank, in der neben einer Bearbeitungsgebühr von 4 % auch zusätzliche Entgelte wie Erhebungsspesen, Überweisungsspesen sowie Druck- und Portokosten vorgesehen waren. Diese Beträge wurden dem Kreditkonto angelastet oder vom Auszahlungsbetrag abgezogen.
              </p>
              <p className="mb-6 text-foreground">
                Der OGH stellte klar: Eine derart gebündelte Gebührengestaltung sei intransparent. Die Bank verrechne für Leistungen, die im Rahmen der Kreditvergabe ohnehin zu ihren Aufgaben gehören – und das mehrfach. Aus Sicht des Gerichts benachteiligt eine solche Regelung Kreditnehmer:innen unangemessen.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Was bedeutet das für Konsument:innen?</h2>
              <p className="mb-6 text-foreground">
                Viele Kreditverträge enthalten vergleichbare Formulierungen oder Klauseln. Besonders betroffen sind Verträge, in denen pauschale Bearbeitungsgebühren verlangt wurden, etwa in Form eines Prozentsatzes der Kreditsumme oder eines pauschalen Entgelts für Kreditbearbeitung und Vertragsabschluss.
              </p>
              <p className="mb-6 text-foreground">
                Für Konsument:innen eröffnet sich nun die Möglichkeit, diese Entgelte prüfen zu lassen. Bei unzulässigen Klauseln können bereits bezahlte Beträge zurückgefordert werden – selbst bei bereits getilgten Krediten. Denn die in der Regel mehrere Tausend Euro betragenden – Ansprüche verjähren erst 30 Jahre ab Zahlung und sind mit jährlich vier Prozent zu verzinsen.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Worauf sollten Kreditnehmer:innen achten?</h2>
              <p className="mb-4 text-foreground">Prüfen Sie Ihren Kreditvertrag insbesondere auf folgende Begriffe:</p>
              
              <div className="bg-accent/30 p-6 rounded-lg my-8">
                <ul className="space-y-2">
                  <li>• „Bearbeitungsgebühr" oder „Bearbeitungsentgelt"</li>
                  <li>• „Vertragsabschlussgebühr" oder „Kreditspesen"</li>
                  <li>• Einmalige Spesen für Erhebung, Auszahlung oder Verwaltung</li>
                  <li>• Drucksorten- und Portokosten</li>
                  <li>• Schätzgebühr</li>
                  <li>• Gebühr für Grundbuchgesuch und Grundbuchauszug</li>
                </ul>
              </div>

              <p className="mb-6 text-foreground">
                Solche Klauseln können rechtswidrig sein, wenn sie nicht klar nachvollziehbar sind oder doppelt für dieselbe Leistung verrechnet wird.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Fazit: Prüfung lohnt sich</h2>
              <p className="mb-6 text-foreground">
                Das OGH-Urteil schafft Klarheit und stärkt die Rechte von Kreditnehmer:innen. Wer in den letzten Jahren einen Kreditvertrag abgeschlossen hat, sollte diesen nun sorgfältig prüfen (lassen). Wir übernehmen die Prüfung kostenlos und unverbindlich für Sie.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Sie haben Fragen zu Ihrem Kreditvertrag?</h3>
                <p className="mb-4">
                  Lassen Sie Ihre Kreditbearbeitungsgebühren kostenfrei prüfen. Unsere Experten analysieren Ihren Vertrag und prüfen Rückforderungsansprüche.
                </p>
              </div>

              <div className="mt-12 p-8 bg-card border rounded-lg">
                <h3 className="text-xl font-bold mb-4">Ihre Experten für Verbraucherrecht & Bankrecht</h3>
                <p className="mb-4">
                  Als spezialisierte Rechtsanwälte für Verbraucher- und Bankrecht unterstützen wir Sie bei der Durchsetzung Ihrer Ansprüche – kompetent, effizient und erfolgsorientiert.
                </p>
                <p className="text-sm text-muted-foreground">
                  Für weitere Informationen und eine Ersteinschätzung stehen Bernhard Bovensiepen und Leonard Grimm jederzeit unter info@bovensiepenpartner.de{phoneEnabled ? ' bzw. telefonisch' : ''} zur Verfügung.
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <a href="mailto:info@bovensiepenpartner.de" className="text-primary hover:underline font-medium">
                    info@bovensiepenpartner.de
                  </a>
                  {phoneEnabled && <PhoneLink />}
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

export default BlogPostKreditgebuehr;