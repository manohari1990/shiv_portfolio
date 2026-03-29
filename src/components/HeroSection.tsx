import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import heroImage from "../assets/hero-creative.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      {/* Subtle background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Creative direction" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
        <div className="absolute inset-0 scanline" />
      </div>

      <div className="container relative z-10 pt-20">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              

              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold leading-[0.95] tracking-tight mb-8">
                <span className="text-foreground">Crafting</span>
                <br />
                <span className="text-gradient glow-text">Visual</span>
                <br />
                <span className="text-foreground">Narratives</span>
                <span className="text-primary">.</span>
              </h1>

              <div className="flex items-start gap-6 max-w-lg">
                <div className="w-px h-16 bg-primary/40 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  15+ years of turning business objectives into compelling campaigns across healthcare, corporate, and digital platforms.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="md:col-span-4 hidden md:flex flex-col items-end gap-4 pb-4"
          >
            <a
              href="#work"
              className="group flex items-center gap-3 font-mono text-lg tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              VIEW WORK
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>
            <div className="font-mono text-[14px] text-muted-foreground/40 text-right leading-relaxed">
              <p>HEALTHCARE</p>
              <p>CORPORATE</p>
              <p>DIGITAL</p>
              <p>EXPERIENTIAL</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom status bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-24 flex items-center justify-between border-t border-border pt-4 font-mono text-[13px] text-muted-foreground/50"
        >
          <span>STATUS: AVAILABLE</span>
          <span>LOCATION: INDIA</span>
          <span className="hidden sm:inline">SCROLL ↓</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
