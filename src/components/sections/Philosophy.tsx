import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      number: "01",
      title: "Impact-Driven",
      description: "I believe technology should solve real problems. My work in healthcare AI isn't just about code—it's about improving lives.",
    },
    {
      number: "02",
      title: "Continuous Learning",
      description: "The tech landscape evolves daily. I embrace new challenges as opportunities to grow and expand my expertise.",
    },
    {
      number: "03",
      title: "Collaborative Spirit",
      description: "The best solutions emerge from diverse perspectives. I thrive in team environments where ideas flow freely.",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm text-sm font-medium text-accent mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
            What drives my{" "}
            <span className="bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
              approach
            </span>
          </h2>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative max-w-4xl">
            <svg
              className="absolute -top-8 -left-4 w-16 h-16 text-accent/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-foreground/90 pl-8">
              The intersection of AI and healthcare represents one of the most impactful frontiers in technology.
              <span className="text-accent"> Every line of code </span>
              has the potential to improve patient outcomes.
            </blockquote>
            <div className="mt-6 pl-8">
              <p className="text-muted-foreground">— My motivation for NIH research</p>
            </div>
          </div>
        </motion.div>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="p-8 rounded-3xl bg-card/50 border border-border/50 hover:border-accent/30 transition-all duration-300 h-full">
                <span className="text-6xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors">
                  {value.number}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-3 group-hover:text-accent transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
