import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "Python",
    "Java",
    "SQL",
    "PyTorch",
    "Data Analytics",
    "Machine Learning",
    "AWS",
    "Git",
    "Flask",
    "PowerBI",
    "Tableau",
  ];

  return (
    <section id="about" className="py-32 md:py-48 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-secondary rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-serif text-6xl md:text-8xl text-foreground/20 block">
                    EK
                  </span>
                  <span className="text-sm uppercase tracking-widest text-muted-foreground mt-4 block">
                    Kennesaw State University
                  </span>
                </div>
              </div>
            </div>
            {/* Floating accent element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 w-28 h-28 md:w-36 md:h-36 bg-accent rounded-full flex items-center justify-center"
            >
              <span className="text-accent-foreground text-xs md:text-sm font-sans uppercase tracking-wider text-center leading-tight">
                3.56<br />GPA
              </span>
            </motion.div>
          </motion.div>

          {/* Right column - Content */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground"
            >
              About Me
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="section-heading"
            >
              Computer Science student with a passion for AI
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 body-large text-muted-foreground"
            >
              <p>
                I'm currently pursuing my Bachelor's in Computer Science at 
                Kennesaw State University (graduating Dec 2027), where I'm a 
                Presidential Academic Hardship Scholarship recipient.
              </p>
              <p>
                As an Undergraduate Research Assistant, I work on an NIH-funded 
                project applying Deep Learning to medical imaging, focusing on 
                early detection of retinal diseases.
              </p>
              <p>
                I'm passionate about building projects that combine programming 
                with real-world problem-solving—from game development to 
                full-stack applications.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-8"
            >
              <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Technologies & Skills
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                    className="px-4 py-2 bg-secondary text-sm font-sans rounded-full"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Education highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-4 border-t border-border"
            >
              <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Current Role
              </p>
              <p className="font-serif text-lg">
                Undergraduate Research Assistant
              </p>
              <p className="text-sm text-muted-foreground">
                AI/ML in Retinal Imaging • NIH-Funded Project • Sep 2025 - Present
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
