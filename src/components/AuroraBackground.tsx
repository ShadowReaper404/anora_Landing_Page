const AuroraBackground = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 via-pink-500/25 to-blue-500/30 animate-aurora-1"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/25 via-purple-500/30 to-pink-500/25 animate-aurora-2"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/25 via-violet-500/20 to-blue-600/25 animate-aurora-3"></div>
      </div>
    </>
  );
};

export default AuroraBackground;
