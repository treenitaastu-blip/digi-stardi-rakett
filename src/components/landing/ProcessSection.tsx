import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Saadad ettevõtte info",
    body: "Ettevõtte nimi, teenused, kontaktid, piirkond ja olemasolevad materjalid.",
  },
  {
    title: "Panen struktuuri paika",
    body: "Mõtlen läbi, mida klient peab nägema, et sind usaldada ja ühendust võtta.",
  },
  {
    title: "Teen esimese versiooni",
    body: "Valmib kodulehe ja valitud lisateenuste esimene versioon.",
  },
  {
    title: "Teeme parandused",
    body: "Hinna sees on kuni 2 parandusringi.",
  },
  {
    title: "Paneme asja live'i",
    body: "Sul on link, mida saab klientidele saata ja reklaamides kasutada.",
  },
];

export function ProcessSection() {
  return (
    <section id="protsess" className="section-pad bg-secondary/40">
      <div className="mx-auto max-w-2xl px-5">
        <SectionHeading eyebrow="Protsess" title="Kuidas töö käib" />
        <div className="relative mt-14 space-y-0">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-6 bottom-6 w-px bg-border" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex gap-6 pb-10 last:pb-0"
            >
              {/* Step bubble */}
              <div className="relative z-10 mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-brand bg-background">
                <span className="text-sm font-bold text-brand">{i + 1}</span>
              </div>
              <div className="flex-1 pb-2 pt-1.5">
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
