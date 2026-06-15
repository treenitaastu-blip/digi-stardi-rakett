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
            {/* Left copy */}
            <div
              className="relative flex flex-col justify-center p-8 md:p-10"
              style={{
                background:
                  "linear-gradient(160deg, var(--brand), color-mix(in oklab, var(--brand) 70%, oklch(0.3 0.1 262)))",
              }}
            >
              <Reveal>
                <h2 className="text-balance text-2xl font-bold leading-tight text-brand-foreground md:text-3xl">
                  Tahad, et sinu uus ettevõte näeks internetis usaldusväärne välja?
                </h2>
                <p className="mt-4 text-brand-foreground/85">
                  Saada oma ettevõtte nimi ja kirjuta, kas vajad ainult kodulehte või kogu
                  digitaalset stardipaketti.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {["Avalikud hinnad", "Kiire ja selge protsess", "Ilma agentuuri hinnata"].map(
                    (x) => (
                      <li key={x} className="flex items-center gap-2 text-sm text-brand-foreground/90">
                        <CheckCircle2 className="h-4 w-4" /> {x}
                      </li>
                    ),
                  )}
                </ul>
              </Reveal>
            </div>

            {/* Right form */}
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
                  <p className="mt-2 text-muted-foreground">
                    Võtan sinuga peagi ühendust ja arutame su ettevõtte stardipaketi.
                  </p>
                  <Button variant="heroOutline" className="mt-6" onClick={() => setSent(false)}>
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
                    <Label htmlFor="teenus">Mis teenust vajad?</Label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger id="teenus">
                        <SelectValue placeholder="Vali teenus" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="koduleht">Koduleht</SelectItem>
                        <SelectItem value="kohalolu">Digitaalne kohalolu</SelectItem>
                        <SelectItem value="taielik">Täielik stardipakett</SelectItem>
                        <SelectItem value="premium">Premium stardipakett</SelectItem>
                        <SelectItem value="eitea">Ei tea veel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="sonum">Sõnum</Label>
                    <Textarea id="sonum" rows={4} placeholder="Räägi lühidalt oma ettevõttest" />
                  </div>
                  <Button type="submit" variant="hero" size="xl" className="w-full">
                    Küsi pakkumist <Send className="h-4 w-4" />
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