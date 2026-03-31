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

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* 🖱️ Global mouse-following ambient glow – updates CSS vars */}
      <MouseSpotlight />

      <Navbar />

      {/* ── Hero (self-animated + 3D tilt on image) ── */}
      <Hero />

      {/* ╌╌╌ Ripple: calm arriving ╌╌╌ */}
      <LineArtDivider
        art="ripple"
        color="hsl(var(--primary))"
        strokeWidth={1.2}
        maxWidth={400}
        className="opacity-60"
      />

      {/* ── Connection options ── */}
      <EmpathySection variant="rise" delay={0} as="div">
        <ConnectionOptions />
      </EmpathySection>

      {/* ╌╌╌ Wave ╌╌╌ */}
      <LineArtDivider
        art="wave"
        color="hsl(var(--primary))"
        strokeWidth={1.5}
        className="opacity-50"
      />

      {/* ── Stats ── */}
      <EmpathySection variant="breathe" delay={60} as="div">
        <StatsSection />
      </EmpathySection>

      {/* ╌╌╌ Bloom ╌╌╌ */}
      <LineArtDivider
        art="bloom"
        color="hsl(var(--primary))"
        strokeWidth={1.2}
        maxWidth={140}
        className="opacity-60 my-2"
      />

      {/* ── Trust pillars ── */}
      <EmpathySection variant="drift-left" delay={0} as="div">
        <TrustSection />
      </EmpathySection>

      {/* ╌╌╌ Breath guide ╌╌╌ */}
      <LineArtDivider
        art="breath"
        color="hsl(var(--primary))"
        strokeWidth={1.0}
        maxWidth={140}
        className="opacity-50 my-2"
      />

      {/* ── Team ── */}
      <EmpathySection variant="rise" delay={80} as="div">
        <TeamSection />
      </EmpathySection>

      {/* ╌╌╌ Constellation ╌╌╌ */}
      <LineArtDivider
        art="constellation"
        color="hsl(var(--primary))"
        strokeWidth={1.0}
        className="opacity-40 my-2"
      />

      {/* 🎟️ INFINITE DUAL-ROW MARQUEE (replaces standard testimonials carousel) */}
      <EmpathySection variant="drift-right" delay={0} as="div">
        <InfiniteMarquee />
      </EmpathySection>

      {/* ╌╌╌ Soft wave ╌╌╌ */}
      <LineArtDivider
        art="wave"
        color="hsl(var(--muted-foreground))"
        strokeWidth={1.0}
        className="opacity-30 my-2"
      />

      {/* ── Resources ── */}
      <EmpathySection variant="mist" delay={0} as="div">
        <ResourcesSection />
      </EmpathySection>

      {/* ╌╌╌ Ripple ╌╌╌ */}
      <LineArtDivider
        art="ripple"
        color="hsl(var(--primary))"
        strokeWidth={1.0}
        maxWidth={280}
        className="opacity-40"
      />

      {/* ── FAQ ── */}
      <EmpathySection variant="rise" delay={60} as="div">
        <FAQSection />
      </EmpathySection>

      {/* ── Footer ── */}
      <EmpathySection variant="mist" delay={0} as="div">
        <Footer />
      </EmpathySection>

      <SOSButton />
    </div>
  );
};

export default Index;
