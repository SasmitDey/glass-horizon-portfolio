import { motion } from "framer-motion";
import { Trophy, Brain } from "lucide-react";

const softSkills = ["Problem-Solving", "Team Player", "Project Management", "Adaptability"];

const AchievementsSection = () => (
  <section className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-4xl gradient-text text-center mb-12"
      >
        Achievements & Soft Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400"><Trophy size={20} /></div>
            <h3 className="font-display font-semibold text-lg text-foreground">Achievement</h3>
          </div>
          <h4 className="font-display font-semibold text-foreground mb-2">Top 20 Finalist — LPU Internal Hackathon (SIH)</h4>
          <p className="text-sm text-foreground/70 font-body">
            Selected from 100+ project proposals in a competitive internal evaluation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-lg bg-secondary/10 text-secondary"><Brain size={20} /></div>
            <h3 className="font-display font-semibold text-lg text-foreground">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full glass text-sm font-medium text-foreground/80 hover:border-primary/40 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-white/10">
            <p className="text-xs text-muted-foreground mb-2 font-display uppercase tracking-wider">Extracurriculars</p>
            <p className="text-sm text-foreground/70 font-body">Active hackathon participant · Open-source contributor</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
