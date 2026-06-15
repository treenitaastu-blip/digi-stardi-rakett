import { motion } from "framer-motion";

const stats = [
  { value: "7", label: "tööpäeva tarne" },
  { value: "400 €", label: "fikseeritud hind" },
  { value: "5+", label: "aastat kogemust" },
  { value: "100%", label: "mobiilne" },
];

export function StatsBand() {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-5">
        <dl className="grid grid-cols-2 divide-x divide-y divide-border/70 sm:grid-cols-4 sm:divide-y-0">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start gap-1 px-5 py-8 sm:px-7"
            >
              <dt className="font-display text-3xl font-bold leading-none tracking-tight text-foreground md:text-4xl">
                {s.value}
              </dt>
              <dd className="text-sm font-medium leading-snug text-muted-foreground">{s.label}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
