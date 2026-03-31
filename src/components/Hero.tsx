import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mental-health.jpg";
import { Heart, MessageCircle, ShieldCheck, CheckCircle2, Lock } from "lucide-react";

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
              <Lock className="w-4 h-4 fill-primary/20" />
              <span>100% Private & Anonymous</span>
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
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-medium max-w-lg">
              Connect with compassionate listeners, trained volunteers, and licensed professionals. Start your journey to mental well-being in a confidential, judgment-free space.
            </p>

            {/* TRUST BULLET POINTS */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10">
               <div className="flex items-center gap-2 text-sm text-foreground/90 font-semibold bg-white px-3 py-1.5 rounded-full shadow-sm border border-border/60">
                 <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 
                 Verified Experts
               </div>
               <div className="flex items-center gap-2 text-sm text-foreground/90 font-semibold bg-white px-3 py-1.5 rounded-full shadow-sm border border-border/60">
                 <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 
                 24/7 Availability
               </div>
               <div className="flex items-center gap-2 text-sm text-foreground/90 font-semibold bg-white px-3 py-1.5 rounded-full shadow-sm border border-border/60">
                 <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 
                 Zero Judgment
               </div>
            </div>
            
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
            
            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground font-medium border-t border-border/60 pt-6">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-primary"><MessageCircle className="w-4 h-4" /></div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center text-primary"><ShieldCheck className="w-4 h-4" /></div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-accent flex items-center justify-center text-primary"><Heart className="w-4 h-4 fill-primary text-primary" /></div>
              </div>
              <p>Join over <strong className="text-foreground font-bold">10,000+</strong> individuals who found peace.</p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in lg:ml-auto mt-12 lg:mt-0" style={{ animationDelay: "0.4s" }}>
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-secondary rounded-[3rem] transform rotate-3 scale-105 -z-10 transition-transform duration-700 hover:rotate-6"></div>
            
            <div className="relative rounded-[3rem] overflow-hidden border border-border/50 shadow-2xl bg-white max-w-[500px] mx-auto aspect-[4/5] object-cover focus-within:ring-2 focus-within:ring-primary">
              <img
                src={heroImage}
                alt="Mental health support - peaceful nature scene"
                className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent opacity-80" />
              
              {/* Floating Review 1 (Bottom, Full Width) */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/40 animate-float" style={{ animationDelay: "1s", animationDuration: "5s" }}>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full uppercase tracking-wider">
                     <CheckCircle2 className="w-3 h-3" /> Verified
                  </div>
                </div>
                <p className="text-foreground/90 font-medium text-sm leading-relaxed italic">
                  "Anora gave me the courage to speak up when I needed it most. Exploring my feelings here feels incredibly safe."
                </p>
              </div>

              {/* Floating Review 2 (Top Right, Compact) */}
              <div className="hidden sm:block absolute top-8 right-6 w-52 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40 animate-float" style={{ animationDelay: "2.5s", animationDuration: "6s" }}>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                  ))}
                </div>
                <p className="text-foreground/90 font-medium text-xs leading-relaxed italic">
                  "The listeners are incredible. Felt understood immediately."
                </p>
                <p className="text-[10px] text-muted-foreground mt-2 font-bold uppercase tracking-wider">- Sarah J.</p>
              </div>

              {/* Floating Review 3 (Mid Left, Avatar style) */}
              <div className="hidden lg:flex absolute top-[40%] left-6 items-center gap-3 bg-white/95 backdrop-blur-md p-2.5 pr-5 rounded-full shadow-xl border border-white/40 animate-float hover:scale-105 transition-transform" style={{ animationDelay: "0s", animationDuration: "4.5s" }}>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-heading font-bold shadow-inner">M</div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-foreground/90 font-bold text-xs leading-none">"Life changing."</p>
                </div>
              </div>

            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
