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
    body: "Sa näed kohe, millega arvestada.",
  },
  {
    icon: Zap,
    title: "Kiire ja selge protsess",
    body: "Alustavale ettevõttele sobiv lihtne töövoog.",
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
        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trust.map((t) => (
            <RevealItem key={t.title}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                  <t.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}