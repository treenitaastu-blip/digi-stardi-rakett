import { ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";

const projects = [
  {
    name: "CarryPeace.com",
    domain: "carrypeace.com",
    url: "https://carrypeace.com",
    category: "E-pood",
    description: "Rahvusvaheline e-pood tracking card tootele.",
    proof: "E-poe ülesehitus, tootelehe usaldus, reklaamidele sobiv landing page ja SEO sisu.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80&auto=format&fit=crop",
    accentColor: "oklch(0.48 0.2 262)",
    accentBg: "oklch(0.96 0.025 262)",
  },
  {
    name: "Treenitaastu.ee",
    domain: "treenitaastu.ee",
    url: "https://treenitaastu.ee",
    category: "Tervise teenus",
    description: "Tervise- ja treeningteenuse koduleht.",
    proof: "Usaldusliku teenuse müük, selgitav copywriting ja professionaalne tervisevaldkonna presentatsioon.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80&auto=format&fit=crop",
    accentColor: "oklch(0.45 0.18 160)",
    accentBg: "oklch(0.96 0.025 160)",
  },
  {
    name: "Treenitaastu.app",
    domain: "treenitaastu.app",
    url: "https://treenitaastu.app",
    category: "Veebirakendus",
    description: "Veebirakendus kasutajatele.",
    proof: "Tehniline arendus, kasutajakontod, programmiloogika ja app-kogemus.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&q=80&auto=format&fit=crop",
    accentColor: "oklch(0.48 0.2 280)",
    accentBg: "oklch(0.96 0.025 280)",
  },
  {
    name: "Centivo.ee",
    domain: "centivo.ee",
    url: "https://centivo.ee",
    category: "Ehitusettevõte",
    description: "Ehitus- ja siseviimistlusettevõtte veebileht.",
    proof: "Kohaliku teenuseäri struktuur, teenuste selge esitamine ja päringule suunatud disain.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80&auto=format&fit=crop",
    accentColor: "oklch(0.48 0.15 55)",
    accentBg: "oklch(0.96 0.025 55)",
  },
  {
    name: "Torutöömees.ee",
    domain: "torutöömees.ee",
    url: "https://torutöömees.ee",
    category: "Kohalik teenus",
    description: "Kohaliku torutöö teenuse veebileht.",
    proof: "Kiirelt arusaadav teenuselehekülg, kontaktile suunatud disain ja kohaliku ettevõtte usaldus.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=700&q=80&auto=format&fit=crop",
    accentColor: "oklch(0.45 0.18 210)",
    accentBg: "oklch(0.96 0.025 210)",
  },
];

export function PortfolioSection() {
  return (
    <section id="tood" className="section-pad bg-secondary/30">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Portfoolio"
          title="Tehtud projektid"
          subtitle="Reaalsed lehed, mitte näidised. Iga projekt näitab erinevat lahendust."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                </div>

                {/* Screenshot */}
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-44 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span
                    className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold"
                    style={{ background: p.accentBg, color: p.accentColor }}
                  >
                    {p.category}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/8">
                    <div className="flex items-center gap-1.5 rounded-full bg-background/90 px-3.5 py-2 text-xs font-semibold opacity-0 shadow-soft backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      <ExternalLink className="h-3.5 w-3.5" />
                      Vaata lehte
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-bold leading-snug transition-colors duration-200 group-hover:text-brand">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>

                  <div
                    className="mt-4 rounded-xl p-3.5"
                    style={{ background: p.accentBg }}
                  >
                    <p
                      className="mb-1 text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: p.accentColor }}
                    >
                      Mida see tõestab
                    </p>
                    <p className="text-xs leading-relaxed text-foreground/72">{p.proof}</p>
                  </div>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
