import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCircle2,
  CornerDownLeft,
  Loader2,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { submitLead, RECIPIENT } from "@/lib/lead";
import { useQuiz } from "./QuizContext";

type StepType = "text" | "email" | "tel" | "multi" | "textarea";

type Step = {
  key: "nimi" | "ettevote" | "email" | "telefon" | "huvitab" | "sonum";
  type: StepType;
  question: string;
  helper?: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
};

const steps: Step[] = [
  {
    key: "nimi",
    type: "text",
    question: "Kuidas sinu nimi on?",
    helper: "Et teaksime, kuidas sind kõnetada.",
    placeholder: "Sinu nimi",
    required: true,
  },
  {
    key: "ettevote",
    type: "text",
    question: "Mis on sinu ettevõtte nimi?",
    helper: "Kui ettevõtet veel pole, jäta vahele.",
    placeholder: "Ettevõtte nimi",
  },
  {
    key: "email",
    type: "email",
    question: "Kuhu saadame vastuse?",
    helper: "Vastame ühe tööpäeva jooksul.",
    placeholder: "sinu@email.ee",
    required: true,
  },
  {
    key: "telefon",
    type: "tel",
    question: "Telefoninumber?",
    helper: "Valikuline — kui eelistad kiiret kõnet.",
    placeholder: "+372 5xxx xxxx",
  },
  {
    key: "huvitab",
    type: "multi",
    question: "Mis sind huvitab?",
    helper: "Vali kõik, mis sobivad.",
    options: [
      "Uus koduleht",
      "Olemasoleva uuendamine",
      "Müügitekstid",
      "SEO ja Google",
      "Veebipood",
      "Ei tea veel, vajan nõu",
    ],
  },
  {
    key: "sonum",
    type: "textarea",
    question: "Räägi oma projektist lähemalt",
    helper: "Valdkond, piirkond ja mida täpsemalt soovid. Kirjuta vabas vormis.",
    placeholder: "Näiteks: Tegelen ehitusega Tallinnas, vajan lihtsat lehte koos hinnapäringuga.",
  },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Answers = {
  nimi: string;
  ettevote: string;
  email: string;
  telefon: string;
  huvitab: string[];
  sonum: string;
};

const emptyAnswers: Answers = {
  nimi: "",
  ettevote: "",
  email: "",
  telefon: "",
  huvitab: [],
  sonum: "",
};

export function QuizModal() {
  const { open, closeQuiz } = useQuiz();
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);

  const step = steps[stepIndex];
  const isLast = stepIndex === steps.length - 1;
  const progress = status === "sent" ? 100 : (stepIndex / steps.length) * 100;

  // Keep the latest goNext in a ref so the global key handler always calls it.
  const goNextRef = useRef<() => void>(() => {});

  // Lock body scroll + handle Escape/Enter while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        closeQuiz();
        return;
      }
      if (e.key === "Enter") {
        const el = document.activeElement as HTMLElement | null;
        const tag = el?.tagName;
        // Textarea: Enter inserts a newline unless a modifier is held.
        if (tag === "TEXTAREA" && !(e.metaKey || e.ctrlKey)) return;
        // A focused option/button handles its own Enter (toggle/click).
        if (tag === "BUTTON") return;
        e.preventDefault();
        goNextRef.current();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeQuiz]);

  // Reset when reopened from a finished/closed state.
  useEffect(() => {
    if (open) {
      setStepIndex(0);
      setError(null);
      if (status === "sent") {
        setAnswers(emptyAnswers);
        setStatus("idle");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Autofocus the active field on step change.
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 120);
    return () => clearTimeout(t);
  }, [open, stepIndex]);

  const setValue = (value: string) =>
    setAnswers((a) => ({ ...a, [step.key]: value }) as Answers);

  const toggleOption = (opt: string) =>
    setAnswers((a) => {
      const list = a.huvitab.includes(opt)
        ? a.huvitab.filter((x) => x !== opt)
        : [...a.huvitab, opt];
      return { ...a, huvitab: list };
    });

  const validateCurrent = (): string | null => {
    if (!step.required) return null;
    const val = answers[step.key];
    if (step.type === "email") {
      if (!EMAIL_RE.test(String(val))) return "Palun sisesta korrektne e-posti aadress.";
      return null;
    }
    if (typeof val === "string" && val.trim().length === 0) {
      return "See väli on kohustuslik.";
    }
    return null;
  };

  const goNext = () => {
    const err = validateCurrent();
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    if (isLast) {
      void submit();
    } else {
      setStepIndex((i) => Math.min(i + 1, steps.length - 1));
    }
  };

  goNextRef.current = goNext;

  const goBack = () => {
    setError(null);
    setStepIndex((i) => Math.max(i - 1, 0));
  };

  const submit = async () => {
    if (status === "sending") return;
    setStatus("sending");
    try {
      await submitLead({
        nimi: answers.nimi,
        ettevote: answers.ettevote,
        email: answers.email,
        telefon: answers.telefon,
        huvitab: answers.huvitab,
        sonum: answers.sonum,
        allikas: "Hero küsimustik",
      });
      setStatus("sent");
    } catch {
      setStatus("idle");
      toast.error("Saatmine ebaõnnestus.", {
        description: `Proovi uuesti või kirjuta otse ${RECIPIENT}.`,
      });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="quiz-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex flex-col bg-background"
          role="dialog"
          aria-modal="true"
          aria-label="Telli koduleht – küsimustik"
        >
          {/* Progress bar */}
          <div className="absolute inset-x-0 top-0 h-1.5 bg-secondary">
            <motion.div
              className="bg-brand h-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Top bar */}
          <div className="flex items-center justify-between px-5 pt-6 md:px-10">
            <span className="font-display text-sm font-bold">
              Lehe<span className="text-brand">koda</span>
            </span>
            <button
              type="button"
              onClick={closeQuiz}
              aria-label="Sulge"
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="flex flex-1 items-center justify-center px-5 pb-10">
            <div className="w-full max-w-xl">
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="quiz-success"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
                      className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand/10 text-brand"
                    >
                      <CheckCircle2 className="h-8 w-8" />
                    </motion.span>
                    <h2 className="mt-6 text-2xl font-bold md:text-3xl">Aitäh, päring on teel!</h2>
                    <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                      Vaatame sinu soovi üle ja vastame ühe tööpäeva jooksul aadressile{" "}
                      <span className="font-semibold text-foreground">{answers.email}</span>.
                    </p>
                    <Button variant="hero" size="xl" className="mt-8 rounded-xl" onClick={closeQuiz}>
                      Suurepärane, sulge
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key={step.key}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -28 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-brand">
                      <span>{stepIndex + 1}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>

                    <h2 className="text-balance text-2xl font-bold leading-tight md:text-3xl">
                      {step.question}
                      {step.required && <span className="text-brand"> *</span>}
                    </h2>
                    {step.helper && (
                      <p className="mt-2.5 text-muted-foreground">{step.helper}</p>
                    )}

                    <div className="mt-7">
                      {step.type === "multi" ? (
                        <div className="flex flex-wrap gap-2.5">
                          {step.options!.map((opt) => {
                            const active = answers.huvitab.includes(opt);
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => toggleOption(opt)}
                                aria-pressed={active}
                                className={cn(
                                  "flex items-center gap-2 rounded-xl border px-4 py-2.5 text-left text-sm font-medium transition-all duration-200",
                                  active
                                    ? "border-brand bg-brand text-brand-foreground shadow-soft"
                                    : "border-border bg-card text-foreground hover:border-brand/40",
                                )}
                              >
                                <span
                                  className={cn(
                                    "grid h-4 w-4 place-items-center rounded border",
                                    active
                                      ? "border-brand-foreground/60 bg-brand-foreground/20"
                                      : "border-border",
                                  )}
                                >
                                  {active && <Check className="h-3 w-3" />}
                                </span>
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      ) : step.type === "textarea" ? (
                        <textarea
                          ref={inputRef}
                          value={answers[step.key] as string}
                          onChange={(e) => setValue(e.target.value)}
                          rows={4}
                          placeholder={step.placeholder}
                          className="w-full resize-none border-0 border-b-2 border-border bg-transparent pb-2 text-lg outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-brand md:text-xl"
                        />
                      ) : (
                        <input
                          ref={inputRef}
                          type={step.type}
                          value={answers[step.key] as string}
                          onChange={(e) => setValue(e.target.value)}
                          placeholder={step.placeholder}
                          className="w-full border-0 border-b-2 border-border bg-transparent pb-2 text-xl outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-brand md:text-2xl"
                        />
                      )}
                    </div>

                    {error && <p className="mt-3 text-sm font-medium text-destructive">{error}</p>}

                    <div className="mt-8 flex items-center gap-3">
                      <Button
                        variant="hero"
                        size="xl"
                        className="rounded-xl font-semibold"
                        onClick={goNext}
                        disabled={status === "sending"}
                      >
                        {status === "sending" ? (
                          <>
                            Saadan... <Loader2 className="h-4 w-4 animate-spin" />
                          </>
                        ) : isLast ? (
                          <>
                            Saada päring <ArrowRight className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Edasi <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                      <span className="hidden items-center gap-1.5 text-xs text-muted-foreground sm:flex">
                        Vajuta <kbd className="rounded border border-border bg-card px-1.5 py-0.5 font-sans">Enter ↵</kbd>
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom nav */}
          {status !== "sent" && (
            <div className="flex items-center justify-between px-5 pb-6 md:px-10">
              <span className="text-xs text-muted-foreground">
                {stepIndex + 1} / {steps.length}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={stepIndex === 0}
                  aria-label="Tagasi"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground disabled:opacity-40"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Edasi"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
                >
                  {step.type === "textarea" ? (
                    <CornerDownLeft className="h-4 w-4" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
