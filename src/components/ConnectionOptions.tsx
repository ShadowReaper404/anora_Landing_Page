import { MessageCircle, Heart, Stethoscope } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import anonymousImage from "@/assets/anonymous-chat.png";
import volunteersImage from "@/assets/volunteers.png";
import professionalsImage from "@/assets/professionals.png";

const options = [
  {
    icon: MessageCircle,
    image: anonymousImage,
    title: "Anonymous Peer Support",
    description: "Connect with others who understand what you're going through. Share experiences in a judgment-free space with complete anonymity.",
    features: ["24/7 Availability", "100% Anonymous", "Peer Support"],
    buttonText: "Start Chatting"
  },
  {
    icon: Heart,
    image: volunteersImage,
    title: "Verified Volunteers",
    description: "Talk to trained volunteers who are here to listen and support you. All volunteers are verified and equipped with active listening skills.",
    features: ["Trained Listeners", "Background Checked", "Compassionate Support"],
    buttonText: "Connect with Volunteer"
  },
  {
    icon: Stethoscope,
    image: professionalsImage,
    title: "Licensed Professionals",
    description: "Book sessions with licensed therapists, counselors, and mental health professionals for expert guidance and treatment.",
    features: ["Licensed Experts", "Confidential Sessions", "Professional Care"],
    buttonText: "Book Session"
  }
];

const ConnectionOptions = () => {
  return (
    <section id="help" className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Choose Your Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you need someone to talk to right now or professional guidance, we're here for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {options.map((option) => (
            <Card 
              key={option.title}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border bg-card flex flex-col group cursor-pointer"
            >
              <div className="mb-6 flex justify-center">
                <img 
                  src={option.image} 
                  alt={option.title}
                  className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                <option.icon className="h-5 w-5 text-primary" />
                {option.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 flex-grow">
                {option.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {option.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <Button variant="default" className="w-full">
                {option.buttonText}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectionOptions;
