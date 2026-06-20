import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { ContactLink } from "./ContactLink";
import { siteNavLinks } from "@/lib/nav";
import { legalLinks } from "@/lib/legal";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:items-start">
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

          {/* Leht */}
          <div className="md:text-center">
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

          {/* Legal */}
          <nav
            aria-label="Juriidiline info"
            className="flex flex-col gap-2 md:items-end md:justify-self-end md:text-right"
          >
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground">© {year} Lehekoda</p>
      </div>
    </footer>
  );
}
