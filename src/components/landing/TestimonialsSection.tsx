import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "Hinna ja kvaliteedi suhe on väga hea. Sain korraliku lehe kiiresti valmis ja ei pidanud ise tekstidega vaeva nägema. Soovitasin tuttavale ka.",
    name: "Martin Järvi",
    role: "Ehitus ja remont",
    avatar: "/testimonials/martin-jarvi.webp",
  },
  {
    quote:
      "Väga lihtne ja arusaadav protsess. Andsin oma info ette ja sain vastu kodulehe, mis näeb palju professionaalsem välja kui enne.",
    name: "Karin Meitel",
    role: "Iluteenused",
    avatar: "/testimonials/karin-meitel.webp",
  },
  {
    quote:
      "Kindlasti üks parimaid pakkumisi, mida leidsin. Hind oli selge, töö sai kiiresti tehtud ja tulemus jäi korralik.",
    name: "Rasmus Klaasing",
    role: "Autoteenused",
    avatar: "/testimonials/rasmus-klaasing.webp",
  },
  {
    quote:
      "Mulle meeldis, et kõik oli algusest peale selge. Ei olnud mingit keerulist juttu - saatsin info, nemad panid lehe kokku.",
    name: "Laura Kask",
    role: "Puhastus ja heakord",
    avatar: "/testimonials/laura-kask.webp",
  },
  {
    quote:
      "Leht sai valmis kiiremini kui ootasin. Kontaktvorm töötab ja klientidel on nüüd lihtsam mind leida.",
    name: "Siim Peterson",
    role: "Torutööd",
    avatar: "/testimonials/siim-peterson.webp",
  },
  {
    quote:
      "Tekstid olid suureks abiks, sest ma ei osanud ise hästi sõnastada, mida lehele kirjutada. Tulemus jäi puhas ja usaldusväärne.",
    name: "Evelin Kiir",
    role: "Tervis ja teraapia",
    avatar: "/testimonials/evelin-kiir.webp",
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
              {testimonials.slice(0, 4).map((t) => (
                <img
                  key={t.name}
                  src={t.avatar}
                  alt={`${t.name}, ${t.role}`}
                  width={36}
                  height={36}
                  loading="lazy"
                  decoding="async"
                  className="h-9 w-9 rounded-full border-2 border-card object-cover"
                />
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

        <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                  <img
                    src={t.avatar}
                    alt={`${t.name}, ${t.role}`}
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-10 shrink-0 rounded-full object-cover"
                  />
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
