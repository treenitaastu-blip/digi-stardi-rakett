import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Kas domeen ja hosting on hinna sees?",
    a: "Domeen ja hosting ei ole vaikimisi hinna sees, sest need sõltuvad valitud lahendusest. Aitan vajadusel need valida ja seadistada.",
  },
  {
    q: "Kui kiiresti leht valmis saab?",
    a: "Täpne aeg sõltub sisust ja parandustest, aga eesmärk on hoida protsess kiire ja lihtne.",
  },
  {
    q: "Kas tekstid kirjutad sina?",
    a: "Jah, aitan pakkumise ja lehe tekstid selgeks kirjutada. Sina annad ettevõtte info, mina vormin selle kliendile arusaadavaks.",
  },
  {
    q: "Kas mul peavad pildid olemas olema?",
    a: "Ei pea. Saab kasutada stock-visuaale või soovi korral tulen kohale ja filmin/pildistan originaalmaterjali.",
  },
  {
    q: "Kas reklaamid toovad kindlasti kliente?",
    a: "Reklaamide seadistus ei garanteeri kindlat tulemust, aga annab ettevõttele tehniliselt korrektse alguse ja esimesed testitavad reklaamid.",
  },
  {
    q: "Kas saan hiljem muudatusi teha?",
    a: "Jah, hilisemaid muudatusi saab teha kokkuleppel eraldi.",
  },
];

export function FaqSection() {
  return (
    <section id="kkk" className="section-pad bg-secondary/50">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading eyebrow="KKK" title="Korduma kippuvad küsimused" />
        <Reveal className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="mb-3 rounded-xl border border-border bg-card px-5 shadow-soft"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}