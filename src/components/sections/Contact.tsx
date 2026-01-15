import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    { label: "LinkedIn", href: "https://linkedin.com/in/eymenkeyvan" },
    { label: "GitHub", href: "https://github.com/eymen160" },
  ];

  return (
    <section id="contact" className="py-32 md:py-48" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="label text-muted-foreground mb-6"
          >
            Get In Touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="display-lg mb-8"
          >
            Let's create something
            <br />
            <span className="text-muted-foreground">meaningful together.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="body-xl text-muted-foreground mb-16 max-w-2xl"
          >
            I'm actively seeking <strong className="text-foreground">internship opportunities</strong> in 
            AI/ML, data analytics, and software development. Open to research collaborations and 
            interesting projects that push boundaries.
          </motion.p>

          {/* Email - Large and prominent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-16"
          >
            <a
              href="mailto:eymenfaruk479@gmail.com"
              className="inline-block text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight hover:opacity-60 transition-opacity duration-500 link-hover"
            >
              eymenfaruk479@gmail.com
            </a>
          </motion.div>

          {/* Links & Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border"
          >
            {/* Social Links */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Connect
              </p>
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity duration-300 group"
                  >
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
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
              <a 
                href="tel:+16786704474" 
                className="text-sm hover:opacity-60 transition-opacity duration-300"
              >
                (678) 670-4474
              </a>
            </div>
          </motion.div>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium">Available for Summer 2026 Internships</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
