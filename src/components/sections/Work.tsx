import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  index: number;
}

const ProjectCard = ({ title, category, year, index }: ProjectCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      className="group cursor-pointer"
    >
      <div className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/20 group-hover:from-accent/10 group-hover:to-accent/30 transition-all duration-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-4xl md:text-6xl text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500">
            0{index + 1}
          </span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-all duration-500 flex items-center justify-center">
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            className="text-sm uppercase tracking-widest text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            View Project
          </motion.span>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl md:text-2xl font-medium mb-1 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground font-sans">{category}</p>
        </div>
        <span className="text-sm text-muted-foreground font-sans">{year}</span>
      </div>
    </motion.div>
  );
};

const Work = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const projects = [
    { title: "Brand Evolution", category: "Identity & Web Design", year: "2024" },
    { title: "Digital Canvas", category: "UI/UX Design", year: "2024" },
    { title: "Motion Stories", category: "Motion & Animation", year: "2023" },
    { title: "Mindful App", category: "Product Design", year: "2023" },
  ];

  return (
    <section id="work" className="py-32 md:py-48 bg-card relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground mb-6"
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-heading"
          >
            Projects that I'm proud of
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 text-lg font-sans font-medium link-underline group"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
