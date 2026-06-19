import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { end: 7, suffix: "", label: "tööpäeva tarne" },
  { end: 400, suffix: " €", label: "fikseeritud hind" },
  { end: 5, suffix: "+", label: "aastat kogemust" },
  { end: 100, suffix: "%", label: "mobiilne" },
];

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(end * easeOutCubic(progress)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

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
                <CountUp end={s.end} suffix={s.suffix} />
              </dt>
              <dd className="text-sm font-medium leading-snug text-muted-foreground">{s.label}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
