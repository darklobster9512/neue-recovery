import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { NewsCarousel } from "@/components/NewsCarousel";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


const AnimatedCounter = ({ end, duration = 1800, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          let startTime: number;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(end);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );
    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [end, duration, hasStarted]);

  return (
    <span id={`counter-${end}`} className="font-serif text-5xl lg:text-6xl text-primary-foreground">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const team = [
  { name: "Bernhard Bovensiepen", role: "Rechtsanwalt", focus: "Cybercrime · Datenschutz · Kapitalmarkt · Kryptonachverfolgung", img: "/lovable-uploads/2cad25d9-8d15-482b-bc38-5b1378991be6.png" },
  { name: "Lea Hartwig", role: "Teamassistentin", focus: "", img: "/lovable-uploads/eb203c07-90e7-479d-8fd8-fdaa83fcce97.png" },
  { name: "Leonard Grimm", role: "Rechtsanwalt", focus: "Prozessführung · Datenschutz · Kapitalmarktrecht", img: "/lovable-uploads/b4127816-793a-42ef-b5e4-34987580a428.png" },
  { name: "Martin Willig", role: "Blockchain- / Datenanalyst", focus: "", img: "/lovable-uploads/fb9c5d6b-b0d1-44b0-9835-4301827237bb.png" },
  { name: "Michael Dorn", role: "Rechtsanwalt", focus: "Immobilienrecht · Prozessführung · Datenschutz", img: "/lovable-uploads/49592374-fd61-4f95-b984-a0cbeeaad8f5.png" },
  { name: "Steffen Rheinböcker", role: "Rechtsanwalt", focus: "Immobilienrecht · Streitbeilegung · Cybercrime", img: "/lovable-uploads/709d1496-f015-4b38-b331-9cb17b1b6eaa.png" },
];

const partnerLogos = [
  { name: "Cybercrime Komplettschutz", logo: "/lovable-uploads/da91dba8-4542-49e2-a65f-f3c47c7a5afd.png" },
  { name: "Polizei Nordrhein-Westfalen", logo: "/lovable-uploads/1834d8de-5216-4084-be7f-b4973552d4e2.png" },
  { name: "Bundeskriminalamt", logo: "/lovable-uploads/b2f48b3f-04a9-45fa-93e8-b4a2979906d0.png" },
  { name: "Coinbase", logo: "/lovable-uploads/40855976-8084-4aa6-8ab3-40a1b0d75ab6.png" },
  { name: "Binance", logo: "/lovable-uploads/a353d06a-d600-40b4-8ac2-e8fae21230d5.png" },
  { name: "IOSCO", logo: "/lovable-uploads/7cf1155a-1e93-404a-bb7f-b70fbba16ab9.png" },
];

const kompetenzen = [
  { num: "01", title: "Cybercrime", desc: "Strafrechtliche und zivilrechtliche Begleitung bei digitalen Delikten." },
  { num: "02", title: "Kryptonachverfolgung", desc: "Forensische Analyse von Wallet-Strukturen und Mittelherkunftsnachweis." },
  { num: "03", title: "Kapitalmarktrecht", desc: "Wertpapier-, Anlegerschutz- und Bankrecht in komplexen Konstellationen." },
  { num: "04", title: "Private Clients", desc: "Beratung vermögender Privatpersonen und Family Offices." },
  { num: "05", title: "Prozessführung", desc: "Effiziente Durchsetzung Ihrer Ansprüche vor Gerichten im In- und Ausland." },
  { num: "06", title: "Immobilienrecht", desc: "Begleitung anspruchsvoller Transaktionen und Streitigkeiten." },
];

const testimonials = [
  { name: "Michael S.", time: "vor 2 Wochen", text: "Hervorragende Beratung bei meinem Krypto-Betrugsfall. Das Team hat mich professionell durch den gesamten Prozess begleitet und konnte tatsächlich einen großen Teil meiner verlorenen Investition zurückholen." },
  { name: "Sarah M.", time: "vor 1 Monat", text: "Kompetente und verständliche Beratung. Die Anwälte kennen sich sehr gut mit Blockchain-Technologie aus und konnten mir bei einem komplexen ICO-Betrugsfall helfen." },
  { name: "Thomas K.", time: "vor 3 Wochen", text: "Schnelle und effiziente Hilfe bei einem Wallet-Hack. Das Team arbeitet sehr strukturiert und transparent. Kann ich nur weiterempfehlen!" },
];

const Index = () => {
  const { phoneEnabled } = useSettings();
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero — Crypto Recovery focus */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl pt-32 lg:pt-40 pb-24 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow text-primary-foreground/60 mb-8">
                Crypto Recovery · Seit 2014
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight mb-8">
                Ihre verlorenen<br />Krypto-Werte.<br />
                <span className="text-primary-foreground/70">Zurückgeholt.</span>
              </h1>
              <p className="font-serif text-xl lg:text-2xl text-primary-foreground/80 leading-snug mb-10 max-w-xl">
                Spezialisierte Kanzlei für die Nachverfolgung und Rückführung gestohlener Krypto-Assets.
              </p>
              <Link to="/kontakt">
                <Button size="lg" className="rounded-none bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-12 px-7">
                  Kostenlose Fallprüfung <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden border border-primary-foreground/15">
                <video
                  src="/video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-label="Crypto Recovery Background Video"
                />
                <div className="absolute inset-0 bg-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifest */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 max-w-7xl py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-6">Success as a Service</p>
              <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
                Langfristiger Wegbegleiter,<br />nicht nur Vertreter.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-lg leading-relaxed text-foreground/80">
                Wir verstehen uns nicht „nur" als Rechtsvertreter im klassischen Sinn, sondern als langfristiger
                Wegbegleiter und Partner. Mandant:innen sollen von unserer Arbeit tatsächlich profitieren — wir legen
                den Fokus auf individuelle Bedürfnisse und finden gemeinsam maßgeschneiderte Lösungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 max-w-7xl py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {[
              { v: 15, s: "+", l: "Jahre Fachexpertise" },
              { v: 50, s: " Mio+", l: "Euro verfolgtes Schadensvolumen" },
              { v: 13, s: "", l: "Topmotivierte Mitarbeiter:innen" },
              { v: 1000, s: "+", l: "Erfolgreich abgewickelte Verfahren" },
            ].map((stat, i) => (
              <div key={i} className="lg:border-l border-primary-foreground/15 lg:pl-6 first:lg:border-l-0 first:lg:pl-0">
                <div className="mb-3"><AnimatedCounter end={stat.v} suffix={stat.s} /></div>
                <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/55 max-w-[180px] leading-relaxed">
                  {stat.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kompetenzen */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 max-w-7xl py-24">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-6">Kompetenzen</p>
              <h2 className="font-serif text-3xl lg:text-5xl leading-tight">
                Spezialisiert. Diskret. Wirksam.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-base text-foreground/70 leading-relaxed">
                Acht Praxisfelder, ein gemeinsamer Anspruch: rechtliche Exzellenz in
                wirtschaftlich anspruchsvollen Mandaten.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-border">
            {kompetenzen.map((k) => (
              <div key={k.num} className="border-b border-r border-border last:border-r-0 [&:nth-child(3n)]:border-r-0 p-8 hover:bg-muted/40 transition-colors">
                <p className="font-serif text-sm text-accent mb-6">{k.num}</p>
                <h3 className="font-serif text-2xl mb-3 leading-tight">{k.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl py-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow mb-4">Kanzlei News</p>
              <h2 className="font-serif text-3xl lg:text-4xl leading-tight max-w-2xl">
                Aktuelle Entwicklungen und Erfolgsgeschichten
              </h2>
            </div>
            <Link to="/blog" className="text-sm font-medium story-link self-start lg:self-end">
              Alle Beiträge →
            </Link>
          </div>
          <NewsCarousel />
        </div>
      </section>

      {/* Team */}
      <section id="team" className="border-b border-border">
        <div className="container mx-auto px-6 max-w-7xl py-24">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-6">Team</p>
              <h2 className="font-serif text-3xl lg:text-5xl leading-tight">
                Die Köpfe<br />hinter der Kanzlei.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-base text-foreground/70 leading-relaxed">
                Ein interdisziplinäres Team aus Anwältinnen, Anwälten und Blockchain-Analysten —
                spezialisiert auf die Schnittstelle von Recht und digitaler Wirtschaft.
              </p>
            </div>
          </div>

          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 4500 })]}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {team.map((m) => (
                <CarouselItem key={m.name} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                  <div>
                    <div className="aspect-[4/5] overflow-hidden mb-6 bg-muted">
                      <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <h3 className="font-serif text-xl mb-1">{m.name}</h3>
                    <p className="text-sm text-foreground/60 mb-3">{m.role}</p>
                    {m.focus && <p className="text-sm text-foreground/70 leading-relaxed">{m.focus}</p>}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 h-11 w-11 rounded-none border-border bg-background text-foreground" />
            <CarouselNext className="hidden md:flex -right-4 h-11 w-11 rounded-none border-border bg-background text-foreground" />
          </Carousel>
        </div>
      </section>

      {/* Awards & Testimonials */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-10">
              <div>
                <p className="eyebrow mb-6">Auszeichnungen</p>
                <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
                  Ausgezeichnete Kompetenz.
                </h2>
                <p className="text-base text-foreground/70 mt-5 leading-relaxed">
                  Unsere Expertise wird regelmäßig von führenden Bewertungsportalen und Fachmagazinen anerkannt.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-background border border-border p-5">
                  <img src="/lovable-uploads/9a06dfc4-8617-4f69-97cd-82310bdeaa2e.png" alt="anwalt.de 5.0 Sterne Bewertung" className="w-full h-auto" />
                </div>
                <div className="bg-background border border-border p-5">
                  <img src="/lovable-uploads/f083500d-33a2-4506-9c64-bace4f2b1753.png" alt="Verschiedene Auszeichnungen 2024/2025" className="w-full h-auto" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow mb-6">Mandantenstimmen</p>
              <div className="space-y-px bg-border border border-border">
                {testimonials.map((t) => (
                  <div key={t.name} className="bg-background p-7">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                      ))}
                      <span className="text-xs text-foreground/60 ml-2 tracking-wide">5,0</span>
                    </div>
                    <p className="font-serif text-lg leading-relaxed text-foreground/90 mb-5">
                      „{t.text}"
                    </p>
                    <div className="text-xs uppercase tracking-[0.15em] text-foreground/55">
                      {t.name} — {t.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 max-w-7xl py-16">
          <p className="eyebrow text-center mb-10">Vertrauensvolle Partnerschaften</p>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 3000 })]}
            className="w-full"
          >
            <CarouselContent>
              {partnerLogos.map((partner) => (
                <CarouselItem key={partner.name} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="flex items-center justify-center h-20 px-4 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all">
                    <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 max-w-7xl py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <h2 className="font-serif text-3xl lg:text-5xl leading-tight">
                Vertraulich. Persönlich.<br />Innerhalb von 60 Minuten.
              </h2>
              <p className="text-primary-foreground/70 mt-6 max-w-xl">
                Beschreiben Sie uns Ihren Fall — wir melden uns mit einer ersten Einschätzung zurück.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link to="/kontakt">
                <Button size="lg" className="rounded-none bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-14 px-8">
                  Erstberatung anfragen <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
