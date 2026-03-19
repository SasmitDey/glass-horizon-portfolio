const FloatingOrbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div
      className="absolute w-[600px] h-[600px] rounded-full animate-float opacity-20"
      style={{
        background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)',
        top: '-10%',
        right: '-10%',
        animationDelay: '0s',
        animationDuration: '12s',
      }}
    />
    <div
      className="absolute w-[500px] h-[500px] rounded-full animate-float opacity-15"
      style={{
        background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)',
        bottom: '10%',
        left: '-5%',
        animationDelay: '4s',
        animationDuration: '15s',
      }}
    />
    <div
      className="absolute w-[400px] h-[400px] rounded-full animate-float opacity-10"
      style={{
        background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)',
        top: '50%',
        left: '50%',
        animationDelay: '2s',
        animationDuration: '18s',
      }}
    />
  </div>
);

export default FloatingOrbs;
