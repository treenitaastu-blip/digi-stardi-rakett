import { useReducedMotion } from "framer-motion";

const MESSAGES = ["399€ ühekordne hind", "0€ kuutasu", "Valmis 7 päevaga"] as const;
const FULL_TEXT = MESSAGES.join(" · ");

export function AnnouncementBar() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="bg-brand text-brand-foreground"
      role="region"
      aria-label={FULL_TEXT}
    >
      <div className="mx-auto flex h-9 items-center justify-center px-5">
        <p className="hidden text-center text-sm font-medium md:block">{FULL_TEXT}</p>

        <div className="carousel-track relative h-5 w-full overflow-hidden [contain:strict] md:hidden">
          {reduceMotion ? (
            <p className="text-center text-xs font-medium">{MESSAGES[0]}</p>
          ) : (
            <div className="announcement-strip" aria-live="polite">
              {MESSAGES.map((msg) => (
                <p key={msg} className="announcement-slide text-xs font-medium">
                  {msg}
                </p>
              ))}
              <p className="announcement-slide text-xs font-medium" aria-hidden>
                {MESSAGES[0]}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
