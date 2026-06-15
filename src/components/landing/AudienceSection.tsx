import { HardHat, Sparkles, Brush, Car, HeartPulse, UtensilsCrossed, PartyPopper, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "./Reveal";

const audience = [
  { icon: HardHat, label: "Ehitus ja remont" },
  { icon: Sparkles, label: "Iluteenused" },
  { icon: Brush, label: "Puhastus ja heakord" },
  { icon: Car, label: "Autoteenused" },
  { icon: HeartPulse, label: "Teraapia ja tervis" },
  { icon: UtensilsCrossed, label: "Toitlustus" },
  { icon: PartyPopper, label: "Üritused" },
  { icon: Wrench, label: "Kohalikud teenusepakkujad" },
];

export function AudienceSection() {
  return (
    <section id="kellele" className="section-pad bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Kellele" title="Kellele see sobib?" />
        <RevealGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {audience.map((a) => (
            <RevealItem key={a.label}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft transition-colors hover:border-brand/40">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <a.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">{a.label}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-muted-foreground">
            Kui sinu klient enne ühendust võtmist sind Googlest, Facebookist või Instagramist
            kontrollib, siis aitab korralik digitaalne kohalolu müügile kaasa.
          </p>
        </Reveal>
      </div>
    </section>
  );
}