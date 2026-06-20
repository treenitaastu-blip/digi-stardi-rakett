import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useRef } from "react";
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
import { HashScrollToContact } from "@/components/landing/HashScrollToContact";
import { StickyCta } from "@/components/landing/StickyCta";
import { Footer } from "@/components/landing/Footer";
import { PageBackdrop } from "@/components/landing/PageBackdrop";
import { DeferredScrollCards } from "@/components/landing/DeferredScrollCards";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeJsonLdGraph, homePageLinks, homePageMeta } from "@/lib/seo";

const Toaster = lazy(() =>
  import("@/components/ui/sonner").then((m) => ({ default: m.Toaster })),
);

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
    <>
      <JsonLd data={homeJsonLdGraph()} />
      <HashScrollToContact />
      <a href="#main-content" className="skip-link">
        Liigu põhisisu juurde
      </a>
      <div ref={pageRef} className="relative min-h-screen bg-background">
        <PageBackdrop />
        <Navbar />
        <main id="main-content">
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
        <DeferredScrollCards containerRef={pageRef} />
        <Footer />
        <StickyCta />
        <Suspense fallback={null}>
          <Toaster />
        </Suspense>
      </div>
    </>
  );
}
