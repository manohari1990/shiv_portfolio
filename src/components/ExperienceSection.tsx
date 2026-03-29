import { motion } from "framer-motion";

const experiences = [
  {
    role: "Assistant Manager – Marketing & Branding",
    company: "Cancer Treatment Services Pvt Ltd, Hyderabad",
    period: "July 2022 – Present",
    description:
      "Lead marketing and branding initiatives for American Oncology Institute, Citizens Specialty Hospital, and AMPATH Pathology. Develop and execute integrated brand campaigns aligned with business objectives. Coordinate with sales teams and vendors to establish branded franchisee collection centers. Ensure brand consistency across digital, print, and outdoor media",
    highlights: [
      "Brand identity & hospital branding",
      "Integrated marketing campaigns",
      "Health awareness visual campaigns",
      "Environmental & signage design",
    ],
  },
  {
    role: "Senior Art Director",
    company: "Rainforest Communications Pvt Ltd, Hyderabad",
    period: "April 2019 – June 2022",
    description:
      "Directed creative concepts and campaign execution for multiple brands. Collaborated with clients to translate strategic objectives into impactful visual solutions. Managed end-to-end creative lifecycle from ideation to final delivery. Supervised and mentored creative team members.",
    highlights: [
      "Multi-industry campaign direction",
      "Team leadership & mentoring",
      "Outdoor & billboard campaigns",
      "Client presentation & strategy",
    ],
  },
  {
    role: "Senior Visualizer",
    company: "RBC Worldwide (Ramakanth Advertising), Hyderabad",
    period: "March 2017 – March 2019",
    description:
      "Conceptualized visual designs for advertising campaigns across print and digital media. Provided creative direction for photography and production shoots. Ensured campaign deliverables aligned with client objectives.",
    highlights: [
      "Brand identity systems",
      "Photography art direction",
      "Print & production design",
      "Corporate stationery suites",
    ],
  },
  {
    role: "Visualizer",
    company: "Ellkram Visual Communication Pvt Ltd, Hyderabad",
    period: "April 2014 – October 2016",
    description:
      "Designed visual concepts based on client briefs. Coordinated with vendors and production teams for campaign execution. Assisted in creative direction during campaign shoots.",
    highlights: [
      "Marketing collateral design",
      "Digital asset creation",
      "Pre-press & production",
      "Layout & typography",
    ],
  },
  {
    role: "Senior Graphic Designer",
    company: "Two55am Studios Pvt Ltd, Gurgaon",
    period: "April 2013 – March 2014",
    description:
      "Designed website layouts and mobile UI interfaces. Developed digital branding campaigns for social media platforms. Ensured brand consistency across online marketing initiatives.",
    highlights: [
      "Marketing collateral design",
      "Digital asset creation",
      "Pre-press & production",
      "Layout & typography",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Graceful Media (I) Pvt. Ltd., Raipur",
    period: "September 2012 – March 2013",
    description:
      "Created print and outdoor advertising materials. Developed ad concepts and coordinated with media agencies.",
    highlights: [
      "Marketing collateral design",
      "Digital asset creation",
      "Pre-press & production",
      "Layout & typography",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Avinash Developers Pvt. Ltd., Raipur",
    period: "January 2011 – August 2012",
    description:
      "Developed branding materials for residential and commercial projects. Managed creative assets for events and campaigns at Magneto Mall. Awarded Best Debutant Award and recognized as Star Performer (June 2011).",
    highlights: [
      "Marketing collateral design",
      "Digital asset creation",
      "Pre-press & production",
      "Layout & typography",
    ],
  },
  {
    role: "Web Designer & Graphic Designer",
    company: "SNEHA IT Solutions, Bhilai",
    period: "January 2009 – December 2010",
    description:
      "Designed websites, brochures, and digital banners ensuring brand consistency.",
    highlights: [],
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
