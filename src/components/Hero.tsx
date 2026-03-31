import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      
      {/* Dynamic Background Subtlety */}
      <div className="absolute inset-0 z-0 bg-background/40 backdrop-blur-[1px]"></div>

      {/* Floating Glass Orbs/Shapes */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-[64px] opacity-70 animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/40 rounded-full mix-blend-multiply filter blur-[64px] opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>

      {/* Main Glass Panel */}
      <div className="container relative z-10 px-4 py-20 flex justify-center">
        <div className="relative w-full max-w-5xl p-8 md:p-14 lg:p-20 rounded-[2.5rem] bg-white/10 backdrop-blur-2xl border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] overflow-hidden">
          
          {/* Subtle Inner Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>

          <div className="relative z-20 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-semibold text-foreground leading-[1.1] tracking-tight mb-6 animate-fade-in drop-shadow-sm">
              You're Not <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-500">Alone.</span>
            </h1>
            <p className="text-lg md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in font-medium leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Discover compassionate care, guided support, and a community that understands you. Start your journey to mental well-being today with Anora.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button
                size="lg"
                className="text-lg px-8 py-7 rounded-full bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 font-semibold"
                onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-7 rounded-full bg-white/20 backdrop-blur-md text-foreground border-white/40 hover:bg-white/50 hover:text-primary hover:-translate-y-1 hover:scale-105 transition-all duration-300 font-semibold shadow-sm"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Floating Micro-UI Elements within Card */}
          <div className="hidden md:flex absolute top-12 left-10 items-center gap-2 bg-white/30 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/30 shadow-sm animate-float hover:scale-110 transition-transform duration-300 cursor-default" style={{ animationDelay: "0.5s", animationDuration: "5s" }}>
            <Heart className="w-5 h-5 text-rose-500" fill="currentColor" />
            <span className="text-sm font-semibold text-foreground/90">Compassionate</span>
          </div>

          <div className="hidden md:flex absolute bottom-16 right-10 items-center gap-2 bg-white/30 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/30 shadow-sm animate-float hover:scale-110 transition-transform duration-300 cursor-default" style={{ animationDelay: "1.2s", animationDuration: "6s" }}>
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-semibold text-foreground/90">Verified Experts</span>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
