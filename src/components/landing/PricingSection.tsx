import { Check, ArrowRight, Clock, Shield } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

const included = [
  "Üheleheline professionaalne koduleht",
  "Selge struktuur ja teenuste tutvustus",
  "Professionaalne copywriting — tekstid kirjutan mina",
  "Mobiilisõbralik disain kõikidele ekraanidele",
  "Kontaktivorm — päringud otse sinu e-mailile",
  "Google Maps integratsioon",
  "Basic SEO — meta andmed, pealkirjad, struktuur",
  "Google otsingukonsooli seadistus",
  "1–2 parandusringi",
];

const guarantees = [
  { icon: Clock, text: "Valmis 7 tööpäevaga" },
  { icon: Shield, text: "1–2 parandusringi sees" },
  { icon: Check, text: "Domeen ja hosting eraldi" },
];

export function PricingSection() {
  return (
    <section id="hind" className="section-pad bg-secondary/40">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          eyebrow="Hind"
          title="Läbipaistev hind. Üks pakett. Kõik sees."
          subtitle="Sa ei pea ootama kolme müügikõnet, et teada saada, palju koduleht maksab."
        />

        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-brand/30 shadow-brand">
            {/* Top gradient bar */}
            <div
              className="h-1.5 w-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--brand), color-mix(in oklab, var(--brand) 60%, oklch(0.6 0.18 200)))",
              }}
            />

            <div className="grid lg:grid-cols-[1fr_1.1fr]">
              {/* Left — price + inclusions */}
              <div className="border-b border-border bg-card p-8 md:p-10 lg:border-b-0 lg:border-r">
                <span className="inline-block rounded-full border border-brand/20 bg-brand/8 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand">
                  Kodulehe pakett
                </span>

                <div className="mt-6 flex items-end gap-1.5">
                  <span className="text-6xl font-extrabold tracking-tighter leading-none">400</span>
                  <span className="mb-2 text-2xl font-bold text-muted-foreground">€</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ühekordne makse. Peidetud kulusid pole.
                </p>

                <div className="mt-8 space-y-3">
                  {included.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/12">
                        <Check className="h-3 w-3 text-brand" />
                      </span>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — image + CTA */}
              <div className="flex flex-col">
                <div className="relative flex-1 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=85&auto=format&fit=crop"
                    alt="Professionaalne töö"
                    className="h-52 w-full object-cover object-center lg:h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-card/10" />
                </div>

                <div className="bg-card p-8 md:p-10">
                  <p className="text-balance text-lg font-semibold leading-snug">
                    "Eesmärk ei ole lubada garanteeritud kliente — vaid teha nii, et kui inimene teie ettevõtet otsib, leiab ta midagi korralikku."
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {guarantees.map((g) => (
                      <span
                        key={g.text}
                        className="flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-semibold text-muted-foreground"
                      >
                        <g.icon className="h-3.5 w-3.5 text-brand" />
                        {g.text}
                      </span>
                    ))}
                  </div>

                  <Button asChild variant="hero" size="xl" className="mt-7 w-full rounded-xl font-semibold">
                    <a href="#kontakt">
                      Tahan kodulehe <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Vormi täitmine ei kohusta sind millekski.
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
