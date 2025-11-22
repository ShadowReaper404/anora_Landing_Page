import Hero from "@/components/Hero";
import ConnectionOptions from "@/components/ConnectionOptions";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";
import SOSButton from "@/components/SOSButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ConnectionOptions />
      <TrustSection />
      <Footer />
      <SOSButton />
    </div>
  );
};

export default Index;
