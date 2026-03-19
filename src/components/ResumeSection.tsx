import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

// TODO: Replace with your actual resume PDF path
const RESUME_URL = "/resume/Sasmit_Dey_Resume.pdf";

// TODO: Replace with your actual resume preview image
const RESUME_PREVIEW_IMAGE = "/resume/preview.jpg";

const ResumeSection = () => (
  <section id="resume" className="py-28 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-2xl md:text-3xl text-foreground mb-12 text-center md:text-left"
      >
        Resume
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-2xl p-6 md:p-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* Resume preview with refined compact sizing */}
          <div className="rounded-xl overflow-hidden border border-border bg-white/5 aspect-[8.5/11] max-h-[510px] shadow-2xl relative group mx-auto md:mx-0 w-full max-w-[410px]">
            <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#323639]"> 
              <iframe
                src={`${RESUME_URL}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                className="absolute top-[-42px] left-[-10%] w-[120%] h-[calc(100%+42px)] border-none"
                title="Resume Preview"
                style={{ pointerEvents: "none" }}
              />
            </div>
            {/* Aesthetic overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-primary/5 via-transparent to-background/20" />
          </div>

          {/* Download area */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8 lg:pl-6">
            <div className="space-y-2">
              <h3 className="font-display font-bold text-xl text-foreground">Sasmit Dey Sarkar</h3>
              <p className="text-muted-foreground text-sm font-body">Software Developer · AI & ML</p>
            </div>

            <div className="flex items-center gap-2 text-foreground/60">
              <FileText size={18} className="text-primary" />
              <span className="text-sm font-body font-medium">PDF Document · 2026 Version</span>
            </div>

            <div className="flex flex-col gap-3 w-full sm:w-auto">
              <a
                href={RESUME_URL}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-bold text-sm hover:scale-[1.05] active:scale-95 transition-all glow-amber shadow-xl"
              >
                <Download size={16} /> Download Resume
              </a>
              <p className="text-[11px] text-muted-foreground font-body text-center md:text-left px-2">
                Verified PDF · 45KB · High Quality Print
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection;
