import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export interface HeroBreadcrumbItem {
  label: string;
  href?: string;
}

interface EditorialHeroProps {
  /** Uppercase tracking label above the title, e.g. "Bovensiepen & Partner — Insights" */
  eyebrow: string;
  /** Breadcrumb trail. Last item should have no href (becomes current page). */
  breadcrumb?: HeroBreadcrumbItem[];
  title: ReactNode;
  lead?: ReactNode;
  /** Optional meta row (date, reading time, author) shown below the lead */
  meta?: ReactNode;
  /** Optional actions (e.g. buttons) shown beneath the lead */
  children?: ReactNode;
  /** Center-align the hero content (e.g. for overview pages like Blog/Partner). Default false. */
  centered?: boolean;
  /** Min height. Defaults to 70vh. */
  minHeight?: string;
  /** Include the global Header. Defaults to true. */
  withHeader?: boolean;
}

/**
 * Cinematic editorial hero used across all subpages (Kompetenz pages, Blog, BlogPost,
 * Kontakt, Stellenangebote, UnserePartner). Mirrors the new Index.tsx hero.
 */
export const EditorialHero = ({
  eyebrow,
  breadcrumb,
  title,
  lead,
  meta,
  children,
  centered = false,
  minHeight = "min-h-[70vh]",
  withHeader = true,
}: EditorialHeroProps) => {
  return (
    <>
      {withHeader && <Header />}
      <section className={`relative bg-primary text-primary-foreground ${minHeight} flex flex-col overflow-hidden`}>
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="Bovensiepen & Partner"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-primary/40" />

        <div className="relative z-10 flex-1 flex flex-col justify-end">
          <div className={`container mx-auto px-6 lg:px-12 max-w-7xl pt-32 pb-16 lg:pb-20 ${centered ? "text-center" : ""}`}>
            {breadcrumb && breadcrumb.length > 0 && (
              <Breadcrumb className={`mb-8 ${centered ? "flex justify-center" : ""}`}>
                <BreadcrumbList>
                  {breadcrumb.map((item, idx) => {
                    const isLast = idx === breadcrumb.length - 1;
                    return (
                      <span key={idx} className="contents">
                        <BreadcrumbItem>
                          {isLast || !item.href ? (
                            <BreadcrumbPage className="text-primary-foreground text-[11px] tracking-[0.25em] uppercase font-sans">
                              {item.label}
                            </BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink href={item.href} className="text-primary-foreground/60 hover:text-primary-foreground text-[11px] tracking-[0.25em] uppercase font-sans">
                              {item.label}
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                        {!isLast && <BreadcrumbSeparator className="text-primary-foreground/40" />}
                      </span>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            )}

            <p className="text-[11px] font-sans tracking-[0.3em] uppercase text-primary-foreground/70 mb-8">
              {eyebrow}
            </p>

            <h1 className={`font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.08] font-normal mb-6 text-primary-foreground ${centered ? "mx-auto max-w-5xl" : "max-w-4xl"}`}>
              {title}
            </h1>

            <div className={`h-px w-24 bg-sky-400/40 mb-8 ${centered ? "mx-auto" : ""}`} />

            {lead && (
              <p className={`font-sans text-base lg:text-lg text-primary-foreground/80 leading-relaxed mb-8 ${centered ? "mx-auto max-w-3xl" : "max-w-2xl"}`}>
                {lead}
              </p>
            )}

            {meta && (
              <div className={`flex flex-wrap items-center gap-6 text-[11px] font-sans tracking-[0.2em] uppercase text-primary-foreground/60 ${centered ? "justify-center" : ""}`}>
                {meta}
              </div>
            )}

            {children && (
              <div className={`mt-10 flex flex-col sm:flex-row gap-4 ${centered ? "justify-center" : ""}`}>
                {children}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
