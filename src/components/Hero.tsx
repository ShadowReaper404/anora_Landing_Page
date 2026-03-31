import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mental-health.jpg";
import { Heart, MessageCircle, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="max-w-2xl animate-fade-in relative z-10">
            {/* Soft decorative blob */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-float pointer-events-none"></div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 shadow-sm border border-primary/20">
              <Heart className="w-4 h-4 fill-primary" />
              <span>A Safe Space for Healing</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.1] tracking-tight mb-8">
              Find Support. <br />
              <span className="text-primary relative inline-block">
                Feel Understood.
                {/* Custom organic underline */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-medium max-w-lg">
              Connect with compassionate listeners, trained volunteers, and licensed professionals. Start your journey to mental well-being in a confidential, judgment-free space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                size="lg"
                className="text-lg px-8 py-7 rounded-full bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 font-semibold w-full sm:w-auto"
                onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-7 rounded-full bg-white text-foreground border-border hover:bg-secondary/50 hover:text-primary hover:-translate-y-1 hover:scale-105 transition-all duration-300 font-semibold shadow-sm w-full sm:w-auto"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground font-medium">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-primary"><MessageCircle className="w-4 h-4" /></div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center text-primary"><ShieldCheck className="w-4 h-4" /></div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-accent flex items-center justify-center text-primary"><Heart className="w-4 h-4 fill-primary text-primary" /></div>
              </div>
              <p>Trusted by over <strong className="text-foreground">10,000+</strong> users</p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in lg:ml-auto" style={{ animationDelay: "0.4s" }}>
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-secondary rounded-[3rem] transform rotate-3 scale-105 -z-10 transition-transform duration-700 hover:rotate-6"></div>
            
            <div className="relative rounded-[3rem] overflow-hidden border border-border/50 shadow-2xl bg-white max-w-[500px] mx-auto aspect-[4/5] object-cover">
              <img
                src={heroImage}
                alt="Mental health support - peaceful nature scene"
                className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent opacity-80" />
              
              {/* Floating review card */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-white/20 animate-float" style={{ animationDelay: "1s", animationDuration: "5s" }}>
                <div className="flex gap-3 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground font-medium text-sm leading-relaxed">
                  "Anora gave me the courage to speak up when I needed it most. Exploring my feelings here feels incredibly safe."
                </p>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
