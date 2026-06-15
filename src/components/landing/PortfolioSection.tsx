import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "CarryPeace.com",
    domain: "carrypeace.com",
    url: "https://carrypeace.com",
    description: "Rahvusvaheline e-pood tracking card tootele.",
    proof: "Näitab e-poe ülesehitust, tootelehe usaldust, reklaamidele sobivat landing page'i ja SEO sisu.",
    hue: 210,
  },
  {
    name: "Treenitaastu.ee",
    domain: "treenitaastu.ee",
    url: "https://treenitaastu.ee",
    description: "Tervise- ja treeningteenuse koduleht.",
    proof: "Näitab usaldusliku teenuse müüki, selgitavat copywritingut ja professionaalset tervisevaldkonna presentatsiooni.",
    hue: 160,
  },
  {
    name: "Treenitaastu.app",
    domain: "treenitaastu.app",
    url: "https://treenitaastu.app",
    description: "Veebirakendus kasutajatele.",
    proof: "Näitab tehnilisemat arendust, kasutajakontosid, programmiloogikat ja app'i kogemust.",
    hue: 280,
  },
  {
    name: "Centivo.ee",
    domain: "centivo.ee",
    url: "https://centivo.ee",
    description: "Ehitus- ja siseviimistlusettevõtte veebileht.",
    proof: "Näitab kohaliku teenuseäri struktuuri, teenuste selget esitamist ja päringule suunatud disaini.",
    hue: 25,
  },
  {
    name: "Torutöömees.ee",
    domain: "torutöömees.ee",
    url: "https://torutöömees.ee",
    description: "Kohaliku torutöö teenuse veebileht.",
    proof: "Näitab kiirelt arusaadavat teenuselehte, kontaktile suunatud disaini ja kohaliku ettevõtte usaldust.",
    hue: 200,
  },
];

function Mockup({ name, hue }: { name: string; hue: number }) {
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-border p-4"
      style={{
        background: `linear-gradient(135deg, oklch(0.97 0.03 ${hue}), oklch(0.93 0.05 ${hue}))`,
      }}
    >
      <div className="flex items-center gap-1.5 pb-3">
        <span className="h-2 w-2 rounded-full bg-foreground/20" />
        <span className="h-2 w-2 rounded-full bg-foreground/20" />
        <span className="h-2 w-2 rounded-full bg-foreground/20" />
      </div>
      <div className="space-y-2 rounded-lg bg-background/80 p-3 shadow-soft backdrop-blur">
        <div className="h-2.5 w-16 rounded-full" style={{ background: `oklch(0.55 0.18 ${hue})` }} />
        <div className="h-3.5 w-3/4 rounded bg-foreground/70" />
        <div className="h-2 w-2/3 rounded-full bg-muted-foreground/30" />
        <div className="grid grid-cols-3 gap-1.5 pt-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-9 rounded-md bg-secondary" />
          ))}
        </div>
      </div>
      <span className="mt-3 inline-block text-xs font-semibold text-foreground/60">{name}</span>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section id="tood" className="section-pad bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Portfoolio"
          title="Tehtud projektid, mis näitavad erinevaid oskusi"
        />
        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <RevealItem key={p.name}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brand">
                <Mockup name={p.domain} hue={p.hue} />
                <div className="flex flex-1 flex-col px-1 pt-4">
                  <h3 className="flex items-center gap-1.5 text-lg font-semibold">
                    {p.name}
                    <ArrowUpRight className="h-4 w-4 text-brand opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-4 rounded-xl bg-accent/60 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                      Mida see tõestab
                    </p>
                    <p className="mt-1 text-sm text-foreground/80">{p.proof}</p>
                  </div>
                  <Button asChild variant="heroOutline" className="mt-4 w-full">
                    <a href={p.url} target="_blank" rel="noopener noreferrer">
                      Vaata lehte <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}