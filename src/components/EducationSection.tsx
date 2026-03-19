import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech CSE",
    duration: "Aug 2023 – Present",
    score: "CGPA: 8.66",
  },
  {
    institution: "The Indian School, New Delhi",
    degree: "Class XII (PCM)",
    duration: "2022–23",
    score: "85%",
  },
  {
    institution: "The Indian School, New Delhi",
    degree: "Class X",
    duration: "2020–21",
    score: "95%",
  },
];

const EducationSection = () => (
  <section id="education" className="py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-4xl gradient-text text-center mb-12"
      >
        Education
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-16 md:pl-20"
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full bg-primary border-2 border-background glow-violet" />

              <div className="glass rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <GraduationCap size={20} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{edu.institution}</h3>
                    <p className="text-sm text-foreground/70 font-body">{edu.degree}</p>
                    <div className="flex gap-3 mt-2 text-xs text-muted-foreground font-body">
                      <span>{edu.duration}</span>
                      <span className="text-primary font-semibold">{edu.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
