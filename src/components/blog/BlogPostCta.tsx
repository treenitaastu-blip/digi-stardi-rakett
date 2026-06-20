import { Button } from "@/components/ui/button";
import { ContactLink } from "@/components/landing/ContactLink";

type BlogPostCtaProps = {
  title?: string;
  text?: string;
  buttonLabel?: string;
};

export function BlogPostCta({
  title = "Vajad korralikku kodulehte?",
  text = "Teeme sulle 7 tööpäevaga kodulehe, kus tekstid, kontaktvorm, Google’i seadistus ja 6 kuud tasuta muudatusi on hinnas.",
  buttonLabel = "Küsi pakkumist",
}: BlogPostCtaProps) {
  return (
    <aside className="mt-12 rounded-2xl border border-brand/20 bg-brand/5 p-8 md:p-10">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">{title}</h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">{text}</p>
      <Button variant="hero" size="lg" className="mt-6 rounded-xl" asChild>
        <ContactLink>{buttonLabel}</ContactLink>
      </Button>
    </aside>
  );
}
