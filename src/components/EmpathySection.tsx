import { useRef, type ReactNode, type CSSProperties } from "react";
import { useEmpathyReveal } from "@/hooks/useScrollReveal";

// ─── Types ────────────────────────────────────────────────────────────────────
type EmpathyVariant =
  | "rise"        // floats up gently while fading in  (default)
  | "drift-left"  // slides in from the left
  | "drift-right" // slides in from the right
  | "breathe"     // scales up from 96% while fading
  | "mist"        // just opacity, no transform – ultra soft
  | "cascade";    // children stagger in one by one (parent must add data-cascade)

interface EmpathySectionProps {
  children: ReactNode;
  variant?: EmpathyVariant;
  delay?: number;        // base delay in ms (shifts whole section)
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  style?: CSSProperties;
  id?: string;
  threshold?: number;
}

// ─── Per-variant initial + final transform ──────────────────────────────────
const VARIANT_HIDDEN: Record<EmpathyVariant, CSSProperties> = {
  rise:         { opacity: 0, transform: "translateY(40px)" },
  "drift-left": { opacity: 0, transform: "translateX(-48px)" },
  "drift-right":{ opacity: 0, transform: "translateX(48px)" },
  breathe:      { opacity: 0, transform: "scale(0.96)" },
  mist:         { opacity: 0 },
  cascade:      { opacity: 0, transform: "translateY(28px)" },
};

const VARIANT_VISIBLE: Record<EmpathyVariant, CSSProperties> = {
  rise:         { opacity: 1, transform: "translateY(0)" },
  "drift-left": { opacity: 1, transform: "translateX(0)" },
  "drift-right":{ opacity: 1, transform: "translateX(0)" },
  breathe:      { opacity: 1, transform: "scale(1)" },
  mist:         { opacity: 1 },
  cascade:      { opacity: 1, transform: "translateY(0)" },
};

// ─── Component ────────────────────────────────────────────────────────────────
/**
 * Drop any section inside <EmpathySection> and it will glide into view
 * as the user scrolls, feeling organic and calm.
 *
 * @example
 * <EmpathySection variant="rise" delay={100}>
 *   <MyCard />
 * </EmpathySection>
 */
export const EmpathySection = ({
  children,
  variant = "rise",
  delay = 0,
  className = "",
  as: Tag = "div",
  style,
  id,
  threshold,
}: EmpathySectionProps) => {
  const { ref, isVisible, progress } = useEmpathyReveal({ threshold });

  // Extra: use scroll progress to drive a very slight parallax opacity
  // so elements already in view at 100% remain fully opaque, but incoming
  // elements feel like they are gently emerging from mist.
  const progressOpacity = isVisible ? 1 : 0;

  const dynamicStyle: CSSProperties = {
    ...(isVisible ? VARIANT_VISIBLE[variant] : VARIANT_HIDDEN[variant]),
    transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                 transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    willChange: "opacity, transform",
    ...style,
  };

  return (
    // @ts-ignore – polymorphic `as` prop
    <Tag
      ref={ref}
      id={id}
      className={className}
      style={dynamicStyle}
    >
      {children}
    </Tag>
  );
};

// ─── Cascade wrapper – staggers direct children ──────────────────────────────
interface CascadeProps {
  children: ReactNode[];
  stagger?: number;    // ms between each child
  variant?: EmpathyVariant;
  baseDelay?: number;
  className?: string;
}

export const EmpathyCascade = ({
  children,
  stagger = 120,
  variant = "rise",
  baseDelay = 0,
  className = "",
}: CascadeProps) => {
  const { ref, isVisible } = useEmpathyReveal({ threshold: 0.08 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {(children as ReactNode[]).map((child, i) => (
        <div
          key={i}
          style={{
            ...(isVisible ? VARIANT_VISIBLE[variant] : VARIANT_HIDDEN[variant]),
            transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${baseDelay + i * stagger}ms,
                         transform 0.65s cubic-bezier(0.16,1,0.3,1) ${baseDelay + i * stagger}ms`,
            willChange: "opacity, transform",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default EmpathySection;
