import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

  // Floating particles with different colors
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
    color: i % 3 === 0 ? "accent" : i % 3 === 1 ? "blue-500" : "emerald-500",
  }));

  // DNA helix-like floating lines
  const helixLines = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: i * 0.3,
    duration: 8 + Math.random() * 4,
  }));

  // Glowing orbs
  const orbs = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: 100 + Math.random() * 200,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 15 + Math.random() * 10,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative overflow-hidden pt-28 pb-12 md:pt-32 md:pb-16 min-h-[100vh] flex flex-col justify-center">
      {/* Dynamic aurora background that follows mouse */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mouse-following gradient */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full blur-[150px] opacity-30"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent)) 0%, hsl(217 91% 60%) 50%, transparent 70%)",
            left: `${mousePosition.x - 20}%`,
            top: `${mousePosition.y - 20}%`,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 100 }}
        />

        {/* Animated aurora waves */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/2 -right-1/4 w-[1200px] h-[1200px] bg-gradient-conic from-accent/40 via-blue-500/30 via-emerald-500/20 to-accent/40 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1.1, 0.9, 1.1],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-1/2 -left-1/4 w-[1000px] h-[1000px] bg-gradient-conic from-blue-500/30 via-violet-500/30 via-pink-500/20 to-blue-500/30 blur-[120px] rounded-full"
        />

        {/* Glowing orbs */}
        {orbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full"
            style={{
              width: orb.size,
              height: orb.size,
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              background: `radial-gradient(circle, hsl(var(--accent) / 0.3) 0%, transparent 70%)`,
            }}
            animate={{
              x: [-50, 50, -50],
              y: [-30, 30, -30],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              delay: orb.delay,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Floating particles with glow */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full bg-${particle.color}/60 shadow-lg`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              boxShadow: `0 0 ${particle.size * 2}px hsl(var(--accent) / 0.5)`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* DNA helix lines */}
        {helixLines.map((line) => (
          <motion.div
            key={line.id}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
            style={{ top: `${10 + line.id * 8}%` }}
            animate={{
              scaleX: [0.5, 1.2, 0.5],
              opacity: [0.1, 0.4, 0.1],
              x: [-100, 100, -100],
            }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              delay: line.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated mesh grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--accent)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--accent)/0.1)_1px,transparent_1px)] bg-[size:80px_80px]"
        />
        
        {/* Multiple scan lines */}
        <motion.div
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-accent/50 to-transparent blur-sm"
        />
        <motion.div
          animate={{ y: ["200%", "-100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        />

        {/* Corner decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-[400px] h-[400px] border border-accent/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] border border-blue-500/10 rounded-full"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto px-6 w-full relative z-10"
      >
        {/* Status badge with enhanced glow */}
        <motion.div variants={itemVariants}>
          <motion.div 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--accent) / 0.3)" }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-xl text-sm mb-10 cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-foreground font-medium">Open for Summer 2026 Internships</span>
          </motion.div>
        </motion.div>

        {/* Name with enhanced gradient animation */}
        <motion.h1 variants={itemVariants} className="mb-6">
          <motion.span 
            className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.03em] leading-[0.9]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "300% 100%" }}
              className="bg-gradient-to-r from-foreground via-accent via-blue-500 to-foreground bg-clip-text text-transparent"
            >
              Eymen
            </motion.span>
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] leading-[0.9] text-muted-foreground/70"
          >
            <motion.span
              animate={{ 
                textShadow: ["0 0 0px transparent", "0 0 20px hsl(var(--accent) / 0.3)", "0 0 0px transparent"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Faruk Keyvan
            </motion.span>
          </motion.span>
        </motion.h1>

        {/* Role tags with stagger animation and glow */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
          {["AI/ML Research", "Software Development", "Data Analytics"].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15, type: "spring", stiffness: 200 }}
              whileHover={{ 
                scale: 1.1, 
                borderColor: "hsl(var(--accent))",
                boxShadow: "0 0 20px hsl(var(--accent) / 0.3)",
              }}
              className="px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-border text-sm font-medium text-foreground/80 cursor-default transition-all duration-300"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Tagline with glowing keywords */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12"
        >
          CS student & Research Assistant at{" "}
          <motion.span 
            className="text-foreground font-semibold inline-block"
            whileHover={{ scale: 1.05 }}
          >
            Kennesaw State University
          </motion.span>, 
          building{" "}
          <motion.span 
            className="text-accent font-semibold inline-block relative"
            animate={{ 
              textShadow: ["0 0 5px hsl(var(--accent))", "0 0 20px hsl(var(--accent))", "0 0 5px hsl(var(--accent))"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            AI solutions for healthcare
            <motion.span
              className="absolute -inset-1 bg-accent/10 rounded-lg blur-md -z-10"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.span>{" "}
          through NIH-funded research in medical imaging.
        </motion.p>

        {/* CTA Buttons with enhanced effects */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
          <motion.button
            onClick={() => scrollToSection('work')}
            whileHover={{ scale: 1.05, y: -3, boxShadow: "0 20px 40px hsl(var(--accent) / 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-semibold text-lg shadow-2xl shadow-foreground/20 transition-all duration-300 overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-accent via-blue-500 to-emerald-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
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
          </motion.button>

          <motion.button
            onClick={() => window.location.href = 'mailto:eymenfaruk479@gmail.com'}
            whileHover={{ scale: 1.05, y: -3, borderColor: "hsl(var(--accent))" }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-foreground/20 text-foreground font-semibold text-lg hover:text-accent transition-all duration-300 overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-accent/10"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ borderRadius: "9999px" }}
            />
            <span className="relative z-10">Get In Touch</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 relative z-10"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </motion.button>

          <motion.a
            href="https://github.com/eymen160"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-6 py-4 rounded-full border-2 border-foreground/20 text-foreground font-semibold text-lg hover:border-accent hover:text-accent transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Stats row with glass morphism */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, rotateX: -30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.15, type: "spring" }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                boxShadow: "0 20px 40px hsl(var(--accent) / 0.2)",
              }}
              className="group relative p-4 md:p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/60 hover:border-accent/50 transition-all duration-500 cursor-default overflow-hidden"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-accent/20 via-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />
              <motion.p 
                className="text-2xl md:text-4xl font-bold tracking-tight text-foreground relative z-10"
                animate={{ 
                  textShadow: ["0 0 0px transparent", "0 0 10px hsl(var(--accent) / 0.3)", "0 0 0px transparent"]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm font-semibold text-foreground/80 mt-1 relative z-10">{stat.label}</p>
              <p className="text-xs text-muted-foreground relative z-10 hidden md:block">{stat.sublabel}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator with enhanced animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="max-w-[1400px] mx-auto px-6 pt-12 flex justify-start"
      >
        <motion.button
          onClick={() => scrollToSection('work')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm font-medium group"
        >
          <span>Scroll to explore</span>
          <motion.div 
            className="w-6 h-10 rounded-full border-2 border-current/40 flex items-start justify-center p-2 group-hover:border-accent transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-2 rounded-full bg-accent"
            />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
