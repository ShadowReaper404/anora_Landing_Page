import { Shield, Lock, Clock, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your privacy is our priority. All conversations are encrypted and confidential."
  },
  {
    icon: Lock,
    title: "Anonymous Options",
    description: "Choose to remain completely anonymous or share as much as you're comfortable with."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Someone is always available to listen, no matter the time of day or night."
  },
  {
    icon: CheckCircle,
    title: "Verified Helpers",
    description: "All volunteers and professionals are thoroughly vetted and trained."
  }
];

const TrustSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Your Well-being, Our Commitment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've built a platform where safety, privacy, and support come first.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="text-center p-6 rounded-lg hover:bg-accent/50 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
