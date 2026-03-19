import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

// TODO: Replace with your actual resume PDF path
const RESUME_URL = "/placeholder.svg";

// TODO: Replace with your actual resume preview image
const RESUME_PREVIEW_IMAGE = "/placeholder.svg";

const ResumeSection = () => (
  <section id="resume" className="py-28 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-2xl md:text-3xl text-foreground mb-12"
      >
        Resume
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-2xl p-6 md:p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
          {/* Resume preview */}
          <div className="rounded-xl overflow-hidden border border-border bg-muted/30 aspect-[8.5/11] max-h-[500px] flex items-center justify-center">
            {/* TODO: Replace src with actual resume preview image */}
            <img
              src={RESUME_PREVIEW_IMAGE}
              alt="Resume preview"
              className="w-full h-full object-contain opacity-40"
            />
          </div>

          {/* Download area */}
          <div className="flex flex-col gap-4 md:pt-4">
            <div className="flex items-center gap-2 text-foreground/60 mb-2">
              <FileText size={18} className="text-primary" />
              <span className="text-sm font-body">PDF · Updated 2025</span>
            </div>

            <a
              href={RESUME_URL}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm hover:scale-[1.03] transition-transform glow-amber"
            >
              <Download size={14} /> Download Resume
            </a>

            <p className="text-xs text-muted-foreground font-body mt-2 max-w-[200px]">
              Click to download or right-click to save as PDF.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection;
