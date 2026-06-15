import {
  ShoppingCart,
  HeartPulse,
  AppWindow,
  HardHat,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "CarryPeace.com",
    domain: "carrypeace.com",
    url: "https://carrypeace.com",
    category: "E-pood",
    icon: ShoppingCart,
    description: "Rahvusvaheline e-pood ühele tootele.",
    proof: "Usaldust loov tooteleht, reklaamiks sobiv maandumisleht ja SEO-le ehitatud sisu.",
    accentColor: "oklch(0.48 0.2 262)",
    accentBg: "oklch(0.96 0.025 262)",
  },
  {
    name: "Treenitaastu.ee",
    domain: "treenitaastu.ee",
    url: "https://treenitaastu.ee",
    category: "Terviseteenus",
    icon: HeartPulse,
    description: "Tervise- ja treeningteenuse koduleht.",
    proof: "Selge teenuse tutvustus, usaldust loovad tekstid ja professionaalne esmamulje.",
    accentColor: "oklch(0.45 0.18 160)",
    accentBg: "oklch(0.96 0.025 160)",
  },
  {
    name: "Treenitaastu.app",
    domain: "treenitaastu.app",
    url: "https://treenitaastu.app",
    category: "Veebirakendus",
    icon: AppWindow,
    description: "Terviklik veebirakendus kasutajatele.",
    proof: "Kasutajakontod, treeningloogika ja sujuv kasutuskogemus.",
    accentColor: "oklch(0.48 0.2 280)",
    accentBg: "oklch(0.96 0.025 280)",
  },
  {
    name: "Centivo.ee",
    domain: "centivo.ee",
    url: "https://centivo.ee",
    category: "Ehitus",
    icon: HardHat,
    description: "Ehitus- ja siseviimistlusettevõtte leht.",
    proof: "Teenuste selge esitlus ja päringule suunatud ülesehitus.",
    accentColor: "oklch(0.48 0.15 55)",
    accentBg: "oklch(0.96 0.025 55)",
  },
];

export function PortfolioSection() {
  return (
    <section id="tood" className="section-pad bg-secondary/30">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Tööd"
          title="Projektid, mis on päriselt töös"
          subtitle="Avaldatud lehed erinevates valdkondades, mitte näidismaketid."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <RevealItem key={p.name}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:shadow-brand"
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 border-b border-border bg-secondary/60 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-rose-400/55" />
                  <span className="h-2 w-2 rounded-full bg-amber-400/55" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/55" />
                  <div className="ml-2 flex h-4 flex-1 items-center rounded-sm bg-background/70 px-2">
                    <span className="text-[9px] text-muted-foreground/55">{p.domain}</span>
                  </div>
                  <ExternalLink className="h-3 w-3 text-muted-foreground/40 transition-colors group-hover:text-brand" />
                </div>

                {/* Icon panel */}
                <div
                  className="relative flex items-center gap-4 px-6 py-7"
                  style={{ background: p.accentBg }}
                >
                  <span
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-background/70 shadow-soft transition-transform duration-300 group-hover:scale-110"
                    style={{ color: p.accentColor }}
                  >
                    <p.icon className="h-7 w-7" />
                  </span>
                  <span
                    className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide"
                    style={{ background: "var(--background)", color: p.accentColor }}
                  >
                    {p.category}
                  </span>
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
            </RevealItem>
          ))}
        </RevealGroup>

        {/* CTA band */}
        <Reveal className="mt-6">
          <div className="bg-brand-gradient relative flex flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl p-6 shadow-glow sm:flex-row md:p-8">
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
              <a href="#kontakt">
                Telli koduleht <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
