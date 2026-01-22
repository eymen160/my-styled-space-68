import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    { 
      label: "LinkedIn", 
      href: "https://linkedin.com/in/eymenkeyvan", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: "hover:bg-blue-600 hover:border-blue-600",
    },
    { 
      label: "GitHub", 
      href: "https://github.com/eymen160",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      color: "hover:bg-foreground hover:text-background hover:border-foreground",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      {/* Clean gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-gradient-to-t from-accent/15 via-blue-500/10 to-transparent blur-[100px]"
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-[1400px] mx-auto px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - CTA */}
          <div>
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm text-sm font-medium text-accent mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              Let's Connect
            </motion.span>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              Ready to build
              <br />
              <span className="bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
                something great?
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg"
            >
              I'm actively seeking <strong className="text-foreground">internship opportunities</strong> in 
              AI/ML, data analytics, and software development. Let's discuss how I can contribute to your team.
            </motion.p>

            {/* Email CTA */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.button
                onClick={() => window.location.href = 'mailto:eymenfaruk479@gmail.com'}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-foreground text-background font-bold text-lg shadow-lg transition-all duration-300 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span>eymenfaruk479@gmail.com</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex gap-3">
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className={`w-12 h-12 rounded-full border border-border bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground transition-all duration-300 ${link.color}`}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right side - Info cards */}
          <div className="space-y-6">
            {/* Availability card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-card/50 to-card/50 border border-emerald-500/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500" />
                </span>
                <span className="text-lg font-bold text-emerald-500">Available Now</span>
              </div>
              <p className="text-2xl font-bold mb-2">Summer 2026 Internship</p>
              <p className="text-muted-foreground">Open to AI/ML, Software Engineering, and Data Analytics roles</p>
            </motion.div>

            {/* Contact info grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -2 }}
                className="p-6 rounded-2xl bg-card/60 border border-border/60 backdrop-blur-sm hover:border-accent/40 transition-all duration-300"
              >
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold">Location</p>
                <p className="text-lg font-bold">Roswell, GA</p>
                <p className="text-sm text-muted-foreground">United States</p>
              </motion.div>

              {/* Phone */}
              <motion.button
                onClick={() => window.location.href = 'tel:+16786704474'}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -2 }}
                className="p-6 rounded-2xl bg-card/60 border border-border/60 backdrop-blur-sm hover:border-accent/40 transition-all duration-300 block text-left w-full cursor-pointer"
              >
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold">Phone</p>
                <p className="text-lg font-bold">(678) 670-4474</p>
                <p className="text-sm text-accent flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  Tap to call
                </p>
              </motion.button>
            </div>

            {/* Resume buttons */}
            <div className="grid grid-cols-2 gap-4">
              {/* View Resume */}
              <motion.a
                href="/resume/EYMEN_KEYVAN_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -2 }}
                className="p-6 rounded-2xl bg-card/60 border border-border/60 backdrop-blur-sm hover:border-accent/40 transition-all duration-300 block text-center"
              >
                <div className="flex flex-col items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                  <p className="font-bold">View Resume</p>
                  <p className="text-xs text-muted-foreground">Opens in new tab</p>
                </div>
              </motion.a>

              {/* Download Resume */}
              <motion.a
                href="/resume/EYMEN_KEYVAN_RESUME.pdf"
                download="Eymen_Keyvan_Resume.pdf"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -2 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-blue-500/10 border border-accent/20 backdrop-blur-sm hover:border-accent/40 transition-all duration-300 block text-center"
              >
                <div className="flex flex-col items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <p className="font-bold text-accent">Download PDF</p>
                  <p className="text-xs text-muted-foreground">Save to device</p>
                </div>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <motion.p
          variants={itemVariants}
          className="text-center text-sm text-muted-foreground mt-20 pt-10 border-t border-border/30"
        >
          Designed & built with passion • © {new Date().getFullYear()} Eymen Faruk Keyvan
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contact;
