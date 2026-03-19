import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";

const TrainingSection = () => (
  <section id="training" className="py-28 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-2xl md:text-3xl text-foreground mb-12"
      >
        Training & Certs
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6"
        >
          <div className="flex items-center gap-2.5 mb-5">
            <Briefcase size={18} className="text-primary" />
            <h3 className="font-display font-semibold text-foreground">AI-powered NLP Internship</h3>
            <span className="ml-auto px-2 py-0.5 text-[10px] rounded-full bg-primary/10 text-primary font-semibold">AlgoTutor</span>
          </div>
          <p className="text-xs text-muted-foreground mb-4">Jul 2025</p>
          <ul className="space-y-2.5 text-sm text-foreground/55 font-body">
            <li>→ RAG pipelines with LangChain & FAISS — 75% hallucination reduction</li>
            <li>→ Prompt engineering with Gemini — 95%+ relevance, 60% fewer tokens</li>
            <li>→ Sub-300ms retrieval on 50K+ embedded chunks</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-6 space-y-4"
        >
          <div className="flex items-center gap-2.5 mb-2">
            <Award size={18} className="text-secondary" />
            <h3 className="font-display font-semibold text-foreground">Certifications</h3>
          </div>
          {[
            { name: "AI-powered NLP", issuer: "AlgoTutor", date: "Jul 2025", link: "https://drive.google.com/file/d/1jXeuuX-2J8588vgFVrDCihUR-OtsFS1X/view?usp=sharing" },
            { name: "Computer Networking", issuer: "Google / Coursera", date: "Sep 2024", link: "https://www.coursera.org/account/accomplishments/verify/6EMLK93XBCU2?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
          ].map((cert) => (
            <div key={cert.name} className="p-4 rounded-xl bg-muted/30 border border-border">
              <div className="flex items-center justify-between">
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="font-display text-sm font-medium text-foreground hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">
                  {cert.name}
                </a>
                <span className="px-2 py-0.5 text-[10px] rounded-full bg-secondary/10 text-secondary font-semibold">{cert.issuer}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default TrainingSection;
