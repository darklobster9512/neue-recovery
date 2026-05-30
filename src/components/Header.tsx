import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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

export const Header = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-glass backdrop-blur-md border-b border-[var(--border-glass)] shadow-glass">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/3863a302-63a5-4e77-ac24-0c7f1592c2ea.png" 
              alt="Bovensiepen & Partner Logo" 
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {/* Dropdown - Kanzlei */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] flex items-center gap-1" style={{ textShadow: 'var(--text-glow)' }}>
              Kanzlei
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border-gray-700 z-50">
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/#team" className="w-full">Team</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/blog" className="w-full">News</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/unsere-partner" className="w-full">Unsere Partner</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Dropdown - Kompetenzen */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] flex items-center gap-1" style={{ textShadow: 'var(--text-glow)' }}>
              Kompetenzen
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border-gray-700 z-50">
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/kompetenz/cybercrime" className="w-full">Cybercrime</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/kompetenz/datenschutz-und-compliance" className="w-full">Datenschutz und Compliance</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/kompetenz/gesellschafts-und-unternehmensrecht" className="w-full">Gesellschafts- und Unternehmensrecht</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/kompetenz/immobilienrecht" className="w-full">Immobilienrecht</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/kompetenz/private-clients-family-offices" className="w-full">Private Clients / Family Offices</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/kompetenz/prozessfuhrung" className="w-full">Prozessführung</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/kompetenz/wertpapier-und-kapitalmarktrecht" className="w-full">Wertpapier- und Kapitalmarktrecht</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/kompetenz/kryptonachverfolgung-und-mittelherkunftsnachweis" className="w-full">Kryptonachverfolgung und Mittelherkunftsnachweis</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Einzelne Links */}
          <Link to="/blog-post/krypto-betrugsopfer-bekommt-869-bitcoin-zurueck" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)]" style={{ textShadow: 'var(--text-glow)' }}>
            Erfolge
          </Link>
          <Link to="/kontakt" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)]" style={{ textShadow: 'var(--text-glow)' }}>
            Kontakt
          </Link>
          <Link to="/stellenangebote" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)]" style={{ textShadow: 'var(--text-glow)' }}>
            Stellenangebote
          </Link>

          <Link to="/kontakt">
            <Button variant="outline" className="bg-gradient-glass backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-primary/50 transition-all duration-300 shadow-glass hover:shadow-[0_0_30px_hsl(214_100%_60%_/_0.6)] hover:border-primary/80" style={{ textShadow: 'var(--text-glow)', boxShadow: '0 0 20px hsl(214 100% 60% / 0.3), var(--shadow-glass)' }}>
              Beratung anfragen
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="bg-gradient-glass backdrop-blur-md border-white/30 text-white hover:bg-white/20 p-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-gray-900/95 backdrop-blur-md border-gray-700">
              <div className="flex flex-col gap-6 mt-8">
                {/* Logo */}
                <Link to="/" className="flex justify-center">
                  <SheetClose asChild>
                    <img 
                      src="/lovable-uploads/3863a302-63a5-4e77-ac24-0c7f1592c2ea.png" 
                      alt="Bovensiepen & Partner Logo" 
                      className="h-10 w-auto"
                    />
                  </SheetClose>
                </Link>

                {/* Navigation Items */}
                <Accordion type="single" collapsible className="w-full">
                  {/* Kanzlei Dropdown */}
                  <AccordionItem value="kanzlei" className="border-gray-700">
                    <AccordionTrigger className="text-white hover:text-primary">
                      Kanzlei
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-3 pl-4">
                        <SheetClose asChild>
                          <Link to="/#team" className="text-gray-300 hover:text-primary text-left">Team</Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link to="/blog" className="text-gray-300 hover:text-primary text-left">News</Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link to="/unsere-partner" className="text-gray-300 hover:text-primary text-left">Unsere Partner</Link>
                        </SheetClose>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Kompetenzen Dropdown */}
                  <AccordionItem value="kompetenzen" className="border-gray-700">
                    <AccordionTrigger className="text-white hover:text-primary">
                      Kompetenzen
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-3 pl-4">
                        <SheetClose asChild>
                          <Link to="/kompetenz/cybercrime" className="text-gray-300 hover:text-primary text-left">Cybercrime</Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link to="/kompetenz/datenschutz-und-compliance" className="text-gray-300 hover:text-primary text-left">Datenschutz und Compliance</Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link to="/kompetenz/gesellschafts-und-unternehmensrecht" className="text-gray-300 hover:text-primary text-left">Gesellschafts- und Unternehmensrecht</Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link to="/kompetenz/immobilienrecht" className="text-gray-300 hover:text-primary text-left">Immobilienrecht</Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link to="/kompetenz/private-clients-family-offices" className="text-gray-300 hover:text-primary text-left">Private Clients / Family Offices</Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link to="/kompetenz/prozessfuhrung" className="text-gray-300 hover:text-primary text-left">Prozessführung</Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link to="/kompetenz/wertpapier-und-kapitalmarktrecht" className="text-gray-300 hover:text-primary text-left">Wertpapier- und Kapitalmarktrecht</Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link to="/kompetenz/kryptonachverfolgung-und-mittelherkunftsnachweis" className="text-gray-300 hover:text-primary text-left">Kryptonachverfolgung und Mittelherkunftsnachweis</Link>
                        </SheetClose>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Direct Links */}
                <div className="flex flex-col gap-4">
                  <SheetClose asChild>
                    <Link to="/blog-post/krypto-betrugsopfer-bekommt-869-bitcoin-zurueck" className="text-white hover:text-primary text-left">
                      Erfolge
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/kontakt" className="text-white hover:text-primary text-left">
                      Kontakt
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/stellenangebote" className="text-white hover:text-primary text-left">
                      Stellenangebote
                    </Link>
                  </SheetClose>
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  <SheetClose asChild>
                    <Link to="/kontakt" className="w-full">
                      <Button variant="outline" className="w-full bg-gradient-glass backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-primary/50 transition-all duration-300">
                        Beratung anfragen
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};