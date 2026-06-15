import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { PortfolioSection } from "@/components/landing/PortfolioSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { StickyCta } from "@/components/landing/StickyCta";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Professionaalne koduleht 7 päevaga — 400€" },
      {
        name: "description",
        content:
          "Teen teile 7 päevaga professionaalse ühe-lehe kodulehe, mis teeb teie ettevõtte Googles ja kliendi silmis usaldusväärseks. 400€, kõik vajalik sees.",
      },
      { property: "og:title", content: "Professionaalne koduleht 7 päevaga — 400€" },
      {
        property: "og:description",
        content:
          "Teen teile 7 päevaga professionaalse ühe-lehe kodulehe, mis teeb teie ettevõtte Googles ja kliendi silmis usaldusväärseks. 400€, kõik vajalik sees.",
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
        <ProcessSection />
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
