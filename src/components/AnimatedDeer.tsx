const AnimatedDeer = () => {
  return (
    <svg
      width="240"
      height="240"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        {/* Elegant gradient for deer */}
        <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc">
            <animate attributeName="stop-color" values="#c084fc; #f0abfc; #c084fc" dur="6s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#e879f9">
            <animate attributeName="stop-color" values="#e879f9; #c084fc; #e879f9" dur="6s" repeatCount="indefinite" />
          </stop>
        </linearGradient>

        {/* Accent gradient */}
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fcd34d" opacity="0.8"/>
          <stop offset="100%" stopColor="#f59e0b" opacity="0.6"/>
        </linearGradient>

        {/* Soft glow filter */}
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Main deer group */}
      <g filter="url(#softGlow)" transform="translate(120, 120)">
        {/* Body - elegant oval */}
        <ellipse cx="0" cy="15" rx="28" ry="35" fill="url(#mainGradient)" opacity="0.95">
          <animate attributeName="ry" values="35; 37; 35" dur="4s" repeatCount="indefinite" />
        </ellipse>

        {/* Chest - lighter patch */}
        <ellipse cx="0" cy="12" rx="15" ry="22" fill="#ffffff" opacity="0.3"/>

        {/* Head */}
        <ellipse cx="0" cy="-25" rx="18" ry="20" fill="url(#mainGradient)" opacity="0.95">
          <animate attributeName="cy" values="-25; -23; -25" dur="4s" repeatCount="indefinite" />
        </ellipse>

        {/* Snout */}
        <ellipse cx="0" cy="-18" rx="12" ry="10" fill="url(#mainGradient)" opacity="0.9"/>

        {/* Nose */}
        <ellipse cx="0" cy="-13" rx="4" ry="3" fill="#1e293b" opacity="0.7"/>

        {/* Eyes - calm and gentle */}
        <circle cx="-7" cy="-26" r="2.5" fill="#1e293b" opacity="0.8">
          <animate attributeName="opacity" values="0.8; 0; 0.8" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="7" cy="-26" r="2.5" fill="#1e293b" opacity="0.8">
          <animate attributeName="opacity" values="0.8; 0; 0.8" dur="5s" repeatCount="indefinite" />
        </circle>

        {/* Left ear */}
        <ellipse cx="-10" cy="-38" rx="5" ry="10" fill="url(#mainGradient)" opacity="0.9" transform="rotate(-25 -10 -38)">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="-25 -10 -38; -20 -10 -38; -25 -10 -38"
            dur="5s"
            repeatCount="indefinite"
          />
        </ellipse>
        {/* Inner ear */}
        <ellipse cx="-10" cy="-37" rx="2.5" ry="6" fill="#fcd34d" opacity="0.4" transform="rotate(-25 -10 -37)">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="-25 -10 -37; -20 -10 -37; -25 -10 -37"
            dur="5s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Right ear */}
        <ellipse cx="10" cy="-38" rx="5" ry="10" fill="url(#mainGradient)" opacity="0.9" transform="rotate(25 10 -38)">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="25 10 -38; 20 10 -38; 25 10 -38"
            dur="5s"
            repeatCount="indefinite"
          />
        </ellipse>
        {/* Inner ear */}
        <ellipse cx="10" cy="-37" rx="2.5" ry="6" fill="#fcd34d" opacity="0.4" transform="rotate(25 10 -37)">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="25 10 -37; 20 10 -37; 25 10 -37"
            dur="5s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Elegant antlers with golden accent */}
        <g opacity="0.85" stroke="url(#accentGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Left antler */}
          <path d="M -12 -42 L -18 -52 M -18 -52 L -22 -58 M -18 -52 L -15 -58">
            <animate attributeName="opacity" values="0.85; 0.95; 0.85" dur="3s" repeatCount="indefinite" />
          </path>
          {/* Right antler */}
          <path d="M 12 -42 L 18 -52 M 18 -52 L 22 -58 M 18 -52 L 15 -58">
            <animate attributeName="opacity" values="0.85; 0.95; 0.85" dur="3s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Legs - simple and elegant */}
        <rect x="-18" y="40" width="5" height="28" rx="2.5" fill="url(#mainGradient)" opacity="0.9"/>
        <rect x="-6" y="40" width="5" height="28" rx="2.5" fill="url(#mainGradient)" opacity="0.9"/>
        <rect x="6" y="40" width="5" height="28" rx="2.5" fill="url(#mainGradient)" opacity="0.9"/>
        <rect x="18" y="40" width="5" height="28" rx="2.5" fill="url(#mainGradient)" opacity="0.9"/>

        {/* Hooves */}
        <ellipse cx="-15.5" cy="68" rx="3" ry="2" fill="#1e293b" opacity="0.6"/>
        <ellipse cx="-3.5" cy="68" rx="3" ry="2" fill="#1e293b" opacity="0.6"/>
        <ellipse cx="8.5" cy="68" rx="3" ry="2" fill="#1e293b" opacity="0.6"/>
        <ellipse cx="20.5" cy="68" rx="3" ry="2" fill="#1e293b" opacity="0.6"/>

        {/* Tail */}
        <path d="M -25 25 Q -35 30 -32 40" stroke="url(#mainGradient)" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.85">
          <animate attributeName="d" values="M -25 25 Q -35 30 -32 40; M -25 25 Q -32 28 -30 38; M -25 25 Q -35 30 -32 40" dur="3s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Gentle sparkles */}
      <g opacity="0.5">
        <circle cx="40" cy="80" r="2" fill="#fcd34d">
          <animate attributeName="opacity" values="0; 0.8; 0" dur="3s" repeatCount="indefinite" />
          <animate attributeName="cy" values="80; 70; 80" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="120" r="2" fill="#c084fc">
          <animate attributeName="opacity" values="0; 0.8; 0" dur="3.5s" repeatCount="indefinite" begin="1s" />
          <animate attributeName="cy" values="120; 110; 120" dur="4.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="120" cy="50" r="2" fill="#e879f9">
          <animate attributeName="opacity" values="0; 0.8; 0" dur="3.2s" repeatCount="indefinite" begin="1.5s" />
          <animate attributeName="cy" values="50; 40; 50" dur="4.2s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
};

export default AnimatedDeer;
