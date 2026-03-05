import { motion, useScroll, useTransform, useMotionValue, useSpring, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const controls = animate(0, to, {
      duration: 2.2, delay: 0.8, ease: "easeOut",
      onUpdate: (v) => setVal(parseFloat(v.toFixed(2))),
    });
    return controls.stop;
  }, [to]);
  return <span>{val}{suffix}</span>;
}

const words = ["AI/ML Researcher", "Deep Learning Engineer", "NIH Research Assistant", "Computer Scientist"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 45, damping: 16 });
  const sy = useSpring(my, { stiffness: 45, damping: 16 });

  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setWordIdx(i => (i + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 28);
      my.set((e.clientY / window.innerHeight - 0.5) * 18);
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, [mx, my]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const lineReveal = {
    hidden: { y: "105%", opacity: 0 },
    show: { y: "0%", opacity: 1, transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section ref={ref} style={{ background: "#FAF9F6", minHeight: "100vh" }}
      className="relative flex flex-col justify-between overflow-hidden pt-28 pb-12">

      {/* Parallax warm orbs */}
      <motion.div className="pointer-events-none absolute inset-0" style={{ x: sx, y: sy }}>
        <div className="absolute top-[-8%] right-[2%] w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(210,200,188,0.45) 0%, transparent 68%)" }} />
        <div className="absolute bottom-[-15%] left-[-3%] w-[480px] h-[480px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(195,188,178,0.35) 0%, transparent 68%)" }} />
      </motion.div>

      {/* Fine grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: "linear-gradient(#0D0D0D 1px, transparent 1px), linear-gradient(90deg, #0D0D0D 1px, transparent 1px)", backgroundSize: "72px 72px" }} />

      <motion.div style={{ y: yParallax, opacity: fade }} className="relative z-10 max-w-[1320px] mx-auto w-full px-6 md:px-14">

        {/* Status badge */}
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 mb-14 px-4 py-2 rounded-full border"
          style={{ borderColor: "#DEDAD4", background: "#F2EFE9" }}>
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute h-full w-full rounded-full opacity-75" style={{ background: "#16A34A" }} />
            <span className="relative h-1.5 w-1.5 rounded-full" style={{ background: "#16A34A" }} />
          </span>
          <span style={{ color: "#7A7570", fontSize: "11px", fontFamily: "'Geist', sans-serif", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Open for Summer 2026
          </span>
        </motion.div>

        {/* Name — giant Fraunces */}
        <motion.div variants={container} initial="hidden" animate="show" className="mb-10">
          <div className="overflow-hidden pb-2">
            <motion.h1 variants={lineReveal}
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(4.5rem, 14vw, 13rem)", lineHeight: 0.9, letterSpacing: "-0.025em", color: "#0D0D0D" }}>
              Eymen
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-4">
            <motion.h1 variants={lineReveal}
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontStyle: "italic", fontSize: "clamp(4.5rem, 14vw, 13rem)", lineHeight: 0.92, letterSpacing: "-0.025em", color: "#A09484" }}>
              Keyvan.
            </motion.h1>
          </div>
        </motion.div>

        {/* Rotating role + description */}
        <motion.div variants={container} initial="hidden" animate="show"
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-lg space-y-4">
            <div className="overflow-hidden h-8">
              <motion.p
                key={wordIdx}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "'Geist', sans-serif", fontWeight: 500, fontSize: "1rem", color: "#7A7570", letterSpacing: "0.01em" }}>
                {words[wordIdx]}
              </motion.p>
            </div>
            <motion.p variants={fadeUp}
              style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: "1.1rem", lineHeight: 1.78, color: "#3A3A3A" }}>
              CS junior at{" "}
              <strong style={{ fontWeight: 700, color: "#0D0D0D" }}>Kennesaw State University</strong>{" "}
              conducting NIH-funded deep learning research in medical imaging. My models beat every comparable published benchmark.
            </motion.p>
          </div>

          {/* Animated stats */}
          <motion.div variants={fadeUp} className="flex gap-10 shrink-0">
            {[
              { to: 99.69, suffix: "%", label: "Dice Score", sub: "REFUGE2" },
              { to: 3.56, suffix: "", label: "GPA", sub: "KSU" },
              { to: 2.7, suffix: "%", label: "vs SOTA", sub: "Outperformance" },
            ].map((s) => (
              <div key={s.label} className="text-right">
                <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1, color: "#0D0D0D", letterSpacing: "-0.02em" }}>
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 600, fontSize: "10px", color: "#9B9589", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: "6px" }}>{s.label}</p>
                <p style={{ fontFamily: "'Geist', sans-serif", fontSize: "9px", color: "#C0BAB0", marginTop: "2px" }}>{s.sub}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom action bar */}
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.1 }}
        className="relative z-10 max-w-[1320px] mx-auto w-full px-6 md:px-14 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        style={{ borderTop: "1px solid #E0DDD7" }}>
        <div className="flex gap-3 flex-wrap">
          <motion.button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
            style={{ background: "#0D0D0D", color: "#FAF9F6", borderRadius: "100px", padding: "14px 28px", fontFamily: "'Geist', sans-serif", fontWeight: 600, fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "8px", border: "none" }}>
            See My Work
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M21 12H3" />
            </svg>
          </motion.button>
          <motion.a href="mailto:eymenfaruk479@gmail.com"
            whileHover={{ scale: 1.04, y: -2, borderColor: "#0D0D0D" }} whileTap={{ scale: 0.97 }}
            style={{ borderRadius: "100px", padding: "14px 28px", fontFamily: "'Geist', sans-serif", fontWeight: 500, fontSize: "14px", border: "1.5px solid #D0CCC4", color: "#4A4A4A", textDecoration: "none", display: "inline-flex", alignItems: "center", transition: "all 0.2s" }}>
            Get in Touch
          </motion.a>
        </div>
        <div className="flex items-center gap-8">
          {[
            { l: "GitHub", h: "https://github.com/eymen160" },
            { l: "LinkedIn", h: "https://linkedin.com/in/eymenkeyvan" },
            { l: "Resume", h: "https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf" },
          ].map((x) => (
            <motion.a key={x.l} href={x.h} target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              style={{ fontFamily: "'Geist', sans-serif", fontWeight: 500, fontSize: "13px", color: "#A09484", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#0D0D0D")}
              onMouseLeave={e => (e.currentTarget.style.color = "#A09484")}>
              {x.l} ↗
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
