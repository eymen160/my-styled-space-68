import { motion } from "framer-motion";

const sectionVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { y: 60, opacity: 0 },
  show:   { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "clamp(100px,14vw,160px) 40px", maxWidth: 1200, margin: "0 auto", position: "relative", overflow: "hidden" }}
    >
      {/* Atmospheric "LET'S TALK" background */}
      <p
        className="bg-pulse"
        aria-hidden="true"
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 700,
          fontSize: "clamp(5rem,18vw,16rem)",
          lineHeight: 1,
          color: "var(--text)",
          opacity: 0.03,
          whiteSpace: "nowrap",
          letterSpacing: "-0.02em",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      >
        LET'S TALK
      </p>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <motion.p variants={itemVariants} style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gold)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>
          04 — Contact
        </motion.p>
        <motion.h2 variants={itemVariants} style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(2.8rem,8vw,6.5rem)", lineHeight: 1, letterSpacing: "-0.01em", color: "var(--text)", marginBottom: 20 }}>
          Let's work<br /><span style={{ fontStyle: "italic" }}>together.</span>
        </motion.h2>

        <motion.div variants={itemVariants} style={{ height: 1, background: "var(--gold)", width: "min(300px,50vw)", marginBottom: 52 }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px 80px" }}>
          {/* Left */}
          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.85, color: "var(--muted)", fontWeight: 300, maxWidth: 420 }}>
              Actively looking for <span style={{ color: "var(--text)", fontWeight: 400 }}>Summer 2026 internships</span> in AI/ML engineering, software development, and data analytics. Open to research collaborations.
            </p>

            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Email</p>
              <a href="mailto:eymen@eymenkeyvan.com" className="gold-underline-wrap"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: "clamp(1.3rem,2.5vw,1.9rem)", color: "var(--text)", textDecoration: "none", letterSpacing: "-0.01em", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}>
                eymen@eymenkeyvan.com ↗
              </a>
            </div>

            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Profiles</p>
              <div style={{ display: "flex", gap: 20 }}>
                {[["LinkedIn", "https://linkedin.com/in/eymenkeyvan"], ["GitHub", "https://github.com/eymen160"]].map(([l, h]) => (
                  <a key={l} href={h} target="_blank" rel="noopener noreferrer" className="gold-underline-wrap"
                    style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)", textDecoration: "none", letterSpacing: "0.06em", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}>
                    {l} ↗
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: info */}
          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {/* Available */}
            <div style={{ padding: 22, background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px #4ade80" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Available Now</span>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: "1.3rem", color: "var(--text)", marginBottom: 4 }}>Summer 2026 Internship</p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)", fontWeight: 300 }}>AI/ML · Software Engineering · Data Analytics</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[{ l: "Location", v: "Roswell, GA", s: "United States" }, { l: "Response", v: "< 24 hours", s: "Avg reply time" }].map((item) => (
                <div key={item.l} style={{ padding: 18, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 6 }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>{item.l}</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: "1.2rem", color: "var(--text)", marginBottom: 2 }}>{item.v}</p>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", fontWeight: 300 }}>{item.s}</p>
                </div>
              ))}
            </div>
            <a href="https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf" target="_blank" rel="noopener noreferrer"
              style={{ padding: "18px 22px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 6, textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "border-color 0.2s, box-shadow 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(201,168,76,0.08)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
              <div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Resume</p>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: "1.2rem", color: "var(--text)" }}>Download PDF</p>
              </div>
              <span style={{ color: "var(--gold)", fontSize: 20 }}>↗</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
