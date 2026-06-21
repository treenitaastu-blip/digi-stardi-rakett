import { useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const LINES: { id: string; text: string; highlight?: boolean }[] = [
  { id: "speed", text: "Valmis 7 päevaga.", highlight: true },
  { id: "copy", text: "Kirjutame tekstid ise." },
  { id: "mobile", text: "Laitmatu igas ekraanis." },
  { id: "seo", text: "Google'i jaoks valmis." },
];

const N = LINES.length;
const ROW_COUNT = N + 3;
const SLOT_H = 38;

function lineAtRow(row: number) {
  return LINES[((row - 1) % N + N) % N];
}

export function HeroAnimatedSubtitle({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className}>
        <HeroStaticSubtitle className="space-y-1.5" />
      </div>
    );
  }

  return (
    <div
      className={className}
      aria-live="polite"
      aria-label="Valmis 7 päevaga. Kirjutame tekstid ise. Laitmatu igas ekraanis. Google'i jaoks valmis."
    >
      <div className="rounded-2xl border border-border/80 bg-card/55 px-5 py-3.5 shadow-soft backdrop-blur-[2px] sm:px-6 sm:py-4">
        <div
          className="hero-subtitle-viewport carousel-track relative mx-auto overflow-hidden [contain:strict]"
          style={{ height: SLOT_H * 3, maxWidth: "26rem" }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5"
            aria-hidden
          >
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/12">
              <Check className="h-3 w-3 text-success" />
            </span>
          </div>

          <div className="hero-subtitle-strip">
            {Array.from({ length: ROW_COUNT }, (_, row) => {
              const line = lineAtRow(row);
              return (
                <div
                  key={row}
                  className="flex items-center justify-center gap-2.5 px-1"
                  style={{ height: SLOT_H }}
                >
                  <span className="h-5 w-5 shrink-0" aria-hidden />
                  <p
                    className={cn(
                      "text-center leading-snug",
                      "text-[1.02rem] font-medium text-foreground sm:text-[1.08rem]",
                    )}
                  >
                    {line.highlight ? (
                      <>
                        Valmis <span className="font-semibold text-highlight">7 päevaga</span>.
                      </>
                    ) : (
                      line.text
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroStaticSubtitle({ className }: { className?: string }) {
  return (
    <div className={className}>
      {LINES.map((line) => (
        <p key={line.id} className="text-[1.05rem] leading-snug text-muted-foreground">
          {line.highlight ? (
            <>
              Valmis <span className="font-semibold text-highlight">7 päevaga</span>.
            </>
          ) : (
            line.text
          )}
        </p>
      ))}
    </div>
  );
}
