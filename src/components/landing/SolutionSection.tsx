import { Smartphone, Search, Mail, FileText, LayoutTemplate, ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

const structurePoints = [
  "Kõige olulisem info kohe esimesel ekraanil",
  "Teenused ja hinnainfo arusaadavalt esitatud",
  "Selge nupp või vorm, kust klient saab kohe ühendust võtta",
];

const smallFeatures = [
  {
    icon: Smartphone,
    title: "Leht näeb telefonis korralik välja",
    body: "Paljud kliendid vaatavad sind telefonist. Leht peab olema kiire, selge ja mugav kasutada.",
  },
  {
    icon: Search,
    title: "Teeme lehe Google'i jaoks korda",
    body: "Paneme paika esmased Google'i seadistused, et leht oleks otsingus paremini leitav.",
  },
  {
    icon: Mail,
    title: "Kontaktivorm",
    body: "Klient täidab vormi ja päring tuleb otse sinu e-mailile.",
  },
];

export function SolutionSection() {
  return (
    <section id="mida-saad" className="section-pad bg-secondary">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Pakett"
          title="Kõik vajalik koduleheks - ilma et peaksid ise nuputama"
          subtitle="Üks hind, selge sisu ja ei mingeid üllatusarveid. Sina annad info, meie teeme lehe valmis."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6">
          {/* Featured: structure */}
          <RevealItem className="md:col-span-3">
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg md:p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                <LayoutTemplate className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold">Leht on üles ehitatud nii, et klient jõuaks päringuni</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Klient saab kiiresti aru, mida sa pakud, kus sa tegutsed ja miks sinuga ühendust võtta.
              </p>
              <ul className="mt-5 space-y-2.5">
                {structurePoints.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm font-medium text-foreground/85">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/12">
                      <Check className="h-3 w-3 text-success" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </RevealItem>

          {/* Featured: copywriting with real example */}
          <RevealItem className="md:col-span-3">
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg md:p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                <FileText className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold">Kirjutame tekstid sinu eest</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Sina räägid meile, mida teed. Meie paneme selle lihtsasse ja usaldust tekitavasse
                teksti.
              </p>
              <div className="mt-5 rounded-xl border border-border bg-secondary/40 p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand">
                  Näide valmistekstist
                </p>
                <p className="mt-2 font-display text-base font-bold leading-snug">
                  Usaldusväärne torutööteenus Tallinnas
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Kiire väljakutse, aus hind ja garantii igale tööle.
                </p>
              </div>
            </article>
          </RevealItem>

          {/* Small tiles */}
          {smallFeatures.map((f) => (
            <RevealItem key={f.title} className="md:col-span-2">
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft-lg">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Closing line */}
        <Reveal className="mt-6">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-brand/25 bg-card p-6 shadow-soft sm:flex-row">
            <p className="text-center text-sm font-medium sm:text-left">
              Google Maps, domeeni- ja hostinguabi ning kuni kaks parandusringi. Kõik kaasas.
            </p>
            <Button asChild variant="hero" className="shrink-0 rounded-xl">
              <a href="#hind">
                Vaata hinda <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
