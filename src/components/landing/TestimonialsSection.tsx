import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "Sain kodulehe nädalaga ja esimene päring tuli juba paari päevaga. Tekstid olid valmis kirjutatud, ise ei pidanud midagi mõtlema.",
    name: "Marko Tamm",
    role: "Ehitus ja remont",
    initials: "MT",
  },
  {
    quote:
      "Lõpuks näeb ettevõte internetis välja nii nagu päriselt töötame. Hind oli aus ja selge algusest peale, ilma üllatusteta.",
    name: "Kristi Lepik",
    role: "Iluteenused",
    initials: "KL",
  },
  {
    quote:
      "Kiire, professionaalne ja arusaadav koostöö. Klient leiab meid nüüd Google'ist ja võtab ise ühendust.",
    name: "Andres Pärn",
    role: "Autoteenused",
    initials: "AP",
  },
];

export function TestimonialsSection() {
  return (
    <section id="tagasiside" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Tagasiside"
          title="Mida kliendid ütlevad"
          subtitle="Ettevõtjad, kelle koduleht on nüüd nähtav, leitav ja usaldusväärne."
        />

        {/* Social proof strip */}
        <Reveal className="mt-10 flex justify-center">
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 shadow-soft sm:flex-row sm:gap-5">
            <div className="flex -space-x-2">
              {["MT", "KL", "AP", "RV"].map((i) => (
                <span
                  key={i}
                  className="bg-brand-gradient grid h-9 w-9 place-items-center rounded-full border-2 border-card text-[11px] font-bold text-brand-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm font-semibold">
                4.9 / 5
                <span className="font-normal text-muted-foreground"> · 40+ rahulolevat klienti</span>
              </p>
            </div>
          </div>
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                <Quote className="h-7 w-7 text-brand/25" />
                <div className="mt-3 flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <span className="bg-brand-gradient grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-brand-foreground">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold leading-none">{t.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
