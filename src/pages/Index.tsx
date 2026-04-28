import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ConnectionOptions from "@/components/ConnectionOptions";
import StatsSection from "@/components/StatsSection";
import TrustSection from "@/components/TrustSection";
import TeamSection from "@/components/TeamSection";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import ResourcesSection from "@/components/ResourcesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import SOSButton from "@/components/SOSButton";
import EmpathySection from "@/components/EmpathySection";
import { LineArtDivider } from "@/components/LivingLineArt";
import MouseSpotlight from "@/components/MouseSpotlight";
import CustomCursor from "@/components/CustomCursor";
import LiveActivityToast from "@/components/LiveActivityToast";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* ── Global chrome ── */}
      <CustomCursor />
      <ScrollProgressBar />
      <MouseSpotlight />
      <LiveActivityToast />

      <Navbar />

      {/* ── Hero (mood engine + 3D tilt) ── */}
      <Hero />

      <LineArtDivider art="ripple" color="hsl(var(--primary))" strokeWidth={1.2} maxWidth={400} className="opacity-60" />

      <EmpathySection variant="rise" delay={0} as="div">
        <ConnectionOptions />
      </EmpathySection>

      <LineArtDivider art="wave" color="hsl(var(--primary))" strokeWidth={1.5} className="opacity-50" />

      <EmpathySection variant="breathe" delay={60} as="div">
        <StatsSection />
      </EmpathySection>

      <LineArtDivider art="bloom" color="hsl(var(--primary))" strokeWidth={1.2} maxWidth={140} className="opacity-60 my-2" />

      <EmpathySection variant="drift-left" delay={0} as="div">
        <TrustSection />
      </EmpathySection>

      <LineArtDivider art="breath" color="hsl(var(--primary))" strokeWidth={1.0} maxWidth={140} className="opacity-50 my-2" />

      <EmpathySection variant="rise" delay={80} as="div">
        <TeamSection />
      </EmpathySection>

      <LineArtDivider art="constellation" color="hsl(var(--primary))" strokeWidth={1.0} className="opacity-40 my-2" />

      {/* 🎟️ Infinite dual-row testimonial marquee */}
      <EmpathySection variant="drift-right" delay={0} as="div">
        <InfiniteMarquee />
      </EmpathySection>

      <LineArtDivider art="wave" color="hsl(var(--muted-foreground))" strokeWidth={1.0} className="opacity-30 my-2" />

      <EmpathySection variant="mist" delay={0} as="div">
        <ResourcesSection />
      </EmpathySection>

      <LineArtDivider art="ripple" color="hsl(var(--primary))" strokeWidth={1.0} maxWidth={280} className="opacity-40" />

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
