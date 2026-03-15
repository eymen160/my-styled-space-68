import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });
  const fade = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } } };
  const stag = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };

  return (
    <section id="contact" ref={ref} style={{ background: "#FAF7F2", paddingTop: "clamp(80px,11vw,130px)", paddingBottom: "clamp(80px,11vw,130px)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "40px", right: "40px", height: "1px", background: "rgba(27,42,74,0.1)" }} />

      <div style={{ position: "absolute", right: "-2%", bottom: "-5%", fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(20rem,40vw,50rem)", lineHeight: 0.8, color: "#1B2A4A", opacity: 0.03, pointerEvents: "none", userSelect: "none", letterSpacing: "-0.04em" }}>K</div>

      <motion.div variants={stag} initial="hidden" animate={iv ? "show" : "hidden"}
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

        <motion.div variants={fade} style={{ marginBottom: "clamp(48px,7vw,80px)" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "#C8963E", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "16px" }}>Get in Touch</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(3.2rem, 10vw, 9rem)", lineHeight: 0.86, letterSpacing: "-0.03em", color: "#1B2A4A" }}>
            Let's work<br /><em style={{ color: "rgba(27,42,74,0.25)" }}>together.</em>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,100px)", alignItems: "start" }}>

          <motion.div variants={fade}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "clamp(0.95rem,1.6vw,1.05rem)", lineHeight: 1.88, color: "rgba(27,42,74,0.62)", marginBottom: "36px", maxWidth: "400px" }}>
              Actively seeking <span style={{ color: "#C8963E", fontWeight: 600 }}>Summer 2026 internships</span> in AI/ML, software engineering, and data analytics. Always open to conversations about research, collaboration, or interesting problems.
            </p>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                { href: "mailto:eymenfaruk479@gmail.com", label: "eymenfaruk479@gmail.com", weight: 600 },
                { href: "https://linkedin.com/in/eymenkeyvan", label: "LinkedIn ↗", weight: 400 },
                { href: "https://github.com/eymen160", label: "GitHub ↗", weight: 400 },
              ].map(link => (
                <a key={link.href} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "14px", fontFamily: "'DM Sans', sans-serif", fontWeight: link.weight, fontSize: "1rem", color: "#1B2A4A", textDecoration: "none", padding: "18px 0", borderBottom: "1px solid rgba(27,42,74,0.1)", transition: "all 0.25s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#C8963E"; (e.currentTarget as HTMLAnchorElement).style.gap = "22px"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(200,150,62,0.4)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#1B2A4A"; (e.currentTarget as HTMLAnchorElement).style.gap = "14px"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(27,42,74,0.1)"; }}>
                  <span style={{ fontSize: "14px", color: "#C8963E" }}>→</span>
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fade} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ padding: "32px", border: "1px solid rgba(200,150,62,0.35)", background: "linear-gradient(135deg, rgba(27,42,74,0.04), rgba(200,150,62,0.05))", borderRadius: "4px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#C8963E", display: "inline-block", boxShadow: "0 0 8px rgba(200,150,62,0.5)" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#C8963E", letterSpacing: "0.2em", textTransform: "uppercase" }}>Available Now</span>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.65rem", color: "#1B2A4A", lineHeight: 1.15, marginBottom: "8px" }}>Summer 2026 Internship</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "13px", color: "rgba(27,42,74,0.55)" }}>AI/ML · Software Engineering · Data Analytics</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div style={{ padding: "22px", border: "1px solid rgba(27,42,74,0.1)", background: "rgba(27,42,74,0.03)", borderRadius: "3px" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "10px", color: "rgba(27,42,74,0.4)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "10px" }}>Location</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.25rem", color: "#1B2A4A" }}>Roswell, GA</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(27,42,74,0.45)", marginTop: "3px" }}>United States</p>
              </div>
              <a href="https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf" target="_blank" rel="noopener noreferrer"
                style={{ padding: "22px", border: "1px solid rgba(27,42,74,0.1)", background: "rgba(27,42,74,0.03)", borderRadius: "3px", textDecoration: "none", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "all 0.2s", cursor: "pointer" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(200,150,62,0.4)"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(200,150,62,0.05)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(27,42,74,0.1)"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(27,42,74,0.03)"; }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "10px", color: "rgba(27,42,74,0.4)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "10px" }}>Resume</p>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.25rem", color: "#1B2A4A" }}>View PDF</p>
                  <span style={{ fontSize: "16px", color: "#C8963E" }}>↗</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.p variants={fade}
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(27,42,74,0.3)", textAlign: "center", marginTop: "80px", paddingTop: "28px", borderTop: "1px solid rgba(27,42,74,0.08)", letterSpacing: "0.06em" }}>
          Designed & built by Eymen Faruk Keyvan · {new Date().getFullYear()}
        </motion.p>
      </motion.div>
    </section>
  );
}
