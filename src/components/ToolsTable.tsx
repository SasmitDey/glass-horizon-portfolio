import { motion } from "framer-motion";

const rows = [
  { category: "Languages", tools: "Python, JavaScript, C++, Java" },
  { category: "AI/ML", tools: "LangChain, ChromaDB, FAISS, Gemini, Qwen3, BM25" },
  { category: "Mobile/Frontend", tools: "React Native, Expo, Streamlit" },
  { category: "Backend/DB", tools: "Supabase, PostgreSQL, RESTful APIs" },
  { category: "Dev Tools", tools: "GitHub, Jupyter Notebooks, Pandas, PyPDF" },
];

const ToolsTable = () => (
  <section className="py-28 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-2xl md:text-3xl text-foreground mb-12"
      >
        Stack
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-2xl overflow-hidden"
      >
        <table className="w-full">
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.category}
                className={`hover:bg-white/[0.03] transition-colors ${i < rows.length - 1 ? "border-b border-border" : ""}`}
              >
                <td className="px-6 py-4 text-sm font-display font-semibold text-primary w-[140px]">{row.category}</td>
                <td className="px-6 py-4 text-sm text-foreground/50 font-body">{row.tools}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  </section>
);

export default ToolsTable;
