import { motion } from "framer-motion";

const rows = [
  { category: "Languages", tools: "Python, JavaScript, C++, Java" },
  { category: "AI/ML", tools: "LangChain, ChromaDB, FAISS, Gemini, Qwen3, BM25" },
  { category: "Mobile/Frontend", tools: "React Native, Expo, Streamlit" },
  { category: "Backend/DB", tools: "Supabase, PostgreSQL, RESTful APIs" },
  { category: "Dev Tools", tools: "GitHub, Jupyter Notebooks, Pandas, PyPDF" },
];

const ToolsTable = () => (
  <section className="py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-4xl gradient-text text-center mb-12"
      >
        Tools & Platforms
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-2xl overflow-hidden"
      >
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left px-6 py-4 font-display font-semibold text-sm text-foreground">Category</th>
              <th className="text-left px-6 py-4 font-display font-semibold text-sm text-foreground">Tools & Platforms</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.category}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-medium text-primary font-display">{row.category}</td>
                <td className="px-6 py-4 text-sm text-foreground/75 font-body">{row.tools}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  </section>
);

export default ToolsTable;
