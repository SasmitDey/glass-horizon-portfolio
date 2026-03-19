import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

const CursorEffect = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onClick = (e: MouseEvent) => {
      const id = ++idRef.current;
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples((r) => r.filter((r) => r.id !== id)), 800);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Cursor glow */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
          x: pos.x - 128,
          y: pos.y - 128,
        }}
        animate={{ x: pos.x - 128, y: pos.y - 128 }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />

      {/* Small dot */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-primary/40"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.3 }}
      />

      {/* Click ripples */}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.div
            key={r.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute w-12 h-12 rounded-full border border-primary/30"
            style={{ left: r.x - 24, top: r.y - 24 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorEffect;
