import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import StatusBadge from "./StatusBadge";

const roles = ["AI Developer", "Problem Solver"];

const ScrambleText = ({ text }: { text: string }) => {
  const [displayed, setDisplayed] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayed(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iteration += 1 / 2;
      if (iteration > text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayed}</span>;
};

const KineticText = ({ text, className }: { text: string; className?: string }) => {
  const letters = text.split("");
  
  return (
    <motion.span className={className} style={{ display: "inline-block" }}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.8,
            delay: 0.2 + i * 0.05,
            ease: [0.2, 0.65, 0.3, 0.9]
          }}
          className="inline-block"
          style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="text-center max-w-4xl mx-auto">
        <StatusBadge />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Scramble role */}
          <div className="h-7 mb-8 flex justify-center">
            <span className="text-sm tracking-[0.3em] uppercase font-display text-muted-foreground">
              <ScrambleText text={roles[roleIndex]} />
            </span>
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 select-none">
                        <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="gradient-text inline-block"
            >
              Sasmit
            </motion.span>
            <br />
            <KineticText text="Dey Sarkar" className="text-foreground" />
          </h1>

          <p className="text-foreground/60 text-base md:text-lg max-w-lg mx-auto mb-4 font-body leading-relaxed">
            Building intelligent systems — from RAG pipelines to scalable machine learning solutions.
          </p>

          <p className="text-muted-foreground text-sm mb-12 font-body">
            Software Developer · AI & ML
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm glow-amber hover:scale-[1.03] transition-all"
          >
            View My Work <ArrowDown size={14} />
          </a>
          <a
            href="/resume/Sasmit_Dey_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground/70 font-display font-medium text-sm hover:border-primary/30 hover:text-foreground transition-all"
          >
            <Download size={14} /> Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
