/**
 * ScrollProgressBar.tsx
 *
 * A 2px-thin progress bar fixed to the very top of the viewport
 * that fills from left to right as the user scrolls down the page.
 * Uses hsl(var(--primary)) with a soft glow shadow.
 */
import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[99998] h-[3px] pointer-events-none"
    >
      <div
        className="h-full bg-primary transition-none"
        style={{
          width: `${progress}%`,
          boxShadow: "0 0 10px 1px hsl(var(--primary) / 0.5), 0 0 20px 2px hsl(var(--primary) / 0.25)",
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
