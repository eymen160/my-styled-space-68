import { motion, useScroll, useTransform, useSpring, animate } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";

// Character-by-character animated heading
function SplitHeading({ text, delay = 0, style = {} }: { text: string; delay?: number; style?: React.CSSProperties }) {
  const chars = text.split("");
  return (
    <span style={{ display: "inline-block", overflow: "hidden", ...style }}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "105%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.9, delay: delay + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "inline-block", willChange: "transform" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

// Counting number on intersection
function LiveCounter({ to, decimals = 0, suffix = "", prefix = "" }: { to: number; decimals?: number; suffix?: string; prefix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !fired.current) {
        fired.current = true;
        animate(0, to, { duration: 2, ease: [0.16, 1, 0.3, 1], onUpdate: v => setVal(parseFloat(v.toFixed(decimals))) });
      }
    }, { threshold: 0.6 });
    obs.observe(el); return () => obs.disconnect();
  }, [to, decimals]);
  return <span ref={ref}>{prefix}{val.toFixed(decimals)}{suffix}</span>;
}

const ROLES = ["AI Researcher", "ML Engineer", "Deep Learning", "CS Junior @ KSU"];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const op = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const sc = useTransform(scrollYProgress, [0, 0.5], [1, 0.97]);

  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  const stats = [
    { n: 3.56, dec: 2, sfx: "", label: "GPA / KSU", note: "Presidential Scholar" },
    { n: 2.7, dec: 1, sfx: "%", label: "Above SOTA", note: "vs. published baseline" },
    { n: 6, dec: 0, sfx: "K+", label: "Images", note: "NIH research pipeline" },
  ];

  return (
    <section ref={sectionRef} style={{
      background: "linear-gradient(150deg, #0D1B30 0%, #1B2A4A 55%, #152238 100%)",
      minHeight: "100vh", position: "relative", display: "flex",
      flexDirection: "column", justifyContent: "flex-end",
      overflow: "hidden", paddingTop: "120px"
    }}>
      {/* Animated mesh blobs */}
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -20, 0], scale: [1, 1.2, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "-30%", right: "-10%", width: "70vw", height: "80vh", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(200,150,62,0.3) 0%, transparent 58%)", pointerEvents: "none", filter: "blur(48px)", willChange: "transform" }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 18, 0], scale: [1, 1.3, 1], opacity: [0.06, 0.13, 0.06] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        style={{ position: "absolute", bottom: "0%", left: "-15%", width: "65vw", height: "70vh", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(80,120,220,0.25) 0%, transparent 62%)", pointerEvents: "none", filter: "blur(56px)" }}
      />

      {/* Fine grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(250,247,242,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(250,247,242,0.022) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />

      {/* Noise overlay */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "180px", pointerEvents: "none" }} />

      {/* Animated top rule */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "absolute", top: "88px", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(250,247,242,0.08) 30%, rgba(200,150,62,0.18) 50%, rgba(250,247,242,0.08) 70%, transparent)", transformOrigin: "left" }}
      />

      {/* Content */}
      <motion.div style={{ y, opacity: op, scale: sc }} className="relative z-10">
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px,5vw,40px)" }}>

          {/* Tag row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "clamp(32px, 5vw, 56px)", flexWrap: "wrap" }}
          >
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "10px", color: "rgba(250,247,242,0.38)", letterSpacing: "0.24em", textTransform: "uppercase" }}>Portfolio · 2025</span>
            <span style={{ width: "1px", height: "12px", background: "rgba(250,247,242,0.15)" }} />

            {/* Flipping role tag */}
            <div style={{ height: "24px", overflow: "hidden", position: "relative" }}>
              <motion.div
                key={roleIdx}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-110%" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "10px", color: "#C8963E", letterSpacing: "0.18em", textTransform: "uppercase", background: "rgba(200,150,62,0.1)", padding: "4px 12px", borderRadius: "3px", border: "1px solid rgba(200,150,62,0.25)", display: "inline-block" }}>
                  {ROLES[roleIdx]}
                </span>
              </motion.div>
            </div>

            <span style={{ width: "1px", height: "12px", background: "rgba(250,247,242,0.15)" }} />

            {/* Live availability */}
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "10px", color: "#4ade80", letterSpacing: "0.18em", textTransform: "uppercase", background: "rgba(74,222,128,0.08)", padding: "4px 12px", borderRadius: "3px", border: "1px solid rgba(74,222,128,0.2)", display: "inline-flex", alignItems: "center", gap: "7px" }}>
              <motion.span
                animate={{ opacity: [1, 0.2, 1], scale: [1, 1.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4ade80", display: "inline-block", flexShrink: 0 }}
              />
              Open to Work · S'26
            </span>
          </motion.div>

          {/* Mega name — split char animation */}
          <div style={{ marginBottom: "clamp(32px, 6vw, 64px)" }}>
            <div style={{ lineHeight: 0.86, marginBottom: "0.04em" }}>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(5rem, 16vw, 15rem)", letterSpacing: "-0.03em", color: "#FAF7F2", display: "block", lineHeight: 0.86 }}>
                <SplitHeading text="Eymen" delay={0.1} />
              </h1>
            </div>
            <div style={{ lineHeight: 0.86 }}>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(5rem, 16vw, 15rem)", letterSpacing: "-0.03em", display: "block", lineHeight: 0.86, WebkitTextStroke: "1.5px rgba(250,247,242,0.18)", color: "transparent" }}>
                <SplitHeading text="Keyvan" delay={0.45} />
              </h1>
            </div>
          </div>

          {/* Bottom grid */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: "32px", paddingTop: "clamp(18px, 3vw, 28px)", paddingBottom: "clamp(36px, 6vw, 60px)", borderTop: "1px solid rgba(250,247,242,0.08)" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <motion.p
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.35 }}
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "clamp(0.9rem, 1.6vw, 1.1rem)", lineHeight: 1.82, color: "rgba(250,247,242,0.66)", maxWidth: "480px" }}
              >
                CS junior at <span style={{ color: "#FAF7F2", fontWeight: 600 }}>Kennesaw State University</span>.<br />
                NIH-funded deep learning researcher in medical AI.<br />
                Building models that outperform published benchmarks.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.5 }}
                style={{ display: "flex", gap: "10px", flexWrap: "wrap" as const }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#C8963E", color: "#FAF7F2" }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "#1B2A4A", background: "#FAF7F2", border: "2px solid transparent", padding: "12px 28px", borderRadius: "4px", cursor: "pointer", transition: "all 0.25s" }}
                >
                  View Work
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05, borderColor: "rgba(250,247,242,0.55)", color: "#FAF7F2" }}
                  whileTap={{ scale: 0.96 }}
                  href="https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf"
                  target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(250,247,242,0.62)", textDecoration: "none", border: "2px solid rgba(250,247,242,0.18)", padding: "12px 28px", borderRadius: "4px", display: "inline-block" }}
                >
                  Resume ↗
                </motion.a>
              </motion.div>
            </div>

            {/* Glassmorphism stat cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.45 }}
              style={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "200px" }}
            >
              {stats.map((s, i) => (
                <motion.div key={s.label}
                  initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.55 + i * 0.09 }}
                  whileHover={{ scale: 1.04, borderColor: "rgba(200,150,62,0.35)", backgroundColor: "rgba(200,150,62,0.1)" }}
                  style={{ padding: "11px 16px", background: "rgba(250,247,242,0.07)", backdropFilter: "blur(16px)", borderRadius: "8px", border: "1px solid rgba(250,247,242,0.09)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", transition: "all 0.22s" }}
                >
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "9px", color: "rgba(250,247,242,0.38)", letterSpacing: "0.16em", textTransform: "uppercase" as const, marginBottom: "2px" }}>{s.label}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "9px", color: "rgba(250,247,242,0.25)" }}>{s.note}</div>
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.55rem", color: "#FAF7F2", lineHeight: 1, flexShrink: 0 }}>
                    <LiveCounter to={s.n} decimals={s.dec} suffix={s.sfx} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        style={{ position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}
      >
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", color: "rgba(250,247,242,0.25)", letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
        <motion.div
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #C8963E, transparent)", borderRadius: "1px", transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
