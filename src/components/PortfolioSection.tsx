import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import healthcareImg from "@/assets/portfolio-healthcare.jpg";
import campaignsImg from "@/assets/portfolio-campaigns.jpg";
import brandingImg from "@/assets/portfolio-branding.jpg";

const projects = [
  {
    title: "Healthcare Branding",
    subtitle: "American Oncology Institute · Citizens Specialty · AMPATH",
    description: "Led end-to-end branding and marketing creatives including health awareness programs, diagnostic promotions, and hospital events across print, digital, and environmental media.",
    image: healthcareImg,
    tags: ["Brand Identity", "Print", "Environmental"],
    num: "01",
  },
  {
    title: "Integrated Campaigns",
    subtitle: "Multi-Industry · Digital & Outdoor",
    description: "Conceptualized and directed advertising campaigns across healthcare, real estate, and retail — spanning digital platforms, outdoor billboards, and print collateral.",
    image: campaignsImg,
    tags: ["Advertising", "Digital", "Outdoor"],
    num: "02",
  },
  {
    title: "Brand Systems",
    subtitle: "Corporate Identity · Visual Systems",
    description: "Developed comprehensive brand identity systems including logo design, typography, color systems, and corporate stationery for diverse industries.",
    image: brandingImg,
    tags: ["Identity", "Design Systems", "Corporate"],
    num: "03",
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-24 md:py-32" id="work">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <span className="font-mono text-md text-primary/60 tracking-[0.3em]">// SELECTED WORK</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
              Port<span className="text-gradient">folio</span>
            </h2>
          </div>
          {/* <span className="font-mono text-[10px] text-muted-foreground/30 hidden md:block">SECTION_02</span> */}
        </motion.div>

        <div className="space-y-0 border border-border">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`grid md:grid-cols-2 group cursor-pointer hover:bg-card/60 transition-colors ${i < projects.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className={`overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className={`p-8 md:p-12 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[13px] text-primary tracking-[0.2em]">
                    {project.subtitle.toUpperCase()}
                  </span>
                  <span className="font-mono text-3xl text-muted-foreground/10 font-bold">{project.num}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4 flex items-center gap-3">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed text-lg mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[13px] font-mono tracking-wider uppercase border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
