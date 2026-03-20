import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Design & Creative",
    num: "01",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe After Effects",
      "Adobe Premiere Pro",
      "Figma",
      "CorelDRAW",
    ],
  },
  {
    title: "Branding & Strategy",
    num: "02",
    skills: [
      "Brand Identity Design",
      "Visual Strategy",
      "Art Direction",
      "Creative Concepting",
      "Style Guide Development",
      "Campaign Planning",
    ],
  },
  {
    title: "Production & Media",
    num: "03",
    skills: [
      "Print Production",
      "Pre-press & Color Management",
      "Large Format Printing",
      "Photography Direction",
      "Video Production Oversight",
      "Environmental/Signage Design",
    ],
  },
  {
    title: "Digital & Marketing",
    num: "04",
    skills: [
      "Social Media Creatives",
      "Digital Ad Design",
      "Email Marketing Design",
      "UI/UX Fundamentals",
      "Presentation Design",
      "Motion Graphics",
    ],
  },
];

const TechnicalSkillsSection = () => {
  return (
    <section className="py-24 md:py-32" id="technical-skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <span className="font-mono text-md text-primary/60 tracking-[0.3em]">// TOOLS & EXPERTISE</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
              Technical <span className="text-gradient">Skills</span>
            </h2>
          </div>
          {/* <span className="font-mono text-[10px] text-muted-foreground/30 hidden md:block">SECTION_04</span> */}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`p-6 md:p-8 ${i < 3 ? "sm:border-r border-b lg:border-b-0 border-border" : "border-b sm:border-b-0"} ${i === 1 ? "lg:border-r sm:border-r-0" : ""}`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-display font-semibold text-primary">{cat.title}</h3>
                <span className="font-mono text-[13px] text-muted-foreground/30">{cat.num}</span>
              </div>
              <ul className="space-y-3">
                {cat.skills.map((skill, j) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + j * 0.04 }}
                    className="flex items-center gap-3 font-body text-lg text-muted-foreground group hover:text-foreground transition-colors"
                  >
                    <span className="w-1 h-1 bg-primary flex-shrink-0 group-hover:w-2 transition-all" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkillsSection;
