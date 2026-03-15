import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });

  const fade = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
  };
  const stag = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };

  return (
    <section id="contact" ref={ref} style={{ background: "#F2EFE9", paddingTop: "clamp(80px,11vw,130px)", paddingBottom: "clamp(80px,11vw,130px)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "40px", right: "40px", height: "1px", background: "rgba(26,24,20,0.08)" }} />

      {/* Large decorative letter */}
      <div style={{ position: "absolute", right: "-2%", bottom: "-5%", fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(20rem,40vw,50rem)", lineHeight: 0.8, color: "#1A1814", opacity: 0.025, pointerEvents: "none", userSelect: "none", letterSpacing: "-0.04em" }}>K</div>

      <motion.div variants={stag} initial="hidden" animate={iv ? "show" : "hidden"}
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

        <motion.div variants={fade} style={{ marginBottom: "clamp(48px,7vw,80px)" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(26,24,20,0.35)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>Get in Touch</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(3.2rem, 10vw, 9rem)", lineHeight: 0.86, letterSpacing: "-0.03em", color: "#1A1814" }}>
            Let's work<br /><em style={{ color: "rgba(26,24,20,0.22)" }}>together.</em>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,100px)", alignItems: "start" }}>

          <motion.div variants={fade}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "clamp(0.95rem,1.6vw,1.05rem)", lineHeight: 1.88, color: "rgba(26,24,20,0.48)", marginBottom: "32px", maxWidth: "400px" }}>
              Actively seeking <span style={{ color: "#8B7355" }}>Summer 2026 internships</span> in AI/ML, software engineering, and data analytics. Always open to conversations about research, collaboration, or interesting problems.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="mailto:eymenfaruk479@gmail.com"
                style={{ display: "inline-flex", alignItems: "center", gap: "12px", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "1rem", color: "#1A1814", textDecoration: "none", padding: "16px 0", borderBottom: "1px solid rgba(26,24,20,0.1)", transition: "gap 0.25s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.gap = "20px"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(139,115,85,0.45)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.gap = "12px"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(26,24,20,0.1)"; }}>
                <span style={{ fontSize: "14px", opacity: 0.35 }}>→</span>
                eymenfaruk479@gmail.com
              </a>
              <a href="https://linkedin.com/in/eymenkeyvan" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "12px", fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "1rem", color: "rgba(26,24,20,0.5)", textDecoration: "none", padding: "16px 0", borderBottom: "1px solid rgba(26,24,20,0.1)", transition: "all 0.25s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#1A1814"; (e.currentTarget as HTMLAnchorElement).style.gap = "20px"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(26,24,20,0.5)"; (e.currentTarget as HTMLAnchorElement).style.gap = "12px"; }}>
                <span style={{ fontSize: "14px", opacity: 0.35 }}>→</span>
                LinkedIn ↗
              </a>
              <a href="https://github.com/eymen160" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "12px", fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "1rem", color: "rgba(26,24,20,0.5)", textDecoration: "none", padding: "16px 0", borderBottom: "1px solid rgba(26,24,20,0.1)", transition: "all 0.25s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#1A1814"; (e.currentTarget as HTMLAnchorElement).style.gap = "20px"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(26,24,20,0.5)"; (e.currentTarget as HTMLAnchorElement).style.gap = "12px"; }}>
                <span style={{ fontSize: "14px", opacity: 0.35 }}>→</span>
                GitHub ↗
              </a>
            </div>
          </motion.div>

          <motion.div variants={fade} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Available card */}
            <div style={{ padding: "28px 30px", border: "1px solid rgba(139,115,85,0.28)", background: "rgba(139,115,85,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#8B7355", display: "inline-block" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(139,115,85,0.8)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Available</span>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.55rem", color: "#1A1814", lineHeight: 1.15, marginBottom: "6px" }}>Summer 2026 Internship</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "13px", color: "rgba(26,24,20,0.42)" }}>AI/ML · Software Engineering · Data Analytics</p>
            </div>

            {/* Info cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div style={{ padding: "20px 22px", border: "1px solid rgba(26,24,20,0.1)", background: "rgba(26,24,20,0.02)" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "10px", color: "rgba(26,24,20,0.28)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "8px" }}>Location</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.2rem", color: "#1A1814" }}>Roswell, GA</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "12px", color: "rgba(26,24,20,0.32)", marginTop: "3px" }}>United States</p>
              </div>
              <a href="https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf" target="_blank" rel="noopener noreferrer"
                style={{ padding: "20px 22px", border: "1px solid rgba(26,24,20,0.1)", background: "rgba(26,24,20,0.02)", textDecoration: "none", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "border-color 0.2s", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(26,24,20,0.22)"}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(26,24,20,0.1)"}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "10px", color: "rgba(26,24,20,0.28)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "8px" }}>Resume</p>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.2rem", color: "#1A1814" }}>View PDF</p>
                  <span style={{ fontSize: "14px", color: "rgba(26,24,20,0.35)" }}>↗</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.p variants={fade}
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "12px", color: "rgba(26,24,20,0.22)", textAlign: "center", marginTop: "80px", paddingTop: "28px", borderTop: "1px solid rgba(26,24,20,0.07)", letterSpacing: "0.06em" }}>
          Designed & built by Eymen Faruk Keyvan · {new Date().getFullYear()}
        </motion.p>
      </motion.div>
    </section>
  );
}
