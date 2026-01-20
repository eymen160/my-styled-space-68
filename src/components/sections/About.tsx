import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    { 
      category: "Languages", 
      items: ["Python", "Java", "C", "SQL", "R", "HTML/CSS"],
      icon: "💻",
      gradient: "from-violet-500 to-purple-600"
    },
    { 
      category: "AI/ML & Data", 
      items: ["PyTorch", "NumPy", "Pandas", "Deep Learning", "Graph ML", "Jupyter"],
      icon: "🧠",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      category: "Tools & Platforms", 
      items: ["Git", "AWS", "Flask", "PowerBI", "Tableau", "Bash"],
      icon: "🛠️",
      gradient: "from-emerald-500 to-teal-500"
    },
  ];

  const experiences = [
    {
      title: "Undergraduate Research Assistant",
      company: "Kennesaw State University",
      period: "Sep 2025 – Present",
      description: "NIH-funded AI/ML research in retinal disease detection",
      highlight: "NIH Funded",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      title: "Leadership Role",
      company: "Global Development and Networking Club",
      period: "2024 – Present",
      description: "Organized Youth Convention 2025 with speakers from Meta, Avanade, Emory",
      highlight: "Youth Convention 2025",
      gradient: "from-amber-500 to-orange-500"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  // Floating shapes
  const shapes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: 20 + Math.random() * 80,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 15 + Math.random() * 10,
    delay: Math.random() * 5,
    type: i % 3,
  }));

  return (
    <section id="about" className="py-20 md:py-28 bg-card/30 relative overflow-hidden" ref={ref}>
      {/* Enhanced animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-accent/20 via-blue-500/10 to-transparent blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.1, 0.18, 0.1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-emerald-500/15 via-blue-500/10 to-transparent blur-[100px]" 
        />
        
        {/* Animated center glow */}
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-radial from-accent/10 to-transparent blur-[80px] rounded-full"
        />

        {/* Floating geometric shapes */}
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className={`absolute ${shape.type === 0 ? 'rounded-full' : shape.type === 1 ? 'rounded-lg rotate-45' : 'rounded-xl'} border border-accent/10 bg-accent/5`}
            style={{
              width: shape.size,
              height: shape.size,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-15, 15, -15],
              rotate: shape.type === 1 ? [45, 135, 45] : [0, 10, 0],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated lines */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        />
        <motion.div
          animate={{ x: ["200%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 3 }}
          className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent"
        />

        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--accent) / 0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header with enhanced animation */}
          <motion.div variants={itemVariants} className="mb-16 md:mb-24">
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm text-sm font-medium text-accent mb-6"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(var(--accent) / 0.2)" }}
            >
              <motion.span 
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-accent" 
              />
              About Me
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
              Passionate about{" "}
              <motion.span 
                className="bg-gradient-to-r from-accent via-blue-500 to-emerald-500 bg-clip-text text-transparent inline-block"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                style={{ backgroundSize: "200% 200%" }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                AI innovation
              </motion.span>
              {" "}in healthcare
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left - Bio with enhanced cards */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <motion.div 
                className="space-y-5 text-lg text-muted-foreground leading-relaxed p-6 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/50"
                whileHover={{ scale: 1.02, borderColor: "hsl(var(--accent) / 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <p>
                  I'm a Computer Science student at <strong className="text-foreground">Kennesaw State University</strong> with a 
                  <strong className="text-accent"> Presidential Academic Hardship Scholarship</strong>.
                </p>
                <p>
                  Currently working on <strong className="text-foreground">NIH-funded research</strong> applying 
                  Deep Learning to improve early detection of retinal diseases—contributing to healthcare innovation.
                </p>
                <p>
                  Beyond research, I build full-stack applications and explore data analytics.
                </p>
              </motion.div>

              {/* Quick stats with 3D effect */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { value: "3.56", label: "GPA" },
                  { value: "NIH", label: "Research" },
                  { value: "Dec '27", label: "Graduation" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20, rotateY: -20 }}
                    animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      boxShadow: "0 15px 30px hsl(var(--accent) / 0.15)",
                    }}
                    className="relative text-center p-4 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/50 overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <motion.p 
                      className="text-2xl font-bold text-foreground relative z-10"
                      animate={{ 
                        textShadow: ["0 0 0px transparent", "0 0 8px hsl(var(--accent) / 0.3)", "0 0 0px transparent"]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-xs text-muted-foreground mt-1 relative z-10">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Skills & Experience */}
            <div className="lg:col-span-3 space-y-8">
              {/* Skills with enhanced animations */}
              {skillCategories.map((group, groupIndex) => (
                <motion.div
                  key={group.category}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="relative p-6 rounded-2xl bg-background/60 border border-border/50 backdrop-blur-sm overflow-hidden group"
                >
                  {/* Animated background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  />
                  
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <motion.span 
                      className="text-2xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: groupIndex * 0.5 }}
                    >
                      {group.icon}
                    </motion.span>
                    <span className={`text-sm font-bold uppercase tracking-widest bg-gradient-to-r ${group.gradient} bg-clip-text text-transparent`}>
                      {group.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {group.items.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: 0.3 + groupIndex * 0.15 + index * 0.05,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          y: -4,
                          boxShadow: "0 8px 20px hsl(var(--accent) / 0.2)",
                        }}
                        className="px-4 py-2 bg-card rounded-full text-sm font-medium border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Experience cards with enhanced effects */}
              <div className="grid sm:grid-cols-2 gap-4">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -6, rotateY: 2 }}
                    className={`relative p-6 rounded-2xl bg-gradient-to-br ${exp.gradient}/5 border border-border/50 hover:border-accent/40 transition-all duration-300 overflow-hidden group`}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    />
                    
                    <motion.span 
                      className={`inline-block px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${exp.gradient} text-white mb-3 relative z-10`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {exp.highlight}
                    </motion.span>
                    <h4 className="text-lg font-bold relative z-10">{exp.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1 relative z-10">{exp.company}</p>
                    <p className="text-xs text-muted-foreground/70 mt-1 relative z-10">{exp.period}</p>
                    <p className="text-sm text-muted-foreground mt-3 relative z-10">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
