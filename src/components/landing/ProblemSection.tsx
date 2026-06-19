import { SearchX, ShieldAlert, History, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "./Reveal";

const problems = [
  {
    icon: SearchX,
    title: "Klient otsib sind Google'ist, aga ei leia korralikku infot",
    body: "Kui sind ei leita, ei saa klient sind isegi kaaluda. Ta võtab ühendust sellega, kes on nähtav.",
  },
  {
    icon: ShieldAlert,
    title: "Facebookist üksi ei piisa",
    body: "Klient võib sind Facebookis näha, aga enne otsust tahab ta näha korralikku infot, teenuseid ja kontakte ühes kohas.",
  },
  {
    icon: History,
    title: "Vana või poolik leht tekitab kahtlust",
    body: "Kui leht näeb vana välja, võib klient mõelda, et ettevõte ei tegutse enam või ei ole usaldusväärne.",
  },
];

const after = [
  "Leitav Google'i otsingus",
  "Teenused, hinnad ja kontakt ühe pilguga",
  "Esmamulje, mis tekitab usaldust",
  "Google Maps ja Search Console seadistatud",
];

export function ProblemSection() {
  return (
    <section id="probleem" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Probleem"
          title="Klient otsib sind Google'ist enne, kui ta helistab"
          subtitle="Kui ta leiab ainult Facebooki, vana lehe või mitte midagi, liigub ta kiiresti edasi. Korralik koduleht aitab jätta kindla ja usaldusväärse esmamulje."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {problems.map((p, i) => (
            <RevealItem key={p.title}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                <span className="absolute right-5 top-4 font-display text-5xl font-bold text-border/60">
                  0{i + 1}
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-destructive/10 text-destructive">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* After — bold brand panel */}
        <Reveal className="mt-6">
          <div className="bg-brand-gradient relative overflow-hidden rounded-3xl p-8 shadow-glow md:p-10">
            <div
              aria-hidden
              className="bg-dots pointer-events-none absolute inset-0 opacity-[0.12]"
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-foreground/70">
                Stardipaketiga
              </p>
              <h3 className="mt-2 max-w-xl text-balance text-2xl font-bold leading-tight text-brand-foreground md:text-3xl">
                Klient leiab sind, saab aru mida pakud ja teab kohe kuhu kirjutada
              </h3>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {after.map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/20">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-foreground" />
                    </span>
                    <span className="text-sm font-medium leading-snug text-brand-foreground/95">
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
