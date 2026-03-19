import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const TextReveal = ({ text, className = "", delay = 0 }: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`${className} flex flex-wrap`}>
      {words.map((word, i) => (
        <span key={i} className="mr-1.5 overflow-hidden inline-flex">
          <motion.span
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.02,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
};

export default TextReveal;
