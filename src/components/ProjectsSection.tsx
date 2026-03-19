import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "RAG Pipeline",
    date: "Nov 2025",
    accent: "from-violet-500 to-purple-600",
    description:
      "Engineered a production-grade Retrieval-Augmented Generation system using LangChain that achieved top-10% retrieval accuracy by combining dense embeddings with BM25 sparse retrieval. Reduced embedding generation time by 65% using the Qwen3 model and deployed a ChromaDB vector store handling 1000+ document chunks with sub-200ms retrieval latency. Integrated Google Gemini as the generation model for hallucination-reduced responses.",
    tools: ["LangChain", "ChromaDB", "BM25", "Python", "Jupyter", "Qwen3", "Google Gemini"],
    skills: ["RAG architecture", "vector search", "NLP", "LLM integration", "performance optimization"],
    github: "https://github.com/SasmitDey/RAG_implementation",
  },
  {
    title: "Budgie – Mobile Budgeting App",
    date: "Sep 2025",
    accent: "from-cyan-400 to-blue-500",
    description:
      "Built a React Native budgeting app with Expo that transforms personal finance tracking from hours of spreadsheets to under 30 seconds per entry. Integrated Supabase as a secure PostgreSQL backend with real-time sync across devices, sub-1-second latency, and end-to-end encryption — all without managing any server infrastructure. Supports 10,000+ records with automatic balance calculations per category.",
    tools: ["React Native", "Expo", "Supabase", "JavaScript"],
    skills: ["Mobile development", "real-time databases", "UX design", "backend integration"],
    github: "https://github.com/SasmitDey/Budgie",
  },
  {
    title: "Travel Advisor",
    date: "Jun 2025",
    accent: "from-emerald-400 to-cyan-500",
    description:
      "Architected an AI-powered Streamlit app that generates personalized multi-day travel itineraries in under 8 seconds, cutting manual trip planning time by 90%. Leveraged the Google Gemini Pro API and OpenWeatherMap to produce weather-intelligent, hour-by-hour travel plans for any global city — saving users 5-8 hours of research per trip.",
    tools: ["Gemini API", "OpenWeatherMap API", "Streamlit", "Pandas", "Python"],
    skills: ["API integration", "AI application development", "prompt engineering", "data processing"],
    github: "https://github.com/SasmitDey/Travel-Advisor",
    live: "https://travel-advisor-sasmitdey.streamlit.app/",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-4xl gradient-text text-center mb-4"
      >
        Featured Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-center mb-12 font-body"
      >
        Highlights from my AI/ML and full stack work
      </motion.p>

      <div className="space-y-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl overflow-hidden relative group"
          >
            {/* Accent bar */}
            <div className={`h-1 bg-gradient-to-r ${p.accent}`} />

            {/* Shimmer overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer rounded-2xl" />

            <div className="relative p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h3 className="font-display font-bold text-xl text-foreground">{p.title}</h3>
                <span className="text-xs text-muted-foreground font-body">{p.date}</span>
              </div>

              <p className="text-foreground/75 text-sm md:text-base leading-relaxed mb-5 font-body">
                {p.description}
              </p>

              {/* Tools */}
              <div className="mb-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-body">Tools</p>
                <div className="flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="mb-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-body">Skills Demonstrated</p>
                <div className="flex flex-wrap gap-2">
                  {p.skills.map((s) => (
                    <span key={s} className="px-2.5 py-1 text-xs rounded-md bg-secondary/10 text-secondary border border-secondary/20">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={16} /> GitHub
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
