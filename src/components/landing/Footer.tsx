import { ArrowUpRight } from "lucide-react";
import { Wordmark } from "./Logo";

const nav = [
  { href: "#mida-saad", label: "Pakett" },
  { href: "#tood", label: "Tööd" },
  { href: "#protsess", label: "Protsess" },
  { href: "#hind", label: "Hind" },
  { href: "#kkk", label: "KKK" },
];

const works = [
  { href: "https://carrypeace.com", label: "carrypeace.com" },
  { href: "https://treenitaastu.ee", label: "treenitaastu.ee" },
  { href: "https://centivo.ee", label: "centivo.ee" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#top" aria-label="Lehekoda">
              <Wordmark className="text-[1.15rem]" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Professionaalne koduleht Eesti väikeettevõttele. Müügitekstid, SEO ja mobiilivaade.
              Valmis 7 tööpäevaga, fikseeritud hinnaga 399 €.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
              Leht
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Works */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
              Valminud tööd
            </p>
            <ul className="mt-4 space-y-2.5">
              {works.map((w) => (
                <li key={w.href}>
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {w.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand/80"
            >
              Küsi pakkumist <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} Lehekoda
          </p>
          <p className="text-xs text-muted-foreground">Veebilehed Eesti ettevõtetele</p>
        </div>
      </div>
    </footer>
  );
}
