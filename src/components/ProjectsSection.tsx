import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "RAG Pipeline",
    date: "Nov 2025",
    description: "Production-grade Retrieval-Augmented Generation system — top-10% retrieval accuracy, 65% faster embeddings with Qwen3, sub-200ms latency on 1000+ chunks.",
    tools: ["LangChain", "ChromaDB", "BM25", "Python", "Qwen3", "Gemini"],
    github: "https://github.com/SasmitDey/RAG_implementation",
    // TODO: Replace with actual project screenshot
    image: "/placeholder.svg",
  },
  {
    title: "Budgie",
    date: "Sep 2025",
    description: "React Native budgeting app — 30-second entries, real-time Supabase sync, 10K+ records with automatic balance calculations. No server management.",
    tools: ["React Native", "Expo", "Supabase", "JavaScript"],
    github: "https://github.com/SasmitDey/Budgie",
    // TODO: Replace with actual project screenshot
    image: "/placeholder.svg",
  },
  {
    title: "Travel Advisor",
    date: "Jun 2025",
    description: "AI-powered itinerary generator — personalized multi-day plans in under 8 seconds using Gemini Pro & weather data. Saves 5-8 hours per trip.",
    tools: ["Gemini API", "OpenWeatherMap", "Streamlit", "Python"],
    github: "https://github.com/SasmitDey/Travel-Advisor",
    live: "https://travel-advisor-sasmitdey.streamlit.app/",
    // TODO: Replace with actual project screenshot
    image: "/placeholder.svg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const ProjectsSection = () => (
  <section id="projects" className="py-28 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display font-bold text-2xl md:text-3xl text-foreground mb-12"
      >
        Projects
      </motion.h2>

      <div className="space-y-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="glass rounded-2xl group hover:border-primary/20 transition-all relative overflow-hidden"
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-0">
              {/* Project screenshot */}
              <div className="relative overflow-hidden md:rounded-l-2xl bg-muted/20">
                <motion.img
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  className="w-full h-48 md:h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:hidden" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
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
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="px-2.5 py-1 text-[11px] rounded-full bg-primary/8 text-primary/80 border border-primary/10 font-medium"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
