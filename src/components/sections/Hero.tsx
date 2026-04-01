import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ to, decimals = 2 }: { to: number; decimals?: number }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const ctrl = animate(0, to, {
      duration: 2.0, delay: 0.6, ease: "easeOut",
      onUpdate: v => setVal(parseFloat(v.toFixed(decimals))),
    });
    return ctrl.stop;
  }, [to, decimals]);
  return <>{val.toFixed(decimals)}</>;
}

const roles = ["AI / ML Researcher", "Deep Learning Engineer", "NIH Research Assistant", "Software Engineer"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{ background: "#FFFFFF", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "80px", paddingBottom: "60px", position: "relative", overflow: "hidden" }}>

      {/* Subtle background gradient */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 70% 40%, #EFF6FF 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="max-w-[1160px] mx-auto px-6 md:px-10 relative z-10 w-full">

        {/* Availability badge */}
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "32px", padding: "6px 14px", background: "#DCFCE7", border: "1px solid #BBF7D0", borderRadius: "100px" }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#16A34A", flexShrink: 0 }} className="animate-pulse" />
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "13px", color: "#15803D" }}>Open to Summer 2026 Internships</span>
        </motion.div>

        {/* Name */}
        <div style={{ marginBottom: "16px", overflow: "hidden" }}>
          <motion.h1 initial={{ y: "100%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(3.2rem, 8vw, 6.5rem)", lineHeight: 0.95, letterSpacing: "-0.03em", color: "#0F172A", paddingBottom: "0.08em" }}>
            Eymen Keyvan
          </motion.h1>
        </div>

        {/* Role */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
          <div style={{ width: "3px", height: "22px", background: "#2563EB", borderRadius: "2px", flexShrink: 0 }} />
          <div style={{ overflow: "hidden", height: "28px" }}>
            <motion.p key={roleIdx} initial={{ y: "100%" }} animate={{ y: "0%" }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "clamp(1rem, 2.2vw, 1.25rem)", color: "#2563EB", letterSpacing: "-0.01em" }}>
              {roles[roleIdx]}
            </motion.p>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "clamp(1rem, 1.8vw, 1.15rem)", lineHeight: 1.75, color: "#475569", maxWidth: "580px", marginBottom: "40px" }}>
          CS junior at <strong style={{ fontWeight: 600, color: "#0F172A" }}>Kennesaw State University</strong> with a 3.56 GPA. I conduct NIH-funded deep learning research in medical imaging — building models that outperform every comparable published benchmark by 2.7 percentage points.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
          style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "60px" }}>
          <motion.button onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}
            style={{ background: "#2563EB", color: "#FFFFFF", padding: "13px 28px", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "15px", border: "none", borderRadius: "10px", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 4px 12px rgba(37,99,235,0.3)" }}>
            View My Work
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M21 12H3" />
            </svg>
          </motion.button>
          <motion.a href="mailto:eymenfaruk479@gmail.com"
            whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}
            style={{ padding: "13px 28px", border: "1.5px solid #E2E8F0", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "15px", color: "#0F172A", textDecoration: "none", borderRadius: "10px", background: "#FFFFFF", transition: "border-color 0.15s" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#94A3B8"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"}>
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "0", borderTop: "1px solid #E2E8F0", paddingTop: "36px" }}>
          {[
            { val: 99.69, dec: 2, suffix: "%", label: "Dice Score", sub: "REFUGE2 — SOTA benchmark" },
            { val: 2.7, dec: 1, suffix: "pp", label: "Above Published Baseline", sub: "NIH retinal research" },
            { val: 3.56, dec: 2, suffix: "", label: "GPA", sub: "Presidential Scholar · KSU" },
          ].map((s, i) => (
            <div key={s.label} style={{ flex: "1 1 180px", paddingRight: "40px", paddingBottom: "8px", borderRight: i < 2 ? "1px solid #E2E8F0" : "none", marginRight: i < 2 ? "40px" : 0 }}>
              <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: "6px" }}>
                <Counter to={s.val} decimals={s.dec} />{s.suffix}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "14px", color: "#0F172A", marginBottom: "2px" }}>{s.label}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", color: "#94A3B8" }}>{s.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}
          style={{ display: "flex", gap: "20px", marginTop: "32px" }}>
          {[
            { l: "GitHub", h: "https://github.com/eymen160" },
            { l: "LinkedIn", h: "https://linkedin.com/in/eymenkeyvan" },
            { l: "Resume PDF", h: "https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf" },
          ].map(x => (
            <a key={x.l} href={x.h} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px", color: "#64748B", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#2563EB"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#64748B"}>
              {x.l}
              <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
