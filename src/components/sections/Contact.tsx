import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    { label: "LinkedIn", href: "https://linkedin.com/in/eymenkeyvan", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/eymen160", icon: "github" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="contact" className="py-32 md:py-48 relative overflow-hidden" ref={ref}>
      {/* Background gradient decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-to-t from-accent/10 via-blue-500/5 to-transparent blur-3xl"
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-[1200px] mx-auto px-6 relative z-10"
      >
        <div className="max-w-4xl">
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-blue-500" />
            Get In Touch
          </motion.span>

          <motion.h2 variants={itemVariants} className="display-lg mb-8">
            Let's create something
            <br />
            <span className="bg-gradient-to-r from-accent via-blue-500 to-accent bg-clip-text text-transparent">
              meaningful together.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="body-xl text-muted-foreground mb-16 max-w-2xl"
          >
            I'm actively seeking <strong className="text-accent">internship opportunities</strong> in 
            AI/ML, data analytics, and software development. Open to research collaborations and 
            interesting projects that push boundaries.
          </motion.p>

          {/* Email - Large and prominent with gradient hover */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.a
              href="mailto:eymenfaruk479@gmail.com"
              whileHover={{ scale: 1.02 }}
              className="group inline-block relative"
            >
              <span className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight group-hover:text-accent transition-colors duration-500">
                eymenfaruk479@gmail.com
              </span>
              <motion.span
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accent via-blue-500 to-accent rounded-full"
              />
            </motion.a>
          </motion.div>

          {/* Links & Info Grid */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border/50"
          >
            {/* Social Links */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Connect
              </p>
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 8 }}
                    className="inline-flex items-center gap-3 text-sm font-medium hover:text-accent transition-colors duration-300 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 rounded-full border border-border/50 group-hover:border-accent/50 group-hover:bg-accent/10 flex items-center justify-center transition-all duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3.5 h-3.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </motion.div>
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Location
              </p>
              <p className="text-sm">Roswell, GA</p>
              <p className="text-sm text-muted-foreground mt-1">United States</p>
            </div>

            {/* Phone */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Phone
              </p>
              <motion.a 
                href="tel:+16786704474" 
                whileHover={{ x: 4 }}
                className="text-sm hover:text-accent transition-colors duration-300"
              >
                (678) 670-4474
              </motion.a>
            </div>
          </motion.div>

          {/* Availability Badge with enhanced animation */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-card to-card/50 backdrop-blur-sm rounded-full border border-border/50 hover:border-accent/30 transition-all duration-500 shadow-lg shadow-accent/5"
            >
              <span className="relative flex h-3 w-3">
                <motion.span 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.75, 0, 0.75] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500"
                />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-emerald-400 to-emerald-500" />
              </span>
              <span className="text-sm font-medium">Available for Summer 2026 Internships</span>
            </motion.div>
          </motion.div>

          {/* Download Resume CTA */}
          <motion.div variants={itemVariants} className="mt-8">
            <motion.a
              href="mailto:eymenfaruk479@gmail.com?subject=Resume%20Request"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-accent/50 text-accent font-medium hover:bg-accent hover:text-white transition-all duration-300"
            >
              Request Resume
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
