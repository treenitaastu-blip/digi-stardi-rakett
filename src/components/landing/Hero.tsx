import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowRight, Check, Search, Star, Code2, Braces, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const included = [
  "Müügitekstid valmis kirjutatud",
  "Laitmatu mobiilivaade",
  "Google'is leitav (SEO)",
  "Kontaktivorm postkasti",
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[90vh] items-center overflow-hidden pb-16 pt-28 md:pt-32"
    >
      <HeroBackground bgY={bgY} />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* ── Visual (top on mobile) ── */}
        <motion.div style={{ y: visualY }} className="order-1 lg:order-2">
          <HeroVisual />
        </motion.div>

        {/* ── Copy ── */}
        <motion.div style={{ y: copyY }} className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            Veebilehed Eesti ettevõtetele
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.07 }}
            className="mt-6 text-balance text-[2.6rem] font-bold leading-[1.03] md:text-[3.25rem] lg:text-[3.7rem]"
          >
            Koduleht, mis võidab{" "}
            <span className="text-gradient-brand">kliendi usalduse</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14 }}
            className="mt-5 max-w-[480px] text-[1.08rem] leading-relaxed text-muted-foreground"
          >
            Üheleheline veebileht koos müügitekstide ja SEO-ga. Valmis 7 tööpäevaga, fikseeritud
            hinnaga{" "}
            <span className="font-semibold text-foreground">400 €.</span>
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 grid max-w-[480px] grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2"
          >
            {included.map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-sm font-medium text-foreground/80">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/12">
                  <Check className="h-3 w-3 text-brand" />
                </span>
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
                Telli koduleht <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="heroOutline"
              size="xl"
              className="rounded-xl font-semibold tracking-tight"
            >
              <a href="#tood">Vaata töid</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroBackground({ bgY }: { bgY: MotionValue<number> }) {
  return (
    <motion.div style={{ y: bgY }} aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {/* Ambient orbs */}
      <motion.div
        className="absolute -right-20 -top-24 h-[26rem] w-[26rem] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-2) 30%, transparent), transparent 70%)",
        }}
        animate={{ x: [0, 30, 0], y: [0, 24, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-24 top-1/3 h-[22rem] w-[22rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand) 26%, transparent), transparent 70%)",
        }}
        animate={{ x: [0, -24, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Tech grid */}
      <div className="bg-grid absolute inset-0 opacity-[0.6] [mask-image:radial-gradient(80%_60%_at_50%_10%,black,transparent)]" />

      {/* Floating code glyphs */}
      {[
        { Icon: Code2, cls: "left-[8%] top-[24%]", d: 0 },
        { Icon: Braces, cls: "right-[12%] top-[16%]", d: 1.2 },
        { Icon: Terminal, cls: "left-[18%] bottom-[18%]", d: 2.1 },
      ].map(({ Icon, cls, d }, i) => (
        <motion.div
          key={i}
          className={`absolute hidden text-brand/15 lg:block ${cls}`}
          animate={{ y: [0, -16, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: d }}
        >
          <Icon className="h-9 w-9" />
        </motion.div>
      ))}
    </motion.div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[440px] lg:max-w-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        className="relative"
      >
        {/* Browser frame */}
        <div className="shadow-glow rounded-2xl border border-border bg-card p-3">
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 px-2 pb-3 pt-1">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/50" />
            <div className="ml-3 flex h-5 flex-1 items-center gap-1.5 rounded-md bg-secondary px-2.5">
              <Search className="h-2.5 w-2.5 text-muted-foreground/50" />
              <span className="text-[10px] text-muted-foreground/60">teiefirma.ee</span>
            </div>
          </div>

          {/* Website preview (pure CSS, no stock photo) */}
          <div className="relative overflow-hidden rounded-xl border border-border">
            <div className="bg-brand-gradient relative px-5 py-7">
              <div
                aria-hidden
                className="bg-dots pointer-events-none absolute inset-0 opacity-[0.15]"
              />
              <div className="relative flex items-center justify-between">
                <div className="h-2.5 w-16 rounded-full bg-white/85" />
                <div className="flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="h-1.5 w-7 rounded-full bg-white/50" />
                  ))}
                </div>
              </div>
              <div className="relative mt-6">
                <div className="h-4 w-4/5 rounded bg-white/90" />
                <div className="mt-2 h-2.5 w-3/5 rounded-full bg-white/55" />
                <div className="mt-4 flex gap-2">
                  <div className="h-7 w-28 rounded-lg bg-white" />
                  <div className="h-7 w-20 rounded-lg border border-white/50" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 bg-card p-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="space-y-1.5 rounded-lg border border-border bg-background p-2.5">
                  <div className="h-4 w-4 rounded-md bg-brand/15" />
                  <div className="h-1.5 w-full rounded-full bg-foreground/15" />
                  <div className="h-1.5 w-2/3 rounded-full bg-foreground/10" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile preview */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: 16 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -bottom-9 -right-3 w-24 overflow-hidden rounded-[1.1rem] border border-border bg-card shadow-soft-lg sm:-right-6 sm:w-28"
        >
          <div className="bg-brand-gradient h-14 w-full" />
          <div className="space-y-1.5 p-2">
            <div className="h-1.5 w-3/4 rounded-full bg-foreground/45" />
            <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/30" />
            <div className="bg-brand-gradient h-5 w-full rounded-md" />
          </div>
        </motion.div>
      </motion.div>

      {/* Google result chip */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 0.7 },
          x: { duration: 0.5, delay: 0.7 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
        }}
        className="absolute -left-3 top-10 hidden max-w-[185px] rounded-xl border border-border bg-card/95 p-3 shadow-soft-lg backdrop-blur-sm sm:-left-6 sm:flex sm:flex-col sm:gap-1.5"
      >
        <span className="text-[9px] font-semibold uppercase tracking-widest text-brand">
          Google otsing
        </span>
        <div className="h-1.5 w-full rounded-full bg-brand/70" />
        <div className="h-1.5 w-4/5 rounded-full bg-muted-foreground/40" />
        <div className="h-1.5 w-2/3 rounded-full bg-muted-foreground/25" />
      </motion.div>

      {/* Rating chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.82 }}
        animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
        transition={{
          opacity: { duration: 0.45, delay: 1 },
          scale: { duration: 0.45, delay: 1 },
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        className="absolute -right-3 top-1/4 hidden items-center gap-2 rounded-xl border border-border bg-card/95 px-3.5 py-2.5 shadow-soft-lg backdrop-blur-sm lg:-right-7 lg:flex"
      >
        <div className="flex">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-xs font-semibold">Valmis 7 päevaga</span>
      </motion.div>
    </div>
  );
}
