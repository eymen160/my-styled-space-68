import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 65%)" }} />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10"
      >
        {/* Headline */}
        <motion.div variants={fadeUp} className="mb-14">
          <span className="text-[11px] uppercase tracking-[0.15em] font-bold text-white/35 mb-4 block">Let's Connect</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.86] text-white">
            Open to<br />
            <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.2)", color: "transparent" }}>internships</span><br />
            &amp; collabs.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <motion.div variants={fadeUp} className="space-y-7">
            <p className="text-[1.05rem] text-white/75 leading-[1.8] font-light max-w-md">
              Actively seeking <span className="font-semibold text-white">Summer 2026 internships</span> in AI/ML, software engineering, and data analytics. Always open to interesting conversations.
            </p>

            {/* Email CTA */}
            <motion.a
              href="mailto:eymenfaruk479@gmail.com"
              whileHover={{ scale: 1.02, y: -2, boxShadow: "0 20px 60px rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-white text-[#080808] font-bold text-[0.95rem] transition-all duration-200 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              eymenfaruk479@gmail.com
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>

            {/* Social pills */}
            <div className="flex gap-3 flex-wrap">
              {[
                { label: "LinkedIn", href: "https://linkedin.com/in/eymenkeyvan" },
                { label: "GitHub", href: "https://github.com/eymen160" },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.3)" }}
                  className="px-5 py-2.5 rounded-full border border-white/[0.12] text-white/60 text-[0.85rem] font-medium hover:text-white/85 transition-all duration-200"
                >
                  {link.label} ↗
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Cards */}
          <motion.div variants={fadeUp} className="space-y-4">
            {/* Available card */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="p-7 rounded-2xl border border-emerald-500/20 bg-emerald-900/[0.06] hover:bg-emerald-900/[0.1] hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-emerald-400">Available Now</span>
              </div>
              <p className="text-2xl font-black text-white mb-1">Summer 2026 Internship</p>
              <p className="text-[0.875rem] text-white/55 font-light">AI/ML · Software Engineering · Data Analytics</p>
            </motion.div>

            {/* Location + Resume */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -3 }}
                className="p-6 rounded-2xl border border-white/[0.07] bg-[#0f0f0f] hover:border-white/[0.13] hover:bg-[#111] transition-all duration-300"
              >
                <p className="text-[10px] uppercase tracking-[0.14em] font-bold text-white/30 mb-2">Location</p>
                <p className="text-xl font-black text-white">Roswell, GA</p>
                <p className="text-[0.8rem] text-white/40 mt-0.5 font-light">United States</p>
              </motion.div>

              <motion.a
                href="/resume/EYMEN_KEYVAN_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, borderColor: "rgba(139,92,246,0.4)" }}
                className="p-6 rounded-2xl border border-white/[0.07] bg-[#0f0f0f] hover:bg-[#8b5cf6]/[0.06] transition-all duration-300 flex flex-col justify-between"
              >
                <p className="text-[10px] uppercase tracking-[0.14em] font-bold text-white/30 mb-2">Resume</p>
                <div className="flex items-end justify-between">
                  <p className="text-xl font-black text-white">View PDF</p>
                  <svg className="w-5 h-5 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Footer line */}
        <motion.p
          variants={fadeUp}
          className="text-center text-[0.78rem] text-white/20 mt-24 pt-8 border-t border-white/[0.06]"
        >
          Designed & built with purpose · © {new Date().getFullYear()} Eymen Faruk Keyvan
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contact;
