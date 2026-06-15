import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { StatsBand } from "@/components/landing/StatsBand";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { PortfolioSection } from "@/components/landing/PortfolioSection";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { StickyCta } from "@/components/landing/StickyCta";
import { Footer } from "@/components/landing/Footer";
import { QuizProvider } from "@/components/landing/QuizContext";
import { QuizModal } from "@/components/landing/QuizModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Koduleht 7 päevaga, 400 € | Digitaalne Stardipakett" },
      {
        name: "description",
        content:
          "Professionaalne ühe-lehe koduleht väikeettevõttele. Copywriting, SEO, Google Maps ja mobiilidisain. Fikseeritud hind 400 €, tarne 7 tööpäeva.",
      },
      {
        property: "og:title",
        content: "Koduleht 7 päevaga, 400 € | Digitaalne Stardipakett",
      },
      {
        property: "og:description",
        content:
          "Professionaalne ühe-lehe koduleht väikeettevõttele. Copywriting, SEO, Google Maps ja mobiilidisain. Fikseeritud hind 400 €, tarne 7 tööpäeva.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <QuizProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <StatsBand />
          <ProblemSection />
          <SolutionSection />
          <ProcessSection />
          <PortfolioSection />
          <AudienceSection />
          <TestimonialsSection />
          <PricingSection />
          <TrustSection />
          <FaqSection />
          <ContactSection />
        </main>
        <Footer />
        <StickyCta />
        <QuizModal />
        <Toaster />
      </div>
    </QuizProvider>
  );
}
