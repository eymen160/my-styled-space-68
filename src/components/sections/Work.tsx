import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProjectProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link: string;
  index: number;
}

const Project = ({ title, subtitle, description, tags, link, index }: ProjectProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.a
      ref={ref}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group block"
    >
      <div className="py-12 md:py-16 border-t border-border group-hover:border-foreground/20 transition-colors duration-500">
        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {/* Number */}
          <div className="md:col-span-1">
            <span className="text-sm text-muted-foreground font-medium">
              0{index + 1}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="md:col-span-5">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:opacity-60 transition-opacity duration-300">
              {title}
            </h3>
            <p className="text-muted-foreground mt-1">{subtitle}</p>
          </div>

          {/* Description */}
          <div className="md:col-span-4">
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Arrow */}
          <div className="md:col-span-2 flex items-start justify-end">
            <motion.div
              initial={{ x: 0, opacity: 0.5 }}
              whileHover={{ x: 4, opacity: 1 }}
              className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
            >
              <span className="hidden md:inline">View</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6 md:ml-[8.33%]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

const Work = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "AI/ML Retinal Imaging",
      subtitle: "NIH-Funded Research",
      description:
        "Deep Learning models for early detection of retinal diseases using APTOS and IDRiD datasets at Kennesaw State University.",
      tags: ["Python", "PyTorch", "Medical Imaging", "Deep Learning"],
      link: "https://github.com/eymen160",
    },
    {
      title: "Digital Recipe Book",
      subtitle: "Full-Stack Application",
      description:
        "Backend logic for a recipe application using Python and MySQL with persistent database storage and secure SQL operations.",
      tags: ["Python", "MySQL", "Flask", "REST API"],
      link: "https://github.com/eymen160",
    },
    {
      title: "Platform Game",
      subtitle: "Game Development",
      description:
        "2D platformer built with Pygame featuring collision detection, scoring system, and optimized game loop logic.",
      tags: ["Python", "Pygame", "Game Dev"],
      link: "https://github.com/eymen160/Platform-game",
    },
    {
      title: "BitBoard Checkers",
      subtitle: "Systems Programming",
      description:
        "Checkers game engine using bitboard representation for efficient game state management and move generation.",
      tags: ["C", "Algorithms", "Data Structures"],
      link: "https://github.com/eymen160/CS3503-Project1-BitBoard-Checkers",
    },
  ];

  return (
    <section id="work" className="py-32 md:py-48">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 md:mb-24"
        >
          <p className="label text-muted-foreground mb-4">Selected Work</p>
          <h2 className="display-md max-w-2xl">
            Projects that showcase my skills and interests.
          </h2>
        </motion.div>

        {/* Projects List */}
        <div>
          {projects.map((project, index) => (
            <Project key={project.title} {...project} index={index} />
          ))}
        </div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-12 border-t border-border"
        >
          <a
            href="https://github.com/eymen160"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity duration-300"
          >
            View all on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
