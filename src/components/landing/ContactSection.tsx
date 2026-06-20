import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, Loader2, Clock, Tag, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { submitLead, RECIPIENT } from "@/lib/lead";

const trustLines = [
  { icon: Clock, text: "Tarne 7 tööpäevaga" },
  { icon: Tag, text: "Fikseeritud hind 399 €" },
  { icon: FileText, text: "Müügitekstid ja SEO kaasas" },
];

const serviceOptions = [
  "Uus koduleht",
  "Olemasoleva uuendamine",
  "Müügitekstid",
  "SEO ja Google",
  "Veebipood",
  "Ei tea veel, vajan nõu",
];

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [services, setServices] = useState<string[]>([]);

  const toggleService = (s: string) =>
    setServices((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot — bots fill this hidden field
    if (fd.get("botcheck")) return;

    setStatus("sending");
    try {
      await submitLead({
        nimi: String(fd.get("nimi") ?? ""),
        ettevote: String(fd.get("ettevote") ?? ""),
        email: String(fd.get("email") ?? ""),
        telefon: String(fd.get("telefon") ?? ""),
        huvitab: services,
        sonum: String(fd.get("sonum") ?? ""),
        allikas: "Kontaktivorm",
      });
      setStatus("sent");
      toast.success("Aitäh! Päring on saadetud.", {
        description: "Vastame ühe tööpäeva jooksul.",
      });
    } catch {
      setStatus("idle");
      toast.error("Saatmine ebaõnnestus.", {
        description: `Proovige uuesti või kirjutage otse ${RECIPIENT}.`,
      });
    }
  };

  const reset = () => {
    setServices([]);
    setStatus("idle");
  };

  return (
    <section id="kontakt" aria-labelledby="kontakt-heading" className="section-pad scroll-mt-24 [content-visibility:visible]">
      <div className="mx-auto max-w-5xl px-5">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-glow">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left — brand side */}
            <div className="bg-brand relative flex flex-col justify-center p-8 md:p-10">
              <div
                aria-hidden
                className="bg-dots pointer-events-none absolute inset-0 opacity-[0.12]"
              />
              <Reveal>
                <span className="relative inline-block rounded-full bg-white/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest text-brand-foreground">
                  Küsi pakkumist
                </span>
                <h2 id="kontakt-heading" className="relative mt-4 text-balance text-2xl font-bold leading-tight text-brand-foreground md:text-3xl">
                  Valmis professionaalseks esmamuljeks?
                </h2>
                <p className="relative mt-4 space-y-1 text-sm leading-snug text-brand-foreground/85">
                  <span className="block">Paar küsimust.</span>
                  <span className="block">Vastame ühe tööpäeva jooksul.</span>
                </p>
                <ul className="relative mt-7 space-y-3">
                  {trustLines.map((x) => (
                    <li
                      key={x.text}
                      className="flex items-center gap-2.5 text-sm font-medium text-brand-foreground/90"
                    >
                      <x.icon className="h-4 w-4 shrink-0" />
                      {x.text}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Right — form */}
            <div className="p-8 md:p-10">
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-full flex-col items-center justify-center py-8 text-center"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 14 }}
                      className="grid h-16 w-16 place-items-center rounded-full bg-brand/10 text-brand"
                    >
                      <CheckCircle2 className="h-8 w-8" />
                    </motion.span>
                    <h3 className="mt-5 text-xl font-bold">Päring on teel!</h3>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                      Aitäh. Vaatame teie soovi üle ja vastame ühe tööpäeva jooksul.
                    </p>
                    <Button variant="heroOutline" className="mt-6 rounded-xl" onClick={reset}>
                      Saada uus päring
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Honeypot */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field id="nimi" name="nimi" label="Nimi" required />
                      <Field id="ettevote" name="ettevote" label="Ettevõtte nimi" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field id="email" name="email" label="E-mail" type="email" required />
                      <Field id="telefon" name="telefon" label="Telefon" type="tel" />
                    </div>

                    {/* Interactive service chips */}
                    <div className="space-y-2.5">
                      <Label>Mis sind huvitab?</Label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((s) => {
                          const active = services.includes(s);
                          return (
                            <button
                              key={s}
                              type="button"
                              onClick={() => toggleService(s)}
                              aria-pressed={active}
                              className={cn(
                                "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-200",
                                active
                                  ? "border-brand bg-brand text-brand-foreground shadow-soft"
                                  : "border-border bg-background text-muted-foreground hover:border-brand/40 hover:text-foreground",
                              )}
                            >
                              {s}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="sonum">Räägi lähemalt</Label>
                      <Textarea
                        id="sonum"
                        name="sonum"
                        rows={4}
                        placeholder="Ettevõte, valdkond, piirkond ja mida täpsemalt soovid. Kirjuta vabas vormis."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="xl"
                      disabled={status === "sending"}
                      className="w-full rounded-xl font-semibold"
                    >
                      {status === "sending" ? (
                        <>
                          Saadan... <Loader2 className="h-4 w-4 animate-spin" />
                        </>
                      ) : (
                        <>
                          Saada päring <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      Vormi täitmine ei kohusta sind millegagi.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>
        {label} {required && <span className="text-brand">*</span>}
      </Label>
      <Input id={id} name={name} type={type} required={required} autoComplete="off" />
    </div>
  );
}
