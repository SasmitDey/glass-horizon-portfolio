import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FloatingOrbs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div ref={ref} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        style={{ y: y1, x: x1 }}
        className="absolute w-[700px] h-[700px] rounded-full opacity-[0.07]"
      >
        <div
          className="w-full h-full rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.6) 0%, transparent 70%)',
            animationDuration: '14s',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y2, x: x2 }}
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.06]"
      >
        <div
          className="w-full h-full rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(251,113,133,0.5) 0%, transparent 70%)',
            bottom: '5%',
            left: '-8%',
            animationDelay: '5s',
            animationDuration: '18s',
            position: 'absolute',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04]"
      >
        <div
          className="w-full h-full rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(212,165,116,0.5) 0%, transparent 70%)',
            top: '45%',
            left: '40%',
            animationDelay: '3s',
            animationDuration: '20s',
            position: 'absolute',
          }}
        />
      </motion.div>
    </div>
  );
};

export default FloatingOrbs;
