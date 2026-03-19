import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const roles = ["AI Developer", "Full Stack Engineer", "Problem Solver"];

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

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
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

          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
            <span className="gradient-text">Sasmit</span>
            <br />
            <span className="text-foreground">Dey Sarkar</span>
          </h1>

          <p className="text-foreground/60 text-base md:text-lg max-w-lg mx-auto mb-4 font-body leading-relaxed">
            Building intelligent systems — from RAG pipelines to real-time mobile apps.
          </p>

          <p className="text-muted-foreground text-sm mb-12 font-body">
            Software Developer · AI & Full Stack
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
            href="#contact"
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
