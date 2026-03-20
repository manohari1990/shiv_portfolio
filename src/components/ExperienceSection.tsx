import { motion } from "framer-motion";

const experiences = [
  {
    role: "Associate Creative Director",
    company: "American Oncology Institute (AOI)",
    period: "2020 – Present",
    description:
      "Lead end-to-end branding and marketing creatives for AOI, Citizens Specialty Hospital, and AMPATH Pathology. Direct visual campaigns including health awareness programs, diagnostic promotions, and hospital events across print, digital, and environmental media.",
    highlights: [
      "Brand identity & hospital branding",
      "Integrated marketing campaigns",
      "Health awareness visual campaigns",
      "Environmental & signage design",
    ],
  },
  {
    role: "Senior Art Director",
    company: "Integrated Marketing Agency",
    period: "2016 – 2020",
    description:
      "Conceptualized and directed advertising campaigns for multiple industries including healthcare, real estate, and retail. Managed multidisciplinary teams and delivered high-impact creative solutions spanning digital platforms, outdoor billboards, and print collateral.",
    highlights: [
      "Multi-industry campaign direction",
      "Team leadership & mentoring",
      "Outdoor & billboard campaigns",
      "Client presentation & strategy",
    ],
  },
  {
    role: "Art Director",
    company: "Creative Design Studio",
    period: "2012 – 2016",
    description:
      "Developed comprehensive brand identity systems including logo design, typography, color systems, and corporate stationery. Collaborated with photographers and production teams to execute large-scale campaign visuals across diverse industries.",
    highlights: [
      "Brand identity systems",
      "Photography art direction",
      "Print & production design",
      "Corporate stationery suites",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Design & Communications Firm",
    period: "2008 – 2012",
    description:
      "Created marketing collateral, digital assets, and brand elements for corporate clients. Built foundational expertise in visual design principles, layout composition, and pre-press production workflows.",
    highlights: [
      "Marketing collateral design",
      "Digital asset creation",
      "Pre-press & production",
      "Layout & typography",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24 md:py-32" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <span className="font-mono text-md text-primary/60 tracking-[0.3em]">// CAREER PATH</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
              Experi<span className="text-gradient">ence</span>
            </h2>
          </div>
          {/* <span className="font-mono text-[10px] text-muted-foreground/30 hidden md:block">SECTION_03</span> */}
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-border group hover:border-primary/30 transition-colors"
              style={{ marginTop: i > 0 ? "-1px" : "0" }}
            >
              <div className="grid md:grid-cols-12 gap-0">
                {/* Left column - meta */}
                <div className="md:col-span-3 p-6 md:p-8 md:border-r border-b md:border-b-0 border-border">
                  <span className="font-mono text-[13px] tracking-[0.2em] text-primary block mb-2">
                    {exp.period}
                  </span>
                  <p className="text-muted-foreground font-mono text-md">
                    {exp.company}
                  </p>
                </div>

                {/* Right column - content */}
                <div className="md:col-span-9 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-display font-semibold mb-3">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-lg mb-5 max-w-2xl">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-3 py-1 text-[13px] font-mono tracking-wider border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
