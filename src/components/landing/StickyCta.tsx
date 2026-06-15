import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuiz } from "./QuizContext";

export function StickyCta() {
  const { openQuiz } = useQuiz();
  const [scrolled, setScrolled] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const section = document.getElementById("kontakt");
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setContactVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const show = scrolled && !contactVisible;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 p-3 backdrop-blur-md md:hidden"
          style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
        >
          <Button
            variant="hero"
            size="xl"
            onClick={openQuiz}
            className="w-full font-semibold"
          >
            Võta ühendust <ArrowRight className="h-4 w-4" />
          </Button>
          <p className="mt-2 text-center text-xs leading-snug text-muted-foreground">
            Vastamine võtab umbes 1 minuti. Kirjuta, millist lehte või digilahendust sinu
            ettevõttel vaja on.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}