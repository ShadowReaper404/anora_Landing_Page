/**
 * LivingLineArt.tsx
 *
 * Pure-SVG animated line art dividers for section breaks.
 * Each illustration uses stroke-dashoffset animation to "draw"
 * itself in a calm, continuous loop — like breathing.
 *
 * Usage:
 *   <LineArtDivider art="bloom" />
 *   <LineArtDivider art="ripple" />
 *   etc.
 */

import { useEffect, useRef } from "react";
import { useEmpathyReveal } from "@/hooks/useScrollReveal";

type ArtVariant = "bloom" | "ripple" | "breath" | "wave" | "constellation";

interface LineArtProps {
  art: ArtVariant;
  className?: string;
  /** Primary stroke colour – defaults to currentColor (inherits text colour) */
  color?: string;
  /** Width of the strokes */
  strokeWidth?: number;
  /** Max width of the SVG container */
  maxWidth?: number;
}

// ─── Individual Art SVGs ──────────────────────────────────────────────────────

/**
 * Bloom Flower – 6 petals that draw themselves outward
 */
const BloomArt = ({ stroke, sw }: { stroke: string; sw: number }) => (
  <svg viewBox="0 0 200 200" fill="none" aria-hidden="true" className="w-full h-full">
    <style>{`
      @keyframes draw-bloom {
        0%   { stroke-dashoffset: 1; opacity: 0.2; }
        40%  { stroke-dashoffset: 0; opacity: 0.8; }
        80%  { stroke-dashoffset: 0; opacity: 0.8; }
        100% { stroke-dashoffset: 1; opacity: 0.2; }
      }
      .bloom-petal {
        stroke-dasharray: 1;
        pathLength: 1;
        animation: draw-bloom 6s ease-in-out infinite;
      }
    `}</style>

    {/* 6 petals as cubic bezier ellipses rotated around centre */}
    {[0, 60, 120, 180, 240, 300].map((deg, i) => (
      <g key={deg} transform={`rotate(${deg} 100 100)`} style={{ animationDelay: `${i * 0.4}s` }}>
        <ellipse
          className="bloom-petal"
          cx="100" cy="72"
          rx="10" ry="28"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinecap="round"
          style={{ animationDelay: `${i * 0.4}s` }}
        />
      </g>
    ))}

    {/* Centre circle */}
    <circle cx="100" cy="100" r="8" stroke={stroke} strokeWidth={sw} fill="none">
      <animate attributeName="r" values="6;10;6" dur="4s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0.9;0.4" dur="4s" repeatCount="indefinite" />
    </circle>
  </svg>
);

/**
 * Ripple – concentric circles that spread outward like a drop in still water
 */
const RippleArt = ({ stroke, sw }: { stroke: string; sw: number }) => (
  <svg viewBox="0 0 400 120" fill="none" aria-hidden="true" className="w-full h-full">
    <style>{`
      @keyframes ripple-out {
        0%   { r: 4; opacity: 0.9; }
        100% { r: 110; opacity: 0; }
      }
    `}</style>
    {[0, 0.8, 1.6, 2.4, 3.2].map((delay, i) => (
      <circle
        key={i}
        cx="200" cy="60"
        r="4"
        stroke={stroke}
        strokeWidth={sw * 0.7}
        fill="none"
        style={{
          animation: `ripple-out 3.5s cubic-bezier(0,0.5,0.5,1) ${delay}s infinite`,
        }}
      />
    ))}
    {/* Still centre dot */}
    <circle cx="200" cy="60" r="3" fill={stroke} opacity="0.5">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.5s" repeatCount="indefinite" />
    </circle>
  </svg>
);

/**
 * Breath guide – a single circle that expands and contracts with a 4-7-8 breath
 */
const BreathArt = ({ stroke, sw }: { stroke: string; sw: number }) => (
  <svg viewBox="0 0 200 200" fill="none" aria-hidden="true" className="w-full h-full">
    <style>{`
      @keyframes breath-expand {
        0%    { r:28;  opacity:0.3; stroke-width:${sw};   }
        28%   { r:56;  opacity:0.7; stroke-width:${sw * 1.5}; }  /* inhale 4s */
        75%   { r:56;  opacity:0.7; stroke-width:${sw * 1.5}; }  /* hold  7s  */
        100%  { r:28;  opacity:0.3; stroke-width:${sw};   }       /* exhale 8s */
      }
      .breath-ring {
        animation: breath-expand 19s cubic-bezier(0.4,0,0.2,1) infinite;
      }
      .breath-ring-2 {
        animation: breath-expand 19s cubic-bezier(0.4,0,0.2,1) 0.6s infinite;
      }
    `}</style>
    <circle className="breath-ring"   cx="100" cy="100" r="28" stroke={stroke} fill="none" />
    <circle className="breath-ring-2" cx="100" cy="100" r="36" stroke={stroke} fill="none" opacity="0.35" />

    <text x="100" y="104" textAnchor="middle" fontSize="10" fill={stroke} opacity="0.6"
      fontFamily="Inter, sans-serif" fontWeight="500">
      breathe
    </text>
  </svg>
);

/**
 * Wave – a slow, sinuous continuous line that flows like calm ocean or rolling hills
 */
const WaveArt = ({ stroke, sw }: { stroke: string; sw: number }) => (
  <svg viewBox="0 0 800 100" fill="none" preserveAspectRatio="none" aria-hidden="true" className="w-full h-full">
    <style>{`
      @keyframes wave-flow {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .wave-path { animation: wave-flow 8s linear infinite; }
      .wave-path-2 { animation: wave-flow 12s linear infinite; opacity: 0.4; }
    `}</style>

    {/* We repeat the wave twice horizontally so the looping is seamless */}
    <g className="wave-path">
      <path
        d="M0 50 C50 20, 100 80, 150 50 S250 20, 300 50 S400 80, 450 50 S550 20, 600 50 S700 80, 750 50 S850 20, 900 50 S1000 80, 1050 50 S1150 20, 1200 50 S1300 80, 1350 50 S1450 20, 1500 50"
        stroke={stroke}
        strokeWidth={sw}
        strokeLinecap="round"
      />
    </g>
    <g className="wave-path-2">
      <path
        d="M0 60 C60 35, 120 85, 180 60 S300 35, 360 60 S480 85, 540 60 S660 35, 720 60 S840 85, 900 60 S1020 35, 1080 60 S1200 85, 1260 60 S1380 35, 1440 60 S1560 85, 1620 60"
        stroke={stroke}
        strokeWidth={sw * 0.6}
        strokeLinecap="round"
      />
    </g>
  </svg>
);

/**
 * Constellation – dots that connect to each other with animated drawing lines
 */
const ConstellationArt = ({ stroke, sw }: { stroke: string; sw: number }) => {
  const nodes = [
    { cx: 80,  cy: 60  },
    { cx: 160, cy: 30  },
    { cx: 240, cy: 70  },
    { cx: 320, cy: 40  },
    { cx: 400, cy: 65  },
    { cx: 480, cy: 25  },
    { cx: 560, cy: 60  },
    { cx: 640, cy: 45  },
    { cx: 720, cy: 70  },
  ];

  const edges = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],
    [0,2],[2,4],[4,6],[1,3],[3,5],[5,7],
  ];

  return (
    <svg viewBox="0 0 800 100" fill="none" aria-hidden="true" className="w-full h-full">
      <style>{`
        @keyframes line-draw {
          0%,100% { stroke-dashoffset: 1; opacity:0; }
          30%,70%  { stroke-dashoffset: 0; opacity:0.5; }
        }
        @keyframes dot-pulse {
          0%,100% { r:3; opacity:0.4; }
          50%     { r:5; opacity:0.9; }
        }
      `}</style>
      {edges.map(([a, b], i) => {
        const A = nodes[a], B = nodes[b];
        const len = Math.hypot(B.cx - A.cx, B.cy - A.cy);
        return (
          <line key={i}
            x1={A.cx} y1={A.cy} x2={B.cx} y2={B.cy}
            stroke={stroke}
            strokeWidth={sw * 0.5}
            strokeDasharray={len}
            style={{
              animation: `line-draw ${3 + (i % 3)}s ease-in-out ${(i * 0.3) % 2}s infinite`,
            }}
          />
        );
      })}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="3"
          fill={stroke}
          style={{ animation: `dot-pulse 4s ease-in-out ${i * 0.45}s infinite` }}
        />
      ))}
    </svg>
  );
};

// ─── Main exported component ──────────────────────────────────────────────────
const ART_COMPONENTS: Record<ArtVariant, typeof BloomArt> = {
  bloom:         BloomArt,
  ripple:        RippleArt,
  breath:        BreathArt,
  wave:          WaveArt,
  constellation: ConstellationArt,
};

const ART_SIZES: Record<ArtVariant, { w: number; h: number }> = {
  bloom:         { w: 120, h: 120 },
  ripple:        { w: 320, h: 96  },
  breath:        { w: 140, h: 140 },
  wave:          { w: 800, h: 64  },
  constellation: { w: 800, h: 100 },
};

export const LineArtDivider = ({
  art,
  className = "",
  color = "hsl(var(--primary))",
  strokeWidth = 1.5,
  maxWidth,
}: LineArtProps) => {
  const { ref, isVisible } = useEmpathyReveal({ threshold: 0.2 });
  const ArtComponent = ART_COMPONENTS[art];
  const { w, h } = ART_SIZES[art];

  const mw = maxWidth ?? (["wave", "constellation"].includes(art) ? 900 : 200);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`flex items-center justify-center py-4 md:py-6 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.92)",
        transition: "opacity 1s ease-out, transform 1s ease-out",
      }}
    >
      <div style={{ width: "100%", maxWidth: mw, aspectRatio: `${w} / ${h}` }}>
        <ArtComponent stroke={color} sw={strokeWidth} />
      </div>
    </div>
  );
};

export default LineArtDivider;
