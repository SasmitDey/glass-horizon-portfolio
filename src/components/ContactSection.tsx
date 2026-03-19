import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const socials = [
  { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/SasmitDey" },
  { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/sasmit-dey-sarkar/" },
  { icon: <Mail size={20} />, label: "Email", href: "mailto:sasmit.deysarkar@gmail.com" },
  { icon: <Phone size={20} />, label: "+91 9716435302", href: "tel:+919716435302" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl gradient-text mb-3">
            Let's Connect
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <h3 className="font-display font-semibold text-lg text-foreground mb-6">Find me online</h3>
            <div className="space-y-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">{s.icon}</div>
                  <span className="text-sm font-body">{s.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <h3 className="font-display font-semibold text-lg text-foreground mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:border-primary/50 transition-colors"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm glow-violet hover:scale-105 transition-transform"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-xs text-muted-foreground font-body">
          © 2025 Sasmit Dey Sarkar. Built with React & Tailwind CSS.
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
