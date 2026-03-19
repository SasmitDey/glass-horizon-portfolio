import { motion } from "framer-motion";
import { Code, Bot, Smartphone, Database, Wrench } from "lucide-react";

const categories = [
  { icon: <Code size={18} />, title: "Languages", skills: ["Python", "JavaScript", "C++", "Java"] },
  { icon: <Bot size={18} />, title: "AI / ML & NLP", skills: ["LangChain", "RAG Pipelines", "ChromaDB", "FAISS", "Gemini API", "OpenAI Embeddings", "BM25", "Qwen3"] },
  { icon: <Smartphone size={18} />, title: "Frontend & Mobile", skills: ["React Native", "Expo", "Streamlit"] },
  { icon: <Database size={18} />, title: "Backend & Database", skills: ["Supabase (PostgreSQL)", "RESTful APIs"] },
  { icon: <Wrench size={18} />, title: "Tools & Platforms", skills: ["GitHub", "Jupyter Notebooks", "Pandas", "PyPDF", "OpenWeatherMap API"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-28 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-2xl md:text-3xl text-foreground mb-12"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-5 group hover:border-primary/20 transition-colors"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-primary">{cat.icon}</span>
              <h3 className="font-display font-semibold text-sm text-foreground">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
