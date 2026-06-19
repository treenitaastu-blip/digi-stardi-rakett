import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { StatsBand } from "@/components/landing/StatsBand";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
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
import { PageBackdrop } from "@/components/landing/PageBackdrop";
import { ScrollCards } from "@/components/landing/scroll-cards/ScrollCards";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeJsonLdGraph, homePageLinks, homePageMeta } from "@/lib/seo";
import { useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: homePageMeta(),
    links: homePageLinks(),
  }),
  component: Index,
});

function Index() {
  const pageRef = useRef<HTMLDivElement>(null);

  return (
    <QuizProvider>
      <JsonLd data={homeJsonLdGraph()} />
      <div ref={pageRef} className="relative min-h-screen bg-background">
        <PageBackdrop />
        <ScrollCards containerRef={pageRef} />
        <Navbar />
        <main>
          <Hero />
          <PortfolioSection />
          <StatsBand />
          <ComparisonSection />
          <ProblemSection />
          <SolutionSection />
          <ProcessSection />
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
