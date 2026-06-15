import { motion } from "framer-motion";
import { Globe, Megaphone, Share2, Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingCards = [
  { icon: Globe, label: "Koduleht valmis", delay: 0 },
  { icon: Share2, label: "Sotsiaalmeedia seadistatud", delay: 0.4 },
  { icon: Video, label: "Video loodud", delay: 0.8 },
  { icon: Megaphone, label: "Reklaam käivitatud", delay: 1.2 },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, color-mix(in oklab, var(--brand) 14%, transparent), transparent), radial-gradient(50% 40% at 0% 10%, color-mix(in oklab, var(--brand) 8%, transparent), transparent)",
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Uutele ja väikestele Eesti ettevõtetele
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl"
          >
            Tee oma uus ettevõte internetis{" "}
            <span className="text-gradient-brand">usaldusväärseks</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-xl text-lg text-muted-foreground"
          >
            Koduleht alates 300€. Soovi korral lisan sotsiaalmeedia seadistuse, postitused,
            turundusvideod ja reklaamide käivitamise - kõik ühest kohast.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-3 text-sm font-medium text-foreground"
          >
            Korralik esimene mulje ilma agentuuri hinnata.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild variant="hero" size="xl">
              <a href="#kontakt">
                Küsi stardipaketti <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href="#tood">Vaata tehtud töid</a>
            </Button>
          </motion.div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-2xl border border-border bg-card p-3 shadow-soft"
      >
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 px-2 pb-3 pt-1">
          <span className="h-2.5 w-2.5 rounded-full bg-muted" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted" />
          <span className="ml-3 h-5 flex-1 rounded-md bg-secondary" />
        </div>
        {/* Website preview */}
        <div className="overflow-hidden rounded-xl bg-secondary">
          <div className="space-y-3 p-5">
            <div className="h-3 w-24 rounded-full bg-brand/80" />
            <div className="h-6 w-3/4 rounded-md bg-foreground/80" />
            <div className="h-3 w-2/3 rounded-full bg-muted-foreground/30" />
            <div className="flex gap-2 pt-1">
              <div className="h-7 w-24 rounded-md bg-brand" />
              <div className="h-7 w-20 rounded-md border border-border bg-background" />
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-16 rounded-lg bg-background shadow-soft" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile preview */}
      <motion.div
        initial={{ opacity: 0, x: 24, y: 24 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-8 -right-2 w-28 rounded-2xl border border-border bg-card p-1.5 shadow-soft sm:w-32"
      >
        <div className="space-y-2 rounded-xl bg-secondary p-2.5">
          <div className="h-2 w-10 rounded-full bg-brand/80" />
          <div className="h-3 w-full rounded bg-foreground/70" />
          <div className="h-12 rounded-lg bg-background" />
          <div className="h-5 w-full rounded-md bg-brand" />
        </div>
      </motion.div>

      {/* Floating status cards */}
      <div className="pointer-events-none absolute -left-4 top-6 hidden flex-col gap-3 sm:flex">
        {floatingCards.slice(0, 2).map((c) => (
          <FloatCard key={c.label} {...c} />
        ))}
      </div>
      <div className="pointer-events-none absolute -right-6 top-1/2 hidden flex-col gap-3 lg:flex">
        {floatingCards.slice(2).map((c) => (
          <FloatCard key={c.label} {...c} />
        ))}
      </div>
    </div>
  );
}

function FloatCard({
  icon: Icon,
  label,
  delay,
}: {
  icon: typeof Globe;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.5, delay: 0.5 + delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className="flex items-center gap-2 rounded-xl border border-border bg-card/95 px-3 py-2 text-xs font-medium shadow-soft backdrop-blur"
    >
      <span className="grid h-6 w-6 place-items-center rounded-md bg-accent text-accent-foreground">
        <Icon className="h-3.5 w-3.5" />
      </span>
      {label}
    </motion.div>
  );
}