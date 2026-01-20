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
      initial={{ opacity: 0, y: 60, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -12, scale: 1.03, rotateY: 2 }}
      className="group block perspective-1000"
    >
      <div className="relative p-6 md:p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 overflow-hidden">
        {/* Animated holographic background */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.12] transition-opacity duration-500`}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-conic from-accent/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Multiple shimmer effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1200 delay-200"
        />
        
        {/* Floating particles inside card */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent/40 opacity-0 group-hover:opacity-100"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        
        <div className="relative z-10">
          {/* Header row */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              {/* Project icon with 3D bounce animation */}
              <motion.div 
                whileHover={{ scale: 1.3, rotate: 15, rotateY: 15 }}
                animate={{ 
                  y: [0, -8, 0],
                  rotateZ: [0, 5, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-2xl shadow-lg group-hover:shadow-2xl group-hover:shadow-accent/30 transition-shadow duration-300`}
              >
                {icon}
              </motion.div>
              <div>
                <motion.span 
                  className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {subtitle}
                </motion.span>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mt-1 group-hover:text-accent transition-colors duration-300">
                  {title}
                </h3>
              </div>
            </div>
            
            {/* External link indicator with rotation */}
            <motion.div
              whileHover={{ scale: 1.3, rotate: 90 }}
              className="w-10 h-10 rounded-full border border-border/50 group-hover:border-accent/50 group-hover:bg-accent/20 flex items-center justify-center transition-all duration-300"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors duration-300"
                animate={{ rotate: [0, 0, 45, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </motion.svg>
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>

          {/* Impact highlight with animated border */}
          <motion.div 
            className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${gradient} bg-opacity-10 mb-6 overflow-hidden`}
            whileHover={{ scale: 1.08 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
              animate={{ translateX: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-4 h-4 text-accent relative z-10"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </motion.svg>
            <span className={`text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent relative z-10`}>
              {impact}
            </span>
          </motion.div>

          {/* Tags with stagger animation */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1 + tagIndex * 0.05,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -3,
                  boxShadow: "0 5px 15px hsl(var(--accent) / 0.2)",
                }}
                className="px-3 py-1.5 text-xs font-medium bg-background/80 border border-border/80 rounded-full text-foreground/70 hover:border-accent/50 hover:text-accent hover:bg-accent/5 transition-all duration-200 cursor-default backdrop-blur-sm"
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

  // Floating code symbols for background
  const codeSymbols = ["{ }", "< />", "( )", "[ ]", "=>", "&&", "||", "++", "//", "/*", "*/", "==="];
  
  // Floating tech icons
  const techIcons = ["⚛️", "🐍", "☕", "🔷", "🌐", "💾"];

  return (
    <section id="work" className="py-20 md:py-28 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large animated gradient orbs */}
        <motion.div 
          animate={{ 
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-accent/20 via-violet-500/15 to-transparent blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -60, 0],
            y: [0, 50, 0],
            scale: [1.1, 0.9, 1.1],
            opacity: [0.1, 0.22, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-blue-500/15 via-cyan-500/10 to-transparent blur-[100px]" 
        />
        
        {/* Center pulsing glow */}
        <motion.div
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gradient-radial from-accent/10 to-transparent blur-[80px] rounded-full"
        />
        
        {/* Floating code symbols with enhanced animation */}
        {codeSymbols.map((symbol, i) => (
          <motion.span
            key={i}
            className="absolute font-mono text-accent/20 select-none font-bold"
            style={{
              left: `${5 + (i * 8)}%`,
              top: `${15 + (i % 4) * 22}%`,
              fontSize: `${14 + (i % 3) * 8}px`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              opacity: [0.1, 0.3, 0.1],
              rotate: [-15, 15, -15],
              scale: [0.9, 1.2, 0.9],
            }}
            transition={{
              duration: 10 + i * 1.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          >
            {symbol}
          </motion.span>
        ))}
        
        {/* Floating tech icons */}
        {techIcons.map((icon, i) => (
          <motion.span
            key={`icon-${i}`}
            className="absolute text-2xl select-none opacity-20"
            style={{
              right: `${10 + i * 12}%`,
              bottom: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-25, 25, -25],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          >
            {icon}
          </motion.span>
        ))}

        {/* Animated grid lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--accent) / 0.05) 1px, transparent 1px),
                             linear-gradient(to bottom, hsl(var(--accent) / 0.05) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Horizontal light beams */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        />
        <motion.div
          animate={{ x: ["200%", "-100%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-3/4 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Section Header with enhanced animations */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm text-sm font-medium text-accent mb-6"
            whileHover={{ scale: 1.08, boxShadow: "0 0 25px hsl(var(--accent) / 0.25)" }}
          >
            <motion.span 
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 rounded-full bg-accent" 
            />
            Featured Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Building solutions that{" "}
            <motion.span 
              className="bg-gradient-to-r from-accent via-blue-500 via-emerald-500 to-accent bg-clip-text text-transparent inline-block"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
              }}
              style={{ backgroundSize: "300% 100%" }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              make an impact
            </motion.span>
          </h2>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From AI research to full-stack applications—here's a selection of projects I'm proud of.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Project key={project.title} {...project} index={index} />
          ))}
        </div>

        {/* GitHub Link with enhanced effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/eymen160"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -5, boxShadow: "0 20px 40px hsl(var(--accent) / 0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-foreground/20 text-foreground font-semibold hover:border-accent hover:text-accent transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-accent/10 via-blue-500/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
            />
            <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span className="relative z-10">View All Projects on GitHub</span>
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-4 h-4 relative z-10"
              animate={{ x: [0, 5, 0], y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
