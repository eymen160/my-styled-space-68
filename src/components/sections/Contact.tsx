import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
  const up = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } };

  return (
    <section id="contact" ref={ref} style={{ background: "#FFFFFF", paddingTop: "clamp(72px, 10vw, 110px)", paddingBottom: "clamp(72px, 10vw, 110px)", borderTop: "1px solid #E2E8F0" }}>
      <motion.div variants={container} initial="hidden" animate={iv ? "show" : "hidden"}
        className="max-w-[1160px] mx-auto px-6 md:px-10">

        <motion.div variants={up} style={{ marginBottom: "52px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "13px", color: "#2563EB", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "10px" }}>Contact</p>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 1, letterSpacing: "-0.025em", color: "#0F172A" }}>
            Let's work together.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left */}
          <motion.div variants={up} style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "1.05rem", lineHeight: 1.8, color: "#475569", maxWidth: "440px" }}>
              I'm actively looking for <strong style={{ fontWeight: 600, color: "#0F172A" }}>Summer 2026 internships</strong> in AI/ML engineering, software development, and data analytics. I also welcome research collaborations and conversations about interesting problems.
            </p>

            {/* Email */}
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", color: "#64748B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "10px" }}>Email</p>
              <motion.a href="mailto:eymenfaruk479@gmail.com"
                whileHover={{ scale: 1.01, y: -2 }} whileTap={{ scale: 0.99 }}
                style={{ display: "inline-flex", alignItems: "center", gap: "12px", padding: "14px 22px", background: "#2563EB", color: "#FFFFFF", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "15px", textDecoration: "none", borderRadius: "10px", boxShadow: "0 4px 14px rgba(37,99,235,0.3)" }}>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                eymenfaruk479@gmail.com
              </motion.a>
            </div>

            {/* Social */}
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", color: "#64748B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "10px" }}>Also find me on</p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {[{ l: "LinkedIn", h: "https://linkedin.com/in/eymenkeyvan" }, { l: "GitHub", h: "https://github.com/eymen160" }].map(x => (
                  <motion.a key={x.l} href={x.h} target="_blank" rel="noopener noreferrer"
                    whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                    style={{ padding: "10px 20px", border: "1.5px solid #E2E8F0", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "14px", color: "#475569", textDecoration: "none", borderRadius: "8px", background: "#FFFFFF", transition: "all 0.15s" }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#2563EB"; el.style.color = "#2563EB"; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#E2E8F0"; el.style.color = "#475569"; }}>
                    {x.l} ↗
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Info cards */}
          <motion.div variants={up} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

            {/* Available card */}
            <div style={{ padding: "24px", border: "1.5px solid #BBF7D0", borderRadius: "12px", background: "#F0FDF4" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#16A34A", flexShrink: 0 }} className="animate-pulse" />
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", color: "#15803D", letterSpacing: "0.06em", textTransform: "uppercase" }}>Available Now</span>
              </div>
              <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "1.35rem", lineHeight: 1.1, color: "#0F172A", marginBottom: "5px" }}>Summer 2026 Internship</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", color: "#16A34A" }}>AI/ML · Software Engineering · Data Analytics</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <div style={{ padding: "20px", border: "1.5px solid #E2E8F0", borderRadius: "12px", background: "#F8FAFC" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", color: "#64748B", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "8px" }}>Location</p>
                <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#0F172A", marginBottom: "2px" }}>Roswell, GA</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", color: "#94A3B8" }}>United States</p>
              </div>
              <motion.a href="https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf" target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -2, borderColor: "#2563EB" }}
                style={{ padding: "20px", border: "1.5px solid #E2E8F0", borderRadius: "12px", background: "#F8FAFC", textDecoration: "none", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "all 0.15s" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", color: "#64748B", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "8px" }}>Resume</p>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#0F172A" }}>View PDF</p>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </motion.a>
            </div>

            <div style={{ padding: "16px 20px", border: "1.5px solid #E2E8F0", borderRadius: "12px", background: "#F8FAFC", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px", color: "#64748B" }}>Average response time</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "14px", color: "#2563EB" }}>&lt; 24 hours</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
