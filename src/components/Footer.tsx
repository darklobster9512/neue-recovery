import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { PhoneDisplay } from "./PhoneDisplay";
import { useSettings } from "@/hooks/useSettings";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { phoneEnabled } = useSettings();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 max-w-7xl py-20">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl mb-6 leading-tight">
              Breuer <span className="opacity-60">&</span> Partner
            </h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-md">
              Spezialisiert auf Kryptowährungsrecht, Betrugswiederherstellung und Anlegerschutz.
              Mit über 10 Jahren Erfahrung im Finanzrecht sind wir Ihr vertrauensvoller Partner
              bei komplexen Rechtsfragen im digitalen Zeitalter.
            </p>

            <div className="mt-10 pt-8 border-t border-primary-foreground/15">
              <p className="eyebrow text-primary-foreground/60 mb-3">Newsletter</p>
              <p className="text-sm text-primary-foreground/70 mb-4">
                Aktuelle Rechtsentwicklungen, kuratiert.
              </p>
              <div className="flex gap-0 max-w-sm">
                <input
                  type="email"
                  placeholder="E-Mail-Adresse"
                  className="flex-1 px-3 py-2 bg-transparent border border-primary-foreground/25 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/70"
                />
                <Button size="sm" className="rounded-none bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Abonnieren
                </Button>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow text-primary-foreground/60 mb-4">Kompetenzen</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/kompetenz/cybercrime" className="text-primary-foreground/75 hover:text-primary-foreground transition-colors">Cybercrime</Link></li>
              <li><Link to="/kompetenz/datenschutz-und-compliance" className="text-primary-foreground/75 hover:text-primary-foreground transition-colors">Datenschutz & Compliance</Link></li>
              <li><Link to="/kompetenz/gesellschafts-und-unternehmensrecht" className="text-primary-foreground/75 hover:text-primary-foreground transition-colors">Unternehmensrecht</Link></li>
              <li><Link to="/kompetenz/immobilienrecht" className="text-primary-foreground/75 hover:text-primary-foreground transition-colors">Immobilienrecht</Link></li>
              <li><Link to="/kompetenz/private-clients-family-offices" className="text-primary-foreground/75 hover:text-primary-foreground transition-colors">Private Clients</Link></li>
              <li><Link to="/kompetenz/prozessfuhrung" className="text-primary-foreground/75 hover:text-primary-foreground transition-colors">Prozessführung</Link></li>
              <li><Link to="/kompetenz/wertpapier-und-kapitalmarktrecht" className="text-primary-foreground/75 hover:text-primary-foreground transition-colors">Kapitalmarktrecht</Link></li>
              <li><Link to="/kompetenz/kryptonachverfolgung-und-mittelherkunftsnachweis" className="text-primary-foreground/75 hover:text-primary-foreground transition-colors">Kryptonachverfolgung</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-primary-foreground/60 mb-4">Rechtliches</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/impressum" className="text-primary-foreground/75 hover:text-primary-foreground transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-primary-foreground/75 hover:text-primary-foreground transition-colors">Datenschutz</Link></li>
              <li><Link to="/agb" className="text-primary-foreground/75 hover:text-primary-foreground transition-colors">AGB</Link></li>
              <li><Link to="/haftungsausschluss" className="text-primary-foreground/75 hover:text-primary-foreground transition-colors">Haftungsausschluss</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-primary-foreground/60 mb-4">Kontakt</p>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 opacity-70" />
                <span>Domstraße 15<br />20095 Hamburg</span>
              </div>
              {phoneEnabled && (
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 flex-shrink-0 opacity-70" />
                  <PhoneDisplay />
                </div>
              )}
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 opacity-70" />
                <span>info@breuer-partner.de</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/15">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/55">
              © 2026 Breuer & Partner. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 text-xs">
              <Link to="/impressum" className="text-primary-foreground/55 hover:text-primary-foreground transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="text-primary-foreground/55 hover:text-primary-foreground transition-colors">Datenschutz</Link>
              <a href="#" className="text-primary-foreground/55 hover:text-primary-foreground transition-colors">Cookie-Einstellungen</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
