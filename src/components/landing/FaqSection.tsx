import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { faqs } from "@/lib/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section id="kkk" className="section-pad bg-secondary/30">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading eyebrow="KKK" title="Vastused enne tellimist" />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card px-5 shadow-soft"
              >
                <AccordionTrigger className="text-left text-[0.95rem] font-semibold leading-snug hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Jäi midagi küsida?{" "}
            <a href="#kontakt" className="font-semibold text-brand hover:underline">
              Kirjutage meile →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
