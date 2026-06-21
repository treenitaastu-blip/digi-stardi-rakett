import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import {
  ArrowRight,
  Search,
  Star,
  ShieldCheck,
  Zap,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HeroCircuitPattern } from "./HeroCircuitPattern";
import { HeroAnimatedSubtitle } from "./HeroAnimatedSubtitle";
import { ContactLink } from "./ContactLink";

const heroPillClass = "h-12 rounded-full px-6 font-semibold tracking-tight";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-[90vh] items-center overflow-hidden pb-16 pt-32 md:pt-36 lg:min-h-screen lg:items-start lg:pt-40"
    >
      <div aria-hidden className="absolute inset-0 bg-secondary" />
      <HeroBackground bgY={bgY} />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5">
        <div className="grid items-center gap-10 text-center lg:block">
          {/* ── Visual (mobile/tablet only — static, no scroll animation) ── */}
          <div className="order-1 lg:hidden">
            <HeroVisual />
          </div>

          {/* ── Copy ── */}
          <div className="order-2 mx-auto max-w-3xl" data-hero-copy>
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
            <span className="text-brand">kliendi usalduse</span>
          </motion.h1>

          <HeroAnimatedSubtitle className="mx-auto mt-5 max-w-[480px]" />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-9"
          >
            {/* Mobile + tablet */}
            <div className="flex flex-col items-stretch gap-3 lg:hidden">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                <Button
                  asChild
                  variant="hero"
                  size="xl"
                  className={cn(heroPillClass, "sm:flex-1 sm:max-w-xs")}
                >
                  <ContactLink>
                    Küsi pakkumist <ArrowRight className="h-4 w-4" />
                  </ContactLink>
                </Button>
                <HeroPriceBadge className={cn(heroPillClass, "sm:flex-1 sm:max-w-xs")} />
              </div>

              <Button
                asChild
                variant="heroOutline"
                size="xl"
                className={cn(heroPillClass, "w-full sm:mx-auto sm:w-auto")}
              >
                <a href="#tood">Vaata töid</a>
              </Button>
            </div>

            {/* Desktop — Vaata töid täpselt CTA ja hinna vahel */}
            <div className="mx-auto hidden w-full max-w-2xl grid-cols-[1fr_auto_1fr] items-center gap-x-6 lg:grid">
              <Button
                asChild
                variant="hero"
                size="xl"
                className={cn(heroPillClass, "justify-self-end")}
              >
                <ContactLink>
                  Küsi pakkumist <ArrowRight className="h-4 w-4" />
                </ContactLink>
              </Button>

              <Button
                asChild
                variant="heroOutline"
                size="xl"
                className={cn(heroPillClass, "justify-self-center")}
              >
                <a href="#tood">Vaata töid</a>
              </Button>

              <HeroPriceBadge className={cn(heroPillClass, "justify-self-start")} />
            </div>
          </motion.div>
          </div>
        </div>

        {/* Fan stage — desktop only. The fixed ScrollCards overlay fans out here. */}
        <div
          data-hero-cards-stage
          aria-hidden
          className="hidden lg:mt-14 lg:block lg:h-[clamp(400px,48vh,540px)]"
        />
      </div>
    </section>
  );
}

function HeroPriceBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center gap-2.5 border border-border bg-card shadow-soft lg:shadow-none",
        className,
      )}
    >
      <p className="font-display shrink-0 text-lg font-bold leading-none tracking-tight text-foreground">
        399€
      </p>
      <div className="flex shrink-0 items-center gap-2 whitespace-nowrap text-xs leading-none">
        <span className="text-muted-foreground">ühekordne hind</span>
        <span className="text-muted-foreground/40" aria-hidden>
          ·
        </span>
        <span className="font-semibold text-success">0€ kuutasu</span>
      </div>
    </div>
  );
}

function HeroBackground({ bgY }: { bgY: MotionValue<number> }) {
  return (
    <motion.div
      style={{ y: bgY }}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
    >
      <div className="bg-grid absolute inset-0 opacity-[0.14] [mask-image:radial-gradient(70%_58%_at_50%_42%,black,transparent)]" />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_72%_62%_at_50%_44%,transparent_36%,black_100%)]">
        <HeroCircuitPattern className="h-full w-full opacity-90" />
      </div>
    </motion.div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[440px] lg:max-w-none">
      <div className="relative">
        {/* Browser frame */}
        <div className="rounded-2xl border border-border bg-card p-3 shadow-soft">
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

          {/* Website preview — white mockup, brand outline */}
          <div className="relative overflow-hidden rounded-xl border-2 border-brand/25 bg-background">
            <div className="relative border-b border-brand/10 bg-background px-5 py-6">
              {/* Sample site nav */}
              <div className="relative flex items-center justify-between">
                <span className="font-display text-[11px] font-bold text-foreground">
                  Mardi Ehitus
                </span>
                <div className="flex items-center gap-2.5 text-[8px] font-medium text-muted-foreground">
                  <span>Teenused</span>
                  <span>Tööd</span>
                  <span className="text-brand">Kontakt</span>
                </div>
              </div>
              {/* Sample hero copy */}
              <div className="relative mt-5">
                <p className="font-display text-[15px] font-bold leading-tight text-foreground">
                  Ehitus ja remont,
                  <br />
                  <span className="text-brand">mis kestab.</span>
                </p>
                <p className="mt-1.5 text-[9px] leading-snug text-muted-foreground">
                  Tallinn ja Harjumaa. 12 aastat kogemust.
                </p>
                <div className="mt-3 flex items-center gap-2.5">
                  <span className="rounded-md border border-brand bg-background px-2.5 py-1 text-[8px] font-bold text-brand">
                    Küsi pakkumist
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} className="h-2 w-2 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[8px] font-semibold text-muted-foreground">
                      4.9 · 40+ klienti
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Sample feature row */}
            <div className="grid grid-cols-3 gap-2 bg-background p-3">
              {[
                { t: "Garantii", s: "igale tööle", Icon: ShieldCheck },
                { t: "Kiire algus", s: "1 nädalaga", Icon: Zap },
                { t: "Tasuta", s: "hinnapakkumine", Icon: Tag },
              ].map((c) => (
                <div
                  key={c.t}
                  className="rounded-lg border border-brand/15 bg-background p-2"
                >
                  <span className="grid h-3.5 w-3.5 place-items-center rounded-md border border-brand/20 bg-brand/5 text-brand">
                    <c.Icon className="h-2.5 w-2.5" />
                  </span>
                  <p className="mt-1.5 text-[9px] font-bold leading-none text-foreground">{c.t}</p>
                  <p className="mt-1 text-[8px] leading-none text-muted-foreground">{c.s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile preview */}
        <div className="absolute -bottom-9 -right-3 w-24 overflow-hidden rounded-[1.1rem] border-2 border-brand/25 bg-background shadow-soft-lg sm:-right-6 sm:w-28">
          <div className="border-b border-brand/10 bg-background px-2 py-2.5">
            <p className="font-display text-[7px] font-bold text-foreground">Mardi Ehitus</p>
            <p className="mt-1 text-[8px] font-bold leading-tight text-brand">Ehitus ja remont</p>
          </div>
          <div className="space-y-1.5 bg-background p-2">
            <div className="h-1.5 w-3/4 rounded-full bg-foreground/20" />
            <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/20" />
            <div className="grid h-5 w-full place-items-center rounded-md border border-brand bg-background">
              <span className="text-[6px] font-bold text-brand">Küsi pakkumist</span>
            </div>
          </div>
        </div>
      </div>

      {/* Google result chip — desktop scroll-cards stage only; hidden with HeroVisual on lg+ */}
      <div className="absolute top-10 hidden max-w-[170px] rounded-xl border border-border bg-card/95 p-3 shadow-soft-lg backdrop-blur-sm lg:-left-10 lg:flex lg:flex-col lg:gap-1.5">
        <span className="text-[9px] font-semibold uppercase tracking-widest text-brand">
          Google otsing
        </span>
        <div className="h-1.5 w-full rounded-full bg-brand/70" />
        <div className="h-1.5 w-4/5 rounded-full bg-muted-foreground/40" />
        <div className="h-1.5 w-2/3 rounded-full bg-muted-foreground/25" />
      </div>

      {/* Rating chip */}
      <div className="absolute -right-3 top-1/4 hidden items-center gap-2 rounded-xl border border-border bg-card/95 px-3.5 py-2.5 shadow-soft-lg backdrop-blur-sm lg:-right-7 lg:flex">
        <div className="flex">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-xs font-semibold">Valmis 7 päevaga</span>
      </div>
    </div>
  );
}
