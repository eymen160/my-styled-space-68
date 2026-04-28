import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useCounter from "../../hooks/useCounter";

const ROLES = ["AI Researcher", "ML Engineer", "Software Engineer", "Problem Solver"];
const STATS = [
  { value: 84.97, suffix: "%",  decimals: 2, label: "Fovea Detection", sub: "Surpasses published benchmark" },
  { value: 2,     suffix: "nd", decimals: 0, label: "Hacklanta Finance Track", sub: "Georgia State · 50+ teams" },
  { value: 3.56,  suffix: "",   decimals: 2, label: "GPA — KSU", sub: "Presidential Scholarship" },
];

const spring = { type: "spring", stiffness: 80, damping: 18 } as const;
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 36 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] },
});

function StatItem({ s, i }: { s: typeof STATS[0]; i: number }) {
  const [val, ref] = useCounter(s.value, s.decimals);
  return (
    <div
      ref={ref}
      className="flex-1 min-w-[150px]"
      style={{
        paddingLeft:  i > 0 ? 36 : 0,
        paddingRight: i < 2 ? 36 : 0,
        borderRight:  i < 2 ? "1px solid var(--border)" : "none",
      }}
    >
      <p
        className="display font-extrabold tracking-tight mb-1"
        style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", lineHeight: 1, color: "var(--gold)" }}
      >
        {val}{s.suffix}
      </p>
      <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--navy)" }}>{s.label}</p>
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
      setTimeout(() => { setRoleIdx(i => (i + 1) % ROLES.length); setRoleFade(true); }, 320);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ padding: "120px clamp(20px,5vw,48px) 80px", background: "var(--cream)" }}
    >
      {/* Warm radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%", right: "-5%",
          width: 640, height: 560, borderRadius: "50%",
          background: "radial-gradient(ellipse 70% 55% at 55% 40%, rgba(196,147,63,0.13) 0%, transparent 68%)",
        }}
      />
      {/* Vertical accent line */}
      <div
        className="absolute left-10 hidden lg:block"
        style={{
          top: "18%", bottom: "18%", width: 2,
          background: "linear-gradient(to bottom, transparent, var(--gold), transparent)",
          opacity: 0.45, borderRadius: 1,
        }}
      />

      <div className="max-w-[1160px] mx-auto w-full relative z-10 pl-0 lg:pl-8">

        {/* Badge */}
        <motion.div {...fadeUp(0)} className="mb-10">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{ background: "#DCFCE7", border: "1px solid rgba(22,163,74,.18)", color: "#15803D" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-600 pulse-dot flex-shrink-0" />
            Open to Summer 2026 Internships
          </span>
        </motion.div>

        {/* Name */}
        <motion.div {...fadeUp(0.12)} className="mb-7">
          <h1
            className="display font-extrabold tracking-tight"
            style={{
              fontSize: "clamp(3.4rem,9.5vw,8rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--navy)",
            }}
          >
            Eymen Faruk<br />
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Keyvan</span>
          </h1>
        </motion.div>

        {/* Role */}
        <motion.div {...fadeUp(0.25)} className="flex items-center gap-2.5 mb-10 h-8">
          <span className="text-lg font-light" style={{ color: "var(--muted)" }}>CS @ KSU ·</span>
          <span
            className="text-lg font-semibold transition-all duration-300"
            style={{
              color:     "var(--navy)",
              opacity:   roleFade ? 1 : 0,
              transform: roleFade ? "none" : "translateY(-6px)",
            }}
          >
            {ROLES[roleIdx]}
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp(0.38)} className="flex flex-wrap gap-3 mb-16">
          <motion.button
            onClick={() => {
              const el = document.getElementById("projects");
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
            }}
            className="px-8 py-3.5 rounded-xl text-base font-semibold border-none cursor-pointer"
            style={{ background: "var(--navy)", color: "var(--cream)", boxShadow: "0 4px 18px rgba(12,25,41,0.25)" }}
            whileHover={{ y: -2, scale: 1.02, background: "var(--gold)" }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
          >
            View Projects ↓
          </motion.button>

          <motion.a
            href="https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl text-base font-medium no-underline"
            style={{
              color: "var(--navy)",
              border: "1.5px solid var(--border)",
              background: "transparent",
            }}
            whileHover={{ borderColor: "var(--gold)", color: "var(--gold)", y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
          >
            Resume ↗
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-wrap gap-0"
          style={{ borderTop: "1px solid var(--border)", paddingTop: 32 }}
        >
          {STATS.map((s, i) => <StatItem key={s.label} s={s} i={i} />)}
        </motion.div>
      </div>
    </section>
  );
}
