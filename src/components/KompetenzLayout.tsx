import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";
import { useSettings } from "@/hooks/useSettings";

export interface FocusItem {
  title: string;
  content: ReactNode;
}

interface KompetenzLayoutProps {
  eyebrow?: string;
  breadcrumbLabel: string;
  title: ReactNode;
  heroLead?: string;
  introStatement: string;
  introBody: ReactNode;
  focusEyebrow?: string;
  focusHeadline?: string;
  focusItems: FocusItem[];
  ctaTitle: string;
  ctaBody: string;
}

export const KompetenzLayout = ({
  eyebrow = "Korte & Partner — Kompetenz",
  breadcrumbLabel,
  title,
  heroLead,
  introStatement,
  introBody,
  focusEyebrow = "Schwerpunkte",
  focusHeadline = "Unsere Leistungen im Detail.",
  focusItems,
  ctaTitle,
  ctaBody,
}: KompetenzLayoutProps) => {
  const { phone, phoneEnabled } = useSettings();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero — Cinematic Full-Bleed (matches Index.tsx) */}
      <section className="relative bg-primary text-primary-foreground min-h-[70vh] flex flex-col overflow-hidden">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="Korte & Partner"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-primary/40" />

        <div className="relative z-10 flex-1 flex flex-col justify-end">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl pt-32 pb-16 lg:pb-20">
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-primary-foreground/60 hover:text-primary-foreground text-[11px] tracking-[0.25em] uppercase font-sans">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/40" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/kompetenzen" className="text-primary-foreground/60 hover:text-primary-foreground text-[11px] tracking-[0.25em] uppercase font-sans">Kompetenzen</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/40" />
                <BreadcrumbPage className="text-primary-foreground text-[11px] tracking-[0.25em] uppercase font-sans">{breadcrumbLabel}</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>

            <p className="text-[11px] font-sans tracking-[0.3em] uppercase text-primary-foreground/70 mb-8">
              {eyebrow}
            </p>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.08] font-normal max-w-4xl mb-6 text-primary-foreground">
              {title}
            </h1>

            <div className="h-px w-24 bg-sky-400/40 mb-8" />

            {heroLead && (
              <p className="font-sans text-base lg:text-lg text-primary-foreground/80 max-w-2xl leading-relaxed mb-10">
                {heroLead}
              </p>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
              <Link to="/kontakt">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-none h-14 px-10 text-xs font-semibold tracking-[0.2em] uppercase border-primary-foreground/70 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
                >
                  Mandat anfragen
                </Button>
              </Link>
              {phoneEnabled && (
                <div className="flex flex-col sm:border-l sm:border-primary-foreground/20 sm:pl-6">
                  <span className="text-[10px] uppercase tracking-widest text-primary-foreground/50 mb-1 font-sans">
                    Ansprechpartner
                  </span>
                  <a href={`tel:${phone}`} className="text-primary-foreground font-medium hover:text-primary-foreground/80 transition-colors">
                    {phone}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Manifest */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 max-w-7xl py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-6">Mandatsverständnis</p>
              <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
                {introStatement}
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="text-lg leading-relaxed text-foreground/80 space-y-6">
                {introBody}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schwerpunkte — numbered editorial grid */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 max-w-7xl py-24">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-6">{focusEyebrow}</p>
              <h2 className="font-serif text-3xl lg:text-5xl leading-tight">
                {focusHeadline}
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-base text-foreground/70 leading-relaxed">
                Klar abgegrenzte Leistungsfelder — kombinierbar, wo es das Mandat erfordert.
              </p>
            </div>
          </div>

          <div className="border-t border-border">
            {focusItems.map((item, i) => (
              <div
                key={item.title}
                className="grid lg:grid-cols-12 gap-6 lg:gap-10 border-b border-border py-10 hover:bg-muted/30 transition-colors group"
              >
                <div className="lg:col-span-2">
                  <p className="font-serif text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-serif text-2xl lg:text-3xl leading-tight">{item.title}</h3>
                </div>
                <div className="lg:col-span-6 text-foreground/75 leading-relaxed">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 max-w-7xl py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <p className="text-[11px] font-sans tracking-[0.3em] uppercase text-primary-foreground/60 mb-6">
                Erstberatung
              </p>
              <h2 className="font-serif text-3xl lg:text-5xl leading-tight">
                {ctaTitle}
              </h2>
              <div className="h-px w-24 bg-sky-400/40 my-8" />
              <p className="text-primary-foreground/70 max-w-2xl leading-relaxed">
                {ctaBody}
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
