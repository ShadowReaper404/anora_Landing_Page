import { useEffect } from "react";

/**
 * Injects a subtle warm spotlight that follows the mouse cursor,
 * implemented as a CSS custom property on :root so it works
 * across the entire page with a single radial-gradient overlay.
 */
const MouseSpotlight = () => {
  useEffect(() => {
    const root = document.documentElement;

    const onMove = (e: MouseEvent) => {
      root.style.setProperty("--mouse-x", `${e.clientX}px`);
      root.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return null; // purely side-effect
};

export default MouseSpotlight;
