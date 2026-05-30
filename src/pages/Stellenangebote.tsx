import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Briefcase, 
  Users, 
  GraduationCap, 
  Laptop, 
  MapPin, 
  Calendar, 
  Clock, 
  ArrowRight,
  CheckCircle,
  Heart,
  TrendingUp,
  Award,
  Shield,
  Zap,
  ChevronRight,
  ClipboardList,
  CalendarClock
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import heroImage from "@/assets/crypto-hero-bg.jpg";

const jobPositions = [
  {
    id: "ra-gesellschaftsrecht",
    title: "Rechtsanwalt (m/w/d) Gesellschafts- und Unternehmensrecht",
    location: "München",
    type: "Vollzeit",
    experience: "3+ Jahre",
    workModel: "Hybrid",
    description: "Gestalten Sie komplexe M&A-Transaktionen und Unternehmensstrukturen in einem dynamischen Umfeld.",
    tasks: [
      "Beratung bei M&A-Transaktionen und Unternehmenskäufen",
      "Gestaltung von Gesellschaftsverträgen und Compliance-Strukturen",
      "Vertretung vor Gerichten in gesellschaftsrechtlichen Streitigkeiten",
      "Mandantenbetreuung bei internationalen Rechtsangelegenheiten"
    ],
    requirements: [
      "2. Staatsexamen mit überdurchschnittlichen Leistungen",
      "Mindestens 3 Jahre Berufserfahrung im Gesellschaftsrecht",
      "Verhandlungssichere Englischkenntnisse",
      "Erfahrung mit Legal Tech Tools von Vorteil"
    ],
    benefits: [
      "Attraktives Gehalt mit Erfolgsbeteiligung",
      "Flexible Arbeitszeiten und Home-Office",
      "Umfassende Weiterbildungsmöglichkeiten",
      "Internationale Mandantenbetreuung"
    ]
  },
  {
    id: "ra-prozessfuehrung",
    title: "Rechtsanwalt (m/w/d) Prozessführung/Litigation",
    location: "München", 
    type: "Vollzeit",
    experience: "2+ Jahre",
    workModel: "Hybrid",
    description: "Führen Sie komplexe Zivilverfahren und werden Sie Teil unseres erfahrenen Litigation-Teams.",
    tasks: [
      "Vertretung in komplexen Zivilverfahren vor allen Instanzen",
      "Entwicklung von Prozessstrategien und Risikobewertung",
      "Durchführung von Schiedsverfahren und Mediation",
      "Beratung bei präventiven Rechtsschutzmaßnahmen"
    ],
    requirements: [
      "2. Staatsexamen mit guten Noten",
      "Mindestens 2 Jahre Erfahrung in der Prozessführung",
      "Ausgezeichnete Argumentations- und Verhandlungsfähigkeiten",
      "Belastbarkeit und strukturierte Arbeitsweise"
    ],
    benefits: [
      "Direkter Mandantenkontakt von Beginn an",
      "Mentoring durch Senior Partner",
      "Übernahme eigener Verfahren",
      "Umfassende Prozesskosten-Unterstützung"
    ]
  },
  {
    id: "ra-datenschutz",
    title: "Rechtsanwalt (m/w/d) Datenschutz & Compliance",
    location: "München",
    type: "Vollzeit", 
    experience: "2-5 Jahre",
    workModel: "Hybrid",
    description: "Beraten Sie Unternehmen bei DSGVO-Compliance und digitalen Rechtsfragen der Zukunft.",
    tasks: [
      "DSGVO-Beratung und Datenschutz-Audits",
      "Entwicklung von Compliance-Management-Systemen",
      "Beratung bei Cyber-Security-Incidents",
      "Schulung von Mandanten zu Datenschutzbestimmungen"
    ],
    requirements: [
      "Volljurist mit Schwerpunkt IT-/Datenschutzrecht",
      "2-5 Jahre Berufserfahrung im Datenschutz",
      "Zertifizierung als Datenschutzbeauftragter wünschenswert",
      "Technisches Verständnis für IT-Systeme"
    ],
    benefits: [
      "Arbeit an innovativen Tech-Mandaten",
      "Regelmäßige Schulungen und Zertifizierungen",
      "Enge Zusammenarbeit mit IT-Experten",
      "Aufbau eigener Expertise in Zukunftsthemen"
    ]
  },
  {
    id: "referendar",
    title: "Referendar / Wissenschaftlicher Mitarbeiter (m/w/d)",
    location: "München",
    type: "Teilzeit",
    experience: "Juristisches Studium",
    workModel: "Hybrid",
    description: "Sammeln Sie praktische Erfahrungen in einer spezialisierten Kanzlei mit internationaler Ausrichtung.",
    tasks: [
      "Unterstützung bei Mandatsbearbeitung und Recherche",
      "Erstellung von Schriftsätzen und rechtlichen Memoranden",
      "Teilnahme an Mandantenterminen und Gerichtsverhandlungen",
      "Mitarbeit bei Due Diligence Prüfungen"
    ],
    requirements: [
      "Erstes Staatsexamen mit überdurchschnittlichen Leistungen",
      "Interesse an Wirtschaftsrecht und Litigation",
      "Eigenständige und strukturierte Arbeitsweise",
      "Sehr gute Deutsch- und Englischkenntnisse"
    ],
    benefits: [
      "Intensive Betreuung und Ausbildung",
      "Einblick in alle Rechtsgebiete der Kanzlei",
      "Flexible Arbeitszeiten für Referendarausbildung",
      "Übernahmeperspektive bei guten Leistungen"
    ]
  },
  {
    id: "paralegal",
    title: "Rechtsanwaltsfachangestellte / Paralegal (m/w/d)",
    location: "München",
    type: "Vollzeit",
    experience: "2+ Jahre",
    workModel: "Onsite/Hybrid",
    description: "Unterstützen Sie unsere Anwälte bei der täglichen Mandatsbearbeitung in einem modernen Arbeitsumfeld.",
    tasks: [
      "Administrative Unterstützung bei Mandatsbearbeitung",
      "Fristenkontrolle und Terminorganisation",
      "Korrespondenz mit Mandanten und Gerichten",
      "Dokumentenmanagement und Archivierung"
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Rechtsanwaltsfachangestellte/r",
      "Mindestens 2 Jahre Berufserfahrung",
      "Sichere MS Office und Legal Tech Kenntnisse",
      "Kommunikative Fähigkeiten und Serviceorientierung"
    ],
    benefits: [
      "Modernes digitales Arbeitsumfeld",
      "Regelmäßige Weiterbildungen",
      "Familiäre Arbeitsatmosphäre",
      "Attraktive Vergütung und Benefits"
    ]
  },
  {
    id: "legal-tech-werkstudent",
    title: "Werkstudent:in Legal Tech / IT (m/w/d)",
    location: "München",
    type: "Teilzeit (20h/Woche)",
    experience: "Studium (Jura/Informatik)",
    workModel: "Hybrid",
    description: "Gestalten Sie die Digitalisierung des Rechtsmarkts mit und bringen Sie innovative Technologien in die Praxis.",
    tasks: [
      "Unterstützung bei Legal Tech Projekten und Automatisierung",
      "Entwicklung und Testing von digitalen Tools",
      "Datenanalyse und Reporting für Mandatscontrolling",
      "Research zu neuen Legal Tech Trends und Tools"
    ],
    requirements: [
      "Studium der Rechtswissenschaften, Informatik oder ähnliches",
      "Interesse an der Schnittstelle von Recht und Technologie",
      "Grundkenntnisse in Programmierung oder Datenanalyse",
      "Selbstständige und projektbezogene Arbeitsweise"
    ],
    benefits: [
      "Einblick in innovative Legal Tech Projekte",
      "Mentoring durch Tech-affine Juristen",
      "Flexible Arbeitszeiten passend zum Studium",
      "Möglichkeit zur Übernahme nach dem Studium"
    ]
  }
];

const benefits = [
  {
    icon: Laptop,
    title: "Flexibles Arbeiten",
    description: "Home-Office und moderne Arbeitsplätze für optimale Work-Life-Balance"
  },
  {
    icon: GraduationCap,
    title: "Mentoring & Weiterbildung", 
    description: "Individuelle Förderung durch erfahrene Partner und umfassende Schulungen"
  },
  {
    icon: Users,
    title: "Teamkultur",
    description: "Flache Hierarchien und offene Kommunikation in einem motivierten Team"
  },
  {
    icon: Zap,
    title: "Legal Tech",
    description: "Modernste Tools und Technologien für effizientes und innovatives Arbeiten"
  },
  {
    icon: Award,
    title: "Attraktive Vergütung",
    description: "Leistungsgerechte Bezahlung mit Erfolgsbeteiligung und zusätzlichen Benefits"
  },
  {
    icon: TrendingUp,
    title: "Karrierechancen",
    description: "Klare Entwicklungspfade und Aufstiegsmöglichkeiten in einer wachsenden Kanzlei"
  }
];

const applicationProcess = [
  {
    step: 1,
    icon: Briefcase,
    title: "Kurzes Kennenlernen",
    description: "15-20 Minuten Gespräch über Ihre Motivation und unsere Erwartungen"
  },
  {
    step: 2,
    icon: ClipboardList, 
    title: "Fachliches Gespräch",
    description: "Vertiefung Ihrer Qualifikationen und Einblick in konkrete Tätigkeiten"
  },
  {
    step: 3,
    icon: CalendarClock,
    title: "Schnelles Feedback",
    description: "Zeitnahe Rückmeldung - in der Regel innerhalb von 48 Stunden"
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Angebot & Start",
    description: "Vertragsverhandlung und flexibler Starttermin nach Ihren Bedürfnissen"
  }
];

const faqs = [
  {
    question: "Welche Möglichkeiten gibt es für Remote-Arbeit?",
    answer: "Wir bieten flexible Hybrid-Modelle mit bis zu 60% Home-Office-Anteil. Die genaue Aufteilung besprechen wir individuell je nach Position und Mandatsanforderungen."
  },
  {
    question: "Welche Bewerbungsunterlagen benötigen Sie?", 
    answer: "Ein aussagekräftiges Anschreiben, Ihren Lebenslauf, relevante Zeugnisse sowie ggf. Arbeitsproben. Bewerbungen über unser Kontaktformular sind ausdrücklich erwünscht."
  },
  {
    question: "Wie lange dauert der Bewerbungsprozess?",
    answer: "Von der Bewerbung bis zur Entscheidung vergehen in der Regel 2-3 Wochen. Wir legen Wert auf eine zügige und transparente Kommunikation."
  },
  {
    question: "Wie gehen Sie mit Bewerberdaten um?",
    answer: "Alle Bewerberdaten werden DSGVO-konform behandelt und nach Abschluss des Verfahrens gelöscht, sofern keine anderweitige Vereinbarung getroffen wird."
  },
  {
    question: "Gibt es Teilzeitmöglichkeiten?",
    answer: "Ja, wir bieten je nach Position und Lebensumständen auch Teilzeitmodelle an. Sprechen Sie uns gerne darauf an."
  },
  {
    question: "Ist ein Quereinstieg möglich?",
    answer: "Absolut! Wir schätzen vielfältige Berufserfahrungen und bieten auch Quereinsteigern mit juristischem Hintergrund interessante Perspektiven."
  }
];

export default function Stellenangebote() {
  // Set page title
  useEffect(() => {
    document.title = 'Karriere bei Bovensiepen & Partner – Stellenangebote';
  }, []);

  const scrollToJobs = () => {
    document.getElementById('jobs-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <Section className="py-16 lg:py-24 relative overflow-hidden h-[60vh] flex items-center bg-gray-800">
        <div className="absolute inset-0 w-full h-full">
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Legal Team Working Background Video"
          />
        </div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-primary/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ textShadow: 'var(--text-glow-strong)' }}>
              Karriere bei<br />
              <span className="bg-gradient-primary bg-clip-text text-transparent drop-shadow-lg">Bovensiepen & Partner</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed" style={{ textShadow: 'var(--text-glow)' }}>
              Wachse mit einer spezialisierten Kanzlei für Krypto-Recht und Streitführung
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 h-auto bg-white text-primary hover:bg-white/90"
                onClick={scrollToJobs}
              >
                <Briefcase className="mr-2 h-5 w-5" />
                Offene Stellen ansehen
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto bg-gradient-glass backdrop-blur-md border-white/30 text-white hover:bg-white/20"
                asChild
              >
                <Link to="/kontakt?job=initiativbewerbung">
                  Initiativbewerbung
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Flexible Arbeitszeiten
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Mentoring & Weiterbildung
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Attraktive Vergütung
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <SectionHeader>
            <SectionTitle>Warum Bovensiepen & Partner?</SectionTitle>
            <SectionDescription>
              Entdecken Sie die Vorteile einer Karriere in unserer innovativen und wachsenden Kanzlei
            </SectionDescription>
          </SectionHeader>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-card bg-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Jobs Section */}
      <Section id="jobs-section" className="py-20 bg-gradient-glass backdrop-blur-md">
        <div className="container mx-auto px-4">
          <SectionHeader>
            <SectionTitle>Offene Stellen</SectionTitle>
            <SectionDescription>
              Finden Sie Ihre nächste berufliche Herausforderung in unserem Team
            </SectionDescription>
          </SectionHeader>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {jobPositions.map((job) => (
                <AccordionItem key={job.id} value={job.id} className="border border-border rounded-lg bg-card shadow-card">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center justify-between w-full text-left">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-xs">
                            <MapPin className="h-3 w-3 mr-1" />
                            {job.location}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <Calendar className="h-3 w-3 mr-1" />
                            {job.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {job.experience}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <Laptop className="h-3 w-3 mr-1" />
                            {job.workModel}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{job.description}</p>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">Ihre Aufgaben</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {job.tasks.map((task, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">Ihr Profil</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">Wir bieten</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {job.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <Button asChild className="w-full sm:w-auto">
                          <Link to={`/kontakt?job=${job.id}`}>
                            Jetzt bewerben
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* Application Process Section */}
      <Section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <SectionHeader>
            <SectionTitle>Ihr Weg zu uns</SectionTitle>
            <SectionDescription>
              Ein transparenter und effizienter Bewerbungsprozess in 4 Schritten
            </SectionDescription>
          </SectionHeader>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applicationProcess.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-dark rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-20 bg-gradient-glass backdrop-blur-md">
        <div className="container mx-auto px-4">
          <SectionHeader>
            <SectionTitle>Häufig gestellte Fragen</SectionTitle>
            <SectionDescription>
              Antworten auf die wichtigsten Fragen rund um Ihre Bewerbung
            </SectionDescription>
          </SectionHeader>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-border rounded-lg bg-card shadow-card">
                  <AccordionTrigger className="px-6 py-4 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Nicht die passende Stelle gefunden?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Senden Sie uns gerne eine Initiativbewerbung. Wir freuen uns darauf, Sie kennenzulernen und gemeinsam Ihre Karrieremöglichkeiten zu erkunden.
            </p>
            
            <Button size="lg" className="text-lg px-8 py-6 h-auto" asChild>
              <Link to="/kontakt?job=initiativbewerbung">
                <Heart className="mr-2 h-5 w-5" />
                Initiativ bewerben
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  DSGVO-konforme Behandlung Ihrer Daten
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  Schnelle Rückmeldung innerhalb von 48h
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Vertrauliche Behandlung garantiert
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}