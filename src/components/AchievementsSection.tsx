import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const softSkills = ["Problem-Solving", "Team Player", "Project Management", "Adaptability"];

const AchievementsSection = () => (
  <section className="py-28 px-4">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <Trophy size={18} className="text-primary" />
            <h3 className="font-display font-semibold text-foreground">Achievement</h3>
          </div>
          <p className="font-display font-semibold text-foreground mb-1.5">Top 20 — LPU Internal Hackathon (SIH)</p>
          <p className="text-sm text-foreground/45 font-body">Selected from 100+ proposals in competitive evaluation.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="font-display font-semibold text-foreground mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="px-4 py-2 rounded-full bg-muted text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 border border-transparent transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
