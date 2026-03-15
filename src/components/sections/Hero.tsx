import { motion, useScroll, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const c = animate(0, to, {
      duration: 2.4, delay: 1.1, ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(parseFloat(v.toFixed(decimals))),
    });
    return c.stop;
  }, [to, decimals]);
  return <>{val.toFixed(decimals)}{suffix}</>;
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const line = {
    hidden: { y: "106%", opacity: 0 },
    show: { y: "0%", opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
  };
  const fade = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  };
  const stag = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } };
  const stag2 = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.65 } } };

  return (
    <section ref={ref} style={{
      background: "linear-gradient(160deg, #1B2A4A 0%, #243558 60%, #1B2A4A 100%)",
      minHeight: "100vh", position: "relative", display: "flex", flexDirection: "column",
      justifyContent: "flex-end", overflow: "hidden", paddingTop: "120px"
    }}>
      {/* Subtle texture */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "180px", pointerEvents: "none" }} />

      {/* Warm amber glow top-right */}
      <div style={{ position: "absolute", top: "-15%", right: "-5%", width: "55vw", height: "65vh", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(200,150,62,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
      {/* Soft bottom fade to cream */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "200px", background: "linear-gradient(to bottom, transparent, rgba(250,247,242,0.06))", pointerEvents: "none" }} />

      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "absolute", top: "88px", left: 0, right: 0, height: "1px", background: "rgba(250,247,242,0.1)", transformOrigin: "left" }} />

      <motion.div style={{ y: yText, opacity }} className="relative z-10">
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "clamp(40px, 7vw, 72px)" }}>
            <div style={{ width: "28px", height: "1px", background: "rgba(250,247,242,0.35)" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(250,247,242,0.5)", letterSpacing: "0.22em", textTransform: "uppercase" }}>Portfolio · 2025</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "#C8963E", letterSpacing: "0.15em", textTransform: "uppercase", background: "rgba(200,150,62,0.15)", padding: "3px 10px", borderRadius: "2px", border: "1px solid rgba(200,150,62,0.3)" }}>Available Summer 2026</span>
          </motion.div>

          <motion.div variants={stag} initial="hidden" animate="show" style={{ marginBottom: "clamp(48px, 8vw, 96px)" }}>
            <div style={{ overflow: "hidden", lineHeight: 1, paddingBottom: "0.08em" }}>
              <motion.h1 variants={line} style={{
                fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
                fontSize: "clamp(5rem, 15.5vw, 14.5rem)", lineHeight: 0.88,
                letterSpacing: "-0.025em", color: "#FAF7F2", display: "block",
              }}>Eymen</motion.h1>
            </div>
            <div style={{ overflow: "hidden", lineHeight: 1, paddingBottom: "0.08em" }}>
              <motion.h1 variants={line} style={{
                fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontStyle: "italic",
                fontSize: "clamp(5rem, 15.5vw, 14.5rem)", lineHeight: 0.88,
                letterSpacing: "-0.025em", color: "rgba(250,247,242,0.22)", display: "block",
              }}>Keyvan</motion.h1>
            </div>
          </motion.div>

          <motion.div variants={stag2} initial="hidden" animate="show"
            style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: "40px", paddingTop: "clamp(24px, 4vw, 40px)", paddingBottom: "clamp(40px, 7vw, 72px)", borderTop: "1px solid rgba(250,247,242,0.1)" }}>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <motion.p variants={fade} style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)", lineHeight: 1.75, color: "rgba(250,247,242,0.75)", maxWidth: "480px" }}>
                CS junior at <span style={{ color: "#FAF7F2", fontWeight: 600 }}>Kennesaw State University</span>.<br />
                NIH-funded deep learning researcher in medical AI.<br />
                Building models that outperform published benchmarks.
              </motion.p>

              <motion.div variants={fade} style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
                <button
                  onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#1B2A4A", background: "#FAF7F2", border: "none", padding: "13px 32px", borderRadius: "3px", cursor: "pointer", transition: "all 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#C8963E")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#FAF7F2")}>
                  View Work
                </button>
                <a href="https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(250,247,242,0.7)", textDecoration: "none", border: "1px solid rgba(250,247,242,0.25)", padding: "13px 32px", borderRadius: "3px", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#FAF7F2"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(250,247,242,0.55)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,247,242,0.7)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(250,247,242,0.25)"; }}>
                  Resume ↗
                </a>
              </motion.div>
            </div>

            <motion.div variants={fade} style={{ display: "flex", flexDirection: "column", gap: "28px", textAlign: "right" as const, minWidth: "180px" }}>
              {[
                { n: 3.56, dec: 2, sfx: "", l: "GPA / KSU" },
                { n: 2.7, dec: 1, sfx: "%", l: "Above SOTA" },
                { n: 6, dec: 0, sfx: "K+", l: "Images Processed" },
              ].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1, color: "#FAF7F2", letterSpacing: "-0.02em" }}>
                    <Counter to={s.n} decimals={s.dec} suffix={s.sfx} />
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(250,247,242,0.45)", letterSpacing: "0.14em", textTransform: "uppercase" as const, marginTop: "3px" }}>{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
