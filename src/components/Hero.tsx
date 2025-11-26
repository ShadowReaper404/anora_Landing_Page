import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mental-health.jpg";
import { Heart, MessageCircle, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mental health support - peaceful nature scene"
          className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/80" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <Heart className="absolute top-1/4 left-1/4 text-white/20 w-12 h-12 animate-float" style={{ animationDelay: "0s" }} />
        <MessageCircle className="absolute top-1/3 right-1/4 text-white/20 w-16 h-16 animate-float" style={{ animationDelay: "1s", animationDuration: "4s" }} />
        <Users className="absolute bottom-1/3 left-1/3 text-white/20 w-14 h-14 animate-float" style={{ animationDelay: "0.5s", animationDuration: "3.5s" }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
          You're Not Alone
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in drop-shadow-md" style={{ animationDelay: "0.2s" }}>
          Connect with compassionate listeners, trained volunteers, and licensed professionals who understand what you're going through.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button
            variant="hero"
            size="lg"
            className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200"
            onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started - It's Free
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 bg-white/10 text-white border-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-200"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
