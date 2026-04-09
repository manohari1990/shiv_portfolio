import { motion } from "framer-motion";
import { projects } from "../helpers/StaticContent";
import type { ProjectsPayload } from "../helpers/StaticContent"

const handleClick = (project:ProjectsPayload) =>{
  if(!project.link || project.link.trim() == ''){
    return
  }
  window.open(project.link, "_blank")
}

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
            {/* <span className="font-mono text-md text-primary/60 tracking-[0.3em]">// SELECTED WORK</span> */}
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
              className={`grid md:grid-cols-1 group cursor-pointer hover:bg-card/60 transition-colors ${i < projects.length - 1 ? "border-b border-border" : ""}`}
              onClick={()=>handleClick(project)}
            >
              <div className={`overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <video autoPlay muted loop preload="auto">
                  <source src="https://shiv-portfolio-files.s3.us-east-1.amazonaws.com/assets/videos/Portfolio.mp4"  type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className={`p-8 md:p-12 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <p className="text-muted-foreground font-body leading-relaxed text-lg mb-6">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
