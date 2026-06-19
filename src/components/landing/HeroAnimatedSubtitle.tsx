import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const LINES: { id: string; content: ReactNode }[] = [
  {
    id: "speed",
    content: (
      <>
        Valmis <span className="font-semibold text-highlight">7 päevaga</span>.
      </>
    ),
  },
  { id: "copy", content: "Kirjutame tekstid ise." },
  { id: "mobile", content: "Laitmatu igas ekraanis." },
  { id: "seo", content: "Google'i jaoks valmis." },
];

const N = LINES.length;
const ROTATE_MS = 2000;
const ROTATE_DURATION = 1;
const SLOT_H = 38;

const rotateEase = [0.42, 0, 0.2, 1] as const;
const checkEase = [0.16, 1, 0.3, 1] as const;

function lineAtRow(row: number) {
  return LINES[((row - 1) % N + N) % N];
}

export function HeroAnimatedSubtitle({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { amount: 0.45 });
  const [step, setStep] = useState(0);
  const [ready, setReady] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    if (!inView || reduceMotion) {
      setReady(false);
      return;
    }
    const t = setTimeout(() => setReady(true), 500);
    return () => clearTimeout(t);
  }, [inView, reduceMotion]);

  useEffect(() => {
    if (!ready || reduceMotion) return;
    const id = setInterval(() => {
      setStep((s) => (s < N ? s + 1 : s));
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [ready, reduceMotion]);

  const slideTransition = instant ? { duration: 0 } : { duration: ROTATE_DURATION, ease: rotateEase };

  const handleAnimationComplete = () => {
    if (step < N) return;
    setInstant(true);
    setStep(0);
    requestAnimationFrame(() => setInstant(false));
  };

  if (reduceMotion) {
    return (
      <div ref={ref} className={className}>
        <HeroStaticSubtitle className="space-y-1.5" />
      </div>
    );
  }

  const rowCount = step + 6;

  return (
    <div
      ref={ref}
      className={className}
      aria-live="polite"
      aria-label="Valmis 7 päevaga. Kirjutame tekstid ise. Laitmatu igas ekraanis. Google'i jaoks valmis."
    >
      <div className="rounded-2xl border border-border/80 bg-card/55 px-5 py-3.5 shadow-soft backdrop-blur-[2px] sm:px-6 sm:py-4">
        <div
          className="relative mx-auto overflow-hidden"
          style={{ height: SLOT_H * 3, maxWidth: "26rem" }}
        >
          <motion.div
            animate={{ y: -step * SLOT_H }}
            transition={slideTransition}
            onAnimationComplete={handleAnimationComplete}
          >
            {Array.from({ length: rowCount }, (_, index) => {
              const line = lineAtRow(index);
              const isCenter = index === step + 1;
              const isSecondary = index === step || index === step + 2;

              return (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2.5 px-1"
                  style={{ height: SLOT_H }}
                >
                  <motion.span
                    className="grid h-5 w-5 shrink-0 place-items-center"
                    animate={{
                      scale: isCenter ? 1 : 0.55,
                      opacity: isCenter ? 1 : 0,
                    }}
                    transition={{
                      duration: isCenter ? 0.7 : 0.2,
                      delay: isCenter ? 0.35 : 0,
                      ease: checkEase,
                    }}
                    aria-hidden={!isCenter}
                  >
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-success/12">
                      <Check className="h-3 w-3 text-success" />
                    </span>
                  </motion.span>

                  <motion.p
                    animate={{ scale: isCenter ? 1 : 0.96 }}
                    transition={instant ? { duration: 0 } : { duration: ROTATE_DURATION, ease: rotateEase }}
                    className={cn(
                      "text-center leading-snug",
                      isCenter
                        ? "text-[1.02rem] font-medium text-foreground sm:text-[1.08rem]"
                        : isSecondary
                          ? "text-[0.84rem] text-muted-foreground/60 sm:text-[0.88rem]"
                          : "text-[0.84rem] text-muted-foreground/45 sm:text-[0.88rem]",
                    )}
                  >
                    {line.content}
                  </motion.p>
                </div>
              );
            })}
          </motion.div>
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
          {line.content}
        </p>
      ))}
    </div>
  );
}
