import { Globe, Share2, Video, Megaphone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";

const features = [
  {
    icon: Globe,
    title: "Koduleht",
    body: "Selge struktuur, teenuste tutvustus, kontakt ja mobiilisõbralik disain.",
  },
  {
    icon: Share2,
    title: "Sotsiaalmeedia",
    body: "Kontod, profiilipildid, kaanepildid ja esimesed postitused, et ettevõte ei näeks tühi välja.",
  },
  {
    icon: Video,
    title: "Turundusvideod",
    body: "Lühikesed videod stock footage'i, visuaalide ja voiceoveriga. Soovi korral tulen kohale ja filmin originaalkaadrid.",
  },
  {
    icon: Megaphone,
    title: "Reklaamid",
    body: "Reklaamikonto seadistus, esimesed loovmaterjalid ja kampaania käivitamine.",
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
        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <RevealItem key={f.title}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/40">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}