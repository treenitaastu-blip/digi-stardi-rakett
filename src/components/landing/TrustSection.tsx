import { Hammer, Target, Eye, Zap, Wallet, PenLine } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";

const trust = [
  {
    icon: Hammer,
    title: "Päris projektid, mitte mockup'id",
    body: "Portfoolios on e-poed, teenuslehed ja rakendused, mis töötavad päriselt — mitte ainult disainiprototüübid.",
  },
  {
    icon: Target,
    title: "Disain, mis viib kontaktini",
    body: "Iga element on mõeldud ühele eesmärgile: selgitada pakkumist ja tuua päring.",
  },
  {
    icon: PenLine,
    title: "Tekstid valmis tehtud",
    body: "Copywriting on paketis. Ettevõtte infost saab professionaalne sisu — eraldi copywriterit pole vaja.",
  },
  {
    icon: Eye,
    title: "Hind enne, mitte pärast",
    body: "400 € fikseeritud. Täpne summa enne tellimist — üllatusi pole.",
  },
  {
    icon: Zap,
    title: "Kiire tarne, lihtne protsess",
    body: "Seitse tööpäeva tellimusest valmis leheni. Ilma pikkade koosolekute ja bürokraatiata.",
  },
  {
    icon: Wallet,
    title: "Agentuuri kvaliteet, väikeettevõtte hind",
    body: "Professionaalne esmamulje nelja-, mitte neljatuhande euro eest.",
  },
];

export function TrustSection() {
  return (
    <section id="usaldus" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Miks meie"
          title="Miks valida Digitaalne Stardipakett?"
          subtitle="Professionaalne tulemus ilma agentuuri hinnata ja bürokraatiata."
        />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trust.map((t) => (
            <RevealItem key={t.title}>
              <div className="group flex h-full gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30">
                <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/8 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
                  <t.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold leading-snug">{t.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
