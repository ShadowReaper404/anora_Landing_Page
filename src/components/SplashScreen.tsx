import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

const calmingQuotes = [
  "You are not alone in this moment.",
  "Your feelings are valid.",
  "It's okay to not be okay.",
  "Healing is not linear.",
  "You are worthy of support.",
  "Every breath is a new beginning.",
  "Your presence here matters.",
  "Be gentle with yourself today.",
];

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [quote, setQuote] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    // Select a random quote
    const randomIndex = Math.floor(Math.random() * calmingQuotes.length);
    setQuoteIndex(randomIndex);
    
    // Fade in quote after a brief delay
    const quoteTimer = setTimeout(() => {
      setQuote(calmingQuotes[randomIndex]);
    }, 300);

    // Start fade out animation
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3500);

    // Complete splash screen
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(quoteTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Solid gradient background with gentle animation */}
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
        {/* Animated overlay layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100/60 via-transparent to-pink-100/60 animate-breathe" />
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-100/40 via-purple-50/30 to-violet-100/40 animate-breathe-slow" />
        
        {/* Elegant floating orbs with better visibility */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-300/30 to-violet-400/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-pink-300/30 to-rose-400/30 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-3xl">
        {/* Logo with elegant pulse and glow */}
        <div className="mb-12 animate-fade-in">
          <div className="relative">
            {/* Glow effect behind heart */}
            <div className="absolute inset-0 bg-purple-400/30 blur-2xl rounded-full scale-150 animate-pulse-gentle" />
            <Heart 
              className="relative h-20 w-20 text-purple-500 drop-shadow-lg animate-pulse-gentle" 
              fill="currentColor" 
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Quote with better typography and shadow */}
        <p
          className={`text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 leading-relaxed transition-opacity duration-1000 drop-shadow-sm tracking-wide ${
            quote ? "opacity-100" : "opacity-0"
          }`}
          style={{ fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif" }}
        >
          {quote}
        </p>

        {/* Breathing guide with enhanced design */}
        <div className="mt-16 flex flex-col items-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-breathe-dot shadow-lg" />
            <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-breathe-dot shadow-lg" style={{ animationDelay: "1.3s" }} />
            <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-breathe-dot shadow-lg" style={{ animationDelay: "2.6s" }} />
          </div>
          <span className="text-base text-gray-600 font-light tracking-wider">Breathe</span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
