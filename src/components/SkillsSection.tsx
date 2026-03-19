import { motion } from "framer-motion";
import { Code, Bot, Smartphone, Database, Wrench } from "lucide-react";

const categories = [
  {
    icon: <Code size={20} />,
    title: "Languages",
    skills: ["Python", "JavaScript", "C++", "Java"],
  },
  {
    icon: <Bot size={20} />,
    title: "AI / ML & NLP",
    skills: ["LangChain", "RAG Pipelines", "ChromaDB", "FAISS", "Gemini API", "OpenAI Embeddings", "BM25", "Qwen3"],
  },
  {
    icon: <Smartphone size={20} />,
    title: "Frontend & Mobile",
    skills: ["React Native", "Expo", "Streamlit"],
  },
  {
    icon: <Database size={20} />,
    title: "Backend & Database",
    skills: ["Supabase (PostgreSQL)", "RESTful APIs"],
  },
  {
    icon: <Wrench size={20} />,
    title: "Tools & Platforms",
    skills: ["GitHub", "Jupyter Notebooks", "Pandas", "PyPDF", "OpenWeatherMap API"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SkillsSection = () => (
  <section id="skills" className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-4xl gradient-text text-center mb-12"
      >
        Core Technical Skills
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={item}
            className="glass rounded-2xl p-6 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">{cat.icon}</div>
              <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-foreground/80 hover:border-primary/50 hover:shadow-[0_0_12px_rgba(124,58,237,0.25)] transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
