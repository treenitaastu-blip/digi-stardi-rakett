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
    <section id="protsess" className="section-pad">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading eyebrow="Protsess" title="Kuidas töö käib" />
        <div className="relative mt-12 pl-8">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-8 grid h-8 w-8 place-items-center rounded-full border-2 border-background bg-brand text-sm font-bold text-brand-foreground">
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-muted-foreground">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}