import { useEffect, useRef, useState, useCallback } from "react";

// ─── Original hook (kept for backward compat in ConnectionOptions & TrustSection) ───
export const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

// ─── Rich Empathy Reveal hook ─────────────────────────────────────────────────
/**
 * Returns:
 *  ref        – attach to the section container
 *  isVisible  – true once the element first enters the viewport
 *  progress   – 0→1 representing how far the element has scrolled into view
 *  direction  – 'up' | 'down'  (direction user was scrolling when revealed)
 */
export const useEmpathyReveal = (options?: {
  threshold?: number;
  rootMargin?: string;
}) => {
  const { threshold = 0.08, rootMargin = "0px 0px -60px 0px" } = options ?? {};
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const lastScrollY = useRef(window.scrollY);

  // Detect scroll direction
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setDirection(current > lastScrollY.current ? "down" : "up");
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection + progress
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
      setProgress(Math.min(Math.max(entry.intersectionRatio, 0), 1));
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: Array.from({ length: 21 }, (_, i) => i / 20), // 0 → 1 in steps of 0.05
      rootMargin,
    });
    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [handleIntersection, rootMargin]);

  return { ref, isVisible, progress, direction };
};
