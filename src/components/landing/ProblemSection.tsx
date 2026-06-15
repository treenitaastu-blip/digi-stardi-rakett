import { motion } from "framer-motion";
import { SearchX, ShieldAlert, MousePointerX, ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "./Reveal";

const problems = [
  {
    icon: SearchX,
    title: "Googles ei leia sind",
    body: "Kui ettevõtet otsingumootorist ei leia, läheb potentsiaalne klient konkurendi juurde.",
  },
  {
    icon: ShieldAlert,
    title: "Facebooki leht ei tekita usaldust",
    body: "Sotsiaalmeedias olemine on hea, aga koduleht annab ettevõttele usaldusväärsuse ja professionaalse mulje.",
  },
  {
    icon: MousePointerX,
    title: "Vana või poolik leht kahjustab mainet",
    body: "Aegunud, kiiruga tehtud või tühi koduleht ütleb kliendile: see firma ei ole päriselt tegutsenud.",
  },
];

const after = [
  "Ettevõte ilmub Google otsingutulemustes",
  "Klient leiab kohe teenuse, hinna ja kontakti",
  "Esmamulje on professionaalne ja usaldusväärne",
  "Google Maps ja otsingukonsooli seadistus tehtud",
];

export function ProblemSection() {
  return (
    <section id="probleem" className="section-pad bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Miks see oluline on"
          title="Kui klient otsib sind Googlist ja midagi korralikku ei leia, kaob usaldus enne esimest kontakti."
          subtitle="Uue ettevõtte jaoks pole vaja kohe suurt agentuuriprojekti — aga vaja on, et potentsiaalne klient näeks kiiresti, millega sa tegeled, kas sind usaldada ja kuidas sinuga ühendust võtta."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {problems.map((p) => (
            <RevealItem key={p.title}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-destructive/8 text-destructive">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Transformation */}
        <Reveal className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-brand/25 bg-card shadow-soft">
            <div className="flex items-center gap-2 border-b border-border bg-accent/50 px-6 py-3.5">
              <ArrowRight className="h-4 w-4 text-brand" />
              <span className="text-sm font-semibold text-brand">Pärast kodulehe valmimist</span>
            </div>
            <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
              {after.map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium leading-snug">{t}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
