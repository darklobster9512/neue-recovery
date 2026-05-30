import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle, Shield, AlertTriangle, Scale, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";

export const NewsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 7000,
        }),
      ]}
      className="w-full relative"
    >
      <CarouselContent className="-ml-4">
        {/* Slide 1 - Bitcoin Recovery Story */}
        <CarouselItem className="pl-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Krypto Betrugsopfer bekommt 
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> 8,69 Bitcoin zurück</span>
              </h3>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-800">
                  Erfolg und Hoffnung im Kampf gegen Internetbetrug / CyberCrime
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ein österreichisches Betrugsopfer erhielt kürzlich 8,69 Bitcoin zurück – ein Wert von rund 800.000 EUR (Stand Juli 2025). Möglich wurde dies durch die Zusammenarbeit zwischen unserer Kanzlei Bovensiepen & Partner, den Strafverfolgungsbehörden und dem gezielten Einsatz von Blockchain-Forensik.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Wir berichten über einen Fall, der zeigt, wie effektiver Rechtsschutz im digitalen Raum aussehen kann – und welche juristischen Herausforderungen es zu meistern galt.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800 font-medium">800.000 EUR zurückgeholt</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-green-800 font-medium">Blockchain-Forensik</span>
                </div>
              </div>
              <div className="mt-6">
                <Link to="/blog-post/krypto-betrugsopfer-bekommt-869-bitcoin-zurueck">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Mehr erfahren
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-full flex items-stretch">
              <div className="relative overflow-hidden rounded-2xl w-full">
                <img 
                  src="/lovable-uploads/9ecefdcb-e027-44d3-b2f1-e452a231af2d.png" 
                  alt="Rechtsdokument Bitcoin Rückgabe"
                  className="w-full h-[400px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </CarouselItem>

        {/* Slide 2 - CEO-Fraud und Überweisungsbetrug */}
        <CarouselItem className="pl-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                CEO-Fraud und
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Überweisungsbetrug</span>
              </h3>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-800">
                  Was tun bei Falschüberweisung nach gefälschten E-Mails?
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ein Klick, eine kurze Unachtsamkeit und eine erhebliche Geldsumme wurde auf ein Konto überwiesen, das sich später als Empfängerkonto von Betrügern anstatt des eigenen Geschäftspartners hausstellt. In vielen Fällen liegt ein gezielter Angriff durch CEO-Fraud vor.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Durch schnelles, rechtlich fundiertes Handeln und enger Zusammenarbeit mit den Strafverfolgungsbehörden ist es möglich die Sicherstellung bzw. Beschlagnahme der überwiesenen Gelder zu erwirken.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <span className="text-red-800 font-medium">Schnelle Hilfe nötig</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800 font-medium">CyberCrime</span>
                </div>
              </div>
              <div className="mt-6">
                <Link to="/blog-post/ceo-fraud-und-ueberweisungsbetrug">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Mehr erfahren
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-full flex items-stretch">
              <div className="relative overflow-hidden rounded-2xl w-full">
                <img 
                  src="/lovable-uploads/e6fcfe46-5300-4b17-bafe-fda583555ddc.png"
                  alt="CEO-Fraud und Überweisungsbetrug - Illustration"
                  className="w-full h-[400px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </CarouselItem>

        {/* Slide 3 - Kreditbearbeitungsgebühren unzulässig */}
        <CarouselItem className="pl-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Kreditbearbeitungsgebühren
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> unzulässig</span>
              </h3>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-800">
                  OGH-Urteil ermöglicht Rückforderung
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In einem richtungsweisenden Urteil hat der Oberste Gerichtshof (OGH) entschieden, dass bestimmte Kreditbearbeitungsgebühren unzulässig sind. Damit wurde ein deutliches Signal für den Verbraucherschutz gesetzt.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Für Konsument:innen eröffnet sich nun die Möglichkeit, diese Entgelte prüfen zu lassen. Bei unzulässigen Klauseln können bereits bezahlte Beträge zurückgefordert werden – selbst bei bereits getilgten Krediten.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                  <Scale className="h-5 w-5 text-green-600" />
                  <span className="text-green-800 font-medium">OGH-Urteil</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800 font-medium">Verbraucherschutz</span>
                </div>
              </div>
              <div className="mt-6">
                <Link to="/blog-post/ogh-kreditgebuehr-unzulaessig">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Mehr erfahren
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-full flex items-stretch">
              <div className="relative overflow-hidden rounded-2xl w-full">
                <img 
                  src="/lovable-uploads/80e2e160-2ba5-459b-b753-58265ea0882e.png"
                  alt="Bearbeitungsgebühr zurückholen"
                  className="w-full h-[400px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>

      {/* Navigation Buttons - Glasmorphic design */}
      <CarouselPrevious className="absolute -left-20 top-1/2 -translate-y-1/2 h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-blue-600 hover:text-blue-700 transition-all duration-300" />
      <CarouselNext className="absolute -right-20 top-1/2 -translate-y-1/2 h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-blue-600 hover:text-blue-700 transition-all duration-300" />

      {/* Modern Progress Indicators */}
      <div className="flex justify-center mt-8 space-x-3">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? 'w-8 h-3 bg-gradient-to-r from-blue-600 to-blue-700'
                : 'w-3 h-3 bg-blue-200 hover:bg-blue-400 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
};