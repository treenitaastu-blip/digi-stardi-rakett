import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Kodulehe kiirstart",
    price: "300€",
    best: "Ettevõtetele, kes vajavad puhast ja professionaalset ühelehelist kodulehte.",
    items: [
      "Üheleheline koduleht",
      "Teenuste/pitch struktuur",
      "Mobiilisõbralik disain",
      "Kontakti CTA",
      "Põhiline SEO struktuur",
      "1-2 parandusringi",
    ],
    popular: false,
  },
  {
    name: "Digitaalne kohalolu",
    price: "449€",
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
    price: "499€",
    best: "Ettevõtetele, kes soovivad kodulehte, sotsiaalmeediat, esimest videosisu ja käivitatud reklaame.",
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
    price: "649€",
    best: "Ettevõtetele, kes soovivad originaalfilmitud sisu.",
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
        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((p) => (
            <RevealItem key={p.name} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border bg-card p-6 shadow-soft transition-all duration-300",
                  p.popular
                    ? "border-brand shadow-brand lg:-translate-y-3"
                    : "border-border hover:-translate-y-1",
                )}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
                    Populaarseim
                  </span>
                )}
                <h3 className="text-base font-semibold">{p.name}</h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">{p.price}</span>
                </div>
                <p className="mt-3 min-h-[3.5rem] text-sm text-muted-foreground">{p.best}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={p.popular ? "hero" : "heroOutline"}
                  className="mt-6 w-full"
                >
                  <a href="#kontakt">Valin selle paketi</a>
                </Button>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}