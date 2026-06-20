import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const founders = [
  {
    name: "Henri",
    role: "tekstid ja struktuur",
    initials: "H",
    photo: "/team/henri.jpg",
    className: "relative z-10 lg:-translate-y-1",
  },
  {
    name: "Jaagup",
    role: "disain ja tehniline teostus",
    initials: "J",
    className: "relative z-0 lg:translate-y-3",
  },
];

const benefits = [
  "Tekstid kirjutame sinu eest",
  "Hind on selge: 399€",
  "Valmis 7 tööpäevaga",
  "Kontaktvorm tuleb sinu e-postile",
  "Google'i algseadistus on hinnas",
  "6 kuud tasuta muudatusi",
];

const trustPills = ["399€", "0€ kuutasu", "7 tööpäeva", "Tekstid hinnas", "6 kuud muudatusi"];

function FounderPortrait({
  name,
  role,
  initials,
  photo,
  className,
}: {
  name: string;
  role: string;
  initials: string;
  photo?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div
        className="overflow-hidden rounded-[28px] border border-[#BFDBFE] bg-[#EFF6FF] shadow-[0_16px_40px_rgba(37,99,235,0.1)]"
        style={{ aspectRatio: "3 / 4" }}
      >
        {photo ? (
          <img
            src={photo}
            alt={`${name} — Lehekoda kaasasutaja`}
            className="h-full w-full object-cover object-[center_18%]"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-end bg-gradient-to-b from-[#DBEAFE] via-[#EFF6FF] to-[#EFF6FF] px-4 pb-5 pt-8">
            <span className="grid h-[72px] w-[72px] place-items-center rounded-full border border-[#BFDBFE] bg-white text-2xl font-bold text-[#2563EB] shadow-[0_8px_24px_rgba(37,99,235,0.12)]">
              {initials}
            </span>
            <span className="mt-4 text-[11px] font-medium uppercase tracking-wider text-[#64748B]">
              Foto tulekul
            </span>
          </div>
        )}
      </div>
      <figcaption className="mt-3.5 text-center lg:text-left">
        <p className="text-base font-bold text-[#0F172A]">{name}</p>
        <p className="mt-0.5 text-sm text-[#64748B]">{role}</p>
      </figcaption>
    </figure>
  );
}

function SectionEyebrow() {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[#2563EB]">
      Sina annad info, meie teeme valmis
    </span>
  );
}

function ExperienceBadge() {
  return (
    <span className="mx-auto mt-5 inline-flex w-fit items-center rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3 py-1.5 text-xs font-semibold text-[#2563EB] lg:mx-0">
      5+ aastat veebidisaini ja sisuloome kogemust
    </span>
  );
}

function BenefitCheck({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-px grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#DCFCE7]">
        <Check className="h-2.5 w-2.5 text-[#16A34A]" strokeWidth={2.5} />
      </span>
      <span className="text-[13px] leading-tight text-[#0F172A]">{children}</span>
    </li>
  );
}

export function TrustSection() {
  return (
    <section id="usaldus" className="bg-[#F8FAFC] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <article className="overflow-hidden rounded-[32px] border border-[#E2E8F0] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:p-14">
            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[42fr_58fr] lg:items-center lg:gap-14">
              {/* Mobile 1–3 · Desktop col 2 (top) */}
              <div className="order-1 flex flex-col gap-2.5 lg:col-start-2 lg:row-start-1 lg:gap-3">
                <SectionEyebrow />
                <h2 className="text-balance text-[34px] font-extrabold leading-[1.05] tracking-tight text-[#0F172A] lg:text-[48px]">
                  Kes sinu kodulehe valmis teeb?
                </h2>
                <p className="max-w-lg text-[0.9375rem] leading-snug text-[#64748B] lg:text-base">
                  Oleme Henri ja Jaagup. Aitame sul ettevõtte info selgeks ja usaldust tekitavaks
                  koduleheks kokku panna.
                </p>
              </div>

              {/* Mobile 4 · Desktop col 1 */}
              <div className="order-2 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center">
                <div className="rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] p-5 lg:p-6">
                  <div className="mx-auto flex max-w-[360px] items-end justify-center gap-4 sm:max-w-none sm:gap-5 lg:mx-0 lg:justify-start">
                    {founders.map((person) => (
                      <FounderPortrait
                        key={person.name}
                        name={person.name}
                        role={person.role}
                        initials={person.initials}
                        photo={person.photo}
                        className={`w-[min(46vw,10.5rem)] sm:w-44 lg:w-[12.5rem] ${person.className}`}
                      />
                    ))}
                  </div>
                  <ExperienceBadge />
                </div>
              </div>

              {/* Mobile 5–8 · Desktop col 2 (rest) */}
              <div className="order-3 flex flex-col gap-4 lg:col-start-2 lg:row-start-2 lg:gap-4">
                <p className="max-w-lg text-[0.9375rem] leading-snug text-[#475569] lg:text-base">
                  Sul ei pea olema valmis tekste ega struktuuri. Me küsime õiged küsimused,
                  kirjutame sisu ja paneme lehe tööle.
                </p>

                <div>
                  <p className="text-sm font-bold text-[#0F172A]">Mis on sinu jaoks lihtsam?</p>
                  <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-1.5">
                    {benefits.map((item) => (
                      <BenefitCheck key={item}>{item}</BenefitCheck>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {trustPills.map((pill) => (
                    <span
                      key={pill}
                      className="inline-flex rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1.5 text-[12px] font-semibold leading-none text-[#0F172A]"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                <p className="max-w-lg text-[0.9375rem] leading-snug text-[#64748B]">
                  Sina räägid, mida su ettevõte teeb. Meie teeme sellest korraliku kodulehe.
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
