import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    { 
      category: "Languages", 
      items: ["Python", "Java", "C", "SQL", "R", "HTML/CSS"],
      gradient: "from-violet-500 to-purple-600"
    },
    { 
      category: "AI/ML & Data", 
      items: ["PyTorch", "NumPy", "Pandas", "Deep Learning", "Graph ML", "Jupyter"],
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      category: "Tools & Platforms", 
      items: ["Git", "AWS", "Flask", "PowerBI", "Tableau", "Bash", "PowerShell"],
      gradient: "from-emerald-500 to-teal-500"
    },
  ];

  const highlights = [
    { metric: "3.56", label: "GPA", detail: "Academic Excellence", gradient: "from-violet-500 to-purple-600" },
    { metric: "NIH", label: "Funded Research", detail: "Medical Imaging AI", gradient: "from-blue-500 to-cyan-500" },
    { metric: "Dec '27", label: "Expected Graduation", detail: "B.S. Computer Science", gradient: "from-emerald-500 to-teal-500" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="about" className="py-32 md:py-48 bg-card/50 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-accent/5 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-blue-500" />
            About Me
          </motion.span>
          <h2 className="display-md max-w-4xl">
            Passionate about leveraging AI to solve real-world problems—
            <span className="bg-gradient-to-r from-muted-foreground to-muted-foreground/60 bg-clip-text text-transparent">
              currently focusing on medical imaging research.
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-8"
          >
            <div className="space-y-6 text-muted-foreground body-lg">
              <p>
                I'm a sophomore Computer Science student at <strong className="text-foreground">Kennesaw State University</strong>, 
                where I'm a <strong className="text-accent">Presidential Academic Hardship Scholarship</strong> recipient.
              </p>
              <p>
                As an <strong className="text-foreground">Undergraduate Research Assistant</strong>, I work on an
                <strong className="text-accent"> NIH-funded project</strong> applying Deep Learning to improve 
                early detection of retinal diseases—processing APTOS and IDRiD datasets to enhance diagnostic accuracy.
              </p>
              <p>
                Beyond research, I love building full-stack applications and exploring the intersection of 
                data analytics and software engineering.
              </p>
            </div>

            {/* Highlights with gradient cards */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="group relative p-4 rounded-2xl bg-background/50 border border-border/50 hover:border-accent/30 transition-all duration-500 cursor-default"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className={`text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent relative z-10`}>
                    {item.metric}
                  </p>
                  <p className="text-sm text-foreground font-medium mt-1 relative z-10">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 relative z-10">{item.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Skills & Current Role */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-10"
          >
            {/* Skills */}
            {skillCategories.map((group, groupIndex) => (
              <div key={group.category}>
                <p className={`text-xs uppercase tracking-[0.2em] mb-4 font-medium bg-gradient-to-r ${group.gradient} bg-clip-text text-transparent`}>
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.5 + groupIndex * 0.1 + index * 0.03,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-4 py-2 bg-background rounded-full text-sm font-medium border border-border/50 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}

            {/* Current Role Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 bg-background rounded-2xl border border-border/50 hover:border-accent/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 relative z-10">
                Current Position
              </p>
              <p className="text-xl font-semibold relative z-10">
                Undergraduate Research Assistant
              </p>
              <p className="text-muted-foreground mt-2 relative z-10">
                AI/ML in Retinal Imaging
              </p>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50 text-sm text-muted-foreground relative z-10">
                <span className="flex items-center gap-2">
                  <motion.span 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500"
                  />
                  NIH-Funded
                </span>
                <span>Sep 2025 – Present</span>
              </div>
            </motion.div>

            {/* Leadership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-6 bg-background/50 rounded-xl border border-border/50 hover:border-accent/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 relative z-10">
                Leadership
              </p>
              <p className="text-sm font-medium relative z-10">
                Global Development and Networking Club
              </p>
              <p className="text-sm text-muted-foreground mt-1 relative z-10">
                Organized Youth Convention 2025 with speakers from Meta, Avanade, Emory University
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
