import { HardHat, Sparkles, Brush, Car, HeartPulse, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "./Reveal";

const audience = [
  { icon: HardHat, label: "Ehitus ja remont" },
  { icon: Sparkles, label: "Iluteenused" },
  { icon: Brush, label: "Puhastus ja heakord" },
  { icon: Car, label: "Autoteenused" },
  { icon: HeartPulse, label: "Tervis ja teraapia" },
  { icon: Wrench, label: "Kohalikud teenusepakkujad" },
];

export function AudienceSection() {
  return (
    <section id="kellele" className="section-pad bg-secondary/30">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Kellele"
          title="Sobib ettevõtjale, kes tahab kiirelt korralikku kodulehte"
          subtitle="Kui klient enne helistamist sind Google'ist vaatab, peaks ta nägema ettevõtet, mida saab usaldada."
        />
        <RevealGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map((a) => (
            <RevealItem key={a.label}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/40">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                  <a.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold">{a.label}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-sm text-muted-foreground">
            Ei näe oma valdkonda? Pakett sobib igale ettevõttele, kes vajab selget ja
            usaldusväärset kohalolu internetis.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
