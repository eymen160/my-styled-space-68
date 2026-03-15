import { motion, useScroll, useTransform, animate, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const c = animate(0, to, { duration: 2.4, delay: 1.2, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setVal(parseFloat(v.toFixed(decimals))) });
    return c.stop;
  }, [to, decimals]);
  return <>{val.toFixed(decimals)}{suffix}</>;
}

const words = ["AI Researcher", "ML Engineer", "Deep Learning", "CS Junior"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);

  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setWordIndex(i => (i + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  const line = { hidden: { y: "106%", opacity: 0 }, show: { y: "0%", opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } } };
  const fade = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } };
  const stag = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } };
  const stag2 = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } } };

  return (
    <section ref={ref} style={{
      background: "linear-gradient(145deg, #0F1D35 0%, #1B2A4A 45%, #162240 100%)",
      minHeight: "100vh", position: "relative", display: "flex", flexDirection: "column",
      justifyContent: "flex-end", overflow: "hidden", paddingTop: "120px"
    }}>
      {/* Animated mesh gradient blobs */}
      <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "-20%", right: "-5%", width: "60vw", height: "70vh", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(200,150,62,0.25) 0%, transparent 65%)", pointerEvents: "none", filter: "blur(40px)" }} />
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.14, 0.08] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ position: "absolute", bottom: "10%", left: "-10%", width: "50vw", height: "60vh", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(100,140,220,0.2) 0%, transparent 65%)", pointerEvents: "none", filter: "blur(50px)" }} />

      {/* Noise texture */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.035, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "180px", pointerEvents: "none" }} />

      {/* Grid overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(250,247,242,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(250,247,242,0.03) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />

      {/* Top rule */}
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "absolute", top: "88px", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(250,247,242,0.12), transparent)", transformOrigin: "left" }} />

      <motion.div style={{ y: yText, opacity, scale }} className="relative z-10">
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

          {/* Label row */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "clamp(36px, 6vw, 64px)", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "32px", height: "1px", background: "rgba(250,247,242,0.3)" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(250,247,242,0.45)", letterSpacing: "0.22em", textTransform: "uppercase" }}>Portfolio · 2025</span>
            </div>
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "#C8963E", letterSpacing: "0.15em", textTransform: "uppercase", background: "rgba(200,150,62,0.12)", padding: "4px 12px", borderRadius: "3px", border: "1px solid rgba(200,150,62,0.3)" }}>
              {words[wordIndex]}
            </motion.span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4ade80", background: "rgba(74,222,128,0.1)", padding: "4px 12px", borderRadius: "3px", border: "1px solid rgba(74,222,128,0.25)", display: "flex", alignItems: "center", gap: "6px" }}>
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
              Available Summer 2026
            </span>
          </motion.div>

          {/* Giant name */}
          <motion.div variants={stag} initial="hidden" animate="show" style={{ marginBottom: "clamp(40px, 7vw, 80px)" }}>
            <div style={{ overflow: "hidden", lineHeight: 1, paddingBottom: "0.06em" }}>
              <motion.h1 variants={line} style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(5rem, 15.5vw, 14.5rem)", lineHeight: 0.88, letterSpacing: "-0.025em", color: "#FAF7F2", display: "block" }}>Eymen</motion.h1>
            </div>
            <div style={{ overflow: "hidden", lineHeight: 1, paddingBottom: "0.06em" }}>
              <motion.h1 variants={line} style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(5rem, 15.5vw, 14.5rem)", lineHeight: 0.88, letterSpacing: "-0.025em", color: "transparent", WebkitTextStroke: "1px rgba(250,247,242,0.18)", display: "block" }}>Keyvan</motion.h1>
            </div>
          </motion.div>

          {/* Bottom bar */}
          <motion.div variants={stag2} initial="hidden" animate="show"
            style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: "40px", paddingTop: "clamp(20px, 3.5vw, 36px)", paddingBottom: "clamp(40px, 7vw, 72px)", borderTop: "1px solid rgba(250,247,242,0.08)" }}>

            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <motion.p variants={fade} style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "clamp(0.95rem, 1.8vw, 1.12rem)", lineHeight: 1.78, color: "rgba(250,247,242,0.7)", maxWidth: "500px" }}>
                CS junior at <span style={{ color: "#FAF7F2", fontWeight: 600 }}>Kennesaw State University</span>.<br />
                NIH-funded deep learning researcher in medical AI.<br />
                Building models that outperform published benchmarks.
              </motion.p>

              <motion.div variants={fade} style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
                <motion.button
                  whileHover={{ scale: 1.03, backgroundColor: "#C8963E" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#1B2A4A", background: "#FAF7F2", border: "none", padding: "14px 32px", borderRadius: "3px", cursor: "pointer", transition: "background 0.25s" }}>
                  View Work
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.03, borderColor: "rgba(250,247,242,0.6)", color: "#FAF7F2" }}
                  whileTap={{ scale: 0.97 }}
                  href="https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(250,247,242,0.65)", textDecoration: "none", border: "1px solid rgba(250,247,242,0.22)", padding: "14px 32px", borderRadius: "3px", transition: "all 0.25s", display: "inline-block" }}>
                  Resume ↗
                </motion.a>
              </motion.div>
            </div>

            {/* Stats — glassmorphism cards */}
            <motion.div variants={fade} style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "200px" }}>
              {[
                { n: 3.56, dec: 2, sfx: "", l: "GPA / KSU" },
                { n: 2.7, dec: 1, sfx: "%", l: "Above SOTA" },
                { n: 6, dec: 0, sfx: "K+", l: "Images Processed" },
              ].map((s, i) => (
                <motion.div key={s.l}
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + i * 0.1 }}
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(250,247,242,0.1)" }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "12px 18px", background: "rgba(250,247,242,0.06)", backdropFilter: "blur(12px)", borderRadius: "8px", border: "1px solid rgba(250,247,242,0.1)", transition: "all 0.25s" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(250,247,242,0.45)", letterSpacing: "0.12em", textTransform: "uppercase" as const }}>{s.l}</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.6rem", lineHeight: 1, color: "#FAF7F2" }}>
                    <Counter to={s.n} decimals={s.dec} suffix={s.sfx} />
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
        style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", color: "rgba(250,247,242,0.3)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(250,247,242,0.4), transparent)" }} />
      </motion.div>
    </section>
  );
}
