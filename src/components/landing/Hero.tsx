import { motion } from "framer-motion";
import { Globe, Megaphone, Share2, Video, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const deliverables = [
  { icon: Globe, label: "Koduleht valmis", floatDelay: 0 },
  { icon: Share2, label: "Sotsiaalmeedia seadistatud", floatDelay: 1.1 },
  { icon: Video, label: "Video loodud", floatDelay: 2.2 },
  { icon: Megaphone, label: "Reklaam käivitatud", floatDelay: 3.3 },
];

const trustPoints = [
  "Avalikud hinnad — 300€ kuni 649€",
  "Kõik ühest kohast",
  "Ilma agentuuri hinnata",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[94vh] items-center overflow-hidden pb-24 pt-28 md:pt-40 md:pb-32"
    >
      {/* Ambient gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 55% at 80% -5%, color-mix(in oklab, var(--brand) 13%, transparent) 0%, transparent 70%), radial-gradient(50% 40% at -5% 25%, color-mix(in oklab, var(--brand) 7%, transparent) 0%, transparent 65%)",
        }}
      />
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ── Copy ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Uutele ja väikestele Eesti ettevõtetele
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.07 }}
            className="mt-6 text-balance text-[2.55rem] font-extrabold leading-[1.07] tracking-tight md:text-[3.25rem] lg:text-[3.75rem]"
          >
            Tee oma uus ettevõte{" "}
            <span className="text-gradient-brand">internetis usaldusväärseks</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14 }}
            className="mt-6 max-w-[510px] text-[1.1rem] leading-relaxed text-muted-foreground"
          >
            Koduleht alates{" "}
            <span className="font-semibold text-foreground">300€</span>. Soovi korral lisan
            sotsiaalmeedia seadistuse, postitused, turundusvideod ja reklaamide käivitamise —
            kõik ühest kohast.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {trustPoints.map((t) => (
              <li key={t} className="flex items-center gap-1.5 text-sm font-medium text-foreground/65">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                {t}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild variant="hero" size="xl" className="rounded-xl font-semibold tracking-tight">
              <a href="#kontakt">
                Küsi stardipaketti <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl" className="rounded-xl font-semibold tracking-tight">
              <a href="#tood">Vaata tehtud töid</a>
            </Button>
          </motion.div>
        </div>

        {/* ── Visual ── */}
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
      {/* Desktop mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        className="relative rounded-2xl border border-border bg-card p-3 shadow-soft"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-2 pb-3 pt-1">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/50" />
          <div className="ml-3 flex h-5 flex-1 items-center gap-1.5 rounded-md bg-secondary px-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand/50" />
            <span className="text-[10px] text-muted-foreground/70">sinufirma.ee</span>
          </div>
        </div>

        {/* Page preview */}
        <div className="overflow-hidden rounded-xl bg-secondary/60">
          <div className="space-y-4 p-5">
            {/* Nav */}
            <div className="flex items-center justify-between">
              <div className="h-2.5 w-16 rounded-full bg-brand/60" />
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-2 w-9 rounded-full bg-muted-foreground/15" />
                ))}
              </div>
            </div>
            {/* Hero area */}
            <div className="pt-1">
              <div className="h-6 w-4/5 rounded-lg bg-foreground/70" />
              <div className="mt-2 h-3.5 w-3/5 rounded-md bg-foreground/35" />
              <div className="mt-1.5 h-2.5 w-2/3 rounded-full bg-muted-foreground/15" />
              <div className="mt-4 flex gap-2">
                <div className="h-8 w-28 rounded-lg bg-brand" />
                <div className="h-8 w-20 rounded-lg border border-border bg-background" />
              </div>
            </div>
            {/* Cards row */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-16 rounded-xl bg-background shadow-soft" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile chip */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 16 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-10 -right-4 w-24 rounded-[1.1rem] border border-border bg-card p-1.5 shadow-soft sm:-right-7 sm:w-28"
      >
        <div className="space-y-2 rounded-[0.75rem] bg-secondary/60 p-2.5">
          <div className="h-2 w-10 rounded-full bg-brand/60" />
          <div className="h-3 w-full rounded bg-foreground/60" />
          <div className="h-12 rounded-lg bg-background" />
          <div className="h-6 w-full rounded-lg bg-brand" />
        </div>
      </motion.div>

      {/* Status pills — left */}
      <div className="pointer-events-none absolute -left-4 top-6 hidden flex-col gap-2.5 sm:-left-6 sm:flex">
        {deliverables.slice(0, 2).map((d, i) => (
          <FloatPill key={d.label} {...d} enterDelay={0.5 + i * 0.15} />
        ))}
      </div>

      {/* Status pills — right */}
      <div className="pointer-events-none absolute -right-4 top-1/3 hidden flex-col gap-2.5 lg:-right-7 lg:flex">
        {deliverables.slice(2).map((d, i) => (
          <FloatPill key={d.label} {...d} enterDelay={0.9 + i * 0.15} />
        ))}
      </div>
    </div>
  );
}

function FloatPill({
  icon: Icon,
  label,
  floatDelay,
  enterDelay,
}: {
  icon: typeof Globe;
  label: string;
  floatDelay: number;
  enterDelay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82, y: 6 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -7, 0],
      }}
      transition={{
        opacity: { duration: 0.45, delay: enterDelay },
        scale: { duration: 0.45, delay: enterDelay },
        y: {
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay + enterDelay,
        },
      }}
      className="flex items-center gap-2.5 rounded-xl border border-border bg-card/95 px-3.5 py-2.5 text-xs font-semibold shadow-soft backdrop-blur-sm"
    >
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-brand/10">
        <Icon className="h-3.5 w-3.5 text-brand" />
      </span>
      {label}
    </motion.div>
  );
}
