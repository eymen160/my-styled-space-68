import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { category: "Languages", items: ["Python", "Java", "C", "SQL", "R"] },
    { category: "AI/ML", items: ["PyTorch", "NumPy", "Pandas", "Deep Learning"] },
    { category: "Tools", items: ["Git", "AWS", "Flask", "PowerBI", "Tableau"] },
  ];

  const stats = [
    { value: "3.56", label: "GPA" },
    { value: "Dec '27", label: "Graduation" },
    { value: "NIH", label: "Research" },
  ];

  return (
    <section id="about" className="py-32 md:py-48 bg-card" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Main content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="label text-muted-foreground mb-4"
            >
              About
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="display-md mb-8"
            >
              Computer Science student focused on AI and building impactful software.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-6 text-muted-foreground body-lg"
            >
              <p>
                I'm currently pursuing my Bachelor's in Computer Science at 
                Kennesaw State University, where I'm a Presidential Academic 
                Hardship Scholarship recipient.
              </p>
              <p>
                As an Undergraduate Research Assistant, I work on an NIH-funded 
                project applying Deep Learning to medical imaging, focusing on 
                early detection of retinal diseases.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex gap-12 mt-12 pt-12 border-t border-border"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-semibold tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-8"
          >
            {skills.map((skillGroup, groupIndex) => (
              <div key={skillGroup.category}>
                <p className="text-sm font-medium text-muted-foreground mb-4">
                  {skillGroup.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.4 + groupIndex * 0.1 + index * 0.05,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="px-4 py-2 bg-background rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}

            {/* Current Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-12 p-6 bg-background rounded-2xl"
            >
              <p className="text-sm text-muted-foreground mb-2">Current Role</p>
              <p className="text-lg font-semibold">
                Undergraduate Research Assistant
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                AI/ML in Retinal Imaging • NIH-Funded • Sep 2025 - Present
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
