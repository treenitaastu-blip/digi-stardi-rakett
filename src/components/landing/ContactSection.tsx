import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const trustLines = [
  "7 päevaga valmis",
  "Avalikud hinnad — 400€ kõik sees",
  "Tekstid kirjutan mina",
];

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Aitäh! Päring on saadetud.", {
      description: "Võtan sinuga peagi ühendust.",
    });
  };

  return (
    <section id="kontakt" className="section-pad">
      <div className="mx-auto max-w-5xl px-5">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left — brand side */}
            <div
              className="relative flex flex-col justify-center p-8 md:p-10"
              style={{
                background:
                  "linear-gradient(155deg, var(--brand), color-mix(in oklab, var(--brand) 68%, oklch(0.3 0.1 262)))",
              }}
            >
              {/* Decorative circles */}
              <div
                aria-hidden
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-10"
                style={{ background: "white" }}
              />
              <div
                aria-hidden
                className="absolute -bottom-16 -left-8 h-48 w-48 rounded-full opacity-[0.06]"
                style={{ background: "white" }}
              />

              <Reveal>
                <h2 className="relative text-balance text-2xl font-bold leading-tight text-brand-foreground md:text-3xl">
                  Tahad, et sinu ettevõte näeks internetis usaldusväärne välja?
                </h2>
                <p className="relative mt-4 text-sm leading-relaxed text-brand-foreground/80">
                  Saada oma ettevõtte nimi ja kirjuta lühidalt, millega tegeled. Vastan tavaliselt
                  ühe tööpäeva jooksul.
                </p>
                <ul className="relative mt-7 space-y-3">
                  {trustLines.map((x) => (
                    <li
                      key={x}
                      className="flex items-center gap-2.5 text-sm font-medium text-brand-foreground/90"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      {x}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Right — form */}
            <div className="p-8 md:p-10">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center text-center"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-brand/10 text-brand">
                    <CheckCircle2 className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">Aitäh! Päring on saadetud.</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Võtan sinuga peagi ühendust ja arutame, milline koduleht sinu ettevõttele
                    kõige paremini sobib.
                  </p>
                  <Button variant="heroOutline" className="mt-6 rounded-xl" onClick={() => setSent(false)}>
                    Saada uus päring
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field id="nimi" label="Nimi" required />
                    <Field id="ettevote" label="Ettevõtte nimi" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field id="email" label="E-mail" type="email" required />
                    <Field id="telefon" label="Telefon" type="tel" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="teenus">Mis sind huvitab?</Label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger id="teenus">
                        <SelectValue placeholder="Vali..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="koduleht">Koduleht (400€)</SelectItem>
                        <SelectItem value="vaata">Tahan enne rohkem infot</SelectItem>
                        <SelectItem value="eitea">Ei tea veel täpselt</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="sonum">Kirjelda oma ettevõtet lühidalt</Label>
                    <Textarea
                      id="sonum"
                      rows={4}
                      placeholder="Ettevõtte nimi, millega tegeled, piirkond..."
                    />
                  </div>
                  <Button type="submit" variant="hero" size="xl" className="w-full rounded-xl font-semibold">
                    Saada päring <Send className="h-4 w-4" />
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Vormi täitmine ei kohusta sind millekski.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>
        {label} {required && <span className="text-brand">*</span>}
      </Label>
      <Input id={id} type={type} required={required} />
    </div>
  );
}
