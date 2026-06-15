import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#mida-saad", label: "Mis on sees" },
  { href: "#tood", label: "Tööd" },
  { href: "#hind", label: "Hind" },
  { href: "#protsess", label: "Protsess" },
  { href: "#kkk", label: "KKK" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="flex items-center gap-2.5 font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-sm font-extrabold text-brand-foreground">
            DS
          </span>
          <span className="hidden sm:inline text-[0.92rem]">Digitaalne Stardipakett</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
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
          <Button asChild variant="hero" size="default" className="hidden rounded-xl md:inline-flex">
            <a href="#kontakt">Küsi pakkumist</a>
          </Button>
          <button
            aria-label="Menüü"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-md border border-border md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="hero" className="mt-2 rounded-xl">
              <a href="#kontakt" onClick={() => setOpen(false)}>
                Küsi pakkumist
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
