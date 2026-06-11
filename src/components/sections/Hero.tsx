import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import useCounter from "../../hooks/useCounter";
import Magnetic from "../Magnetic";
import { smoothScrollTo } from "../../lib/scrollTo";

const ROLES = ["AI Researcher", "ML Engineer", "Software Engineer", "Problem Solver"];

const STATS = [
  { value: 84.97, suffix: "%",  decimals: 2, label: "Fovea Detection",   sub: "Surpasses published benchmark" },
  { value: 2,     suffix: "nd", decimals: 0, label: "Hacklanta Finance", sub: "Georgia State · 50+ teams"     },
  { value: 3.56,  suffix: "",   decimals: 2, label: "GPA — KSU",         sub: "Presidential Scholarship"      },
];

const ease = [0.16, 1, 0.3, 1] as const;
const spring = { type: "spring", stiffness: 80, damping: 18 } as const;

/** Per-character mask reveal — each letter rises out of an overflow-hidden slot. */
function CharReveal({ text, delay, started, className, style }: {
  text: string;
  delay: number;
  started: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span className={className} style={{ ...style, display: "inline-block", whiteSpace: "nowrap" }} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span key={i} aria-hidden style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", rotate: 6 }}
            animate={started ? { y: "0%", rotate: 0 } : {}}
            transition={{ duration: 0.9, delay: delay + i * 0.035, ease }}
          >
            {ch}
          </motion.span>
        </span>
      ))}
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

export default function Hero({ started }: { started: boolean }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax: heading drifts up slower than scroll and fades out
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const headingY  = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const fade      = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Mouse-tracking glow
  const glowX = useMotionValue(0.7);
  const glowY = useMotionValue(0.2);
  const gx = useSpring(glowX, { stiffness: 40, damping: 20 });
  const gy = useSpring(glowY, { stiffness: 40, damping: 20 });
  const glow = useTransform(
    [gx, gy],
    ([x, y]) => `radial-gradient(ellipse 42% 38% at ${(x as number) * 100}% ${(y as number) * 100}%, rgba(200,255,62,0.07) 0%, transparent 70%)`
  );

  useEffect(() => {
    const id = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 3000);
    return () => clearInterval(id);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    glowX.set((e.clientX - r.left) / r.width);
    glowY.set((e.clientY - r.top) / r.height);
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ padding: "140px clamp(20px, 5vw, 56px) 80px", background: "var(--bg)" }}
    >
      {/* Mouse-tracking glow */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ background: glow }} />

      {/* Faint grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
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

        {/* Name — per-character mask reveal with parallax drift */}
        <motion.h1
          className="display font-extrabold tracking-tight mb-8"
          style={{
            fontSize: "clamp(4rem, 13.5vw, 11.5rem)",
            lineHeight: 0.93,
            letterSpacing: "-0.035em",
            y: headingY,
            opacity: fade,
          }}
        >
          <span style={{ display: "block" }}>
            <CharReveal text="EYMEN" delay={0.15} started={started} />
          </span>
          <span style={{ display: "block" }}>
            <CharReveal text="FARUK" delay={0.3} started={started} />
          </span>
          <span style={{ display: "block" }}>
            <CharReveal text="KEYVAN" delay={0.45} started={started} style={{ color: "var(--lime)", fontStyle: "italic" }} />
          </span>
        </motion.h1>

        {/* Role line — letters cycle with a vertical flip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.85, ease }}
          className="flex flex-wrap items-center gap-2.5 mb-10 h-7"
        >
          <span className="text-base" style={{ color: "var(--muted)" }}>CS @ KSU ·</span>
          <span className="relative inline-block h-7 overflow-hidden" style={{ minWidth: 200 }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIdx}
                className="absolute left-0 text-base font-semibold"
                style={{ color: "var(--text)" }}
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                transition={{ duration: 0.4, ease }}
              >
                {ROLES[roleIdx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        {/* CTAs — magnetic */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1, ease }}
          className="flex flex-wrap gap-3 mb-20"
        >
          <Magnetic>
            <motion.button
              onClick={() => smoothScrollTo("projects")}
              className="px-8 py-3.5 rounded-xl text-sm font-semibold border-none cursor-pointer"
              style={{ background: "var(--lime)", color: "#09090B" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={spring}
            >
              View Work ↓
            </motion.button>
          </Magnetic>

          <Magnetic>
            <motion.a
              href="/resume/EYMEN_KEYVAN_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-xl text-sm font-medium no-underline"
              style={{ color: "var(--text)", border: "1px solid var(--border2)", background: "transparent" }}
              whileHover={{ borderColor: "var(--lime)", color: "var(--lime)" }}
              whileTap={{ scale: 0.97 }}
              transition={spring}
            >
              Resume ↗
            </motion.a>
          </Magnetic>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={started ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="flex flex-wrap gap-0"
          style={{ borderTop: "1px solid var(--border)", paddingTop: 32 }}
        >
          {STATS.map((s, i) => <StatItem key={s.label} s={s} i={i} />)}
        </motion.div>
      </div>

      {/* Scroll cue — outer div owns the parallax fade, inner owns the entrance */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ bottom: 28, opacity: fade }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={started ? { opacity: 1 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <span className="eyebrow" style={{ fontSize: 9 }}>Scroll</span>
          <motion.span
            className="block w-px h-8"
            style={{ background: "linear-gradient(to bottom, var(--lime), transparent)" }}
            animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
