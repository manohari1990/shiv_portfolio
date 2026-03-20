import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="font-mono text-md text-primary/60 tracking-[0.3em]">// GET IN TOUCH</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
            Let's Create
            <br />
            <span className="text-gradient glow-text">Together.</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-12 leading-relaxed max-w-md mx-auto">
            Open to creative leadership roles, consulting opportunities, and collaborative projects across healthcare, corporate, and digital sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-0 justify-center border border-border inline-flex mx-auto">
            <a
              href="mailto:shivbabu02@outlook.com"
              className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium text-xs tracking-wider uppercase hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Send Email
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-8 py-4 border-t sm:border-t-0 sm:border-l border-border text-foreground font-medium text-xs tracking-wider uppercase hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
