const FloatingOrbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {/* Warm amber orb */}
    <div
      className="absolute w-[700px] h-[700px] rounded-full animate-float opacity-[0.07]"
      style={{
        background: 'radial-gradient(circle, rgba(245,158,11,0.6) 0%, transparent 70%)',
        top: '-15%',
        right: '-15%',
        animationDuration: '14s',
      }}
    />
    {/* Rose orb */}
    <div
      className="absolute w-[500px] h-[500px] rounded-full animate-float opacity-[0.06]"
      style={{
        background: 'radial-gradient(circle, rgba(251,113,133,0.5) 0%, transparent 70%)',
        bottom: '5%',
        left: '-8%',
        animationDelay: '5s',
        animationDuration: '18s',
      }}
    />
    {/* Warm subtle center */}
    <div
      className="absolute w-[400px] h-[400px] rounded-full animate-float opacity-[0.04]"
      style={{
        background: 'radial-gradient(circle, rgba(212,165,116,0.5) 0%, transparent 70%)',
        top: '45%',
        left: '40%',
        animationDelay: '3s',
        animationDuration: '20s',
      }}
    />
  </div>
);

export default FloatingOrbs;
