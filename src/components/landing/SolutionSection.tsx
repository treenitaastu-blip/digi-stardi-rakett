import { LayoutTemplate, Smartphone, FileText, MapPin, Search, Mail } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "./Reveal";

const features = [
  {
    icon: LayoutTemplate,
    title: "Selge struktuur",
    body: "Klient saab esimese kümne sekundiga aru, millega tegelete ja miks valida just teid.",
  },
  {
    icon: FileText,
    title: "Professionaalne copywriting",
    body: "Ettevõtte info muudetakse selgeks ja veenvaks tekstiks. Tekstid on paketi sees — eraldi copywriterit pole vaja.",
  },
  {
    icon: Smartphone,
    title: "Mobiilisõbralik disain",
    body: "Enamik kliente tuleb telefonist. Leht töötab igas seadmes laitmatult.",
  },
  {
    icon: Mail,
    title: "Kontaktivorm",
    body: "Päringud jõuavad otse teie postkasti. Lihtne kliendi jaoks, efektiivne teile.",
  },
  {
    icon: MapPin,
    title: "Google Maps",
    body: "Asukoht on kohe näha. Oluline kohalikele teenusepakkujatele ja piirkondlikele ettevõtetele.",
  },
  {
    icon: Search,
    title: "SEO põhiseadistus",
    body: "Metaandmed, pealkirjad ja Google otsingukonsool — alus, et leht hakkaks otsingus ilmuma.",
  },
];

export function SolutionSection() {
  return (
    <section id="mida-saad" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Stardipakett"
          title="Kõik, mida alustav ettevõte veebis vajab — ühes paketis"
          subtitle="Fikseeritud hind 400 €. Varjatud tunnitasusid ega üllatusarveid pole."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <RevealItem key={f.title}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/35 hover:shadow-brand">
                <div className="h-0.5 w-full bg-gradient-to-r from-brand/60 to-transparent transition-all duration-300 group-hover:from-brand" />
                <div className="flex flex-1 flex-col p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/8 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-bold">{f.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Image strip */}
        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
            <div className="relative h-64 md:h-80">
              <img
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1400&q=85&auto=format&fit=crop"
                alt="Professionaalne koduleht arvutis"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">Tulemus</p>
                <h3 className="mt-2 max-w-sm text-balance text-2xl font-extrabold leading-tight md:text-3xl">
                  Leitav. Usaldusväärne. Professionaalne.
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  Kui keegi teie ettevõtet otsib, leiab ta vastuse — mitte tühja lehte ega vananenud
                  profiili.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
