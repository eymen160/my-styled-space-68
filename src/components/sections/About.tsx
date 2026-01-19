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

  return (
    <section id="about" className="py-20 md:py-28 bg-card/30 relative overflow-hidden" ref={ref}>
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-accent/10 via-transparent to-transparent blur-3xl" 
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent blur-3xl" 
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 md:mb-24">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-sm font-medium text-accent mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
              Passionate about{" "}
              <span className="bg-gradient-to-r from-accent via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                AI innovation
              </span>
              {" "}in healthcare
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left - Bio */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
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
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { value: "3.56", label: "GPA" },
                  { value: "NIH", label: "Research" },
                  { value: "Dec '27", label: "Graduation" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-2xl bg-background/50 border border-border/50"
                  >
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Skills & Experience */}
            <div className="lg:col-span-3 space-y-8">
              {/* Skills */}
              {skillCategories.map((group, groupIndex) => (
                <motion.div
                  key={group.category}
                  variants={itemVariants}
                  className="p-6 rounded-2xl bg-background/60 border border-border/50 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{group.icon}</span>
                    <span className={`text-sm font-bold uppercase tracking-widest bg-gradient-to-r ${group.gradient} bg-clip-text text-transparent`}>
                      {group.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: 0.3 + groupIndex * 0.1 + index * 0.02,
                        }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="px-4 py-2 bg-card rounded-full text-sm font-medium border border-border/50 hover:border-accent/40 hover:shadow-md transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Experience cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className={`p-6 rounded-2xl bg-gradient-to-br ${exp.gradient}/5 border border-border/50 hover:border-accent/40 transition-all duration-300`}
                  >
                    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${exp.gradient} text-white mb-3`}>
                      {exp.highlight}
                    </span>
                    <h4 className="text-lg font-bold">{exp.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{exp.company}</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">{exp.period}</p>
                    <p className="text-sm text-muted-foreground mt-3">{exp.description}</p>
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
