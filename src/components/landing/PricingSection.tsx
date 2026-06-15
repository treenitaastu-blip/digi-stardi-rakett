import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Kodulehe kiirstart",
    price: 300,
    best: "Ettevõtetele, kes vajavad puhast ja professionaalset ühelehelist kodulehte.",
    items: [
      "Üheleheline koduleht",
      "Teenuste/pitch struktuur",
      "Mobiilisõbralik disain",
      "Kontakti CTA",
      "Põhiline SEO struktuur",
      "1–2 parandusringi",
    ],
    popular: false,
  },
  {
    name: "Digitaalne kohalolu",
    price: 449,
    best: "Ettevõtetele, kes soovivad, et ka sotsiaalmeedia näeks aktiivne ja usaldusväärne välja.",
    items: [
      "Kõik, mis Kodulehe kiirstardis",
      "Sotsiaalmeedia kontode seadistus",
      "9 pildipostitust",
      "1 turundusvideo stock footage'i ja voiceoveriga",
    ],
    popular: false,
  },
  {
    name: "Täielik stardipakett",
    price: 499,
    best: "Koduleht, sotsiaalmeedia, esimene videosisu ja käivitatud reklaamid — kõik koos.",
    items: [
      "Koduleht",
      "Sotsiaalmeedia seadistus",
      "9 pildipostitust",
      "3 turundusvideot stock footage'i ja voiceoveriga",
      "Reklaamikonto seadistus ja esimene kampaania",
      "Põhilised loovmaterjalid",
    ],
    popular: true,
  },
  {
    name: "Premium stardipakett",
    price: 649,
    best: "Ettevõtetele, kes soovivad originaalfilmitud sisu autentsete kaadritega.",
    items: [
      "Kõik, mis Täielikus stardipaketis",
      "Originaalvideo filmimine ettevõttes",
      "3 originaalset lühikest turundusvideot",
      "Autentsemad visuaalid kodulehele ja sotsiaalmeediasse",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="hinnad" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Hinnad"
          title="Läbipaistvad hinnad alustavale ettevõttele"
          subtitle="Sa ei pea ootama kolme müügikõnet, et teada saada, kas koduleht maksab 300€ või 3000€."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:items-start">
          {packages.map((p) => (
            <RevealItem key={p.name} className="h-full">
              {p.popular ? (
                <PopularCard pkg={p} />
              ) : (
                <RegularCard pkg={p} />
              )}
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Kõik paketid sisaldavad kuni 2 parandusringi. Domeen ja hosting eraldi.
        </p>
      </div>
    </section>
  );
}

type Pkg = (typeof packages)[0];

function RegularCard({ pkg: p }: { pkg: Pkg }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30">
      <div>
        <h3 className="text-[0.9rem] font-semibold text-muted-foreground">{p.name}</h3>
        <div className="mt-3 flex items-end gap-0.5">
          <span className="text-[2.4rem] font-extrabold tracking-tight leading-none">{p.price}</span>
          <span className="mb-1 ml-0.5 text-lg font-bold text-muted-foreground">€</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.best}</p>
      </div>
      <div className="my-5 h-px bg-border" />
      <ul className="flex-1 space-y-3">
        {p.items.map((it) => (
          <li key={it} className="flex items-start gap-2.5 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            <span className="text-foreground/80">{it}</span>
          </li>
        ))}
      </ul>
      <Button asChild variant="heroOutline" className="mt-6 w-full rounded-xl font-semibold">
        <a href="#kontakt">Valin selle paketi</a>
      </Button>
    </div>
  );
}

function PopularCard({ pkg: p }: { pkg: Pkg }) {
  return (
    <div className="relative flex h-full flex-col rounded-2xl p-px shadow-brand">
      {/* Gradient border */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(145deg, var(--brand), color-mix(in oklab, var(--brand) 60%, oklch(0.6 0.18 200)))",
        }}
      />
      <div className="relative flex h-full flex-col rounded-[calc(1rem-1px)] bg-card p-6">
        {/* Badge */}
        <span
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-[0.7rem] font-bold uppercase tracking-widest text-brand-foreground"
          style={{
            background:
              "linear-gradient(90deg, var(--brand), color-mix(in oklab, var(--brand) 65%, oklch(0.6 0.18 200)))",
          }}
        >
          Populaarseim valik
        </span>

        <div>
          <h3 className="text-[0.9rem] font-semibold text-brand">{p.name}</h3>
          <div className="mt-3 flex items-end gap-0.5">
            <span className="text-[2.8rem] font-extrabold tracking-tight leading-none">{p.price}</span>
            <span className="mb-1.5 ml-0.5 text-xl font-bold text-muted-foreground">€</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.best}</p>
        </div>
        <div className="my-5 h-px bg-border" />
        <ul className="flex-1 space-y-3">
          {p.items.map((it) => (
            <li key={it} className="flex items-start gap-2.5 text-sm">
              <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand/15">
                <Check className="h-2.5 w-2.5 text-brand" />
              </span>
              <span className="font-medium">{it}</span>
            </li>
          ))}
        </ul>
        <Button asChild variant="hero" className="mt-6 w-full rounded-xl font-semibold">
          <a href="#kontakt">Valin selle paketi</a>
        </Button>
      </div>
    </div>
  );
}
