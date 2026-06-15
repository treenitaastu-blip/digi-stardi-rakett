import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Tellimisankeet",
    body: "Saadate ettevõtte info: nimi, teenused, kontakt ja piirkond.",
  },
  {
    title: "Struktuur ja tekstid",
    body: "Paneme paika lehe ülesehituse ja kirjutame müügitekstid.",
  },
  {
    title: "Disain ja esiversioon",
    body: "Mõne tööpäevaga valmib täielik esiversioon koos disainiga.",
  },
  {
    title: "Teie tagasiside",
    body: "Vaatate lehe üle ja annate märku, mida soovite muuta.",
  },
  {
    title: "Parandused",
    body: "Teeme soovitud muudatused. Kuni kaks ringi on hinna sees.",
  },
  {
    title: "Avaldamine",
    body: "Leht läheb töösse. Link on valmis klientidele ja reklaamile.",
  },
];

export function ProcessSection() {
  return (
    <section id="protsess" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Protsess"
          title="Tellimusest valmis leheni kuue sammuga"
          subtitle="Lihtne ja kiire töövoog ilma pikkade koosolekute ja bürokraatiata."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
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
