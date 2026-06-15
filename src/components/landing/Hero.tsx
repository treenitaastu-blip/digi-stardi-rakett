import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const included = [
  "Selge struktuur ja professionaalne copywriting",
  "Mobiilisõbralik disain",
  "Kontaktivorm, Google Maps, teenuste tutvustus",
  "Basic SEO — Google otsingukonsooli seadistus",
];

const badges = [
  { icon: Clock, text: "7 päevaga valmis" },
  { icon: Search, text: "Google-sõbralik" },
  { icon: Star, text: "400€ — kõik sees" },
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
            "radial-gradient(65% 55% at 80% -5%, color-mix(in oklab, var(--brand) 12%, transparent) 0%, transparent 70%), radial-gradient(45% 40% at -5% 30%, color-mix(in oklab, var(--brand) 6%, transparent) 0%, transparent 65%)",
        }}
      />
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.15fr_0.85fr]">
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
            className="mt-6 text-balance text-[2.5rem] font-extrabold leading-[1.07] tracking-tight md:text-[3.1rem] lg:text-[3.65rem]"
          >
            7 päevaga professionaalne koduleht,{" "}
            <span className="text-gradient-brand">mis teeb teie ettevõtte nähtavaks</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14 }}
            className="mt-6 max-w-[520px] text-[1.08rem] leading-relaxed text-muted-foreground"
          >
            Teen teile ühe-lehe kodulehe, mis teeb teie ettevõtte Googles ja kliendi silmis
            usaldusväärseks.{" "}
            <span className="font-semibold text-foreground">400€, kõik vajalik sees.</span>
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 space-y-2.5"
          >
            {included.map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-sm text-foreground/75">
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
                Küsi pakkumist <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl" className="rounded-xl font-semibold tracking-tight">
              <a href="#tood">Vaata tehtud töid</a>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {badges.map((b) => (
              <span
                key={b.text}
                className="flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-semibold text-muted-foreground"
              >
                <b.icon className="h-3.5 w-3.5 text-brand" />
                {b.text}
              </span>
            ))}
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
      {/* Laptop frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        className="relative"
      >
        {/* Screen bezel */}
        <div className="rounded-2xl border border-border bg-card p-3 shadow-soft">
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 px-2 pb-3 pt-1">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/50" />
            <div className="ml-3 flex h-5 flex-1 items-center gap-1.5 rounded-md bg-secondary px-2.5">
              <Search className="h-2.5 w-2.5 text-muted-foreground/50" />
              <span className="text-[10px] text-muted-foreground/60">sinufirma.ee</span>
            </div>
          </div>

          {/* Website preview — image + overlay skeleton */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80&auto=format&fit=crop"
              alt="Professionaalne koduleht"
              className="h-56 w-full object-cover object-top opacity-80"
            />
            {/* Overlay UI elements to make it look like a real website */}
            <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/40 via-transparent to-black/60 p-4">
              {/* Nav overlay */}
              <div className="flex items-center justify-between">
                <div className="h-2.5 w-14 rounded-full bg-white/80" />
                <div className="flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="h-1.5 w-8 rounded-full bg-white/50" />
                  ))}
                </div>
              </div>
              {/* Hero text overlay */}
              <div>
                <div className="h-4 w-3/5 rounded bg-white/90" />
                <div className="mt-1.5 h-2.5 w-2/5 rounded-full bg-white/60" />
                <div className="mt-3 flex gap-2">
                  <div className="h-7 w-24 rounded-lg bg-brand" />
                </div>
              </div>
            </div>
          </div>

          {/* Below-fold skeleton */}
          <div className="mt-2 space-y-2 rounded-xl bg-secondary/50 p-3">
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-10 rounded-lg bg-background shadow-soft" />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile preview */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: 16 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -bottom-10 -right-4 w-24 overflow-hidden rounded-[1.1rem] border border-border bg-card shadow-soft sm:-right-7 sm:w-28"
        >
          <img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=200&q=80&auto=format&fit=crop&crop=top"
            alt=""
            className="h-16 w-full object-cover object-top opacity-70"
          />
          <div className="space-y-1.5 p-2">
            <div className="h-1.5 w-3/4 rounded-full bg-foreground/50" />
            <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/30" />
            <div className="h-5 w-full rounded-md bg-brand" />
          </div>
        </motion.div>
      </motion.div>

      {/* Google result chip */}
      <motion.div
        initial={{ opacity: 0, x: -16, y: 0 }}
        animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 0.7 },
          x: { duration: 0.5, delay: 0.7 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
        }}
        className="absolute -left-4 top-8 hidden max-w-[180px] rounded-xl border border-border bg-card/95 p-3 shadow-soft backdrop-blur-sm sm:-left-6 sm:flex sm:flex-col sm:gap-1"
      >
        <span className="text-[9px] font-semibold uppercase tracking-widest text-brand">Google otsing</span>
        <div className="h-1.5 w-full rounded-full bg-foreground/70" />
        <div className="h-1.5 w-4/5 rounded-full bg-muted-foreground/40" />
        <div className="h-1.5 w-2/3 rounded-full bg-muted-foreground/25" />
      </motion.div>

      {/* "Valmis" chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.82 }}
        animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
        transition={{
          opacity: { duration: 0.45, delay: 1 },
          scale: { duration: 0.45, delay: 1 },
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        className="absolute -right-4 top-1/3 hidden items-center gap-2 rounded-xl border border-border bg-card/95 px-3.5 py-2.5 text-xs font-semibold shadow-soft backdrop-blur-sm lg:-right-7 lg:flex"
      >
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-emerald-50">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
        </span>
        7 päevaga valmis
      </motion.div>
    </div>
  );
}
