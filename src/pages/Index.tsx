import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ConnectionOptions from "@/components/ConnectionOptions";
import StatsSection from "@/components/StatsSection";
import TrustSection from "@/components/TrustSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResourcesSection from "@/components/ResourcesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import SOSButton from "@/components/SOSButton";
import EmpathySection from "@/components/EmpathySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero – already self-animated */}
      <Hero />

      {/* Each section below floats in softly from a different direction */}

      <EmpathySection variant="rise" delay={0} as="div">
        <ConnectionOptions />
      </EmpathySection>

      <EmpathySection variant="breathe" delay={60} as="div">
        <StatsSection />
      </EmpathySection>

      <EmpathySection variant="drift-left" delay={0} as="div">
        <TrustSection />
      </EmpathySection>

      <EmpathySection variant="rise" delay={80} as="div">
        <TeamSection />
      </EmpathySection>

      <EmpathySection variant="drift-right" delay={0} as="div">
        <TestimonialsSection />
      </EmpathySection>

      <EmpathySection variant="mist" delay={0} as="div">
        <ResourcesSection />
      </EmpathySection>

      <EmpathySection variant="rise" delay={60} as="div">
        <FAQSection />
      </EmpathySection>

      <EmpathySection variant="mist" delay={0} as="div">
        <Footer />
      </EmpathySection>

      <SOSButton />
    </div>
  );
};

export default Index;
