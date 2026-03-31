/**
 * CustomCursor.tsx
 *
 * Replaces the native browser cursor with:
 *  • A large (44px) soft-glowing circle that spring-lags behind the real position
 *  • A small (8px) precise dot that tracks exactly
 *
 * Behaviour:
 *  - On <button>, <a>, [role="button"]  → outer ring expands to 64px, fills with primary colour
 *  - On <p>, <h1-h6>                    → outer ring shrinks to 24px (reading mode)
 *  - Hidden on mobile / touch devices
 */

import { useEffect, useRef, useState } from "react";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

type CursorState = "default" | "button" | "text";

const CustomCursor = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef  = useRef<HTMLDivElement>(null);

  const pos      = useRef({ x: -200, y: -200 });
  const smoothed = useRef({ x: -200, y: -200 });
  const raf      = useRef<number>(0);

  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable on touch/mobile
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);

      // State detection
      const target = e.target as HTMLElement;
      if (
        target.closest("button, a, [role='button'], input, select, textarea, label")
      ) {
        setState("button");
      } else if (target.closest("p, h1, h2, h3, h4, h5, h6, span, li")) {
        setState("text");
      } else {
        setState("default");
      }
    };

    const onLeave  = () => setVisible(false);
    const onEnter  = () => setVisible(true);

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  // Spring animation loop
  useEffect(() => {
    if (isMobile) return;

    const animate = () => {
      smoothed.current.x = lerp(smoothed.current.x, pos.current.x, 0.12);
      smoothed.current.y = lerp(smoothed.current.y, pos.current.y, 0.12);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${smoothed.current.x}px, ${smoothed.current.y}px) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, [isMobile]);

  if (isMobile) return null;

  const ringSize = state === "button" ? 60 : state === "text" ? 28 : 44;
  const ringBg   = state === "button" ? "hsl(var(--primary) / 0.18)" : "transparent";
  const ringBorder = state === "button"
    ? "2px solid hsl(var(--primary) / 0.6)"
    : "1.5px solid hsl(var(--foreground) / 0.3)";
  const ringBlend = state === "button" ? "normal" : "difference";

  return (
    <>
      {/* Hide native cursor */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* Outer spring ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: ringSize,
          height: ringSize,
          borderRadius: "50%",
          background: ringBg,
          border: ringBorder,
          pointerEvents: "none",
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          mixBlendMode: ringBlend as any,
          transition: "width 0.25s cubic-bezier(0.16,1,0.3,1), height 0.25s cubic-bezier(0.16,1,0.3,1), background 0.25s ease, border 0.25s ease, opacity 0.3s ease",
          willChange: "transform",
          backdropFilter: state === "button" ? "blur(2px)" : "none",
        }}
      />

      {/* Inner precise dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: state === "button" ? 6 : 8,
          height: state === "button" ? 6 : 8,
          borderRadius: "50%",
          background: "hsl(var(--primary))",
          pointerEvents: "none",
          zIndex: 100000,
          opacity: visible ? 1 : 0,
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.3s ease",
          willChange: "transform",
        }}
      />
    </>
  );
};

export default CustomCursor;
