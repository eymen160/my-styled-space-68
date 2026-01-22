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
  icon: string;
}

const Project = ({ title, subtitle, description, impact, tags, link, index, gradient, icon }: ProjectProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.a
      ref={ref}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group block"
    >
      <div className="relative p-6 md:p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl overflow-hidden">
        {/* Subtle hover gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300`} />
        
        <div className="relative z-10">
          {/* Header row */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              {/* Project icon */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-2xl shadow-lg`}
              >
                {icon}
              </motion.div>
              <div>
                <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                  {subtitle}
                </span>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mt-1 group-hover:text-accent transition-colors duration-300">
                  {title}
                </h3>
              </div>
            </div>
            
            {/* External link indicator */}
            <div className="w-10 h-10 rounded-full border border-border/50 group-hover:border-accent/50 group-hover:bg-accent/10 flex items-center justify-center transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors duration-300"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>

          {/* Impact highlight */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${gradient}/10 mb-6`}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-4 h-4 text-accent"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span className={`text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              {impact}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1 + tagIndex * 0.03,
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 text-xs font-medium bg-background/80 border border-border/80 rounded-full text-foreground/70 hover:border-accent/50 hover:text-accent transition-all duration-200 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
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
      subtitle: "NIH Research",
      description: "Applied Deep Learning to medical imaging for early detection of retinal diseases. Processed and analyzed APTOS and IDRiD datasets with advanced preprocessing techniques to improve diagnostic accuracy.",
      impact: "Contributing to healthcare AI innovation",
      tags: ["Python", "PyTorch", "Deep Learning", "Medical Imaging", "NumPy"],
      link: "https://github.com/eymen160",
      gradient: "from-violet-500 to-purple-600",
      icon: "🔬",
    },
    {
      title: "Digital Recipe Book",
      subtitle: "Full-Stack App",
      description: "Architected the complete backend logic for a recipe application with persistent database storage. Designed modular SQL operations with secure MySQL integration.",
      impact: "Backend architecture adopted by frontend team",
      tags: ["Python", "MySQL", "Flask", "REST API", "Database Design"],
      link: "https://github.com/eymen160",
      gradient: "from-blue-500 to-cyan-500",
      icon: "📖",
    },
    {
      title: "2D Platformer Game",
      subtitle: "Game Dev",
      description: "Engineered a complete 2D platformer with physics-based collision detection, dynamic scoring system, and optimized game loop for smooth 60fps gameplay.",
      impact: "Full game loop with real-time physics",
      tags: ["Python", "Pygame", "Game Development", "OOP"],
      link: "https://github.com/eymen160/Platform-game",
      gradient: "from-emerald-500 to-teal-500",
      icon: "🎮",
    },
    {
      title: "BitBoard Checkers Engine",
      subtitle: "Systems Programming",
      description: "Built a high-performance checkers engine using bitboard representation for efficient game state management and move generation algorithms.",
      impact: "Optimized with bitwise operations",
      tags: ["C", "Algorithms", "Data Structures", "Bitwise Ops"],
      link: "https://github.com/eymen160/CS3503-Project1-BitBoard-Checkers",
      gradient: "from-amber-500 to-orange-500",
      icon: "♟️",
    },
  ];

  return (
    <section id="work" className="py-20 md:py-28 relative overflow-hidden">
      {/* Clean gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-accent/25 via-violet-500/10 to-transparent blur-[100px]" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-500/10 to-transparent blur-[100px]" 
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm text-sm font-medium text-accent mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Building solutions that{" "}
            <span className="bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
              make an impact
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl">
            From AI research to full-stack applications—here's a selection of projects I'm proud of.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Project key={project.title} {...project} index={index} />
          ))}
        </div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/eymen160"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-foreground/20 text-foreground font-semibold hover:border-accent hover:text-accent transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>View All Projects on GitHub</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
