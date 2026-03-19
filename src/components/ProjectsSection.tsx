import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "RAG Pipeline",
    date: "Nov 2025",
    description: "Production-grade Retrieval-Augmented Generation system — top-10% retrieval accuracy, 65% faster embeddings with Qwen3, sub-200ms latency on 1000+ chunks.",
    tools: ["LangChain", "ChromaDB", "BM25", "Python", "Qwen3", "Gemini"],
    github: "https://github.com/SasmitDey/RAG_implementation",
  },
  {
    title: "Budgie",
    date: "Sep 2025",
    description: "React Native budgeting app — 30-second entries, real-time Supabase sync, 10K+ records with automatic balance calculations. No server management.",
    tools: ["React Native", "Expo", "Supabase", "JavaScript"],
    github: "https://github.com/SasmitDey/Budgie",
  },
  {
    title: "Travel Advisor",
    date: "Jun 2025",
    description: "AI-powered itinerary generator — personalized multi-day plans in under 8 seconds using Gemini Pro & weather data. Saves 5-8 hours per trip.",
    tools: ["Gemini API", "OpenWeatherMap", "Streamlit", "Python"],
    github: "https://github.com/SasmitDey/Travel-Advisor",
    live: "https://travel-advisor-sasmitdey.streamlit.app/",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-28 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-2xl md:text-3xl text-foreground mb-12"
      >
        Projects
      </motion.h2>

      <div className="space-y-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -3 }}
            className="glass rounded-2xl p-6 md:p-8 group hover:border-primary/20 transition-all relative overflow-hidden"
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="font-display font-bold text-lg text-foreground">{p.title}</h3>
                <span className="text-xs text-muted-foreground">{p.date}</span>
              </div>
              <div className="flex gap-3 shrink-0">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={18} />
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-foreground/55 text-sm leading-relaxed font-body mb-5">{p.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {p.tools.map((t) => (
                <span key={t} className="px-2.5 py-1 text-[11px] rounded-full bg-primary/8 text-primary/80 border border-primary/10 font-medium">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
