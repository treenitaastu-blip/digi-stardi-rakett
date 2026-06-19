import { Check, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const rows = [
  { label: "Kuukulu", us: "0€ kuus", them: "25€+ kuus" },
  { label: "Hind", us: "399€", them: "1000€+" },
  { label: "Muudatused", us: "6 kuud tasuta", them: "Umbes 2 nädalat" },
  { label: "Valmimine", us: "7 päevaga valmis", them: "2+ nädalat" },
  { label: "Tekstid", us: "Müügile suunatud tekstid hinnas", them: "Tekstid sinu teha või lisatasu eest" },
  { label: "Fookus", us: "Rohkem päringuid ja usaldust", them: "Lihtsalt koduleht" },
  { label: "Protsess", us: "Sina annad info, meie teeme valmis", them: "Pead ise palju välja mõtlema" },
  { label: "Omand", us: "Leht kuulub sulle", them: "Tihti seotud kuupaketiga" },
];

export function ComparisonSection() {
  return (
    <section id="vordlus" className="section-pad bg-secondary/30">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Meie vs Teised"
          title="Miks valida Lehekoda, mitte tavaline veebiteenuse pakett?"
          subtitle="Aus võrdlus: mida saate fikseeritud hinnaga ja mida teised tavaliselt pakuvad."
        />

        <Reveal className="mt-12">
          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-2xl border border-border bg-card shadow-soft md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th
                    scope="col"
                    className="w-[22%] px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                  >
                    Võrdlus
                  </th>
                  <th
                    scope="col"
                    className="bg-brand-gradient w-[39%] px-6 py-4 text-sm font-bold text-brand-foreground"
                  >
                    Lehekoda
                  </th>
                  <th
                    scope="col"
                    className="w-[39%] px-6 py-4 text-sm font-semibold text-muted-foreground"
                  >
                    Teised
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={cn(
                      "border-b border-border/70 last:border-0",
                      i % 2 === 0 ? "bg-card" : "bg-secondary/20",
                    )}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 text-sm font-semibold text-foreground"
                    >
                      {row.label}
                    </th>
                    <td className="bg-brand/6 border-x border-brand/10 px-6 py-4">
                      <div className="flex items-start gap-2.5">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/15">
                          <Check className="h-3 w-3 text-brand" />
                        </span>
                        <span className="text-sm font-medium leading-snug text-foreground">
                          {row.us}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-2.5">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-muted">
                          <X className="h-3 w-3 text-muted-foreground" />
                        </span>
                        <span className="text-sm leading-snug text-muted-foreground">
                          {row.them}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="space-y-3 md:hidden">
            {rows.map((row) => (
              <div
                key={row.label}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              >
                <div className="border-b border-border bg-secondary/50 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {row.label}
                  </p>
                </div>
                <div className="bg-brand/6 border-b border-brand/10 px-4 py-3.5">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-brand">
                    Lehekoda
                  </p>
                  <div className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <p className="text-sm font-medium leading-snug text-foreground">{row.us}</p>
                  </div>
                </div>
                <div className="px-4 py-3.5">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Teised
                  </p>
                  <div className="flex items-start gap-2">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <p className="text-sm leading-snug text-muted-foreground">{row.them}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
