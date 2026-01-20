import { useEffect, useState } from "react";

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
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [quotes, setQuotes] = useState<string[]>([]);
  const [displayedText, setDisplayedText] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Select quotes immediately
  const selectedQuotes = useState(() => {
    const shuffled = [...calmingQuotes].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2);
  })[0];

  // Typewriter effect
  useEffect(() => {
    const currentQuote = selectedQuotes[currentQuoteIndex] || "";
    let charIndex = 0;
    setDisplayedText("");
    setIsTyping(true);

    const typewriterInterval = setInterval(() => {
      if (charIndex <= currentQuote.length) {
        setDisplayedText(currentQuote.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typewriterInterval);
        setIsTyping(false);
      }
    }, 50);

    return () => clearInterval(typewriterInterval);
  }, [currentQuoteIndex, selectedQuotes]);

  // Ripple effect
  useEffect(() => {
    const rippleInterval = setInterval(() => {
      const newRipple = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
      };
      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 2000);
    }, 800);

    return () => clearInterval(rippleInterval);
  }, []);

  useEffect(() => {
    // Quote transition timing
    const quoteTransition = setTimeout(() => {
      setCurrentQuoteIndex(1);
    }, 3000);

    // Start fade out animation
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 6000);

    // Complete splash screen
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 7000);

    return () => {
      clearTimeout(quoteTransition);
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
        
        {/* Ripple effects */}
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute w-4 h-4 rounded-full animate-ripple pointer-events-none"
            style={{
              left: `${ripple.x}%`,
              top: `${ripple.y}%`,
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
            }}
          />
        ))}
        
        {/* Elegant floating orbs with better visibility */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-300/30 to-violet-400/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-pink-300/30 to-rose-400/30 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-full h-full">
        {/* Quote overlay */}
        <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center max-w-3xl">
          {/* Quote with typewriter and gradient animation */}
          <div className="min-h-[200px] flex items-center justify-center">
            <p
              className="text-3xl md:text-4xl lg:text-5xl font-medium leading-relaxed"
              style={{ 
                fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
                background: 'linear-gradient(135deg, #6d28d9 0%, #a855f7 50%, #ec4899 100%)',
                backgroundSize: '200% 200%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 3s ease infinite',
                textShadow: 'none',
              }}
            >
              "{displayedText}
              {isTyping && <span className="animate-pulse">|</span>}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
