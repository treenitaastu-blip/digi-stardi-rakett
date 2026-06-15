import { Hammer, Target, Eye, Zap, Wallet, PenLine } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";

const trust = [
  {
    icon: Hammer,
    title: "Päris projektid, mitte maketid",
    body: "Portfoolios on avaldatud e-poed, teenuslehed ja rakendused, mitte disainiprototüübid.",
  },
  {
    icon: Target,
    title: "Disain, mis viib kontaktini",
    body: "Iga element teenib üht eesmärki: selgitada pakkumine ja tuua päring.",
  },
  {
    icon: PenLine,
    title: "Tekstid on kaasas",
    body: "Müügitekstid kuuluvad paketti. Eraldi tekstikirjutajat pole vaja.",
  },
  {
    icon: Eye,
    title: "Hind ette teada",
    body: "400 € fikseeritud. Täpne summa on teada juba enne tellimist.",
  },
  {
    icon: Zap,
    title: "Kiire ja lihtne",
    body: "Seitse tööpäeva tellimusest valmis leheni, ilma pikkade koosolekuteta.",
  },
  {
    icon: Wallet,
    title: "Aus hind",
    body: "Agentuuri tasemel tulemus ilma agentuuri arveta.",
  },
];

export function TrustSection() {
  return (
    <section id="usaldus" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Miks meie"
          title="Põhjused, miks meiega koostööd teha"
          subtitle="Professionaalne tulemus ilma agentuuri hinna ja bürokraatiata."
        />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trust.map((t) => (
            <RevealItem key={t.title}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft-lg">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
                  <t.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold leading-snug">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
