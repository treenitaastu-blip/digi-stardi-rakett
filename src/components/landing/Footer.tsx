import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { ContactLink } from "./ContactLink";
import { siteNavLinks } from "@/lib/nav";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr]">
          {/* Brand */}
          <div>
            <a href="/" aria-label="Lehekoda">
              <Logo className="h-8" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Professionaalne koduleht Eesti väikeettevõttele. Müügitekstid, SEO ja mobiilivaade.
              Valmis 7 tööpäevaga, fikseeritud hinnaga 399 €.
            </p>
            <ContactLink
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand/80"
            >
              Küsi pakkumist <ArrowUpRight className="h-4 w-4" />
            </ContactLink>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
              Leht
            </p>
            <ul className="mt-4 space-y-2.5">
              {siteNavLinks.map((l) => (
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
