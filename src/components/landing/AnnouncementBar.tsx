import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const MESSAGES = ["399€ ühekordne hind", "0€ kuutasu", "Valmis 7 päevaga"] as const;
const FULL_TEXT = MESSAGES.join(" · ");

const ROTATE_MS = 3000;

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const mq = window.matchMedia("(min-width: 768px)");
    const tick = () => {
      if (mq.matches) return;
      setIndex((i) => (i + 1) % MESSAGES.length);
    };
    const id = setInterval(tick, ROTATE_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <div
      className="bg-brand text-brand-foreground"
      role="region"
      aria-label={FULL_TEXT}
    >
      <div className="mx-auto flex h-9 items-center justify-center px-5">
        {/* Desktop — static copy with · separators */}
        <p className="hidden text-center text-sm font-medium md:block">{FULL_TEXT}</p>

        {/* Mobile — one message at a time, horizontal slide */}
        <div className="carousel-track relative flex h-5 w-full items-center justify-center overflow-hidden [contain:paint] md:hidden">
          {reduceMotion ? (
            <p className="text-center text-xs font-medium">{MESSAGES[index]}</p>
          ) : (
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={index}
                initial={{ x: 48, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -48, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.42, 0, 0.2, 1] }}
                className="carousel-gpu-layer absolute inset-x-0 text-center text-xs font-medium"
                aria-live="polite"
              >
                {MESSAGES[index]}
              </motion.p>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
}
