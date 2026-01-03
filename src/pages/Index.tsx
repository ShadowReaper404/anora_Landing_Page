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
import AuroraBackground from "@/components/AuroraBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AuroraBackground />
      <Navbar />
      <Hero />
      <ConnectionOptions />
      <StatsSection />
      <TrustSection />
      <TeamSection />
      <TestimonialsSection />
      <ResourcesSection />
      <FAQSection />
      <Footer />
      <SOSButton />
    </div>
  );
};

export default Index;
