import { motion } from "framer-motion";
import { User, Briefcase, Eye } from "lucide-react";

const items = [
  {
    icon: User,
    title: "Creative Leader",
    num: "01",
    text: "A passionate creative director with 15+ years of experience crafting impactful visual campaigns, brand identities, and integrated marketing communication across healthcare, corporate, and digital platforms.",
  },
  {
    icon: Briefcase,
    title: "Strategic Thinker",
    num: "02",
    text: "Skilled in translating business objectives into compelling visual narratives, managing multidisciplinary teams, and delivering high-impact creative solutions across print, digital, and experiential media.",
  },
  {
    icon: Eye,
    title: "Visual Storyteller",
    num: "03",
    text: "Collaborated with photographers, production teams, and vendors to execute large-scale campaign visuals. Directed visual campaigns including health awareness programs, diagnostic promotions, and hospital events.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 relative" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <span className="font-mono text-md text-primary/60 tracking-[0.3em]">// ABOUT</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
              Who I <span className="text-gradient">Am</span>
            </h2>
          </div>
          {/* <span className="font-mono text-[10px] text-muted-foreground/30 hidden md:block">SECTION_01</span> */}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0 border border-border">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`p-8 md:p-10 relative group hover:bg-card/80 transition-colors ${i < 2 ? "md:border-r border-b md:border-b-0 border-border" : "border-b md:border-b-0"}`}
            >
              <div className="flex items-center justify-between mb-8">
                <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                <span className="font-mono text-[12px] text-muted-foreground/40">{item.num}</span>
              </div>
              <h3 className="text-xl font-display font-semibold mb-4">{item.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed text-lg">{item.text}</p>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
