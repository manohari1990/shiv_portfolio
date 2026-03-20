import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about", num: "01" },
  { label: "Work", href: "#work", num: "02" },
  { label: "Experience", href: "#experience", num: "03" },
  { label: "Skills", href: "#technical-skills", num: "04" },
  { label: "Contact", href: "#contact", num: "05" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-mono text-lg font-bold tracking-tight flex items-center gap-2">
          <span className="w-2 h-2 bg-primary inline-block" />
          <span className="text-foreground">ART_DIR</span>
          <span className="text-primary animate-blink">_</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-lg tracking-wider text-muted-foreground hover:text-primary transition-colors group flex items-center gap-2"
            >
              <span className="text-primary/50 group-hover:text-primary">{link.num}</span>
              {link.label.toUpperCase()}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="container py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-lg tracking-wider text-muted-foreground hover:text-primary transition-colors flex items-center gap-3"
                >
                  <span className="text-primary/50">{link.num}</span>
                  {link.label.toUpperCase()}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
