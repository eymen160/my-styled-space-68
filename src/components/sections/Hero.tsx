import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  const stats = [
    { value: "3.56", label: "GPA", sublabel: "Academic Excellence" },
    { value: "NIH", label: "Research", sublabel: "Funded Project" },
    { value: "2027", label: "Graduation", sublabel: "B.S. Computer Science" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative overflow-hidden pt-28 pb-12 md:pt-32 md:pb-16 min-h-[90vh] flex flex-col justify-center">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Moving gradient orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.4, 0.6, 0.4],
            scale: [0.8, 1.1, 0.8],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-accent/30 via-violet-500/20 to-transparent blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [0.9, 1.2, 0.9],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-500/25 via-cyan-500/15 to-transparent blur-[100px]"
        />
        <motion.div
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gradient-conic from-accent/10 via-emerald-500/10 via-blue-500/10 to-accent/10 blur-[120px]"
        />
        
        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-accent/40"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated grid pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"
      />
      
      {/* Scan line effect */}
      <motion.div
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto px-6 w-full relative z-10"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-xl text-sm mb-10 cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-foreground font-medium">Open for Summer 2026 Internships</span>
          </motion.div>
        </motion.div>

        {/* Name - Ultra large with animated gradient */}
        <motion.h1 variants={itemVariants} className="mb-6">
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.03em] leading-[0.9]">
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              className="bg-gradient-to-r from-foreground via-accent to-foreground bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              Eymen
            </motion.span>
          </span>
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] leading-[0.9] text-muted-foreground/70"
          >
            Faruk Keyvan
          </motion.span>
        </motion.h1>

        {/* Role tags with stagger animation */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
          {["AI/ML Research", "Software Development", "Data Analytics"].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--accent))" }}
              className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground/80 cursor-default transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12"
        >
          CS student & Research Assistant at{" "}
          <span className="text-foreground font-semibold">Kennesaw State University</span>, 
          building{" "}
          <motion.span 
            className="text-accent font-semibold inline-block"
            animate={{ 
              textShadow: ["0 0 0px hsl(var(--accent))", "0 0 10px hsl(var(--accent))", "0 0 0px hsl(var(--accent))"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            AI solutions for healthcare
          </motion.span>{" "}
          through NIH-funded research in medical imaging.
        </motion.p>

        {/* CTA Buttons - All functional */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
          <motion.button
            onClick={() => scrollToSection('work')}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-semibold text-lg shadow-2xl shadow-foreground/20 hover:shadow-foreground/30 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 relative z-10"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </motion.svg>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.a
            href="mailto:eymenfaruk479@gmail.com"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-foreground/20 text-foreground font-semibold text-lg hover:border-accent hover:text-accent transition-all duration-300"
          >
            Get In Touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </motion.a>

          <motion.a
            href="https://github.com/eymen160"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-6 py-4 rounded-full border-2 border-foreground/20 text-foreground font-semibold text-lg hover:border-accent hover:text-accent transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Stats row with counter animation */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-4 md:p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/60 hover:border-accent/40 transition-all duration-500 cursor-default overflow-hidden"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              <p className="text-2xl md:text-4xl font-bold tracking-tight text-foreground relative z-10">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-foreground/80 mt-1 relative z-10">{stat.label}</p>
              <p className="text-xs text-muted-foreground relative z-10 hidden md:block">{stat.sublabel}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="max-w-[1400px] mx-auto px-6 pt-12 flex justify-start"
      >
        <motion.button
          onClick={() => scrollToSection('work')}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
        >
          <span>Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border-2 border-current/40 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-accent"
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;