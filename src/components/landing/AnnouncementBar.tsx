import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const MESSAGES = ["399€ ühekordne hind", "0€ kuutasu", "Valmis 7 päevaga"] as const;

const ROTATE_MS = 3000;

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % MESSAGES.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <div
      className="bg-brand text-brand-foreground"
      role="region"
      aria-label="399€ ühekordne hind · 0€ kuutasu · Valmis 7 päevaga"
    >
      <div className="relative mx-auto flex h-9 items-center justify-center overflow-hidden px-5">
        {reduceMotion ? (
          <p className="text-center text-xs font-medium sm:text-sm">{MESSAGES[index]}</p>
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={index}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.42, 0, 0.2, 1] }}
              className="absolute inset-x-5 text-center text-xs font-medium sm:text-sm"
              aria-live="polite"
            >
              {MESSAGES[index]}
            </motion.p>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
