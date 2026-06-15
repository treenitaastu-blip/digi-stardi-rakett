import { Globe, Share2, Video, Megaphone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";

const features = [
  {
    icon: Globe,
    title: "Koduleht",
    body: "Selge struktuur, teenuste tutvustus, kontakt ja mobiilisõbralik disain.",
    price: "alates 300€",
    hue: 262,
  },
  {
    icon: Share2,
    title: "Sotsiaalmeedia",
    body: "Kontod, profiilipildid, kaanepildid ja esimesed postitused, et ettevõte ei näeks tühi välja.",
    price: "alates 50€",
    hue: 220,
  },
  {
    icon: Video,
    title: "Turundusvideod",
    body: "Lühikesed videod stock footage'i, visuaalide ja voiceoveriga. Soovi korral tulen kohale ja filmin originaalkaadrid.",
    price: "30€ – 90€ / video",
    hue: 280,
  },
  {
    icon: Megaphone,
    title: "Reklaamid",
    body: "Reklaamikonto seadistus, esimesed loovmaterjalid ja kampaania käivitamine.",
    price: "100€",
    hue: 200,
  },
];

export function SolutionSection() {
  return (
    <section id="lahendus" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Lahendus"
          title="Teen sinu ettevõttele esimese professionaalse digitaalse kohalolu."
        />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <RevealItem key={f.title}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-brand">
                {/* Top accent stripe */}
                <div
                  className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
                  style={{
                    background: `linear-gradient(90deg, oklch(0.52 0.2 ${f.hue}), oklch(0.62 0.18 ${(f.hue + 30) % 360}))`,
                  }}
                />
                <div className="flex flex-1 flex-col p-6">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `oklch(0.96 0.03 ${f.hue})`,
                      color: `oklch(0.48 0.2 ${f.hue})`,
                    }}
                  >
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-[1.05rem] font-bold">{f.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {f.body}
                  </p>
                  <div className="mt-5 border-t border-border pt-4">
                    <span
                      className="text-xs font-semibold"
                      style={{ color: `oklch(0.5 0.18 ${f.hue})` }}
                    >
                      {f.price}
                    </span>
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
