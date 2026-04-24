import { motion } from "framer-motion";

const sectionVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { y: 60, opacity: 0 },
  show:   { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const PROJECTS = [
  {
    id: "01",
    title: "TariffCheck",
    subtitle: "AI-Powered Customs Duty Auditor",
    award: "2nd Place · Finance Track · Hacklanta 2026 · Georgia State University (50+ teams)",
    body: "Automates commercial invoice review against a 10,000-page US customs database using the Claude API, cutting manual audit time from hours to under 30 seconds. Multi-step pipeline detects HTS tariff code errors, auto-generates CBP legal protest documents, surfaces real-time duty recovery opportunities. Full Flask + React + Docker app deployed live to Nexlayer within 12 hours as sole deployment lead.",
    stack: ["Python", "Flask", "React", "Docker", "Claude API", "Nexlayer"],
    link: "https://github.com/eymen160/tariffcheck",
    featured: true,
  },
  {
    id: "02",
    title: "FinSight",
    subtitle: "LLM-Powered Financial Intelligence Platform",
    award: null,
    body: "End-to-end RAG system ingesting SEC 10-K/10-Q filings for natural-language Q&A about earnings, risk, and trends. Intent-routing layer classifies queries and directs them to the right module. Multi-turn conversation with streaming via Claude API. Deployed on AWS Lambda with LangGraph handling multi-step agentic query flows and CI/CD via GitHub Actions.",
    stack: ["Python", "LangChain", "LangGraph", "FAISS", "Claude API", "AWS Lambda", "Flask", "Streamlit"],
    link: "https://github.com/eymen160/finsight",
    featured: false,
  },
];

function ProjectCard({ p, i }: { p: typeof PROJECTS[0]; i: number }) {
  const fromLeft = i % 2 === 0;
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: fromLeft ? -40 : 40 },
        show:   { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 } },
      }}
      whileHover={{ scale: 1.015 }}
      style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 6, padding: "clamp(24px,3vw,36px)", display: "flex", flexDirection: "column", gap: 20, cursor: "default", transition: "box-shadow 0.2s", gridColumn: p.featured ? "span 2" : "span 1" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(201,168,76,0.1)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.4)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
        <div>
          {p.award && (
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 12, padding: "4px 12px", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.35)", borderRadius: 20, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gold)", fontWeight: 500 }}>
              ★ {p.award}
            </div>
          )}
          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: "clamp(1.4rem,2.5vw,1.9rem)", lineHeight: 1.1, color: "var(--text)", marginBottom: 4 }}>{p.title}</h3>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gold)", letterSpacing: "0.06em" }}>{p.subtitle}</p>
        </div>
        <a href={p.link} target="_blank" rel="noopener noreferrer"
          style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border)", borderRadius: "var(--radius)", color: "var(--muted)", textDecoration: "none", transition: "all 0.15s", flexShrink: 0, fontFamily: "var(--font-mono)", fontSize: 14 }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}>
          ↗
        </a>
      </div>

      <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.8, color: "var(--muted)", fontWeight: 300 }}>{p.body}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, borderTop: "1px solid var(--border)", paddingTop: 20 }}>
        {p.stack.map((t) => (
          <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", background: "rgba(240,236,228,0.04)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "3px 10px" }}>{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

const RESEARCH = [
  {
    id: "R1",
    title: "NIH Retinal Image AI",
    sub: "Undergraduate Research · KSU · Sep 2025 – Present",
    body: "End-to-end retinal image analysis system in PyTorch across 3 clinical datasets (6,000+ images) to automate detection of eye diseases as part of an ongoing NIH-funded study. Improved fovea detection accuracy to 84.97%, surpassing a published benchmark. Caught and fixed a data quality issue using a custom audit script, preventing misleading results.",
    stack: ["PyTorch", "ResNet34", "U-Net", "Python", "Google Colab"],
    link: "https://github.com/eymen160/fovea-segmentation",
  },
  {
    id: "R2",
    title: "U-Net Optic Disc Segmentation",
    sub: "Medical Image Segmentation · Feb 2026",
    body: "Independently designed a ResNet34-based U-Net for medical image segmentation on the REFUGE2 eye dataset. Reached 84.61% Dice score on a clean, leakage-free test split after discovering and removing contaminated training data.",
    stack: ["PyTorch", "ResNet34", "Albumentations", "Google Colab Pro"],
    link: "https://github.com/eymen160/unet-optic-disc-segmentation",
  },
];

export default function Projects() {
  return (
    <>
      {/* Projects */}
      <section id="projects" style={{ padding: "clamp(80px,12vw,140px) 40px", maxWidth: 1200, margin: "0 auto" }}>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
          <motion.p variants={itemVariants} style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gold)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>02 — Projects</motion.p>
          <motion.h2 variants={itemVariants} style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(2.5rem,6vw,5rem)", lineHeight: 1, color: "var(--text)", marginBottom: 56 }}>
            Selected Work
          </motion.h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
          </div>
        </motion.div>
      </section>

      {/* Research */}
      <section id="research" style={{ padding: "clamp(80px,12vw,140px) 40px", maxWidth: 1200, margin: "0 auto", borderTop: "1px solid var(--border)" }}>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
          <motion.p variants={itemVariants} style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gold)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>03 — Research</motion.p>
          <motion.h2 variants={itemVariants} style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(2.5rem,6vw,5rem)", lineHeight: 1, color: "var(--text)", marginBottom: 56 }}>
            NIH-Funded AI Research
          </motion.h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {RESEARCH.map((r, i) => (
              <motion.div key={r.id} variants={itemVariants}
                style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 6, padding: "clamp(22px,2.5vw,32px)", transition: "all 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(201,168,76,0.08)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.35)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                  <div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: "clamp(1.3rem,2vw,1.7rem)", color: "var(--text)", marginBottom: 4 }}>{r.title}</h3>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gold)", letterSpacing: "0.06em" }}>{r.sub}</p>
                  </div>
                  <a href={r.link} target="_blank" rel="noopener noreferrer"
                    style={{ width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border)", borderRadius: "var(--radius)", color: "var(--muted)", textDecoration: "none", transition: "all 0.15s", flexShrink: 0, fontFamily: "var(--font-mono)", fontSize: 14 }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}>↗</a>
                </div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.8, color: "var(--muted)", fontWeight: 300, marginBottom: 18 }}>{r.body}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {r.stack.map((t) => (
                    <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", background: "rgba(240,236,228,0.04)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "3px 10px" }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
