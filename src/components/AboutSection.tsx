import { motion } from "framer-motion";

const stats = [
  { value: "75%", label: "LLM hallucination reduction" },
  { value: "< 200ms", label: "RAG retrieval latency" },
  { value: "10K+", label: "Records handled in Budgie" },
  { value: "90%", label: "Trip planning time saved" },
];

const AboutSection = () => (
  <section id="about" className="py-28 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-10 md:gap-12 items-start"
      >
        {/* Left — short intro */}
        <div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-5">
            CS student who builds things
            <br />
            <span className="gradient-text">that actually work.</span>
          </h2>
          <p className="text-foreground/55 text-sm leading-relaxed font-body">
            B.Tech CSE @ LPU. I focus on AI/ML systems and full stack apps — 
            shipping code that reduces real problems, not just demos.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-full bg-border" />

        {/* Right — metrics */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <p className="font-display font-bold text-2xl gradient-text">{s.value}</p>
              <p className="text-xs text-muted-foreground font-body mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
