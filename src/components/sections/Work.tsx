import { motion } from "framer-motion";
import Reveal from "../Reveal";

const spring = { type: "spring", stiffness: 260, damping: 22 } as const;

const PROJECTS = [
  {
    badge: "2nd place · Hacklanta 2026 Finance Track",
    title: "TariffCheck",
    tagline: "Customs audits in 30 seconds, not hours.",
    body: "An AI auditor that reads commercial invoices against a 10,000-page US customs database, flags wrong HTS tariff codes, and drafts the official CBP protest documents that recover the money. I owned backend and deployment and shipped it live within 12 hours.",
    visual: { metric: "30s", caption: "per audit, down from hours", from: "#EFF6FF", to: "#DBEAFE", color: "#1D4ED8" },
    stack: ["Python", "Flask", "React", "Docker", "Claude API"],
    link: "https://github.com/eymen160/tariffcheck",
    date: "Mar 2026",
  },
  {
    badge: null,
    title: "FinSight",
    tagline: "Ask a 10-K anything.",
    body: "A financial intelligence platform that routes natural language questions about earnings, risk, and trends to the right module, then answers them with a RAG pipeline over real SEC filings. Streaming multi-turn chat, agentic flows with LangGraph, deployed on AWS Lambda with CI/CD.",
    visual: { metric: "RAG", caption: "over live SEC 10-K and 10-Q filings", from: "#F5F3FF", to: "#EDE9FE", color: "#6D28D9" },
    stack: ["LangChain", "LangGraph", "FAISS", "Claude API", "AWS Lambda"],
    link: "https://github.com/eymen160/finsight",
    date: "Mar 2026",
  },
];

function ProjectCard({ p, index }: { p: typeof PROJECTS[0]; index: number }) {
  return (
    <Reveal delay={index * 0.12}>
      <motion.a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col h-full rounded-[28px] overflow-hidden no-underline"
        style={{ background: "var(--card)", border: "1px solid var(--line)" }}
        whileHover={{ y: -8, boxShadow: "0 24px 64px rgba(0,0,0,0.1)" }}
        transition={spring}
      >
        {/* Visual panel */}
        <div
          className="relative flex flex-col items-center justify-center text-center"
          style={{ height: 220, background: `linear-gradient(135deg, ${p.visual.from}, ${p.visual.to})` }}
        >
          <motion.p
            className="font-bold tracking-tight"
            style={{ fontSize: "clamp(3.4rem, 6vw, 4.6rem)", lineHeight: 1, color: p.visual.color, letterSpacing: "-0.05em" }}
          >
            {p.visual.metric}
          </motion.p>
          <p className="text-[13px] font-medium mt-2" style={{ color: p.visual.color, opacity: 0.75 }}>
            {p.visual.caption}
          </p>
          {p.badge && (
            <span
              className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11.5px] font-semibold"
              style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", color: p.visual.color }}
            >
              ★ {p.badge}
            </span>
          )}
          {/* Arrow nudges on hover */}
          <span
            className="absolute bottom-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ background: "rgba(255,255,255,0.85)", color: p.visual.color }}
          >
            ↗
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-3 p-7 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-bold tracking-tight" style={{ fontSize: "1.45rem", letterSpacing: "-0.03em", color: "var(--ink)" }}>
              {p.title}
            </h3>
            <span className="text-xs font-medium flex-shrink-0" style={{ color: "var(--muted)" }}>{p.date}</span>
          </div>
          <p className="text-[15px] font-semibold" style={{ color: "var(--accent)" }}>{p.tagline}</p>
          <p className="text-sm leading-[1.75]" style={{ color: "var(--body)" }}>{p.body}</p>
          <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
            {p.stack.map(t => <span key={t} className="chip">{t}</span>)}
          </div>
        </div>
      </motion.a>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="relative z-10 section-pad"
      style={{
        background: "var(--bg)",
        borderRadius: "40px 40px 0 0",
        marginTop: "-9vh",
        boxShadow: "0 -16px 48px rgba(0,0,0,0.05)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="max-w-[1120px] mx-auto">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">Selected work</p>
          <h2
            className="font-bold tracking-tight mb-4"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", lineHeight: 1.05, letterSpacing: "-0.04em", color: "var(--ink)" }}
          >
            Built to be <span className="serif" style={{ color: "var(--accent)", fontSize: "1.06em" }}>used,</span> not demoed.
          </h2>
          <p className="max-w-[520px] mx-auto text-[15.5px] leading-[1.7]" style={{ color: "var(--body)" }}>
            Real deployments, real users, real deadlines. Both projects went from idea to live in days.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => <ProjectCard key={p.title} p={p} index={i} />)}
        </div>

        <Reveal delay={0.15} className="mt-6">
          <motion.a
            href="https://github.com/eymen160"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-[24px] px-7 py-6 no-underline"
            style={{ background: "var(--card)", border: "1px solid var(--line)" }}
            whileHover={{ y: -4, boxShadow: "0 16px 44px rgba(0,0,0,0.08)" }}
            transition={spring}
          >
            <div>
              <p className="text-[15px] font-bold tracking-tight" style={{ color: "var(--ink)" }}>More on GitHub</p>
              <p className="text-[13px] mt-0.5" style={{ color: "var(--muted)" }}>Segmentation models, pipelines, and everything in between</p>
            </div>
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm flex-shrink-0"
              style={{ background: "var(--bg2)", border: "1px solid var(--line)", color: "var(--ink)" }}
            >
              ↗
            </span>
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
