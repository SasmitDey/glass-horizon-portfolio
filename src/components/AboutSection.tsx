import { motion } from "framer-motion";
import { User } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-4xl gradient-text text-center mb-12"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="glass rounded-2xl p-8 md:p-12 animate-border-glow relative overflow-hidden"
      >
        <div className="absolute inset-0 animate-shimmer rounded-2xl" />
        <div className="relative flex gap-4 items-start">
          <div className="hidden sm:flex p-3 rounded-xl bg-primary/10 text-primary shrink-0">
            <User size={24} />
          </div>
          <p className="text-foreground/85 text-base md:text-lg leading-relaxed font-body">
            I'm a Computer Science student at Lovely Professional University with a strong foundation
            in AI, machine learning, and full stack development. I'm drawn to building systems that
            solve real problems — whether that's reducing LLM hallucinations by 75% with RAG pipelines
            or helping people manage their finances in under 30 seconds with a mobile app. My goal is
            to join a forward-thinking tech team where I can contribute to impactful, production-grade
            software while continuing to grow as an engineer.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
