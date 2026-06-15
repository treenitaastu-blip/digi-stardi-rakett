import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ServiceId = "koduleht" | "videod" | "social" | "postitused" | "reklaam" | "film";

const services: { id: ServiceId; label: string; price: number; core: boolean }[] = [
  { id: "koduleht", label: "Koduleht", price: 300, core: true },
  { id: "videod", label: "3 stock footage turundusvideot", price: 90, core: true },
  { id: "social", label: "Sotsiaalmeedia kontode seadistus", price: 50, core: true },
  { id: "postitused", label: "9 pildipostitust", price: 50, core: true },
  { id: "reklaam", label: "Reklaamikonto seadistus ja reklaamide käivitamine", price: 100, core: true },
  { id: "film", label: "Originaalfilmimine ettevõttes", price: 270, core: false },
];

const BUNDLE_DISCOUNT = 0.15;

export function CalculatorSection() {
  const [selected, setSelected] = useState<Record<ServiceId, boolean>>({
    koduleht: true,
    videod: true,
    social: true,
    postitused: true,
    reklaam: true,
    film: false,
  });

  const toggle = (id: ServiceId) => setSelected((s) => ({ ...s, [id]: !s[id] }));

  const { separate, bundle, save, recommendation } = useMemo(() => {
    const chosen = services.filter((s) => selected[s.id]);
    const separate = chosen.reduce((sum, s) => sum + s.price, 0);
    const bundle = chosen.length > 1 ? Math.round(separate * (1 - BUNDLE_DISCOUNT)) : separate;
    const save = separate - bundle;

    const allCore = services.filter((s) => s.core).every((s) => selected[s.id]);
    let recommendation: { title: string; price: string; note: string } | null = null;
    if (allCore && selected.film) {
      recommendation = {
        title: "Premium stardipaketi soovitus",
        price: "649€",
        note: "Sisaldab ka originaalfilmimist ja autentset videosisu.",
      };
    } else if (allCore && !selected.film) {
      recommendation = {
        title: "Stardipaketi soovitus",
        price: "499€",
        note: "Säästad võrreldes eraldi ostmisega.",
      };
    }
    return { separate, bundle, save, recommendation };
  }, [selected]);

  return (
    <section id="kalkulaator" className="section-pad bg-secondary/50">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          eyebrow="Kalkulaator"
          title="Arvuta oma stardipakett"
          subtitle="Vali teenused ja näe kohe, kui palju säästad, kui ostad need ühe paketina."
        />

        <Reveal className="mt-12">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-2.5">
              {services.map((s) => {
                const on = selected[s.id];
                return (
                  <button
                    key={s.id}
                    onClick={() => toggle(s.id)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl border bg-card p-4 text-left transition-all",
                      on ? "border-brand shadow-soft" : "border-border hover:border-foreground/20",
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-6 w-6 shrink-0 place-items-center rounded-md border transition-colors",
                        on ? "border-brand bg-brand text-brand-foreground" : "border-border",
                      )}
                    >
                      {on && <Check className="h-4 w-4" />}
                    </span>
                    <span className="flex-1 text-sm font-medium">{s.label}</span>
                    <span className="text-sm font-semibold tabular-nums text-muted-foreground">
                      {s.price}€
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft lg:sticky lg:top-24 lg:self-start">
              <Row label="Eraldi ostes" value={separate} muted strike={save > 0} />
              <Row label="Paketi hind" value={bundle} brand />
              <div className="my-4 h-px bg-border" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Säästad</span>
                <motion.span
                  key={save}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="rounded-full bg-brand/10 px-3 py-1 text-base font-bold tabular-nums text-brand"
                >
                  {save}€
                </motion.span>
              </div>

              <AnimatePresence mode="wait">
                {recommendation && (
                  <motion.div
                    key={recommendation.title}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mt-5 rounded-xl bg-accent/70 p-4"
                  >
                    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand">
                      <Sparkles className="h-3.5 w-3.5" /> Soovitus
                    </p>
                    <p className="mt-1.5 font-semibold">
                      {recommendation.title}: {recommendation.price}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{recommendation.note}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <Button asChild variant="hero" className="mt-5 w-full">
                <a href="#kontakt">Küsi see pakett</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  muted,
  brand,
  strike,
}: {
  label: string;
  value: number;
  muted?: boolean;
  brand?: boolean;
  strike?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className={cn("text-sm", muted && "text-muted-foreground")}>{label}</span>
      <span
        className={cn(
          "text-lg font-bold tabular-nums",
          brand && "text-brand",
          strike && "text-muted-foreground line-through decoration-1",
        )}
      >
        {value}€
      </span>
    </div>
  );
}