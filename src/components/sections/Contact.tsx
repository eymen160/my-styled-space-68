import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const up = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="contact" ref={ref} style={{ background: "#FAF9F6", paddingTop: "clamp(80px, 12vw, 130px)", paddingBottom: "clamp(80px, 12vw, 130px)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "500px", height: "1px", background: "linear-gradient(90deg, transparent, #D0CCC4, transparent)" }} />

      {/* Decorative large letter */}
      <div style={{ position: "absolute", right: "-2%", bottom: "0%", fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "min(30rem, 50vw)", lineHeight: 0.8, color: "#0D0D0D", opacity: 0.025, pointerEvents: "none", userSelect: "none" }}>K</div>

      <motion.div variants={container} initial="hidden" animate={iv ? "show" : "hidden"}
        className="max-w-[1320px] mx-auto px-6 md:px-14 relative z-10">

        <motion.div variants={up} className="mb-14">
          <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9B9589", marginBottom: "16px" }}>
            Get in Touch
          </p>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(3rem, 10vw, 9rem)", lineHeight: 0.86, letterSpacing: "-0.035em", color: "#0D0D0D" }}>
            Open to<br /><em style={{ color: "#A09484" }}>internships</em><br />and collabs.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          <motion.div variants={up} className="space-y-7">
            <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: "1.05rem", lineHeight: 1.82, color: "#4A4A4A", maxWidth: "420px" }}>
              Actively seeking <strong style={{ fontWeight: 700, color: "#0D0D0D" }}>Summer 2026 internships</strong> in AI and ML, software engineering, and data analytics. Always open to interesting conversations about research or new ideas.
            </p>

            <motion.a href="mailto:eymenfaruk479@gmail.com"
              whileHover={{ scale: 1.02, y: -3, boxShadow: "0 20px 60px rgba(13,13,13,0.14)" }} whileTap={{ scale: 0.98 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "14px", padding: "18px 28px", borderRadius: "16px", background: "#0D0D0D", color: "#FAF9F6", fontFamily: "'Geist', sans-serif", fontWeight: 600, fontSize: "15px", textDecoration: "none", boxShadow: "0 8px 32px rgba(13,13,13,0.12)" }}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ opacity: 0.7 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              eymenfaruk479@gmail.com
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ opacity: 0.6, marginLeft: "4px" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>

            <div className="flex gap-3 flex-wrap">
              {[
                { l: "LinkedIn", h: "https://linkedin.com/in/eymenkeyvan" },
                { l: "GitHub", h: "https://github.com/eymen160" },
              ].map(x => (
                <motion.a key={x.l} href={x.h} target="_blank" rel="noopener noreferrer"
                  whileHover={{ y: -2, borderColor: "#0D0D0D" }} whileTap={{ scale: 0.97 }}
                  style={{ padding: "10px 20px", borderRadius: "100px", border: "1.5px solid #D0CCC4", fontFamily: "'Geist', sans-serif", fontWeight: 600, fontSize: "13px", color: "#6B6B6B", textDecoration: "none", transition: "all 0.2s" }}>
                  {x.l} ↗
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={up} className="space-y-4">
            {/* Available card */}
            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.22 } }}
              style={{ padding: "28px", borderRadius: "18px", border: "1.5px solid #BBF7D0", background: "#F0FDF4" }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute h-full w-full rounded-full opacity-75" style={{ background: "#16A34A" }} />
                  <span className="relative h-2.5 w-2.5 rounded-full" style={{ background: "#16A34A" }} />
                </span>
                <span style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#16A34A" }}>Available Now</span>
              </div>
              <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.6rem", lineHeight: 1.1, color: "#0D0D0D", marginBottom: "6px" }}>
                Summer 2026 Internship
              </p>
              <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: "#4B7C5A" }}>
                AI and ML · Software Engineering · Data Analytics
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ y: -4 }}
                style={{ padding: "24px", borderRadius: "18px", border: "1.5px solid #E8E4DE", background: "#FFFFFF" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#C8C2B8"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#E8E4DE"}>
                <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#B0AA9E", marginBottom: "10px" }}>Location</p>
                <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.3rem", lineHeight: 1.1, color: "#0D0D0D" }}>Roswell, GA</p>
                <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: "0.78rem", color: "#9B9589", marginTop: "3px" }}>United States</p>
              </motion.div>

              <motion.a href="https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf" target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -4, borderColor: "#2563EB" }}
                style={{ padding: "24px", borderRadius: "18px", border: "1.5px solid #E8E4DE", background: "#FFFFFF", textDecoration: "none", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "all 0.2s" }}>
                <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#B0AA9E", marginBottom: "10px" }}>Resume</p>
                <div className="flex items-end justify-between">
                  <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.3rem", lineHeight: 1.1, color: "#0D0D0D" }}>View PDF</p>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.p variants={up}
          style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: "0.75rem", color: "#C0BAB0", textAlign: "center", marginTop: "96px", paddingTop: "32px", borderTop: "1px solid #E8E4DE" }}>
          Designed and built by Eymen Faruk Keyvan · {new Date().getFullYear()}
        </motion.p>
      </motion.div>
    </section>
  );
}
