import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Download } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center px-4">
    <div className="text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-muted-foreground text-sm md:text-base font-body tracking-widest uppercase mb-4">
          Software Developer · AI & Full Stack
        </p>

        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl gradient-text leading-tight mb-6">
          Sasmit Dey Sarkar
        </h1>

        <div className="h-8 mb-4">
          <TypeAnimation
            sequence={[
              "AI Developer",
              2000,
              "Full Stack Engineer",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-secondary text-lg md:text-xl font-display font-medium"
            repeat={Infinity}
          />
        </div>

        <p className="text-foreground/80 text-base md:text-lg max-w-2xl mx-auto mb-3 font-body">
          Building intelligent systems — from RAG pipelines to real-time mobile apps.
        </p>

        <p className="text-muted-foreground text-sm md:text-base mb-10 font-body">
          B.Tech CSE @ LPU · 8.66 CGPA · AI/ML Enthusiast · Hackathon Finalist
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm glow-violet hover:scale-105 transition-transform"
        >
          View My Work <ArrowDown size={16} />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/20 text-foreground font-display font-semibold text-sm hover:bg-white/5 transition-colors"
        >
          <Download size={16} /> Download Resume
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
