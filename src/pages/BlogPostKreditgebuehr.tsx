import { Section } from "@/components/ui/section";
import { Calendar, Clock, User } from "lucide-react";
import { Footer } from "@/components/Footer";
import { PhoneLink } from "@/components/PhoneLink";
import { useSettings } from "@/hooks/useSettings";
import { EditorialHero } from "@/components/EditorialHero";

const BlogPostKreditgebuehr = () => {
  const { phoneEnabled } = useSettings();
  return (
    <div className="min-h-screen bg-background">
      <EditorialHero
        eyebrow="Korte & Partner — Insights"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "News", href: "/blog" },
          { label: "Bankrecht" },
        ]}
        title={<>Kreditbearbeitungsgebühren<br />unzulässig.</>}
        lead="OGH-Urteil ermöglicht Rückforderung — in welchen Fällen Sie bereits bezahlte Bearbeitungsgebühren zurückfordern können."
        meta={
          <>
            <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" />7. Juli 2025</span>
            <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" />6 min Lesezeit</span>
            <span className="flex items-center gap-2"><User className="w-3.5 h-3.5" />Korte & Partner</span>
          </>
        }
      />

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
                  Für weitere Informationen und eine Ersteinschätzung stehen Dr. Thomas Korte und Dr. Maximilian Krause jederzeit unter info@korte-partner.de{phoneEnabled ? ' bzw. telefonisch' : ''} zur Verfügung.
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <a href="mailto:info@korte-partner.de" className="text-primary hover:underline font-medium">
                    info@korte-partner.de
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