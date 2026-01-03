import { Shield, Lock, HeartHandshake, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const features = [
  {
    icon: Shield,
    title: "Evidence-Based Approach",
    description: "Developed with input from licensed therapists, psychologists, and peer support specialists."
  },
  {
    icon: Lock,
    title: "Privacy by Design",
    description: "Built from the ground up with end-to-end encryption and HIPAA compliance standards in mind."
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Team",
    description: "Founded by individuals with lived experience in mental health challenges and recovery."
  },
  {
    icon: Award,
    title: "Rigorous Vetting",
    description: "Every helper will undergo background checks, training, and ongoing supervision before launch."
  }
];

const TrustSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Your Well-being, Our Promise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're building a platform where safety, privacy, and expert support come first. Here's what makes us different.
          </p>
        </div>

        <TooltipProvider>
          <div
            ref={ref}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {features.map((feature, index) => (
              <Tooltip key={feature.title}>
                <TooltipTrigger asChild>
                  <div
                    className={`text-center p-6 rounded-lg hover:bg-accent/50 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group ${
                      isVisible ? "animate-fade-in" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to learn more about {feature.title.toLowerCase()}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default TrustSection;
