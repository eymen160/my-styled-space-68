import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  const fade = (d = 0) => ({
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.72, delay: d, ease: [0.16, 1, 0.3, 1] } },
  });

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#FAF9F6" }} ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px" style={{ background: "linear-gradient(90deg, transparent, #D0CCC4, transparent)" }} />

      {/* Large decorative initial */}
      <div className="pointer-events-none absolute right-[-2%] bottom-[5%] text-[26rem] font-black leading-none opacity-[0.025] select-none"
        style={{ fontFamily: "'Playfair Display', serif", color: "#0D0D0D" }}>K</div>

      <div className="max-w-[1360px] mx-auto px-6 md:px-14 relative z-10">
        {/* Header */}
        <motion.div variants={fade()} initial="hidden" animate={iv ? "show" : "hidden"} className="mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] block mb-4" style={{ color: "#9B9589" }}>Let's Connect</span>
          <h2 className="leading-[0.88] tracking-[-0.03em]" style={{ fontSize: "clamp(3rem,9vw,8rem)", fontFamily: "'Playfair Display', serif", color: "#0D0D0D" }}>
            Open to<br />
            <em>internships</em><br />
            &amp; collabs.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Left */}
          <motion.div variants={fade(0.12)} initial="hidden" animate={iv ? "show" : "hidden"} className="space-y-7">
            <p className="text-[1rem] leading-[1.82] font-light max-w-md" style={{ color: "#4A4A4A" }}>
              Actively seeking <span className="font-semibold" style={{ color: "#0D0D0D" }}>Summer 2026 internships</span> in AI/ML, software engineering, and data analytics. Always open to interesting conversations.
            </p>

            <motion.a
              href="mailto:eymenfaruk479@gmail.com"
              whileHover={{ scale: 1.02, y: -3, boxShadow: "0 16px 48px rgba(13,13,13,0.12)" }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-4 px-8 py-5 rounded-2xl font-semibold text-[0.92rem] transition-all duration-200"
              style={{ background: "#0D0D0D", color: "#FAF9F6" }}
            >
              <svg className="w-5 h-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              eymenfaruk479@gmail.com
              <svg className="w-4 h-4 opacity-60 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>

            <div className="flex gap-3 flex-wrap">
              {[
                { l: "LinkedIn", h: "https://linkedin.com/in/eymenkeyvan" },
                { l: "GitHub", h: "https://github.com/eymen160" },
              ].map((x) => (
                <motion.a
                  key={x.l} href={x.h} target="_blank" rel="noopener noreferrer"
                  whileHover={{ y: -2, borderColor: "#0D0D0D" }}
                  className="px-5 py-2.5 rounded-full border text-[0.83rem] font-medium transition-all duration-200"
                  style={{ borderColor: "#D0CCC4", color: "#6B6B6B" }}
                >
                  {x.l} ↗
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div variants={fade(0.2)} initial="hidden" animate={iv ? "show" : "hidden"} className="space-y-4">
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.22 } }}
              className="p-7 rounded-2xl border transition-all duration-300"
              style={{ borderColor: "#BBF7D0", background: "#F0FDF4" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full opacity-75" style={{ background: "#16A34A" }} />
                  <span className="relative h-2 w-2 rounded-full" style={{ background: "#16A34A" }} />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em]" style={{ color: "#16A34A" }}>Available Now</span>
              </div>
              <p className="text-[1.4rem] font-bold leading-snug" style={{ fontFamily: "'Playfair Display', serif", color: "#0D0D0D" }}>Summer 2026 Internship</p>
              <p className="text-[0.83rem] font-light mt-1.5" style={{ color: "#4B7C5A" }}>AI/ML · Software Engineering · Data Analytics</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -3 }}
                className="p-6 rounded-2xl border transition-all duration-300"
                style={{ borderColor: "#E5E2DC", background: "#FFFFFF" }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = "#D0CCC4"}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E2DC"}
              >
                <p className="text-[9px] uppercase tracking-[0.14em] font-semibold mb-2" style={{ color: "#B0AA9E" }}>Location</p>
                <p className="text-[1.2rem] font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#0D0D0D" }}>Roswell, GA</p>
                <p className="text-[0.77rem] font-light mt-0.5" style={{ color: "#9B9589" }}>United States</p>
              </motion.div>

              <motion.a
                href="/resume/EYMEN_KEYVAN_RESUME.pdf" target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -3, borderColor: "#0D0D0D" }}
                className="p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300"
                style={{ borderColor: "#E5E2DC", background: "#FFFFFF" }}
              >
                <p className="text-[9px] uppercase tracking-[0.14em] font-semibold mb-2" style={{ color: "#B0AA9E" }}>Resume</p>
                <div className="flex items-end justify-between">
                  <p className="text-[1.2rem] font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#0D0D0D" }}>View PDF</p>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.p
          variants={fade(0.4)} initial="hidden" animate={iv ? "show" : "hidden"}
          className="text-center text-[0.75rem] mt-24 pt-8"
          style={{ borderTop: "1px solid #E5E2DC", color: "#C0BAB0" }}
        >
          Designed &amp; built with purpose · © {new Date().getFullYear()} Eymen Faruk Keyvan
        </motion.p>
      </div>
    </section>
  );
}
