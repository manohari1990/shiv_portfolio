import { motion } from "framer-motion";
import { projects } from "../helpers/StaticContent";
import type { ProjectsPayload } from "../helpers/StaticContent"
import portfolio_video from "../assets/Portfolio.mp4"

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
                <video autoPlay muted loop>
                  <source src="https://shiv-portfolio-files.s3.us-east-1.amazonaws.com/assets/videos/Portfolio.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZGCTCGV64PIF4DTZ%2F20260329%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260329T152255Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLWVhc3QtMSJHMEUCIQC7hYFqB9bh%2Bz05lmz3s2RKX9s3th5ON4KdlCUVFFoBCwIge3ysA1W2f2rcWGDg6G1J8uiG9Vg8RbopAyEzPcoEbtEq%2BAIIERAAGgw2MzE1MzQ0MDA4OTMiDJaxVKEo1ksZszIP8yrVAhsDR2tAf9jVlPr8LM%2B6Ke03PMwhGWqumoB%2Fang7Q1u%2FCJqFluPpxxh5NCJYIQSUFHplX8QsNSLTf046%2BMQxZ81%2FORPYp8kLdq21twXk8ZwujurcK6jsryEe9F3KHxIZcYJC3966TnPwdW4n5El1DvsAKzeHsFMQJXMGVrGiJAK9JrW8oayipGzWzFldH72cp13ZRqk%2FqKhkhez3TJadGRaNs%2F180V8hhtapZzPmFGLU7wzDucoyjZn00luLQSUp1%2FL9yyAr0tBSTiwqANN1e2duHPP3aUItM168x%2F6Fmid%2BsPGWf%2BA5ke%2B3w6jbq0RP0ZxAR%2BUCNpnrbBT6GgsMHa0Lh4i1m9EWwq%2Bfr15%2B%2Bi68QFOoJFzBDKI17I4No%2B%2B2bStYuPnfDNWiLoX5tQZuYW9cj%2BY9ihBgKy6WSnBEGXf%2Bn0rwruLpJHFMLvh34%2Focf2lZyAOAMLPqo84GOq0C2bErDTPvl9eiPxq6ZSJYMubsnnC7y7woWOzFYLu9YPvhZDEfGO%2B75ZNmEW5vwQ6mBmt%2FJEea%2Bs%2FD8wm%2FN834l3PTwqve6rlPr6ZIRuQp05WTENdk8MEmLpdUdxI1sk9tFNuE8SnPUDSdSONRG5VxPqNdBAL3j8IqctM7zJwSRu7lqG4w%2Fel%2F42mf0ExND6iG7LhwHdwRxFHMDwnr1VYFAfx7%2B20m8lxXsa74WWz9M28HHk4dO2iD9nmZEJjbsS1hv61%2BoK4Wbwn5Q%2BoI%2FbDvKgK1xynmVIRZgdWLNLyzZfYgkpvHNanqsNyx68n9S8QE5T6r5fjGL%2FnXVgVY7wP2PzWjeLLUimlAa%2FscpVJYcA7uwNk%2F5zR1NF86tuWtdSSphPYbRGRiZUc%2Bu%2BWerA%3D%3D&X-Amz-Signature=49857c8a9e15db359eec1414e9e44a27a159e3c57d7639d08ce49b210cfb60c2&X-Amz-SignedHeaders=host&response-content-disposition=inline"  type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className={`p-8 md:p-12 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <p className="text-muted-foreground font-body leading-relaxed text-[22px] mb-6">
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
