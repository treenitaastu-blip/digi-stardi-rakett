import { motion } from "framer-motion";
import { SearchX, ShareIcon, FileQuestion, ShieldAlert, ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "./Reveal";

const problems = [
  { icon: SearchX, label: "Pole kodulehte" },
  { icon: ShareIcon, label: "Pole sotsiaalmeediat" },
  { icon: FileQuestion, label: "Pole selget pakkumist" },
  { icon: ShieldAlert, label: "Pole usaldust tekitavat esmamuljet" },
];

const transformation = [
  "Koduleht valmis",
  "Kontaktid selged",
  "Sotsiaalmeedia näeb aktiivne välja",
  "Esimesed reklaamid saab käima panna",
];

export function ProblemSection() {
  return (
    <section id="probleem" className="section-pad bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Probleem"
          title="Kui klient otsib sind internetist ja midagi korralikku ei leia, kaob usaldus enne esimest kontakti."
          subtitle="Uue ettevõtte puhul ei ole vaja kohe suurt agentuuriprojekti. Aga vaja on, et potentsiaalne klient näeks kiiresti, millega sa tegeled, kas sa tundud usaldusväärne ja kuidas sinuga ühendust võtta."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <RevealItem key={p.label}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-destructive/10 text-destructive">
                  <p.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 font-semibold">{p.label}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-brand/30 bg-card shadow-soft">
            <div className="flex items-center gap-2 border-b border-border bg-accent/60 px-6 py-3 text-sm font-semibold text-brand">
              <ArrowRight className="h-4 w-4" /> Pärast stardipaketti
            </div>
            <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
              {transformation.map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-medium">{t}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}