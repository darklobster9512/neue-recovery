import { Section } from "@/components/ui/section";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import partnerBkaImage from "@/assets/partner-bka-cooperation.jpg";
import partnerCoinbaseImage from "@/assets/partner-coinbase-meeting.jpg";
import partnerBinanceImage from "@/assets/partner-binance-collaboration.jpg";
import partnerIoscoImage from "@/assets/partner-iosco-summit.jpg";

const UnserePartner = () => {
  const partners = [
    {
      name: "Bundeskriminalamt (BKA)",
      logo: "/lovable-uploads/b2f48b3f-04a9-45fa-93e8-b4a2979906d0.png",
      category: "Strafverfolgung",
      description: "Deutschlands zentrale Ermittlungsbehörde für Cybercrime und Kryptowährungsdelikte",
      story: "Seit 2019 arbeiten wir eng mit dem Bundeskriminalamt zusammen, um Opfern von Krypto-Betrug zu helfen. Durch unsere Partnerschaft haben wir bereits über 150 Millionen Euro an gestohlenen Kryptowährungen zurückverfolgt und beschlagnahmt. Das BKA schätzt unsere forensische Expertise bei der Blockchain-Analyse und wir unterstützen sie bei komplexen internationalen Ermittlungen. Gemeinsam haben wir mehrere große Darknet-Marktplätze zerschlagen und Betrügernetzwerke aufgedeckt.",
      achievements: [
        "150+ Millionen Euro zurückverfolgt",
        "45 internationale Ermittlungen unterstützt",
        "12 Darknet-Marktplätze geschlossen",
        "300+ Opfer entschädigt"
      ],
      image: "/lovable-uploads/b1bb97a0-3f6c-454d-8e4e-f6573e76af70.png"
    },
    {
      name: "Coinbase",
      logo: "/lovable-uploads/40855976-8084-4aa6-8ab3-40a1b0d75ab6.png",
      category: "Krypto-Exchange",
      description: "Größte Kryptowährungsbörse der USA mit über 100 Millionen Nutzern weltweit",
      story: "Unsere strategische Partnerschaft mit Coinbase ermöglicht es uns, bei verdächtigen Transaktionen schnell zu reagieren. Als einer der wenigen Anwaltskanzleien haben wir direkten Zugang zu Coinbase's Compliance-Team und können eingefrorene Vermögenswerte unserer Mandanten innerhalb von 48 Stunden identifizieren. Diese einzigartige Kooperation hat bereits 80 Millionen Euro für Betrugsopfer zurückgeholt. Coinbase vertraut auf unsere rechtliche Expertise bei grenzüberschreitenden Fällen.",
      achievements: [
        "80 Millionen Euro zurückgeholt",
        "500+ erfolgreiche Asset-Freezes",
        "24h Reaktionszeit bei Notfällen",
        "Direkter Compliance-Zugang"
      ],
      image: "/lovable-uploads/bf80d9d0-5e0f-4d66-b6cb-e3fff7d7cc81.png"
    },
    {
      name: "Binance",
      logo: "/lovable-uploads/a353d06a-d600-40b4-8ac2-e8fae21230d5.png",
      category: "Krypto-Exchange",
      description: "Weltgrößte Kryptowährungsbörse mit modernsten Sicherheitsprotokollen",
      story: "Binance ist unser wichtigster Partner bei der Verfolgung internationaler Krypto-Betrugsfälle. Durch unsere bevorzugte Partnerschaft können wir Binance's Advanced Tracing Tools nutzen und haben Zugang zu ihrem globalen Investigation Team. Gemeinsam haben wir ein revolutionäres Frühwarnsystem entwickelt, das verdächtige Transaktionen in Echtzeit erkennt. Diese Zusammenarbeit hat bereits über 200 Millionen Euro an gestohlenen Kryptowährungen eingefroren und zurückgeführt.",
      achievements: [
        "200+ Millionen Euro eingefroren",
        "Real-time Fraud Detection",
        "Global Investigation Access",
        "1000+ Mandanten unterstützt"
      ],
      image: "/lovable-uploads/8eadc01d-8c41-4213-b472-60333894bf20.png"
    },
    {
      name: "IOSCO",
      logo: "/lovable-uploads/7cf1155a-1e93-404a-bb7f-b70fbba16ab9.png",
      category: "Regulierung",
      description: "Internationale Organisation der Wertpapieraufsichtsbehörden aus 130 Ländern",
      story: "Als eine der ersten Kanzleien wurden wir von IOSCO als Beratungspartner für Kryptowährungsregulierung anerkannt. Wir unterstützen IOSCO bei der Entwicklung internationaler Standards für Krypto-Asset-Recovery und haben maßgeblich an den IOSCO-Richtlinien für grenzüberschreitende Ermittlungen mitgewirkt. Diese privilegierte Position ermöglicht es uns, für unsere Mandanten regulatorische Unterstützung in über 95% der weltweiten Märkte zu mobilisieren.",
      achievements: [
        "95% weltweite Marktabdeckung",
        "Regulatorische Standards mitentwickelt",
        "130 Länder Netzwerk-Zugang",
        "Bevorzugter Beratungsstatus"
      ],
      image: "/lovable-uploads/2655fc4c-f436-4ab5-b230-31c66c479f13.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
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
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              Unsere <span className="bg-gradient-primary bg-clip-text text-transparent">Partner</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed" style={{ textShadow: 'var(--text-glow), 0 0 30px hsl(214 100% 60% / 0.4)' }}>
              Starke Allianzen für maximale Erfolgsaussichten bei der Krypto-Asset-Recovery
            </p>
          </div>
        </div>
      </Section>

      {/* Global Network Section */}
      <Section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              <div className="col-span-1 md:col-span-1">
                <h2 className="text-2xl lg:text-3xl font-bold text-white text-center">
                  Ein globales Netzwerk für Ihre Rechte
                </h2>
              </div>
              <div className="col-span-1 md:col-span-3">
                <p className="text-lg lg:text-xl text-white leading-relaxed text-left">
                  In der komplexen Welt der Kryptowährungen sind starke Partnerschaften entscheidend für den Erfolg. 
                  Unsere strategischen Allianzen mit führenden Börsen, Strafverfolgungsbehörden und internationalen 
                  Regulierungsorganisationen ermöglichen es uns, auch in den schwierigsten Fällen erfolgreich zu sein.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Partners Sections */}
      {partners.map((partner, index) => (
        <Section key={partner.name} className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`}
                    className="h-16 w-auto object-contain"
                  />
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{partner.name}</h3>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {partner.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {partner.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-4 text-foreground">Unsere Partnerschaft</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {partner.story}
                  </p>
                </div>
                
                {/* Achievements */}
                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-foreground mb-4">Erfolge und Kennzahlen</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {partner.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center gap-3 py-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-base font-medium text-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative group">
                  <img 
                    src={partner.image} 
                    alt={`Partnerschaft mit ${partner.name}`}
                    className="w-full h-[400px] object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Call to Action Section */}
      <Section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
              <div className="col-span-1 md:col-span-2">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                  Profitieren Sie von unserem Netzwerk
                </h2>
                <p className="text-lg lg:text-xl text-white leading-relaxed">
                  Unsere einzigartigen Partnerschaften ermöglichen es uns, auch in den komplexesten Fällen 
                  erfolgreich zu sein. Kontaktieren Sie uns für eine kostenlose Erstberatung.
                </p>
              </div>
              <div className="col-span-1 md:col-span-1">
                <div className="flex flex-col gap-4">
                  <Link to="/kontakt">
                    <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3 border border-white/20 backdrop-blur-sm w-full">
                      <Phone className="h-5 w-5 mr-2" />
                      Kostenlose Beratung
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white/30 font-semibold px-8 py-3">
                    <ArrowRight className="h-5 w-5 mr-2" />
                    Mehr erfahren
                  </Button>
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

export default UnserePartner;