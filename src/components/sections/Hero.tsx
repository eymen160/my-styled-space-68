import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useCounter from "../../hooks/useCounter";

const ROLES = ["AI Researcher", "ML Engineer", "Software Engineer", "Problem Solver"];

const STATS = [
  { value: 84.97, suffix: "%",  decimals: 2, label: "Fovea Detection",   sub: "Surpasses published benchmark" },
  { value: 2,     suffix: "nd", decimals: 0, label: "Hacklanta Finance", sub: "Georgia State · 50+ teams"     },
  { value: 3.56,  suffix: "",   decimals: 2, label: "GPA — KSU",         sub: "Presidential Scholarship"      },
];

const ease = [0.16, 1, 0.3, 1] as const;
const spring = { type: "spring", stiffness: 80, damping: 18 } as const;

function WordMask({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
      <motion.span
        style={{ display: "inline-block" }}
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.95, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function StatItem({ s, i }: { s: typeof STATS[0]; i: number }) {
  const [val, ref] = useCounter(s.value, s.decimals);
  return (
    <div
      ref={ref}
      className="flex-1 min-w-[120px]"
      style={{
        paddingLeft:  i > 0 ? 28 : 0,
        paddingRight: i < 2 ? 28 : 0,
        borderRight:  i < 2 ? "1px solid var(--border)" : "none",
      }}
    >
      <p
        className="display font-extrabold tracking-tight mb-1"
        style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", lineHeight: 1, color: "var(--lime)", letterSpacing: "-0.03em" }}
      >
        {val}{s.suffix}
      </p>
      <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--text)" }}>{s.label}</p>
      <p className="text-xs" style={{ color: "var(--muted)" }}>{s.sub}</p>
    </div>
  );
}

export default function Hero() {
  const [roleIdx,  setRoleIdx]  = useState(0);
  const [roleFade, setRoleFade] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleFade(false);
      setTimeout(() => { setRoleIdx(i => (i + 1) % ROLES.length); setRoleFade(true); }, 300);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ padding: "140px clamp(20px, 5vw, 56px) 80px", background: "var(--bg)" }}
    >
      {/* Radial glow — top right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -80, right: -80,
          width: 640, height: 640,
          borderRadius: "50%",
          background: "radial-gradient(ellipse 55% 50% at 70% 20%, rgba(200,255,62,0.055) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease }}
          className="mb-10"
        >
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium"
            style={{ background: "rgba(48,209,88,0.1)", border: "1px solid rgba(48,209,88,0.2)", color: "#30D158" }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 pulse-dot" style={{ background: "#30D158" }} />
            Open to Summer 2026 Internships
          </span>
        </motion.div>

        {/* Name — word mask reveal */}
        <h1
          className="display font-extrabold tracking-tight mb-8"
          style={{
            fontSize: "clamp(4rem, 13.5vw, 11.5rem)",
            lineHeight: 0.93,
            letterSpacing: "-0.035em",
          }}
        >
          <span style={{ display: "block" }}>
            <WordMask delay={0.18}>EYMEN</WordMask>
          </span>
          <span style={{ display: "block" }}>
            <WordMask delay={0.32}>FARUK</WordMask>
          </span>
          <span style={{ display: "block" }}>
            <WordMask delay={0.46}>
              <em style={{ color: "var(--lime)", fontStyle: "italic" }}>KEYVAN</em>
            </WordMask>
          </span>
        </h1>

        {/* Role line */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.72, ease }}
          className="flex flex-wrap items-center gap-2.5 mb-10 h-7"
        >
          <span className="text-base" style={{ color: "var(--muted)" }}>CS @ KSU ·</span>
          <span
            className="text-base font-semibold"
            style={{
              color:     "var(--text)",
              opacity:   roleFade ? 1 : 0,
              transform: roleFade ? "translateY(0)" : "translateY(-6px)",
              transition: "opacity 0.28s ease, transform 0.28s ease",
            }}
          >
            {ROLES[roleIdx]}
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.86, ease }}
          className="flex flex-wrap gap-3 mb-20"
        >
          <motion.button
            onClick={() => {
              const el = document.getElementById("projects");
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
            }}
            className="px-8 py-3.5 rounded-xl text-sm font-semibold border-none cursor-pointer"
            style={{ background: "var(--lime)", color: "#09090B" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
          >
            View Work ↓
          </motion.button>

          <motion.a
            href="/resume/EYMEN_KEYVAN_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl text-sm font-medium no-underline"
            style={{ color: "var(--text)", border: "1px solid var(--border2)", background: "transparent" }}
            whileHover={{ borderColor: "var(--lime)", color: "var(--lime)" }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
          >
            Resume ↗
          </motion.a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="flex flex-wrap gap-0"
          style={{ borderTop: "1px solid var(--border)", paddingTop: 32 }}
        >
          {STATS.map((s, i) => <StatItem key={s.label} s={s} i={i} />)}
        </motion.div>
      </div>
    </section>
  );
}
