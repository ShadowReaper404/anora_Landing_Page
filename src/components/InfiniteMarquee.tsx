/**
 * InfiniteMarquee.tsx
 *
 * Two infinite-scrolling rows of testimonial pills moving in
 * opposite directions — the same effect used by Linear, Vercel, etc.
 * No external libraries. Pure CSS + React.
 */

const reviews = [
  { text: "Anora helped me find peace at 2 AM when I had no one to call.", name: "Sarah M.", rating: 5 },
  { text: "The volunteer I spoke with changed everything. I finally felt heard.", name: "James K.", rating: 5 },
  { text: "I was skeptical, but this platform is genuinely different.", name: "Maria L.", rating: 5 },
  { text: "Being anonymous meant I could finally be completely honest.", name: "Alex T.", rating: 5 },
  { text: "My therapist here has helped me more than years of avoidance.", name: "Rachel P.", rating: 5 },
  { text: "I thought no one would understand. Anora proved me wrong.", name: "Daniel R.", rating: 5 },
  { text: "The 24/7 availability is a lifeline when professionals are asleep.", name: "Priya S.", rating: 5 },
  { text: "Safe, warm, and no pressure. Exactly what I needed.", name: "Chris W.", rating: 5 },
  { text: "The moment I hit send, I felt less alone. That's everything.", name: "Emma B.", rating: 5 },
  { text: "I never thought I'd talk about this. Anora gave me the courage.", name: "Leo M.", rating: 5 },
];

const StarRow = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-1.5">
    {[...Array(count)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ReviewPill = ({ text, name, rating }: typeof reviews[0]) => (
  <div className="flex-shrink-0 w-72 md:w-80 p-5 rounded-2xl bg-white border border-border/70 shadow-sm mx-3 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20 transition-all duration-300">
    <StarRow count={rating} />
    <p className="text-foreground/85 text-sm font-medium leading-relaxed italic mb-3">"{text}"</p>
    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">— {name}</p>
  </div>
);

// Split into two halves for two rows
const top    = reviews.slice(0, Math.ceil(reviews.length / 2));
const bottom = reviews.slice(Math.ceil(reviews.length / 2));

interface RowProps {
  items: typeof reviews;
  /** "left" scrolls → left (default), "right" scrolls ← right */
  direction: "left" | "right";
  speed?: number; // seconds for one full pass
}

const MarqueeRow = ({ items, direction, speed = 28 }: RowProps) => {
  // Duplicate so the loop is seamless
  const doubled = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden">
      {/* Fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />

      <div
        className="flex w-max"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((r, i) => (
          <ReviewPill key={i} {...r} />
        ))}
      </div>
    </div>
  );
};

const InfiniteMarquee = () => (
  <section className="py-16 md:py-24 overflow-hidden bg-background">
    {/* Keyframe styles injected inline */}
    <style>{`
      @keyframes marquee-left {
        from { transform: translateX(0); }
        to   { transform: translateX(-33.333%); }
      }
      @keyframes marquee-right {
        from { transform: translateX(-33.333%); }
        to   { transform: translateX(0); }
      }
    `}</style>

    <div className="container px-4 mx-auto mb-10 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-3">What people say</p>
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
        Stories of <span className="text-primary">Hope &amp; Healing</span>
      </h2>
      <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto font-medium">
        Real experiences from people who found support through Anora. Names changed for privacy.
      </p>
    </div>

    <div className="flex flex-col gap-4">
      <MarqueeRow items={top}    direction="left"  speed={30} />
      <MarqueeRow items={bottom} direction="right" speed={24} />
    </div>
  </section>
);

export default InfiniteMarquee;
