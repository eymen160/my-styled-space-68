import { motion, useScroll, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true;
        const c = animate(0, to, {
          duration: 2.2, ease: [0.16, 1, 0.3, 1],
          onUpdate: (v) => setVal(parseFloat(v.toFixed(decimals))),
        });
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, decimals]);

  return <span ref={ref}>{val.toFixed(decimals)}{suffix}</span>;
}

const roles = ["AI Researcher", "ML Engineer", "Deep Learning", "CS Junior @ KSU"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacitySection = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  const line = { hidden: { y: "110%", opacity: 0 }, show: { y: "0%", opacity: 1, transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] } } };
  const stag = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
  const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } } };
  const stag2 = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.7 } } };

  return (
    <section ref={ref} style={{
      background: "linear-gradient(145deg, #0F1D35 0%, #1B2A4A 50%, #162240 100%)",
      minHeight: "100vh", position: "relative", display: "flex", flexDirection: "column",
      justifyContent: "flex-end", overflow: "hidden", paddingTop: "120px"
    }}>
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.15, 0.25, 0.15], x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "-25%", right: "-8%", width: "65vw", height: "75vh", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(200,150,62,0.28) 0%, transparent 60%)", pointerEvents: "none", filter: "blur(45px)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{ position: "absolute", bottom: "5%", left: "-12%", width: "55vw", height: "65vh", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(80,120,220,0.22) 0%, transparent 65%)", pointerEvents: "none", filter: "blur(55px)" }}
      />

      {/* Subtle grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(250,247,242,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(250,247,242,0.025) 1px, transparent 1px)", backgroundSize: "72px 72px", pointerEvents: "none" }} />

      {/* Noise */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.035, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "160px", pointerEvents: "none" }} />

      {/* Top rule */}
      <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "absolute", top: "88px", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(250,247,242,0.1) 30%, rgba(200,150,62,0.2) 50%, rgba(250,247,242,0.1) 70%, transparent 100%)", transformOrigin: "left" }} />

      <motion.div style={{ y: yText, opacity: opacitySection }} className="relative z-10">
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

          {/* Tag row */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
            style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "clamp(36px, 6vw, 60px)", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", opacity: 0.5 }}>
              <div style={{ width: "28px", height: "1px", background: "#FAF7F2" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "#FAF7F2", letterSpacing: "0.22em", textTransform: "uppercase" }}>Portfolio · 2025</span>
            </div>

            {/* Animated role tag */}
            <div style={{ height: "26px", overflow: "hidden", position: "relative" }}>
              <motion.span
                key={roleIdx}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "#C8963E", letterSpacing: "0.15em", textTransform: "uppercase", background: "rgba(200,150,62,0.12)", padding: "4px 12px", borderRadius: "3px", border: "1px solid rgba(200,150,62,0.28)", display: "inline-block", lineHeight: "18px" }}>
                {roles[roleIdx]}
              </motion.span>
            </div>

            {/* Open to work badge */}
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "#4ade80", background: "rgba(74,222,128,0.08)", padding: "4px 12px", borderRadius: "3px", border: "1px solid rgba(74,222,128,0.22)", display: "inline-flex", alignItems: "center", gap: "7px", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              <motion.span animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }} transition={{ duration: 1.6, repeat: Infinity }}
                style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4ade80", display: "inline-block", flexShrink: 0 }} />
              Available S'26
            </span>
          </motion.div>

          {/* Giant name */}
          <motion.div variants={stag} initial="hidden" animate="show" style={{ marginBottom: "clamp(36px, 6vw, 72px)" }}>
            <div style={{ overflow: "hidden", lineHeight: 1, paddingBottom: "0.06em" }}>
              <motion.h1 variants={line} style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(4.8rem, 15vw, 14rem)", lineHeight: 0.87, letterSpacing: "-0.03em", color: "#FAF7F2", display: "block" }}>
                Eymen
              </motion.h1>
            </div>
            <div style={{ overflow: "hidden", lineHeight: 1, paddingBottom: "0.06em" }}>
              <motion.h1 variants={line} style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(4.8rem, 15vw, 14rem)", lineHeight: 0.87, letterSpacing: "-0.03em", WebkitTextStroke: "1.5px rgba(250,247,242,0.2)", color: "transparent", display: "block" }}>
                Keyvan
              </motion.h1>
            </div>
          </motion.div>

          {/* Bottom bar */}
          <motion.div variants={stag2} initial="hidden" animate="show"
            style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: "32px", paddingTop: "clamp(20px, 3vw, 32px)", paddingBottom: "clamp(40px, 6vw, 68px)", borderTop: "1px solid rgba(250,247,242,0.09)" }}>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <motion.p variants={fade} style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "clamp(0.93rem, 1.7vw, 1.1rem)", lineHeight: 1.8, color: "rgba(250,247,242,0.68)", maxWidth: "480px" }}>
                CS junior at <span style={{ color: "#FAF7F2", fontWeight: 600 }}>Kennesaw State University</span>.<br />
                NIH-funded deep learning researcher in medical AI.<br />
                Building models that outperform published benchmarks.
              </motion.p>

              <motion.div variants={fade} style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
                <motion.button
                  whileHover={{ scale: 1.04, backgroundColor: "#C8963E" }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#1B2A4A", background: "#FAF7F2", border: "none", padding: "13px 30px", borderRadius: "4px", cursor: "pointer", transition: "all 0.25s" }}>
                  View Work
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(250,247,242,0.65)", textDecoration: "none", border: "1px solid rgba(250,247,242,0.2)", padding: "13px 30px", borderRadius: "4px", transition: "all 0.25s", display: "inline-block" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#FAF7F2"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(250,247,242,0.5)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,247,242,0.65)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(250,247,242,0.2)"; }}>
                  Resume ↗
                </motion.a>
              </motion.div>
            </div>

            {/* Glassmorphism stat pills */}
            <motion.div variants={fade} style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: "210px" }}>
              {[
                { n: 3.56, dec: 2, sfx: "", l: "GPA / KSU" },
                { n: 2.7, dec: 1, sfx: "%", l: "Above SOTA" },
                { n: 6, dec: 0, sfx: "K+", l: "Images Processed" },
              ].map((s, i) => (
                <motion.div key={s.l}
                  initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: 1.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(250,247,242,0.11)" }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "18px", padding: "11px 18px", background: "rgba(250,247,242,0.07)", backdropFilter: "blur(16px)", borderRadius: "8px", border: "1px solid rgba(250,247,242,0.09)", transition: "all 0.22s" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "10px", color: "rgba(250,247,242,0.4)", letterSpacing: "0.14em", textTransform: "uppercase" as const }}>{s.l}</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.55rem", lineHeight: 1, color: "#FAF7F2" }}>
                    <Counter to={s.n} decimals={s.dec} suffix={s.sfx} />
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }}
        style={{ position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", color: "rgba(250,247,242,0.28)", letterSpacing: "0.25em", textTransform: "uppercase" }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: "1px", height: "36px", background: "linear-gradient(to bottom, rgba(200,150,62,0.6), transparent)", borderRadius: "1px" }} />
      </motion.div>
    </section>
  );
}
