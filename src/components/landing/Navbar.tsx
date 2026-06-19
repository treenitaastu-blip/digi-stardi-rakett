import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnnouncementBar } from "./AnnouncementBar";
import { Logo } from "./Logo";
import { siteNavLinks } from "@/lib/nav";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <AnnouncementBar />
      <header
        className={cn(
          "relative transition-all duration-300",
          scrolled
            ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="/" aria-label="Lehekoda" className="-ml-1 shrink-0 md:ml-0">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {siteNavLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="hero"
            size="default"
            asChild
            className="hidden rounded-xl md:inline-flex"
          >
            <a href="/#kontakt">Küsi pakkumist</a>
          </Button>
          <button
            aria-label="Menüü"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Scroll progress bar */}
      <motion.div
        className="bg-brand absolute bottom-0 left-0 h-0.5 w-full origin-left"
        style={{ scaleX: progress, opacity: scrolled ? 1 : 0 }}
      />

      {open && (
        <div className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {siteNavLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" className="mt-2 rounded-xl" asChild>
              <a href="/#kontakt" onClick={() => setOpen(false)}>
                Küsi pakkumist
              </a>
            </Button>
          </div>
        </div>
      )}
      </header>
    </div>
  );
}
