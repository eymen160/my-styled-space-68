import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const stats = [
    { value: "3.56", label: "GPA", color: "from-violet-500 to-purple-600" },
    { value: "NIH", label: "Funded Research", color: "from-blue-500 to-cyan-500" },
    { value: "2027", label: "Graduation", color: "from-emerald-500 to-teal-500" },
  ];

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/20 via-accent/5 to-transparent blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-500/20 via-blue-500/5 to-transparent blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1200px] mx-auto px-6 w-full pt-20 pb-32 relative z-10"
      >
        {/* Intro Label with gradient border */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-blue-500 animate-pulse" />
            AI/ML Research • Software Development • Data Analytics
          </span>
        </motion.div>

        {/* Name - Massive typography with gradient accent */}
        <motion.h1 variants={itemVariants} className="display-xl max-w-5xl mb-8">
          <span className="relative">
            Eymen Faruk
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accent via-blue-500 to-accent rounded-full"
            />
          </span>
          <br />
          <span className="bg-gradient-to-r from-muted-foreground to-muted-foreground/60 bg-clip-text text-transparent">
            Keyvan
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="body-xl text-muted-foreground max-w-xl"
        >
          Computer Science student & Undergraduate Research Assistant at{" "}
          <span className="text-foreground font-medium">Kennesaw State University</span>, 
          working on <span className="text-accent font-medium">NIH-funded AI/ML research</span> in medical imaging.
        </motion.p>

        {/* Quick stats with hover effects */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-border/50"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group relative px-6 py-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all duration-500 cursor-default"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className={`text-3xl font-semibold tracking-tight bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mt-12">
          <motion.a
            href="#work"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-accent to-blue-500 text-white font-medium shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-500"
          >
            View My Work
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-border/50 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-accent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
