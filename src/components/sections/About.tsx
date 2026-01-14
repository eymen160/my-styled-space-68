import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "UI/UX Design",
    "Brand Identity",
    "Web Development",
    "Motion Design",
    "Art Direction",
    "Creative Strategy",
  ];

  return (
    <section id="about" className="py-32 md:py-48 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-secondary rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-6xl md:text-8xl text-foreground/10">
                  ✦
                </span>
              </div>
            </div>
            {/* Floating accent element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-accent rounded-full flex items-center justify-center"
            >
              <span className="text-accent-foreground text-xs md:text-sm font-sans uppercase tracking-wider text-center leading-tight">
                5+ Years<br />Experience
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
              Creating with intention, designing with heart
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 body-large text-muted-foreground"
            >
              <p>
                I believe that great design goes beyond aesthetics—it tells stories, 
                solves problems, and creates lasting connections between brands and 
                their audiences.
              </p>
              <p>
                With a background in both design and development, I bring a unique 
                perspective to every project, ensuring that beauty and functionality 
                work together seamlessly.
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
                Expertise
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="px-4 py-2 bg-secondary text-sm font-sans rounded-full"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
