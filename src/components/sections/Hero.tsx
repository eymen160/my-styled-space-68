import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useCounter from "../../hooks/useCounter";
import { smoothScrollTo } from "../../lib/scrollTo";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const STATS = [
  { value: 84.97, suffix: "%",  decimals: 2, label: "Fovea detection accuracy", sub: "Beats a published benchmark" },
  { value: 6000,  suffix: "+",  decimals: 0, label: "Clinical images processed", sub: "Across 3 NIH study datasets" },
  { value: 2,     suffix: "nd", decimals: 0, label: "Place, Hacklanta 2026",     sub: "Finance track, 50+ teams" },
];

/** Headline words sharpen out of a blur one by one, Apple keynote style. */
function BlurWords({ text, delay, className, style }: {
  text: string;
  delay: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span className={className} style={style}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: delay + i * 0.09, ease }}
        >
          {word}
          {i < text.split(" ").length - 1 && " "}
        </motion.span>
      ))}
    </span>
  );
}

function StatItem({ s, delay }: { s: typeof STATS[0]; delay: number }) {
  const [val, ref] = useCounter(s.value, s.decimals);
  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center px-6"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      <p
        className="font-bold tracking-tight mb-1.5 tabular-nums"
        style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", lineHeight: 1, color: "var(--ink)", letterSpacing: "-0.035em" }}
      >
        {Number(val) >= 1000 ? Number(val).toLocaleString() : val}{s.suffix}
      </p>
      <p className="text-[13px] font-semibold" style={{ color: "var(--ink)" }}>{s.label}</p>
      <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{s.sub}</p>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Apple product page move: content pins, then scales away and fades as the next section slides over
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const blur    = useTransform(scrollYProgress, [0, 0.75], ["blur(0px)", "blur(8px)"]);

  return (
    <section ref={ref} id="hero" className="relative" style={{ height: "112vh" }}>
      <motion.div
        className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ scale, opacity, filter: blur, padding: "96px 20px 48px" }}
      >
        {/* Blueprint dot grid */}
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        {/* Soft accent wash */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "8%", left: "50%", transform: "translateX(-50%)",
            width: "min(900px, 90vw)", height: 480,
            background: "radial-gradient(ellipse 50% 45% at 50% 40%, rgba(0,113,227,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center max-w-[980px] mx-auto">

          {/* Availability pill */}
          <motion.div
            initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mb-8"
          >
            <span
              className="inline-flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full text-[13px] font-medium"
              style={{ background: "#fff", border: "1px solid var(--line)", color: "var(--body)", boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0 pulse-dot" style={{ background: "var(--green)" }} />
              Open to Summer 2026 internships
            </span>
          </motion.div>

          {/* Headline */}
          <h1
            className="font-bold tracking-tight mb-7"
            style={{ fontSize: "clamp(2.9rem, 7.4vw, 5.6rem)", lineHeight: 1.02, letterSpacing: "-0.045em", color: "var(--ink)" }}
          >
            <BlurWords text="AI research," delay={0.25} />
            <br />
            <BlurWords
              text="shipped"
              delay={0.55}
              className="serif"
              style={{ color: "var(--accent)", fontSize: "1.06em" }}
            />{" "}
            <BlurWords text="like a product." delay={0.65} />
          </h1>

          {/* Subline */}
          <motion.p
            className="max-w-[560px] text-balance mb-10"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.2rem)", lineHeight: 1.65, color: "var(--body)" }}
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 1, ease }}
          >
            I'm Eymen Faruk Keyvan, a CS junior at Kennesaw State.
            I do NIH-funded deep learning research by day and build
            award-winning AI products on weekends.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 1.15, ease }}
          >
            <motion.button
              onClick={() => smoothScrollTo("work", -88)}
              className="px-7 py-3.5 rounded-full text-[15px] font-semibold border-none cursor-pointer"
              style={{ background: "var(--accent)", color: "#fff", boxShadow: "0 4px 16px rgba(0,113,227,0.25)" }}
              whileHover={{ scale: 1.045, backgroundColor: "#0077ED", boxShadow: "0 8px 28px rgba(0,113,227,0.35)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
            >
              See the work
            </motion.button>
            <motion.a
              href="/resume/EYMEN_KEYVAN_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-semibold no-underline inline-flex items-center gap-1.5"
              style={{ color: "var(--ink)" }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
            >
              Read my resume <span style={{ color: "var(--accent)" }}>→</span>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <div
            className="flex flex-wrap justify-center gap-y-8 rounded-3xl py-7 px-2 w-full max-w-[820px]"
            style={{
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid var(--line)",
              boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
            }}
          >
            {STATS.map((s, i) => (
              <div key={s.label} className="flex-1 min-w-[200px]" style={{ borderLeft: i > 0 ? "1px solid var(--line)" : "none" }}>
                <StatItem s={s} delay={1.35 + i * 0.12} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
