import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="contact" ref={ref} style={{ background: "#FAF7F2", paddingTop: "clamp(80px,11vw,130px)", paddingBottom: "clamp(80px,11vw,130px)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "40px", right: "40px", height: "1px", background: "rgba(27,42,74,0.1)" }} />

      {/* Animated decorative background letter */}
      <motion.div
        animate={{ opacity: [0.025, 0.04, 0.025] }} transition={{ duration: 6, repeat: Infinity }}
        style={{ position: "absolute", right: "-4%", bottom: "-8%", fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(18rem,38vw,48rem)", lineHeight: 0.8, color: "#1B2A4A", pointerEvents: "none", userSelect: "none", letterSpacing: "-0.04em" }}>K</motion.div>

      {/* Ambient glow */}
      <div style={{ position: "absolute", bottom: "-20%", right: "10%", width: "40vw", height: "50vh", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(200,150,62,0.08) 0%, transparent 65%)", pointerEvents: "none", filter: "blur(50px)" }} />

      <motion.div variants={containerVariants} initial="hidden" animate={iv ? "show" : "hidden"}
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

        <motion.div variants={itemVariants} style={{ marginBottom: "clamp(48px,7vw,80px)" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#C8963E", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "16px" }}>Get in Touch</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(3.2rem, 10vw, 9rem)", lineHeight: 0.86, letterSpacing: "-0.03em", color: "#1B2A4A" }}>
            Let's work<br /><em style={{ color: "rgba(27,42,74,0.2)" }}>together.</em>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(36px,6vw,88px)", alignItems: "start" }}>

          <motion.div variants={itemVariants}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "clamp(0.95rem,1.6vw,1.05rem)", lineHeight: 1.88, color: "rgba(27,42,74,0.58)", marginBottom: "36px", maxWidth: "400px" }}>
              Actively seeking <span style={{ color: "#C8963E", fontWeight: 600 }}>Summer 2026 internships</span> in AI/ML, software engineering, and data analytics. Always open to conversations about research, collaboration, or interesting problems.
            </p>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                { href: "mailto:eymenfaruk479@gmail.com", label: "eymenfaruk479@gmail.com", weight: 600 },
                { href: "https://linkedin.com/in/eymenkeyvan", label: "LinkedIn ↗", weight: 400 },
                { href: "https://github.com/eymen160", label: "GitHub ↗", weight: 400 },
              ].map((link, i) => (
                <motion.a key={link.href}
                  href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }} animate={iv ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 8, color: "#C8963E", borderBottomColor: "rgba(200,150,62,0.45)" }}
                  style={{ display: "inline-flex", alignItems: "center", gap: "14px", fontFamily: "'DM Sans', sans-serif", fontWeight: link.weight, fontSize: "1rem", color: "#1B2A4A", textDecoration: "none", padding: "18px 0", borderBottom: "1px solid rgba(27,42,74,0.1)", transition: "all 0.25s" }}>
                  <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
                    style={{ fontSize: "14px", color: "#C8963E" }}>→</motion.span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {/* Main availability card */}
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "0 16px 48px rgba(27,42,74,0.1)" }}
              style={{ padding: "32px", border: "1px solid rgba(200,150,62,0.3)", background: "linear-gradient(135deg, rgba(27,42,74,0.04), rgba(200,150,62,0.06))", borderRadius: "12px", transition: "all 0.3s" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 10px rgba(74,222,128,0.5)" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#4ade80", letterSpacing: "0.2em", textTransform: "uppercase" }}>Available Now</span>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.7rem", color: "#1B2A4A", lineHeight: 1.15, marginBottom: "8px" }}>Summer 2026 Internship</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "13px", color: "rgba(27,42,74,0.5)" }}>AI/ML · Software Engineering · Data Analytics</p>
            </motion.div>

            {/* Info cards grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <motion.div whileHover={{ scale: 1.03, borderColor: "rgba(27,42,74,0.2)" }}
                style={{ padding: "22px", border: "1px solid rgba(27,42,74,0.08)", background: "white", borderRadius: "10px", transition: "all 0.25s" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "rgba(27,42,74,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "10px" }}>Location</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.25rem", color: "#1B2A4A" }}>Roswell, GA</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(27,42,74,0.4)", marginTop: "3px" }}>United States</p>
              </motion.div>

              <motion.a href="https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03, borderColor: "rgba(200,150,62,0.4)", backgroundColor: "rgba(200,150,62,0.04)" }}
                style={{ padding: "22px", border: "1px solid rgba(27,42,74,0.08)", background: "white", borderRadius: "10px", textDecoration: "none", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "all 0.25s", cursor: "pointer" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "rgba(27,42,74,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "10px" }}>Resume</p>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.25rem", color: "#1B2A4A" }}>View PDF</p>
                  <motion.span animate={{ x: [0, 3, 0], y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}
                    style={{ fontSize: "16px", color: "#C8963E" }}>↗</motion.span>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.p variants={itemVariants}
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(27,42,74,0.28)", textAlign: "center", marginTop: "80px", paddingTop: "28px", borderTop: "1px solid rgba(27,42,74,0.07)", letterSpacing: "0.06em" }}>
          Designed & built by Eymen Faruk Keyvan · {new Date().getFullYear()}
        </motion.p>
      </motion.div>
    </section>
  );
}
