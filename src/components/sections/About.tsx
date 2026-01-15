import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    { 
      category: "Languages", 
      items: ["Python", "Java", "C", "SQL", "R", "HTML/CSS"] 
    },
    { 
      category: "AI/ML & Data", 
      items: ["PyTorch", "NumPy", "Pandas", "Deep Learning", "Graph ML", "Jupyter"] 
    },
    { 
      category: "Tools & Platforms", 
      items: ["Git", "AWS", "Flask", "PowerBI", "Tableau", "Bash", "PowerShell"] 
    },
  ];

  const highlights = [
    { 
      metric: "3.56", 
      label: "GPA",
      detail: "Academic Excellence"
    },
    { 
      metric: "NIH", 
      label: "Funded Research",
      detail: "Medical Imaging AI"
    },
    { 
      metric: "Dec '27", 
      label: "Expected Graduation",
      detail: "B.S. Computer Science"
    },
  ];

  return (
    <section id="about" className="py-32 md:py-48 bg-card" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20"
        >
          <p className="label text-muted-foreground mb-6">About Me</p>
          <h2 className="display-md max-w-4xl">
            Passionate about leveraging AI to solve real-world problems—
            <span className="text-muted-foreground">currently focusing on medical imaging research.</span>
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
                where I'm a <strong className="text-foreground">Presidential Academic Hardship Scholarship</strong> recipient.
              </p>
              <p>
                As an <strong className="text-foreground">Undergraduate Research Assistant</strong>, I work on an 
                <strong className="text-foreground"> NIH-funded project</strong> applying Deep Learning to improve 
                early detection of retinal diseases—processing APTOS and IDRiD datasets to enhance diagnostic accuracy.
              </p>
              <p>
                Beyond research, I love building full-stack applications and exploring the intersection of 
                data analytics and software engineering.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <p className="text-3xl md:text-4xl font-semibold tracking-tight">
                    {item.metric}
                  </p>
                  <p className="text-sm text-foreground font-medium mt-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
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
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium">
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
                      className="px-4 py-2 bg-background rounded-full text-sm font-medium border border-border hover:border-foreground/20 transition-colors duration-300"
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
              className="p-8 bg-background rounded-2xl border border-border"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Current Position
              </p>
              <p className="text-xl font-semibold">
                Undergraduate Research Assistant
              </p>
              <p className="text-muted-foreground mt-2">
                AI/ML in Retinal Imaging
              </p>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
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
              className="p-6 bg-background/50 rounded-xl border border-border/50"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Leadership
              </p>
              <p className="text-sm font-medium">
                Global Development and Networking Club
              </p>
              <p className="text-sm text-muted-foreground mt-1">
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
