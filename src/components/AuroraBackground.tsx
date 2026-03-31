const AuroraBackground = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Main Aurora Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/40 via-sky-300/30 to-blue-500/40 animate-aurora-1"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/30 via-indigo-300/40 to-cyan-300/35 animate-aurora-2"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-teal-300/40 via-cyan-400/30 to-blue-400/35 animate-aurora-3"></div>
        
        {/* Additional Accent Layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-300/25 via-transparent to-indigo-400/25 animate-aurora-4"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-blue-300/30 via-transparent to-teal-400/30 animate-aurora-5"></div>
        
        {/* Shimmer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>
    </>
  );
};

export default AuroraBackground;
