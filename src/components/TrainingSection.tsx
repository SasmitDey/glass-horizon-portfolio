import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";

const TrainingSection = () => (
  <section id="training" className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-4xl gradient-text text-center mb-12"
      >
        Training & Certifications
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Training */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 text-primary"><Briefcase size={20} /></div>
            <h3 className="font-display font-semibold text-lg text-foreground">Training</h3>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <h4 className="font-display font-semibold text-foreground">AI-powered NLP Internship</h4>
              <span className="px-2 py-0.5 text-[10px] rounded-full bg-primary/15 text-primary font-semibold">AlgoTutor</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">Jul 2025</p>
            <ul className="space-y-2 text-sm text-foreground/75 font-body">
              <li className="flex gap-2"><span className="text-primary mt-1">▸</span>Built custom RAG pipelines with LangChain & FAISS, reducing LLM hallucinations by 75%</li>
              <li className="flex gap-2"><span className="text-secondary mt-1">▸</span>Advanced prompt engineering with Gemini APIs — 95%+ response relevance, 60% token reduction</li>
              <li className="flex gap-2"><span className="text-primary mt-1">▸</span>Sub-300ms retrieval on 50,000+ embedded chunks</li>
            </ul>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-secondary/10 text-secondary"><Award size={20} /></div>
            <h3 className="font-display font-semibold text-lg text-foreground">Certifications</h3>
          </div>
          <div className="space-y-5">
            <div className="glass rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-display font-semibold text-sm text-foreground">AI-powered NLP</h4>
                <span className="px-2 py-0.5 text-[10px] rounded-full bg-primary/15 text-primary font-semibold">AlgoTutor</span>
              </div>
              <p className="text-xs text-muted-foreground">Jul 2025</p>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-display font-semibold text-sm text-foreground">Computer Networking</h4>
                <span className="px-2 py-0.5 text-[10px] rounded-full bg-secondary/15 text-secondary font-semibold">Google / Coursera</span>
              </div>
              <p className="text-xs text-muted-foreground">Sep 2024</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TrainingSection;
