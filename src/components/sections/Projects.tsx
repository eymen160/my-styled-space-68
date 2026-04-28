import { useState } from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    num: "01",
    title: "TariffCheck",
    sub: "AI-Powered Customs Duty Auditor",
    badge: "★ 2nd Place · Hacklanta Finance Track · Georgia State · 50+ teams",
    result: "Cuts audit time from hours to 30 seconds",
    body: "Automated commercial invoice review against a 10,000-page US customs database using Claude API for document parsing and classification. Multi-step pipeline detects HTS tariff code errors and auto-generates official CBP legal protest documents, surfacing thousands of dollars in duty recovery per audit. Led backend and deployment — shipped Flask + React + Docker live to Nexlayer within 12 hours as sole deployment engineer.",
    stack: ["Python", "Flask", "React", "Docker", "Claude API", "Nexlayer"],
    link: "https://github.com/eymen160/tariffcheck",
    date: "Mar 2026",
  },
  {
    num: "02",
    title: "FinSight",
    sub: "LLM-Powered Financial Intelligence Platform",
    badge: null,
    result: "Multi-turn RAG on SEC filings with streaming responses",
    body: "Built an intent-routing layer that classifies financial queries (earnings, risk, trends) and directs each to the right module. Full RAG pipeline using LangChain + FAISS ingests SEC 10-K/10-Q filings for natural-language Q&A. Multi-turn conversation with streaming via Claude API. Deployed on AWS Lambda with LangGraph handling multi-step agentic flows and CI/CD via GitHub Actions.",
    stack: ["Python", "LangChain", "LangGraph", "FAISS", "Claude API", "AWS Lambda", "Flask"],
    link: "https://github.com/eymen160/finsight",
    date: "Mar 2026",
  },
  {
    num: "03",
    title: "NIH Retinal AI Research",
    sub: "End-to-End Medical Image Analysis",
    badge: null,
    result: "84.97% fovea detection — surpasses published benchmark",
    body: "End-to-end retinal image analysis system in PyTorch across 3 clinical datasets (6,000+ images) as part of an ongoing NIH-funded study on automated eye disease diagnosis. Improved fovea detection accuracy to 84.97% by redesigning the model training and data processing strategy. Caught and fixed a critical data quality issue with a custom audit script.",
    stack: ["PyTorch", "ResNet34", "U-Net", "Python", "Google Colab"],
    link: "https://github.com/eymen160/fovea-segmentation",
    date: "Sep 2025 – Present",
  },
  {
    num: "04",
    title: "U-Net Optic Disc Segmentation",
    sub: "Deep Learning · Medical Imaging",
    badge: null,
    result: "84.61% Dice score on a clean leakage-free test split",
    body: "Independently designed a ResNet34-based U-Net for medical image segmentation on the REFUGE2 eye dataset. Reached 84.61% segmentation accuracy on a clean, leakage-free split after discovering and removing contaminated training data that would have inflated results.",
    stack: ["PyTorch", "ResNet34", "Albumentations", "Google Colab Pro"],
    link: "https://github.com/eymen160/unet-optic-disc-segmentation",
    date: "Feb 2026",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

function ProjectCard({ p }: { p: typeof PROJECTS[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={cardAnim}
      className="card p-8 cursor-pointer"
      onClick={() => setOpen(o => !o)}
      whileHover={{ y: -4, boxShadow: "0 20px 56px rgba(12,25,41,0.1)", borderColor: "var(--border2)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {p.badge && (
        <div className="mb-4">
          <span className="chip chip-gold text-xs">{p.badge}</span>
        </div>
      )}

      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold mb-2" style={{ color: "var(--faint)", letterSpacing: "0.06em" }}>{p.num}</p>
          <h3
            className="display font-extrabold tracking-tight mb-1.5"
            style={{ fontSize: "clamp(1.2rem,2.5vw,1.65rem)", lineHeight: 1.15, color: "var(--navy)", letterSpacing: "-0.02em" }}
          >
            {p.title}
          </h3>
          <p className="text-sm font-medium mb-3" style={{ color: "var(--gold)" }}>{p.sub}</p>
          <p className="text-sm" style={{ color: "var(--body)" }}>→ {p.result}</p>
        </div>

        <div className="flex flex-col items-end gap-3 flex-shrink-0">
          <span className="text-xs" style={{ color: "var(--faint)", whiteSpace: "nowrap" }}>{p.date}</span>
          <motion.a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-sm no-underline"
            style={{ background: "var(--cream-dark)", border: "1px solid var(--border)", color: "var(--navy)" }}
            onClick={e => e.stopPropagation()}
            whileHover={{ background: "var(--navy)", color: "var(--cream)", borderColor: "var(--navy)" }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            ↗
          </motion.a>
        </div>
      </div>

      {/* Expandable */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        style={{ overflow: "hidden" }}
      >
        <div className="pt-5 mt-5" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-sm leading-[1.85] mb-4" style={{ color: "var(--body)" }}>{p.body}</p>
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map(t => <span key={t} className="chip">{t}</span>)}
          </div>
        </div>
      </motion.div>

      <p className="text-xs mt-3 text-right" style={{ color: "var(--faint)" }}>
        {open ? "↑ less" : "↓ more"}
      </p>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-pad"
      style={{ background: "var(--cream-mid)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1160px] mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-4">02 — Projects</p>
          <h2
            className="display font-extrabold tracking-tight"
            style={{ fontSize: "clamp(2rem,4vw,3.4rem)", lineHeight: 1.1, color: "var(--navy)", letterSpacing: "-0.02em" }}
          >
            Selected Work
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {PROJECTS.map(p => <ProjectCard key={p.num} p={p} />)}
        </motion.div>
      </div>
    </section>
  );
}
