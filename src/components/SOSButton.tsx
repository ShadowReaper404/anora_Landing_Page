import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const SOSButton = () => {
  const handleSOSClick = () => {
    // This would connect to emergency services or crisis hotline
    alert("Connecting to emergency support...\n\nNational Suicide Prevention Lifeline: 988\nCrisis Text Line: Text HOME to 741741");
  };

  return (
    <Button
      variant="sos"
      size="lg"
      onClick={handleSOSClick}
      className="fixed bottom-8 right-8 z-50 rounded-full h-16 w-16 p-0 shadow-2xl hover:scale-110 transition-transform duration-200 animate-pulse hover:animate-none"
      aria-label="Emergency SOS - Get immediate help"
    >
      <Phone className="h-6 w-6 animate-[wiggle_1s_ease-in-out_infinite]" />
    </Button>
  );
};

export default SOSButton;
