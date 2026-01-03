import { MessageCircle, Heart, Stethoscope, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import anonymousImage from "@/assets/anonymous-chat.png";
import volunteersImage from "@/assets/volunteers.png";
import professionalsImage from "@/assets/professionals.png";

const options = [
  {
    icon: MessageCircle,
    image: anonymousImage,
    imageAlt: "Anonymous peer support - secure chat interface",
    title: "Anonymous Peer Support",
    description: "Connect with others who understand what you're going through. Share experiences in a judgment-free space with complete anonymity.",
    features: ["24/7 Availability", "100% Anonymous", "Peer Support"],
    buttonText: "Start Chatting",
    buttonVariant: "default" as const,
    badge: "Free"
  },
  {
    icon: Heart,
    image: volunteersImage,
    imageAlt: "Verified volunteers - trained listeners ready to help",
    title: "Verified Volunteers",
    description: "Talk to trained volunteers who are here to listen and support you. All volunteers are verified and equipped with active listening skills.",
    features: ["Trained Listeners", "Background Checked", "Compassionate Support"],
    buttonText: "Connect with Volunteer",
    buttonVariant: "default" as const,
    badge: "Free"
  },
  {
    icon: Stethoscope,
    image: professionalsImage,
    imageAlt: "Licensed professionals - expert mental health care",
    title: "Licensed Professionals",
    description: "Book sessions with licensed therapists, counselors, and mental health professionals for expert guidance and treatment.",
    features: ["Licensed Experts", "Confidential Sessions", "Professional Care"],
    buttonText: "Book Session",
    buttonVariant: "default" as const,
    badge: "Premium"
  }
];

const ConnectionOptions = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="help" className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground flex items-center justify-center gap-2">
            <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            Choose Your Path to Wellness
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multiple ways to connect, all designed with your comfort and needs in mind.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {options.map((option, index) => (
            <Card
              key={option.title}
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-border/50 group flex flex-col ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={option.image}
                  alt={option.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                <Badge className={`absolute top-4 right-4 group-hover:scale-110 transition-transform duration-200 ${
                  option.badge === "Premium" 
                    ? "bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold shadow-lg shadow-yellow-500/50" 
                    : "bg-primary text-primary-foreground"
                }`}>
                  {option.badge}
                </Badge>
              </div>

              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <option.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                    {option.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base">
                  {option.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full group-hover:scale-105 transition-transform duration-200"
                  variant={option.buttonVariant}
                >
                  {option.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectionOptions;
