import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { smoothEase } from "@/lib/motion";

const LINES: { id: string; content: ReactNode }[] = [
  {
    id: "speed",
    content: (
      <>
        Korralik koduleht <span className="font-semibold text-highlight">7 päevaga</span>.
      </>
    ),
  },
  { id: "copy", content: "Kirjutame tekstid ise." },
  { id: "mobile", content: "Paneme mobiili tööle." },
  { id: "seo", content: "Teeme Google'i jaoks valmis." },
];

const LINE_DURATION = 0.65;
const LINE_STAGGER = 0.42;
const CHECK_DELAY = 0.12;

function lineDelay(index: number) {
  return index * LINE_STAGGER;
}

function checkDelay(index: number) {
  return lineDelay(index) + LINE_DURATION + CHECK_DELAY;
}

export function HeroAnimatedSubtitle({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const play = reduceMotion || inView;

  return (
    <div
      ref={ref}
      className={className}
      aria-label="Korralik koduleht 7 päevaga. Kirjutame tekstid ise. Paneme mobiili tööle. Teeme Google'i jaoks valmis."
    >
      <ul className="space-y-2.5" role="list">
        {LINES.map((line, index) => (
          <li key={line.id} className="flex items-center justify-center gap-2.5">
            <motion.span
              aria-hidden
              className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/12"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={play ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
              transition={{
                duration: 0.35,
                delay: reduceMotion ? 0 : checkDelay(index),
                ease: smoothEase,
              }}
            >
              <Check className="h-3 w-3 text-success" />
            </motion.span>

            <div className="h-[1.5em] overflow-hidden">
              <motion.div
                initial={{ y: "115%", opacity: 0.5 }}
                animate={play ? { y: 0, opacity: 1 } : { y: "115%", opacity: 0.5 }}
                transition={{
                  duration: reduceMotion ? 0 : LINE_DURATION,
                  delay: reduceMotion ? 0 : lineDelay(index),
                  ease: smoothEase,
                }}
              >
                <p className="text-[1.05rem] leading-snug text-muted-foreground">{line.content}</p>
              </motion.div>
            </div>
          </li>
        ))}
      </ul>
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
