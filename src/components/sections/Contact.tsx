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
      hoverShadow: "0 0 30px rgba(37, 99, 235, 0.5)"
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
      hoverShadow: "0 0 30px rgba(255, 255, 255, 0.3)"
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

  // Enhanced floating shapes for background
  const shapes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 80 + 40,
    duration: Math.random() * 15 + 15,
    delay: Math.random() * 5,
    type: i % 4,
  }));

  // Floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large aurora effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.8 } : {}}
          transition={{ duration: 2 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1400px] h-[700px] rounded-full bg-gradient-to-t from-accent/20 via-blue-500/15 to-transparent blur-[120px]"
        />
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-violet-500/15 to-transparent blur-[80px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1.1, 0.9, 1.1],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-emerald-500/10 to-transparent blur-[80px]"
        />
        
        {/* Floating geometric shapes */}
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className={`absolute border ${shape.type === 0 ? 'rounded-full border-accent/15' : shape.type === 1 ? 'rounded-lg rotate-45 border-blue-500/15' : shape.type === 2 ? 'rounded-xl border-emerald-500/15' : 'rounded-2xl border-violet-500/15'}`}
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
            }}
            animate={{
              y: [-40, 40, -40],
              x: [-30, 30, -30],
              rotate: shape.type === 1 ? [45, 225, 45] : [0, 15, 0],
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.35, 0.1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Glowing particles */}
        {particles.map((particle) => (
          <motion.div
            key={`particle-${particle.id}`}
            className="absolute rounded-full bg-accent/50"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              boxShadow: `0 0 ${particle.size * 3}px hsl(var(--accent) / 0.4)`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-15, 15, -15],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Animated gradient lines */}
        <motion.div
          animate={{ 
            x: ["-100%", "200%"],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        />
        <motion.div
          animate={{ 
            x: ["200%", "-100%"],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-2/3 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent"
        />

        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--accent) / 0.2) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }} />
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
              <motion.span 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-accent" 
              />
              Let's Connect
            </motion.span>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              Ready to build
              <br />
              <motion.span 
                className="bg-gradient-to-r from-accent via-blue-500 via-emerald-500 to-accent bg-clip-text text-transparent inline-block"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
                }}
                style={{ backgroundSize: "300% 100%" }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                something great?
              </motion.span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg"
            >
              I'm actively seeking <strong className="text-foreground">internship opportunities</strong> in 
              AI/ML, data analytics, and software development. Let's discuss how I can contribute to your team.
            </motion.p>

            {/* Email CTA with enhanced effects */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.button
                onClick={() => window.location.href = 'mailto:eymenfaruk479@gmail.com'}
                whileHover={{ scale: 1.03, y: -3, boxShadow: "0 25px 50px hsl(var(--accent) / 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-foreground text-background font-bold text-lg shadow-2xl shadow-foreground/20 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Animated gradient overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-accent via-blue-500 to-emerald-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                />
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 relative z-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span className="relative z-10">eymenfaruk479@gmail.com</span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5 relative z-10"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </motion.svg>
              </motion.button>
            </motion.div>

            {/* Social links with enhanced hover */}
            <motion.div variants={itemVariants} className="flex gap-3">
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.15, 
                    y: -4, 
                    rotate: 8,
                    boxShadow: link.hoverShadow,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.15, type: "spring", stiffness: 200 }}
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
            {/* Availability card with enhanced animation */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -6, boxShadow: "0 25px 50px rgba(16, 185, 129, 0.2)" }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-card/50 to-card/50 border border-emerald-500/20 backdrop-blur-sm overflow-hidden"
            >
              {/* Animated background pulse */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-emerald-500/10 to-emerald-500/5"
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              {/* Shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                animate={{ translateX: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
              
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 shadow-lg shadow-emerald-500/50" />
                </span>
                <motion.span 
                  className="text-lg font-bold text-emerald-500"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Available Now
                </motion.span>
              </div>
              <p className="text-2xl font-bold mb-2 relative z-10">Summer 2026 Internship</p>
              <p className="text-muted-foreground relative z-10">Open to AI/ML, Software Engineering, and Data Analytics roles</p>
            </motion.div>

            {/* Contact info grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4, boxShadow: "0 15px 30px hsl(var(--accent) / 0.15)" }}
                className="relative p-6 rounded-2xl bg-card/60 border border-border/60 backdrop-blur-sm overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity"
                />
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold relative z-10">Location</p>
                <p className="text-lg font-bold relative z-10">Roswell, GA</p>
                <p className="text-sm text-muted-foreground relative z-10">United States</p>
              </motion.div>

              {/* Phone */}
              <motion.button
                onClick={() => window.location.href = 'tel:+16786704474'}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4, boxShadow: "0 15px 30px hsl(var(--accent) / 0.15)" }}
                className="relative p-6 rounded-2xl bg-card/60 border border-border/60 backdrop-blur-sm hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 block text-left w-full cursor-pointer overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity"
                />
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold relative z-10">Phone</p>
                <p className="text-lg font-bold relative z-10">(678) 670-4474</p>
                <motion.p 
                  className="text-sm text-accent flex items-center gap-1 relative z-10"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  Tap to call
                </motion.p>
              </motion.button>
            </div>

            {/* Resume buttons with enhanced effects */}
            <div className="grid grid-cols-2 gap-4">
              {/* View Resume */}
              <motion.a
                href="/resume/EYMEN_KEYVAN_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 20px 40px hsl(var(--accent) / 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-3 p-5 rounded-2xl border-2 border-accent/40 bg-accent/5 text-accent font-bold hover:bg-accent/20 hover:border-accent transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-accent/10 via-blue-500/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 relative z-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span className="relative z-10">View Resume</span>
              </motion.a>

              {/* Download Resume */}
              <motion.a
                href="/resume/EYMEN_KEYVAN_RESUME.pdf"
                download="Eymen_Keyvan_Resume.pdf"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 20px 40px hsl(var(--accent) / 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-3 p-5 rounded-2xl border-2 border-dashed border-accent/40 text-accent font-bold hover:bg-accent/10 hover:border-accent transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-accent/5 via-blue-500/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-5 h-5 relative z-10"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </motion.svg>
                <span className="relative z-10">Download PDF</span>
              </motion.a>
            </div>

            {/* Quick hire message with animation */}
            <motion.p 
              variants={itemVariants}
              className="text-center text-sm text-muted-foreground"
            >
              Response time:{" "}
              <motion.span 
                className="text-foreground font-semibold"
                animate={{ 
                  textShadow: ["0 0 0px transparent", "0 0 10px hsl(var(--accent) / 0.3)", "0 0 0px transparent"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Within 24 hours
              </motion.span>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
