import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, Menu } from "lucide-react";
import { useEffect, useState } from "react";

const kompetenzen = [
  { to: "/kompetenz/cybercrime", label: "Cybercrime" },
  { to: "/kompetenz/datenschutz-und-compliance", label: "Datenschutz & Compliance" },
  { to: "/kompetenz/gesellschafts-und-unternehmensrecht", label: "Gesellschafts- & Unternehmensrecht" },
  { to: "/kompetenz/immobilienrecht", label: "Immobilienrecht" },
  { to: "/kompetenz/private-clients-family-offices", label: "Private Clients / Family Offices" },
  { to: "/kompetenz/prozessfuhrung", label: "Prozessführung" },
  { to: "/kompetenz/wertpapier-und-kapitalmarktrecht", label: "Wertpapier- & Kapitalmarktrecht" },
  { to: "/kompetenz/kryptonachverfolgung-und-mittelherkunftsnachweis", label: "Kryptonachverfolgung" },
];

export const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  const navText = transparent
    ? "text-white/90 hover:text-white"
    : "text-foreground/80 hover:text-foreground";
  const wrapper = transparent
    ? "fixed top-0 inset-x-0 z-50 bg-transparent"
    : "sticky top-0 inset-x-0 z-50 bg-background/95 backdrop-blur border-b border-border";

  return (
    <nav className={wrapper}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
        <Link to="/" className="flex items-center gap-3">
          <span
            className={`font-serif text-lg md:text-xl tracking-tight ${
              transparent ? "text-white" : "text-foreground"
            }`}
          >
            Korte <span className="opacity-60">&</span> Partner
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className={`text-sm tracking-wide flex items-center gap-1 transition-colors ${navText}`}>
              Kanzlei <ChevronDown className="h-3.5 w-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 min-w-[200px] rounded-none border-border">
              <DropdownMenuItem asChild><Link to="/#team" className="w-full">Team</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/blog" className="w-full">News</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/unsere-partner" className="w-full">Unsere Partner</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className={`text-sm tracking-wide flex items-center gap-1 transition-colors ${navText}`}>
              Kompetenzen <ChevronDown className="h-3.5 w-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 min-w-[280px] rounded-none border-border">
              {kompetenzen.map((k) => (
                <DropdownMenuItem key={k.to} asChild>
                  <Link to={k.to} className="w-full">{k.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/blog-post/krypto-betrugsopfer-bekommt-869-bitcoin-zurueck" className={`text-sm tracking-wide transition-colors ${navText}`}>
            Erfolge
          </Link>
          <Link to="/kontakt" className={`text-sm tracking-wide transition-colors ${navText}`}>
            Kontakt
          </Link>
          <Link to="/stellenangebote" className={`text-sm tracking-wide transition-colors ${navText}`}>
            Karriere
          </Link>

          <Link to="/kontakt">
            <Button
              variant={transparent ? "outline" : "default"}
              className={
                transparent
                  ? "rounded-none border-white/40 bg-transparent text-white hover:bg-white hover:text-primary"
                  : "rounded-none bg-primary text-primary-foreground hover:bg-primary-dark"
              }
            >
              Mandat anfragen
            </Button>
          </Link>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className={`rounded-none border ${
                  transparent ? "border-white/40 bg-transparent text-white hover:bg-white/10" : ""
                }`}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] bg-background border-l border-border">
              <div className="flex flex-col gap-6 mt-8">
                <Link to="/" className="font-serif text-lg">
                  <SheetClose asChild>
                    <span>Korte <span className="opacity-60">&</span> Partner</span>
                  </SheetClose>
                </Link>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="kanzlei" className="border-border">
                    <AccordionTrigger className="text-sm">Kanzlei</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-3 pl-2 text-sm">
                        <SheetClose asChild><Link to="/#team">Team</Link></SheetClose>
                        <SheetClose asChild><Link to="/blog">News</Link></SheetClose>
                        <SheetClose asChild><Link to="/unsere-partner">Unsere Partner</Link></SheetClose>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="kompetenzen" className="border-border">
                    <AccordionTrigger className="text-sm">Kompetenzen</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-3 pl-2 text-sm">
                        {kompetenzen.map((k) => (
                          <SheetClose asChild key={k.to}>
                            <Link to={k.to}>{k.label}</Link>
                          </SheetClose>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="flex flex-col gap-3 text-sm">
                  <SheetClose asChild><Link to="/blog-post/krypto-betrugsopfer-bekommt-869-bitcoin-zurueck">Erfolge</Link></SheetClose>
                  <SheetClose asChild><Link to="/kontakt">Kontakt</Link></SheetClose>
                  <SheetClose asChild><Link to="/stellenangebote">Karriere</Link></SheetClose>
                </div>

                <SheetClose asChild>
                  <Link to="/kontakt">
                    <Button className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary-dark">
                      Mandat anfragen
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
