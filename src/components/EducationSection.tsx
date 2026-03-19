import { motion } from "framer-motion";

const education = [
  { institution: "Lovely Professional University", degree: "B.Tech CSE", duration: "2023 – Present", score: "8.66 CGPA" },
  { institution: "The Indian School, New Delhi", degree: "Class XII (PCM)", duration: "2022–23", score: "85%" },
  { institution: "The Indian School, New Delhi", degree: "Class X", duration: "2020–21", score: "95%" },
];

const EducationSection = () => (
  <section id="education" className="py-28 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-2xl md:text-3xl text-foreground mb-12"
      >
        Education
      </motion.h2>

      <div className="space-y-4">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          >
            <div>
              <h3 className="font-display font-semibold text-foreground text-sm">{edu.institution}</h3>
              <p className="text-xs text-muted-foreground font-body">{edu.degree} · {edu.duration}</p>
            </div>
            <span className="font-display font-bold text-primary text-sm shrink-0">{edu.score}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
