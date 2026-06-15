import { Hammer, Target, Eye, Zap, Wallet } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";

const trust = [
  {
    icon: Hammer,
    title: "Olen ise ehitanud päris projekte",
    body: "Mitte ainult näidislehti. Olen ehitanud e-poode, teenuslehti ja veebirakendusi.",
  },
  {
    icon: Target,
    title: "Mõtlen müügile, mitte ainult välimusele",
    body: "Lehe eesmärk on selgitada pakkumine ära ja viia inimene kontakti võtmiseni.",
  },
  {
    icon: Eye,
    title: "Avalikud hinnad",
    body: "Sa näed kohe, millega arvestada. Pole varjatud kulusid ega üllatusi.",
  },
  {
    icon: Zap,
    title: "Kiire ja selge protsess",
    body: "Alustavale ettevõttele sobiv lihtne töövoog ilma bürokraatiata.",
  },
  {
    icon: Wallet,
    title: "Väikse ettevõtte hinnad",
    body: "Korralik esmamulje ilma agentuuri hinnata.",
  },
];

export function TrustSection() {
  return (
    <section id="usaldus" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Usaldus" title="Miks mind usaldada?" />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trust.map((t) => (
            <RevealItem key={t.title}>
              <div className="group flex h-full gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30">
                <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/8 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
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
