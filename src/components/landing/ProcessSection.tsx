import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Saadad info",
    body: "Täidad lühikese ankeedi: ettevõtte nimi, teenused, kontakt ja piirkond.",
  },
  {
    title: "Teeme lehe",
    body: "Paneme struktuuri paika, kirjutame müügitekstid ja valmistame disaini. 6 kuud tasuta muudatusi on hinna sees.",
  },
  {
    title: "Avaldame",
    body: "Leht läheb töösse. Link on valmis klientidele, Google'ile ja reklaamile.",
  },
];

export function ProcessSection() {
  return (
    <section id="protsess" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Protsess"
          title="Kuidas koduleht valmis saab"
          subtitle="Lihtne protsess. Ei pikki koosolekuid ega tehnilist segadust."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft-lg"
            >
              <span
                aria-hidden
                className="absolute -right-2 -top-3 font-display text-7xl font-bold text-brand/[0.07] transition-colors duration-300 group-hover:text-brand/[0.12]"
              >
                {i + 1}
              </span>
              <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-brand/10 font-display text-base font-bold text-brand">
                {i + 1}
              </span>
              <h3 className="relative mt-5 text-base font-bold">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
