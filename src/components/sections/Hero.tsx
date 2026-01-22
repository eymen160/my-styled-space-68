import { motion } from "framer-motion";
import TypewriterText from "../TypewriterText";
import SplitText from "../SplitText";

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
        ease: [0.25, 0.1, 0.25, 1] as const,
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

  const roles = ["AI/ML Research", "Software Development", "Data Analytics"];

  return (
    <section className="relative overflow-hidden pt-28 pb-12 md:pt-32 md:pb-16 min-h-[100vh] flex flex-col justify-center">
      {/* Clean gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gradient-to-bl from-accent/20 via-blue-500/10 to-transparent blur-[100px] rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -bottom-1/2 -left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-blue-500/15 via-violet-500/10 to-transparent blur-[100px] rounded-full"
        />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto px-6 w-full relative z-10"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm text-sm mb-10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-foreground font-medium">Open for Summer 2026 Internships</span>
          </div>
        </motion.div>

        {/* Name with gradient line */}
        <motion.div variants={itemVariants} className="mb-6 relative">
          <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-blue-500 to-transparent rounded-full hidden md:block" />
          <h1>
            <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.03em] leading-[0.9]">
              <SplitText text="Eymen" className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent" delay={0.2} />
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] leading-[0.9] text-muted-foreground/70">
              <SplitText text="Faruk Keyvan" delay={0.4} staggerDelay={0.04} />
            </span>
          </h1>
        </motion.div>

        {/* Animated role */}
        <motion.div variants={itemVariants} className="mb-8 h-14 flex items-center">
          <span className="text-2xl md:text-3xl text-muted-foreground font-medium">
            Focused on{" "}
            <TypewriterText 
              words={roles} 
              className="text-accent font-semibold"
            />
          </span>
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
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
          <motion.button
            onClick={() => scrollToSection('work')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <span>View My Work</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </motion.button>

          <motion.button
            onClick={() => window.location.href = 'mailto:eymenfaruk479@gmail.com'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-foreground/20 text-foreground font-semibold text-lg hover:border-accent hover:text-accent transition-colors duration-300"
          >
            <span>Get In Touch</span>
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
          </motion.button>

          <motion.a
            href="https://github.com/eymen160"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-foreground/20 text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Stats row with animated borders */}
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
              whileHover={{ scale: 1.03, y: -4 }}
              className="group relative p-4 md:p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/60 hover:border-accent/40 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent via-blue-500 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
              <div className="absolute inset-[1px] rounded-2xl bg-card -z-10" />
              
              <p className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-accent mt-1">
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
