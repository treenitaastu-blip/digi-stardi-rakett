import { Hammer, Target, Eye, Zap, Wallet, PenLine } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";

const trust = [
  {
    icon: Hammer,
    title: "Olen ise ehitanud päris projekte",
    body: "Mitte ainult näidislehti. Olen ehitanud e-poode, teenuslehti ja veebirakendusi, mis on päriselt kasutuses.",
  },
  {
    icon: Target,
    title: "Mõtlen müügile, mitte ainult välimusele",
    body: "Lehe eesmärk on selgitada pakkumine ära ja viia inimene kontakti võtmiseni — mitte lihtsalt ilus olla.",
  },
  {
    icon: PenLine,
    title: "Copywriting on hinna sees",
    body: "Sa ei pea ise tekste kirjutama. Mina küsin info ja vormin sellest kliendile arusaadava sisu.",
  },
  {
    icon: Eye,
    title: "Avalikud hinnad",
    body: "400€. Kõik sees. Sa näed kohe, millega arvestada — pole varjatud kulusid.",
  },
  {
    icon: Zap,
    title: "Kiire protsess",
    body: "7 tööpäevaga on leht valmis. Alustavale ettevõttele sobiv lihtne töövoog ilma bürokraatiata.",
  },
  {
    icon: Wallet,
    title: "Väikse ettevõtte hind",
    body: "Korralik esmamulje ilma agentuuri hinnata. Mitte 2000€, vaid 400€.",
  },
];

export function TrustSection() {
  return (
    <section id="usaldus" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Miks mina" title="Miks mind usaldada?" />
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
