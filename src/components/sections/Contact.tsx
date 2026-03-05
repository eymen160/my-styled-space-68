import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#0d0d0d] overflow-hidden"
      ref={ref}
    >
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#7c3aed] opacity-[0.06] blur-[150px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10"
      >
        {/* Big CTA headline */}
        <motion.div variants={itemVariants} className="mb-20">
          <span
            className="text-xs uppercase tracking-widest text-white/30 font-bold mb-4 block"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Let's Connect
          </span>
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.88] text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Open to
            <br />
            <span
              style={{
                WebkitTextStroke: "2px rgba(255,255,255,0.22)",
                color: "transparent",
              }}
            >
              internships
            </span>
            <br />
            &amp; collabs.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <motion.div variants={itemVariants} className="space-y-8">
            <p
              className="text-white/50 text-lg md:text-xl leading-relaxed max-w-md"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Actively seeking <span className="text-white font-semibold">Summer 2026 internships</span> in
              AI/ML, software engineering, and data analytics. Always open to interesting conversations.
            </p>

            {/* Email big button */}
            <motion.a
              href="mailto:eymenfaruk479@gmail.com"
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-white text-[#0a0a0a] font-black text-lg transition-all duration-200 shadow-lg shadow-white/10"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
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
            </motion.a>

            {/* Social links */}
            <div className="flex gap-4">
              {[
                { label: "LinkedIn", href: "https://linkedin.com/in/eymenkeyvan" },
                { label: "GitHub", href: "https://github.com/eymen160" },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="px-5 py-2.5 rounded-full border border-white/15 text-white/50 text-sm font-medium hover:border-white/30 hover:text-white/80 transition-all"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.label} ↗
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — info cards */}
          <div className="space-y-4">
            {/* Availability */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="p-7 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] hover:bg-emerald-500/[0.07] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                <span
                  className="text-sm font-bold text-emerald-400"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Available Now
                </span>
              </div>
              <p
                className="text-2xl font-black text-white mb-1"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Summer 2026 Internship
              </p>
              <p
                className="text-sm text-white/40"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                AI/ML · Software Engineering · Data Analytics
              </p>
            </motion.div>

            {/* Location + Resume row */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1] transition-all"
              >
                <p
                  className="text-xs uppercase tracking-widest text-white/30 font-bold mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Location
                </p>
                <p
                  className="text-xl font-black text-white"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Smyrna, GA
                </p>
                <p
                  className="text-xs text-white/30 mt-1"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  United States · F-1 Visa
                </p>
              </motion.div>

              <motion.a
                href="/resume/EYMEN_KEYVAN_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -3, borderColor: "rgba(124,58,237,0.5)" }}
                className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-[#7c3aed]/10 transition-all flex flex-col justify-between"
              >
                <p
                  className="text-xs uppercase tracking-widest text-white/30 font-bold mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Resume
                </p>
                <div className="flex items-end justify-between">
                  <p
                    className="text-xl font-black text-white"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    View PDF
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-[#7c3aed]"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Footer line */}
        <motion.p
          variants={itemVariants}
          className="text-center text-xs text-white/20 mt-24 pt-10 border-t border-white/[0.06]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Designed & built with purpose · © {new Date().getFullYear()} Eymen Faruk Keyvan
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contact;
