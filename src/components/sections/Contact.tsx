import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contact" ref={ref} style={{ background: "#FAF7F2", paddingTop: "clamp(72px,10vw,112px)", paddingBottom: "clamp(72px,10vw,112px)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(27,42,74,0.12), transparent)" }} />

      {/* Decorative oversized K */}
      <motion.div
        initial={{ opacity: 0 }} animate={iv ? { opacity: 0.03 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{ position: "absolute", right: "-4%", bottom: "-10%", fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(22rem,42vw,52rem)", lineHeight: 0.8, color: "#1B2A4A", pointerEvents: "none", userSelect: "none", letterSpacing: "-0.04em" }}>K</motion.div>

      {/* Amber glow */}
      <div style={{ position: "absolute", bottom: "-20%", right: "5%", width: "40vw", height: "50vh", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(200,150,62,0.07) 0%, transparent 65%)", pointerEvents: "none", filter: "blur(50px)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px,5vw,40px)", position: "relative" }}>

        {/* Big headline */}
        <motion.div initial={{ opacity: 0, y: 28 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75 }}
          style={{ marginBottom: "clamp(40px,6vw,72px)" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#C8963E", letterSpacing: "0.26em", textTransform: "uppercase", marginBottom: "14px" }}>Get in Touch</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(3.5rem, 11vw, 10rem)", lineHeight: 0.84, letterSpacing: "-0.035em", color: "#1B2A4A" }}>
            Let's work<br />
            <em style={{ color: "rgba(27,42,74,0.18)" }}>together.</em>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,6vw,88px)", alignItems: "start" }}>

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={iv ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 }}
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "clamp(0.92rem,1.5vw,1.04rem)", lineHeight: 1.9, color: "rgba(27,42,74,0.57)", marginBottom: "36px", maxWidth: "400px" }}>
              Actively seeking <span style={{ color: "#C8963E", fontWeight: 600 }}>Summer 2026 internships</span> in AI/ML, software engineering, and data analytics. Always open to research, collaboration, or interesting problems.
            </motion.p>

            {/* Contact links */}
            {[
              { href: "mailto:eymenfaruk479@gmail.com", label: "eymenfaruk479@gmail.com", weight: 600 },
              { href: "https://linkedin.com/in/eymenkeyvan", label: "linkedin.com/in/eymenkeyvan", weight: 400 },
              { href: "https://github.com/eymen160", label: "github.com/eymen160", weight: 400 },
            ].map((link, i) => (
              <motion.a key={link.href}
                href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }} animate={iv ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.25 + i * 0.1 }}
                whileHover={{ x: 10, color: "#C8963E" }}
                style={{ display: "flex", alignItems: "center", gap: "14px", fontFamily: "'DM Sans', sans-serif", fontWeight: link.weight, fontSize: "0.96rem", color: "#1B2A4A", textDecoration: "none", padding: "16px 0", borderBottom: "1px solid rgba(27,42,74,0.08)", transition: "all 0.25s" }}>
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.6 }}
                  style={{ color: "#C8963E", fontSize: "14px", flexShrink: 0 }}>→</motion.span>
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Right — cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={iv ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.65, delay: 0.2, type: "spring", stiffness: 140 }}
              whileHover={{ scale: 1.02, boxShadow: "0 16px 48px rgba(27,42,74,0.1)" }}
              style={{ padding: "28px 30px", border: "1px solid rgba(200,150,62,0.28)", background: "linear-gradient(135deg, rgba(27,42,74,0.04), rgba(200,150,62,0.06))", borderRadius: "12px", transition: "all 0.3s" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <motion.span animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 10px rgba(74,222,128,0.5)" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#4ade80", letterSpacing: "0.2em", textTransform: "uppercase" }}>Available Now</span>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.7rem", color: "#1B2A4A", lineHeight: 1.1, marginBottom: "7px" }}>Summer 2026 Internship</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "rgba(27,42,74,0.48)" }}>AI/ML · Software Engineering · Data Analytics</p>
            </motion.div>

            {/* Info cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={iv ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.35 }}
                whileHover={{ scale: 1.04, borderColor: "rgba(27,42,74,0.18)" }}
                style={{ padding: "20px", border: "1px solid rgba(27,42,74,0.08)", background: "white", borderRadius: "10px", transition: "all 0.22s" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: "rgba(27,42,74,0.32)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "9px" }}>Location</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.2rem", color: "#1B2A4A" }}>Roswell, GA</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(27,42,74,0.38)", marginTop: "3px" }}>United States</p>
              </motion.div>

              <motion.a
                href="https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf" target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }} animate={iv ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.42 }}
                whileHover={{ scale: 1.04, borderColor: "rgba(200,150,62,0.4)", backgroundColor: "rgba(200,150,62,0.04)" }}
                style={{ padding: "20px", border: "1px solid rgba(27,42,74,0.08)", background: "white", borderRadius: "10px", textDecoration: "none", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "all 0.22s" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "9px", color: "rgba(27,42,74,0.32)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "9px" }}>Resume</p>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.2rem", color: "#1B2A4A" }}>View PDF</p>
                  <motion.span animate={{ x: [0, 3, 0], y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}
                    style={{ color: "#C8963E", fontSize: "16px" }}>↗</motion.span>
                </div>
              </motion.a>
            </div>

            {/* Availability note */}
            <motion.div
              initial={{ opacity: 0 }} animate={iv ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              style={{ padding: "14px 18px", background: "rgba(27,42,74,0.03)", border: "1px solid rgba(27,42,74,0.07)", borderRadius: "8px" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(27,42,74,0.45)", lineHeight: 1.65 }}>
                Currently interviewing at <span style={{ fontWeight: 600, color: "rgba(27,42,74,0.65)" }}>SGS, Tractian, Twilio</span> and others. Response time: usually within 24h.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }} animate={iv ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
          style={{ marginTop: "72px", paddingTop: "24px", borderTop: "1px solid rgba(27,42,74,0.07)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(27,42,74,0.27)", letterSpacing: "0.06em" }}>
            Designed & built by Eymen Faruk Keyvan · {new Date().getFullYear()}
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(27,42,74,0.27)", letterSpacing: "0.06em" }}>
            Vite · React · TypeScript · Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
