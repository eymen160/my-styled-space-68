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

  return (
    <section className="relative overflow-hidden pt-28 pb-12 md:pt-32 md:pb-16">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute -top-20 -right-20 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-accent/30 via-accent/10 to-transparent blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 0.4, scale: 1, rotate: 0 }}
          transition={{ duration: 2.5, delay: 0.2, ease: "easeOut" }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-500/25 via-blue-500/10 to-transparent blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 3, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-emerald-500/10 via-transparent to-amber-500/10 blur-[120px]"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-40" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto px-6 w-full relative z-10"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-xl text-sm mb-10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-foreground font-medium">Open for Summer 2026 Internships</span>
          </div>
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
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] leading-[0.9] text-muted-foreground/70">
            Faruk Keyvan
          </span>
        </motion.h1>

        {/* Role tags */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
          {["AI/ML Research", "Software Development", "Data Analytics"].map((tag, i) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground/80"
            >
              {tag}
            </span>
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
          <span className="text-accent font-semibold">AI solutions for healthcare</span>{" "}
          through NIH-funded research in medical imaging.
        </motion.p>

        {/* CTA Buttons */}
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

          <motion.button
            onClick={() => scrollToSection('contact')}
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Stats row */}
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
              whileHover={{ scale: 1.05 }}
              className="group relative p-4 md:p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/60 hover:border-accent/40 transition-all duration-500 cursor-default"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
          onClick={() => {
            const element = document.getElementById('work');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
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
