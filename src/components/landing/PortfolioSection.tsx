import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { ContactLink } from "./ContactLink";
import { cn } from "@/lib/utils";
import {
  carouselDotBaseClass,
  carouselDotClass,
  carouselTrackClass,
  useCarouselIndex,
} from "@/lib/useCarouselIndex";

const projects = [
  {
    name: "CarryPeace.com",
    domain: "carrypeace.com",
    url: "https://carrypeace.com",
    image: "/portfolio/carrypeace.webp",
    category: "E-pood",
    description: "Rahvusvaheline e-pood ühele tootele.",
    proof: "Usaldust loov tooteleht, reklaamiks sobiv maandumisleht ja SEO-le ehitatud sisu.",
    accentColor: "oklch(0.48 0.2 262)",
    accentBg: "oklch(0.96 0.025 262)",
  },
  {
    name: "Treenitaastu.ee",
    domain: "treenitaastu.ee",
    url: "https://treenitaastu.ee",
    image: "/portfolio/treenitaastu.webp",
    category: "Terviseteenus",
    description: "Tervise- ja treeningteenuse koduleht.",
    proof: "Selge teenuse tutvustus, usaldust loovad tekstid ja professionaalne esmamulje.",
    accentColor: "oklch(0.45 0.18 160)",
    accentBg: "oklch(0.96 0.025 160)",
  },
  {
    name: "Treenitaastu.app",
    domain: "treenitaastu.app",
    url: "https://treenitaastu.app",
    image: "/portfolio/treenitaastu-app.webp",
    category: "Veebirakendus",
    description: "Terviklik veebirakendus kasutajatele.",
    proof: "Kasutajakontod, treeningloogika ja sujuv kasutuskogemus.",
    accentColor: "oklch(0.48 0.2 280)",
    accentBg: "oklch(0.96 0.025 280)",
  },
  {
    name: "Centivo.ee",
    domain: "centivo.ee",
    url: "https://centivo.ee",
    image: "/portfolio/centivo.webp",
    category: "Ehitus",
    description: "Ehitus- ja siseviimistlusettevõtte leht.",
    proof: "Teenuste selge esitlus ja päringule suunatud ülesehitus.",
    accentColor: "oklch(0.48 0.15 55)",
    accentBg: "oklch(0.96 0.025 55)",
  },
];

function PortfolioCard({ project: p }: { project: (typeof projects)[number] }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full snap-center flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:shadow-brand"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-border bg-secondary/60 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-rose-400/55" />
        <span className="h-2 w-2 rounded-full bg-amber-400/55" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/55" />
        <div className="ml-2 flex min-w-0 flex-1 items-center gap-2 rounded-sm bg-background/70 px-2 py-0.5">
          <span className="truncate text-[9px] text-muted-foreground/55">{p.domain}</span>
          <span
            className="shrink-0 rounded-full px-2 py-0.5 text-[8px] font-bold uppercase tracking-wide"
            style={{ color: p.accentColor, background: "var(--background)" }}
          >
            {p.category}
          </span>
        </div>
        <ExternalLink className="h-3 w-3 shrink-0 text-muted-foreground/40 transition-colors group-hover:text-brand" />
      </div>

      {/* Screenshot */}
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <img
          src={p.image}
          alt={`${p.name} kodulehe eelvaade`}
          width={1024}
          height={640}
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 320px"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug transition-colors duration-200 group-hover:text-brand">
          {p.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>

        <div className="mt-4 rounded-xl p-3.5" style={{ background: p.accentBg }}>
          <p
            className="mb-1 text-[10px] font-bold uppercase tracking-widest"
            style={{ color: p.accentColor }}
          >
            Mida see näitab
          </p>
          <p className="text-xs leading-relaxed text-foreground/75">{p.proof}</p>
        </div>
      </div>
    </a>
  );
}

export function PortfolioSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { activeIndex, updateActiveIndex, scrollToIndex } = useCarouselIndex(scrollRef, {
    itemCount: projects.length,
    cardSelector: "[data-portfolio-card]",
    gap: 16,
  });

  return (
    <section
      id="tood"
      data-section="cards-anchor"
      className="section-pad bg-secondary lg:pt-[clamp(380px,42vh,520px)]"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Tööd"
          title="Valik tehtud töödest"
          subtitle="Mõned näited tehtud projektidest erinevates valdkondades."
        />

        <Reveal className="mt-14">
          {/* Mobile — horizontal carousel */}
          <div className="md:hidden">
            <div
              ref={scrollRef}
              onScroll={updateActiveIndex}
              className={cn(carouselTrackClass, "gap-4")}
              aria-label="Portfoolio karussell"
            >
              {projects.map((p) => (
                <div
                  key={p.name}
                  data-portfolio-card
                  className="w-[min(88vw,340px)] shrink-0 snap-center"
                >
                  <PortfolioCard project={p} />
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-center gap-1.5" aria-hidden>
              {projects.map((p, i) => (
                <button
                  key={p.name}
                  type="button"
                  aria-label={`Kuva ${p.name}`}
                  onClick={() => scrollToIndex(i)}
                  className={cn(carouselDotBaseClass, carouselDotClass(i === activeIndex))}
                />
              ))}
            </div>
          </div>

          {/* Desktop — grid */}
          <RevealGroup className="hidden gap-6 md:grid md:grid-cols-2">
            {projects.map((p) => (
              <RevealItem key={p.name}>
                <PortfolioCard project={p} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>

        {/* CTA band */}
        <Reveal className="mt-6">
          <div className="bg-brand relative flex flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl p-6 shadow-soft sm:flex-row md:p-8">
            <div
              aria-hidden
              className="bg-dots pointer-events-none absolute inset-0 opacity-[0.12]"
            />
            <p className="relative text-balance text-center text-lg font-bold text-brand-foreground sm:text-left">
              Teie ettevõte võiks olla järgmine projekt.
            </p>
            <Button
              asChild
              size="xl"
              className="relative shrink-0 rounded-xl bg-white font-semibold text-brand hover:bg-white/90"
            >
              <ContactLink>
                Küsi pakkumist <ArrowRight className="h-4 w-4" />
              </ContactLink>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
