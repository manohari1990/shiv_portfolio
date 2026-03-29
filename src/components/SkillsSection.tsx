import { motion } from "framer-motion";

const skills = [
  { label: "Brand Identity & Strategy", level: 95 },
  { label: "Integrated Marketing Campaigns", level: 90 },
  { label: "Print & Environmental Design", level: 92 },
  { label: "Digital & Social Media Creative", level: 88 },
  { label: "Team Leadership & Art Direction", level: 94 },
  { label: "Photography & Production Direction", level: 85 },
];

const SkillsSection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border" id="skills">
      <div className="container">
        <span className="font-mono text-md text-primary/60 tracking-[0.3em]">// EXPERTISE</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-12">
              Core <span className="text-gradient">Skills</span>
            </h2>
        <div className="max-w-2xl mx-auto text-center" >
        {/* <div className="grid md:grid-cols-1 gap-16 md:gap-24"> */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            
            <div className="space-y-5">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-body text-lg">{skill.label}</span>
                    <span className="font-mono text-[13px] text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-px bg-muted overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.08 + 0.3, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
