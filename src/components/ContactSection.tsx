import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const socials = [
  { icon: <Github size={18} />, label: "GitHub", href: "https://github.com/SasmitDey" },
  { icon: <Linkedin size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/in/sasmit-dey-sarkar/" },
  { icon: <Mail size={18} />, label: "sasmit.deysarkar@gmail.com", href: "mailto:sasmit.deysarkar@gmail.com" },
  { icon: <Phone size={18} />, label: "+91 9716435302", href: "tel:+919716435302" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Sent!", description: "Thanks — I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 px-4 pb-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
            Let's Connect
          </h2>
          <div className="w-16 h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl glass hover:border-primary/20 transition-all text-muted-foreground hover:text-foreground"
              >
                <span className="text-primary">{s.icon}</span>
                <span className="text-sm font-body">{s.label}</span>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:border-primary/40 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:border-primary/40 transition-colors"
              />
              <textarea
                placeholder="Message"
                required
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:border-primary/40 transition-colors resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm hover:scale-[1.03] transition-transform"
              >
                <Send size={14} /> Send
              </button>
            </form>
          </motion.div>
        </div>

        <p className="mt-20 text-center text-xs text-muted-foreground/50 font-body">
          © 2025 Sasmit Dey Sarkar
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
