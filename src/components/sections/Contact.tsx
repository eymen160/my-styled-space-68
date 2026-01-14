import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Dribbble", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
  ];

  return (
    <section id="contact" className="py-32 md:py-48 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-card" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground mb-8"
          >
            Get in Touch
          </motion.p>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-heading mb-8"
          >
            Let's create something{" "}
            <span className="italic text-accent">beautiful</span> together
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="body-large text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Whether you have a project in mind or just want to chat about design 
            and creativity, I'd love to hear from you.
          </motion.p>

          {/* Email CTA */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            href="mailto:hello@example.com"
            className="inline-block font-serif text-2xl md:text-4xl lg:text-5xl font-medium hover:text-accent transition-colors duration-300 link-underline"
          >
            hello@example.com
          </motion.a>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-8 md:gap-12 mt-16"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-sm font-sans uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
