import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { PortfolioSection } from "@/components/landing/PortfolioSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { CalculatorSection } from "@/components/landing/CalculatorSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { StickyCta } from "@/components/landing/StickyCta";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digitaalne Stardipakett — koduleht alates 300€" },
      {
        name: "description",
        content:
          "Tee oma uus ettevõte internetis usaldusväärseks. Koduleht, sotsiaalmeedia, turundusvideod ja reklaamid - kõik ühest kohast, ilma agentuuri hinnata.",
      },
      { property: "og:title", content: "Digitaalne Stardipakett — koduleht alates 300€" },
      {
        property: "og:description",
        content:
          "Korralik esimene mulje alustavale Eesti ettevõttele: koduleht, sotsiaalmeedia, videod ja reklaamid.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <PortfolioSection />
        <PricingSection />
        <CalculatorSection />
        <ProcessSection />
        <AudienceSection />
        <TrustSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyCta />
      <Toaster />
    </div>
  );
}
