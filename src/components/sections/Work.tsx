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
  gradient: string;
}

const Project = ({ title, subtitle, description, impact, tags, link, index, gradient }: ProjectProps) => {
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
      <div className="relative py-12 md:py-16 border-t border-border/50 group-hover:border-accent/30 transition-colors duration-700">
        {/* Hover glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 rounded-3xl`} />
        
        <div className="relative grid md:grid-cols-12 gap-6 md:gap-8">
          {/* Number with gradient */}
          <div className="md:col-span-1">
            <span className={`text-sm font-bold tabular-nums bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="md:col-span-4">
            <motion.h3 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight group-hover:text-accent transition-colors duration-500"
            >
              {title}
            </motion.h3>
            <p className="text-muted-foreground mt-2 text-lg">{subtitle}</p>
          </div>

          {/* Description & Impact */}
          <div className="md:col-span-5 space-y-4">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {description}
            </p>
            <motion.p 
              className={`text-sm font-medium bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
            >
              → {impact}
            </motion.p>
          </div>

          {/* Arrow with animation */}
          <div className="md:col-span-2 flex items-start justify-end">
            <motion.div
              className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-accent transition-all duration-500"
              whileHover={{ x: 4 }}
            >
              <span className="hidden lg:inline uppercase tracking-wider text-xs">View</span>
              <motion.div
                className="w-10 h-10 rounded-full border border-border/50 group-hover:border-accent/50 group-hover:bg-accent/10 flex items-center justify-center transition-all duration-500"
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Tags with staggered animation */}
        <div className="flex flex-wrap gap-2 mt-8 md:ml-[8.33%]">
          {tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.15 + tagIndex * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-1.5 text-xs font-medium bg-card border border-border/50 rounded-full text-foreground/70 tracking-wide hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 cursor-default"
            >
              {tag}
            </motion.span>
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
      description: "Applied Deep Learning to medical imaging for early detection of retinal diseases. Processed and analyzed APTOS and IDRiD datasets with advanced preprocessing techniques.",
      impact: "Improved diagnostic accuracy through model optimization",
      tags: ["Python", "PyTorch", "Deep Learning", "Medical Imaging", "NumPy", "Pandas"],
      link: "https://github.com/eymen160",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      title: "Digital Recipe Book",
      subtitle: "Full-Stack Backend Development",
      description: "Architected the backend logic for a recipe application with persistent database storage. Designed modular SQL operations replacing in-memory storage with secure MySQL integration.",
      impact: "Core backend functionality adopted by frontend team",
      tags: ["Python", "MySQL", "Flask", "REST API", "Git", "Database Design"],
      link: "https://github.com/eymen160",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "2D Platformer Game",
      subtitle: "Game Development with Pygame",
      description: "Engineered a complete 2D platformer with physics-based collision detection, dynamic scoring system, and optimized game loop for smooth 60fps gameplay.",
      impact: "Full game loop with real-time physics",
      tags: ["Python", "Pygame", "Game Development", "OOP"],
      link: "https://github.com/eymen160/Platform-game",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "BitBoard Checkers Engine",
      subtitle: "Systems Programming",
      description: "Built a high-performance checkers engine using bitboard representation for efficient game state management and move generation algorithms.",
      impact: "Efficient state management with bitwise operations",
      tags: ["C", "Algorithms", "Data Structures", "Bitwise Operations"],
      link: "https://github.com/eymen160/CS3503-Project1-BitBoard-Checkers",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section id="work" className="py-32 md:py-48 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-accent/5 via-transparent to-blue-500/5 blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 60 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20 md:mb-32"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-blue-500" />
            Featured Projects
          </motion.span>
          <h2 className="display-lg max-w-3xl">
            Building solutions that matter—
            <span className="bg-gradient-to-r from-muted-foreground to-muted-foreground/60 bg-clip-text text-transparent">
              from AI research to full-stack applications.
            </span>
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
          className="pt-16 border-t border-border/50"
        >
          <motion.a
            href="https://github.com/eymen160"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 8 }}
            className="inline-flex items-center gap-3 text-sm font-medium hover:text-accent transition-colors duration-500 uppercase tracking-wider group"
          >
            View all projects on GitHub
            <motion.div
              className="w-8 h-8 rounded-full border border-border/50 group-hover:border-accent/50 group-hover:bg-accent/10 flex items-center justify-center transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
