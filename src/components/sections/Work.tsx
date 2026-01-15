import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProjectProps {
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  tags: string[];
  link: string;
  index: number;
}

const Project = ({ title, subtitle, description, impact, tags, link, index }: ProjectProps) => {
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
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group block"
    >
      <div className="py-16 md:py-20 border-t border-border group-hover:border-foreground/30 transition-colors duration-700">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Number */}
          <div className="md:col-span-1">
            <span className="text-sm text-muted-foreground font-medium tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="md:col-span-4">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight group-hover:opacity-60 transition-opacity duration-500">
              {title}
            </h3>
            <p className="text-muted-foreground mt-2 text-lg">{subtitle}</p>
          </div>

          {/* Description & Impact */}
          <div className="md:col-span-5 space-y-4">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {description}
            </p>
            <p className="text-foreground/80 text-sm font-medium">
              → {impact}
            </p>
          </div>

          {/* Arrow */}
          <div className="md:col-span-2 flex items-start justify-end">
            <motion.div
              className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-all duration-500 group-hover:translate-x-2"
            >
              <span className="hidden lg:inline uppercase tracking-wider text-xs">View Project</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
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
        <div className="flex flex-wrap gap-3 mt-8 md:ml-[8.33%]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 text-xs font-medium bg-secondary/80 rounded-full text-foreground/70 tracking-wide"
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
      title: "Retinal Disease Detection",
      subtitle: "NIH-Funded Research Project",
      description:
        "Applied Deep Learning to medical imaging for early detection of retinal diseases. Processed and analyzed APTOS and IDRiD datasets with advanced preprocessing techniques.",
      impact: "Improved diagnostic accuracy through model optimization",
      tags: ["Python", "PyTorch", "Deep Learning", "Medical Imaging", "NumPy", "Pandas"],
      link: "https://github.com/eymen160",
    },
    {
      title: "Digital Recipe Book",
      subtitle: "Full-Stack Backend Development",
      description:
        "Architected the backend logic for a recipe application with persistent database storage. Designed modular SQL operations replacing in-memory storage with secure MySQL integration.",
      impact: "Core backend functionality adopted by frontend team",
      tags: ["Python", "MySQL", "Flask", "REST API", "Git", "Database Design"],
      link: "https://github.com/eymen160",
    },
    {
      title: "2D Platformer Game",
      subtitle: "Game Development with Pygame",
      description:
        "Engineered a complete 2D platformer with physics-based collision detection, dynamic scoring system, and optimized game loop for smooth 60fps gameplay.",
      impact: "Full game loop with real-time physics",
      tags: ["Python", "Pygame", "Game Development", "OOP"],
      link: "https://github.com/eymen160/Platform-game",
    },
    {
      title: "BitBoard Checkers Engine",
      subtitle: "Systems Programming",
      description:
        "Built a high-performance checkers engine using bitboard representation for efficient game state management and move generation algorithms.",
      impact: "Efficient state management with bitwise operations",
      tags: ["C", "Algorithms", "Data Structures", "Bitwise Operations"],
      link: "https://github.com/eymen160/CS3503-Project1-BitBoard-Checkers",
    },
  ];

  return (
    <section id="work" className="py-32 md:py-48">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 60 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20 md:mb-32"
        >
          <p className="label text-muted-foreground mb-6">Featured Projects</p>
          <h2 className="display-lg max-w-3xl">
            Building solutions that matter—
            <span className="text-muted-foreground">from AI research to full-stack applications.</span>
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-16 border-t border-border"
        >
          <a
            href="https://github.com/eymen160"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm font-medium hover:opacity-60 transition-opacity duration-500 uppercase tracking-wider"
          >
            View all projects on GitHub
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
