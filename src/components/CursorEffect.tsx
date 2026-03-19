import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

const CursorEffect = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onClick = (e: MouseEvent) => {
      const id = ++idRef.current;
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples((r) => r.filter((r) => r.id !== id)), 800);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);
    window.addEventListener("mouseover", onOver);
    
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Cursor glow */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
          x: pos.x - 128,
          y: pos.y - 128,
        }}
        animate={{ 
          x: pos.x - 128, 
          y: pos.y - 128,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />

      {/* Small dot / Custom Cursor */}
      <motion.div
        className="absolute rounded-full bg-primary"
        style={{
          left: 0,
          top: 0,
          pointerEvents: "none",
        }}
        animate={{ 
          x: pos.x - (isHovering ? 12 : 4), 
          y: pos.y - (isHovering ? 12 : 4),
          width: isHovering ? 24 : 8,
          height: isHovering ? 24 : 8,
          opacity: isHovering ? 0.3 : 0.8,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.3 }}
      />

      {/* Click ripples */}
      <AnimatePresence>
        {ripples.map((r) => (
          <div key={r.id} className="absolute pointer-events-none" style={{ left: r.x, top: r.y }}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ scale: 4 + i * 2, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 + i * 0.1, ease: "easeOut" }}
                className="absolute w-8 h-8 -ml-4 -mt-4 rounded-full border border-primary/40"
              />
            ))}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorEffect;
