import { Check, ArrowRight, Clock, RefreshCw, Globe } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

const included = [
  "Üheleheline professionaalne koduleht",
  "Müügitekstid, kirjutame teie eest",
  "Laitmatu mobiilivaade",
  "Kontaktivorm otse postkasti",
  "Google Maps asukohaga",
  "SEO baasseadistus",
  "Google Search Console",
  "6 kuud tasuta muudatusi",
];

const guarantees = [
  { icon: Clock, text: "7 tööpäeva" },
  { icon: RefreshCw, text: "6 kuud tasuta muudatusi" },
  { icon: Globe, text: "Domeen ja hosting eraldi" },
];

export function PricingSection() {
  return (
    <section id="hind" className="section-pad bg-secondary">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          eyebrow="Hind"
          title="Üks pakett. Üks hind. Null üllatusi."
          subtitle="Hind on kohe näha. Saad enne ühendust võtmist aru, millega arvestada."
        />

        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-glow">
            <div className="grid lg:grid-cols-[1fr_1.05fr]">
              {/* Left — price + inclusions */}
              <div className="border-b border-border p-8 md:p-10 lg:border-b-0 lg:border-r">
                <span className="eyebrow">Kodulehe pakett</span>

                <div className="mt-6 flex items-end gap-2">
                  <span className="font-display text-6xl font-bold tracking-tight leading-none">
                    399&nbsp;€
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ühekordne makse, lisatasudeta.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                  {included.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/12">
                        <Check className="h-3 w-3 text-success" />
                      </span>
                      <span className="text-sm leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — brand panel + CTA */}
              <div className="bg-brand relative flex flex-col justify-between overflow-hidden p-8 md:p-10">
                <div
                  aria-hidden
                  className="bg-dots pointer-events-none absolute inset-0 opacity-[0.12]"
                />
                <p className="relative text-balance text-lg font-semibold leading-snug text-brand-foreground">
                  &bdquo;Me ei luba, et koduleht toob kohe kümneid kliente. Lubame, et kui klient sind
                  kontrollib, jätab su ettevõte korraliku ja usaldusväärse mulje.&rdquo;
                </p>

                <div className="relative mt-7">
                  <div className="flex flex-wrap gap-2.5">
                    {guarantees.map((g) => (
                      <span
                        key={g.text}
                        className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-brand-foreground"
                      >
                        <g.icon className="h-3.5 w-3.5" />
                        {g.text}
                      </span>
                    ))}
                  </div>

                  <Button
                    asChild
                    size="xl"
                    className="mt-6 w-full rounded-xl bg-white font-semibold text-brand hover:bg-white/90"
                  >
                    <a href="#kontakt">
                      Küsi pakkumist <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <p className="mt-3 text-center text-xs text-brand-foreground/75">
                    Päringu saatmine ei kohusta millekski.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
