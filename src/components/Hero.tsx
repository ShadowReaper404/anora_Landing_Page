import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mental-health.jpg";
import { Heart, MessageCircle, ShieldCheck, CheckCircle2, Lock, ChevronDown } from "lucide-react";

// ─── Mood Configuration ───────────────────────────────────────────────────────
type MoodKey = "choose" | "overwhelmed" | "anxious" | "lonely" | "hopeless" | "sad" | "numb";

interface Mood {
  label: string;
  emoji: string;
  blobColor: string;        // tailwind colour for the decorative background blobs
  accentBg: string;         // tailwind bg for the mood pill
  accentText: string;       // tailwind text for the mood pill
  headline: string;
  subtext: string;
  cta: string;
}

const MOODS: Record<MoodKey, Mood> = {
  choose: {
    label: "…",
    emoji: "💭",
    blobColor: "bg-secondary",
    accentBg: "bg-primary/10",
    accentText: "text-primary",
    headline: "Find Support.",
    subtext: "Connect with compassionate listeners, trained volunteers, and licensed professionals. Start your journey to mental well-being in a confidential, judgment-free space.",
    cta: "Get Started Free",
  },
  overwhelmed: {
    label: "Overwhelmed",
    emoji: "🌊",
    blobColor: "bg-blue-200",
    accentBg: "bg-blue-100",
    accentText: "text-blue-700",
    headline: "It's okay to pause. We'll carry this together.",
    subtext: "When everything feels like too much, you don't have to face it alone. Anora's compassionate listeners are here to help you slow down, breathe, and find your footing again.",
    cta: "Find My Calm",
  },
  anxious: {
    label: "Anxious",
    emoji: "💨",
    blobColor: "bg-violet-200",
    accentBg: "bg-violet-100",
    accentText: "text-violet-700",
    headline: "Your anxiety is valid. Let's navigate it together.",
    subtext: "Anxiety can make the world feel out of control. Our trained volunteers and therapists understand what you're going through and will help you find steady ground.",
    cta: "Talk to Someone",
  },
  lonely: {
    label: "Lonely",
    emoji: "🌙",
    blobColor: "bg-indigo-200",
    accentBg: "bg-indigo-100",
    accentText: "text-indigo-700",
    headline: "You are seen. You are not invisible.",
    subtext: "Loneliness can be heavy. Anora connects you instantly with peers who genuinely get it — real human connection, on your terms, whenever you need it most.",
    cta: "Connect Now",
  },
  hopeless: {
    label: "Hopeless",
    emoji: "🕯️",
    blobColor: "bg-rose-200",
    accentBg: "bg-rose-100",
    accentText: "text-rose-700",
    headline: "Even in darkness, you matter deeply.",
    subtext: "If you're feeling hopeless, please reach out — to us, or to a crisis line. You are not a burden. There are people right here who want to listen and support you right now.",
    cta: "Reach Out Now",
  },
  sad: {
    label: "Sad",
    emoji: "🌧️",
    blobColor: "bg-sky-200",
    accentBg: "bg-sky-100",
    accentText: "text-sky-700",
    headline: "Sadness is part of being human. You're not broken.",
    subtext: "Feeling sad is real and it's okay to sit with it. Anora gives you a safe, private space to express how you feel — and to slowly find warmth again, at your own pace.",
    cta: "Start Healing",
  },
  numb: {
    label: "Numb",
    emoji: "🫙",
    blobColor: "bg-stone-200",
    accentBg: "bg-stone-100",
    accentText: "text-stone-600",
    headline: "Feeling nothing is still feeling something.",
    subtext: "Numbness can be its own kind of pain. Whether you want to talk or simply sit in silent company, Anora is here — no pressure, no performance, just presence.",
    cta: "I Need Someone",
  },
};

const MOOD_OPTIONS: MoodKey[] = ["overwhelmed", "anxious", "lonely", "hopeless", "sad", "numb"];

// ─── Typewriter hook ──────────────────────────────────────────────────────────
function useTypewriter(text: string, speed = 35) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return displayed;
}

// ─── Star row helper ──────────────────────────────────────────────────────────
const StarRow = ({ count = 5, size = "w-5 h-5" }) => (
  <div className="flex gap-1.5">
    {[...Array(count)].map((_, i) => (
      <svg key={i} className={`${size} text-amber-400 fill-current`} viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// ─── Hero Component ───────────────────────────────────────────────────────────
const Hero = () => {
  const [activeMood, setActiveMood] = useState<MoodKey>("choose");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const mood = MOODS[activeMood];
  const displayedHeadline = useTypewriter(mood.headline, 32);

  const selectMood = (key: MoodKey) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveMood(key);
      setIsTransitioning(false);
    }, 250);
    setDropdownOpen(false);
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden transition-colors duration-700"
    >
      {/* ── Ambient blob that morphs colour with mood ── */}
      <div
        className={`absolute -top-32 -left-32 w-[480px] h-[480px] ${mood.blobColor} rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float pointer-events-none transition-colors duration-700`}
      />
      <div
        className={`absolute -bottom-40 -right-20 w-[400px] h-[400px] ${mood.blobColor} rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float pointer-events-none transition-colors duration-700`}
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── Left Column ── */}
          <div className="max-w-2xl animate-fade-in relative">

            {/* Privacy pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8 shadow-sm border border-primary/20">
              <Lock className="w-4 h-4" />
              <span>100% Private &amp; Anonymous</span>
            </div>

            {/* ── Mood selector ── */}
            <div className="mb-6">
              <p className="text-base text-muted-foreground font-medium mb-3">Right now, I am feeling…</p>
              <div className="relative inline-block">
                <button
                  onClick={() => setDropdownOpen(o => !o)}
                  className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl border-2 font-heading font-bold text-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/40 ${mood.accentBg} ${mood.accentText} border-current/20`}
                  aria-haspopup="listbox"
                  aria-expanded={dropdownOpen}
                  id="mood-trigger"
                >
                  <span className="text-2xl">{mood.emoji}</span>
                  <span>{activeMood === "choose" ? "Choose your mood" : mood.label}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div
                    role="listbox"
                    aria-labelledby="mood-trigger"
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-border/60 z-50 overflow-hidden animate-fade-in"
                  >
                    {MOOD_OPTIONS.map(key => {
                      const m = MOODS[key];
                      return (
                        <button
                          key={key}
                          role="option"
                          aria-selected={activeMood === key}
                          onClick={() => selectMood(key)}
                          className={`w-full flex items-center gap-3 px-5 py-3.5 text-left hover:bg-secondary/60 transition-colors duration-150 font-semibold text-base ${activeMood === key ? "bg-secondary/80 text-primary" : "text-foreground"}`}
                        >
                          <span className="text-xl">{m.emoji}</span>
                          <span>{m.label}</span>
                          {activeMood === key && <CheckCircle2 className="w-4 h-4 ml-auto text-primary" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* ── Dynamic Headline (typewriter) ── */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] tracking-tight mb-6 min-h-[8rem] transition-opacity duration-250 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
            >
              <span className="text-primary">
                {displayedHeadline}
                {/* blinking cursor */}
                <span className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 align-middle animate-pulse" />
              </span>
            </h1>

            {/* ── Dynamic subtext ── */}
            <p
              className={`text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-medium max-w-lg transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
            >
              {mood.subtext}
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />, label: "Verified Experts" },
                { icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />, label: "24/7 Availability" },
                { icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />, label: "Zero Judgment" },
              ].map(c => (
                <div key={c.label} className="flex items-center gap-2 text-sm text-foreground/90 font-semibold bg-white px-4 py-2 rounded-full shadow-sm border border-border/60">
                  {c.icon} {c.label}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 items-start sm:items-center transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
              <Button
                size="lg"
                className="text-lg px-8 py-7 rounded-full bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 font-semibold w-full sm:w-auto"
                onClick={() => document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })}
              >
                {mood.cta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-7 rounded-full bg-white text-foreground border-border hover:bg-secondary/50 hover:text-primary hover:-translate-y-1 hover:scale-105 transition-all duration-300 font-semibold shadow-sm w-full sm:w-auto"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground font-medium border-t border-border/60 pt-6">
              <div className="flex -space-x-3">
                {[
                  { bg: "bg-secondary", icon: <MessageCircle className="w-4 h-4" /> },
                  { bg: "bg-primary/20", icon: <ShieldCheck className="w-4 h-4" /> },
                  { bg: "bg-accent", icon: <Heart className="w-4 h-4 fill-primary text-primary" /> },
                ].map((a, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-background ${a.bg} flex items-center justify-center text-primary`}>{a.icon}</div>
                ))}
              </div>
              <p>Join over <strong className="text-foreground font-bold">10,000+</strong> individuals who found peace.</p>
            </div>
          </div>

          {/* ── Right Column – Image ── */}
          <div className="relative animate-fade-in lg:ml-auto mt-12 lg:mt-0" style={{ animationDelay: "0.4s" }}>
            <div className={`absolute inset-0 ${mood.blobColor} rounded-[3rem] transform rotate-3 scale-105 -z-10 transition-all duration-700 hover:rotate-6`} />

            <div className="relative rounded-[3rem] overflow-hidden border border-border/50 shadow-2xl bg-white max-w-[500px] mx-auto aspect-[4/5]">
              <img
                src={heroImage}
                alt="Mental health support – peaceful nature scene"
                className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent opacity-80" />

              {/* Review 1 – Bottom */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/40 animate-float" style={{ animationDelay: "1s", animationDuration: "5s" }}>
                <div className="flex justify-between items-start mb-3">
                  <StarRow />
                  <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full uppercase tracking-wider">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </div>
                </div>
                <p className="text-foreground/90 font-medium text-sm leading-relaxed italic">
                  "Anora gave me the courage to speak up when I needed it most. Exploring my feelings here feels incredibly safe."
                </p>
              </div>

              {/* Review 2 – Top Right */}
              <div className="hidden sm:block absolute top-8 right-6 w-52 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40 animate-float" style={{ animationDelay: "2.5s", animationDuration: "6s" }}>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Heart key={i} className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />)}
                </div>
                <p className="text-foreground/90 font-medium text-xs leading-relaxed italic">
                  "The listeners are incredible. Felt understood immediately."
                </p>
                <p className="text-[10px] text-muted-foreground mt-2 font-bold uppercase tracking-wider">– Sarah J.</p>
              </div>

              {/* Review 3 – Mid Left – Avatar pill */}
              <div className="hidden lg:flex absolute top-[40%] left-6 items-center gap-3 bg-white/95 backdrop-blur-md p-2.5 pr-5 rounded-full shadow-xl border border-white/40 animate-float hover:scale-105 transition-transform" style={{ animationDelay: "0s", animationDuration: "4.5s" }}>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-heading font-bold shadow-inner">M</div>
                <div>
                  <StarRow count={5} size="w-3 h-3" />
                  <p className="text-foreground/90 font-bold text-xs leading-tight mt-0.5">"Life changing."</p>
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
