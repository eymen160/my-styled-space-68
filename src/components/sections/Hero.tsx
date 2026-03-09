import { motion, useScroll, useTransform, useMotionValue, useSpring, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const controls = animate(0, to, {
      duration: 2.2, delay: 0.8, ease: "easeOut",
      onUpdate: (v) => setVal(parseFloat(v.toFixed(2))),
    });
    return controls.stop;
  }, [to]);
  return <span>{val}{suffix}</span>;
}

const roles = ["AI/ML Researcher", "Deep Learning Engineer", "NIH Research Assistant", "Computer Scientist"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 18 });
  const sy = useSpring(my, { stiffness: 40, damping: 18 });

  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 24);
      my.set((e.clientY / window.innerHeight - 0.5) * 14);
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, [mx, my]);

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
  const lineUp = {
    hidden: { y: "110%", opacity: 0 },
    show: { y: "0%", opacity: 1, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section ref={ref}
      style={{ background: "#FAF9F6", minHeight: "100vh", position: "relative" }}
      className="flex flex-col justify-between overflow-hidden pt-28 pb-12">

      {/* Parallax orbs */}
      <motion.div className="pointer-events-none absolute inset-0" style={{ x: sx, y: sy }}>
        <div className="absolute top-[-6%] right-[0%] w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(215,205,192,0.4) 0%, transparent 65%)" }} />
        <div className="absolute bottom-[-12%] left-[-4%] w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(195,185,172,0.3) 0%, transparent 65%)" }} />
        <div className="absolute top-[40%] left-[45%] w-[300px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(160,148,132,0.15) 0%, transparent 65%)" }} />
      </motion.div>

      {/* Fine grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#0D0D0D 1px, transparent 1px), linear-gradient(90deg, #0D0D0D 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <motion.div style={{ y: yParallax, opacity: fade }}
        className="relative z-10 max-w-[1320px] mx-auto w-full px-6 md:px-14">

        {/* Status pill */}
        <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
          className="inline-flex items-center gap-2.5 mb-12 px-4 py-2 rounded-full"
          style={{ border: "1px solid #DEDAD4", background: "#F2EFE9" }}>
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute h-full w-full rounded-full opacity-75" style={{ background: "#16A34A" }} />
            <span className="relative h-1.5 w-1.5 rounded-full" style={{ background: "#16A34A" }} />
          </span>
          <span style={{ color: "#7A7570", fontSize: "11px", fontFamily: "'Geist', sans-serif", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Available · Summer 2026
          </span>
        </motion.div>

        {/* Giant name */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="mb-10">
          <div className="overflow-hidden pb-1">
            <motion.h1 variants={lineUp}
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(4.2rem, 13.5vw, 12.5rem)", lineHeight: 0.88, letterSpacing: "-0.03em", color: "#0D0D0D" }}>
              Eymen
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-2">
            <motion.h1 variants={lineUp}
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontStyle: "italic", fontSize: "clamp(4.2rem, 13.5vw, 12.5rem)", lineHeight: 0.9, letterSpacing: "-0.03em", color: "#A09484" }}>
              Keyvan.
            </motion.h1>
          </div>
        </motion.div>

        {/* Role + description row */}
        <motion.div variants={stagger} initial="hidden" animate="show"
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">

          <div className="max-w-xl space-y-5">
            {/* Animated role badge */}
            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg"
              style={{ background: "#EEEAE3", border: "1px solid #DDD9D0" }}>
              <span style={{ fontFamily: "'Geist Mono', 'Geist', monospace", fontSize: "11px", color: "#9B9589", fontWeight: 500 }}>~/</span>
              <div className="overflow-hidden h-4">
                <motion.span
                  key={roleIdx}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-110%" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: "block", fontFamily: "'Geist', sans-serif", fontWeight: 600, fontSize: "11px", color: "#4A4A4A", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                  {roles[roleIdx]}
                </motion.span>
              </div>
            </motion.div>

            <motion.p variants={fadeUp}
              style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: "1.1rem", lineHeight: 1.82, color: "#3A3A3A" }}>
              CS junior at{" "}
              <strong style={{ fontWeight: 700, color: "#0D0D0D" }}>Kennesaw State University</strong>{" "}
              conducting NIH-funded deep learning research in medical imaging. Building AI systems that outperform published benchmarks — and exploring what's next in the field.
            </motion.p>
          </div>

          {/* Stats — bento style */}
          <motion.div variants={fadeUp}
            className="grid grid-cols-3 gap-3 shrink-0 w-full lg:w-auto lg:max-w-xs">
            {[
              { to: 2, suffix: "", label: "NIH Projects", sub: "Medical AI", accent: "#2563EB" },
              { to: 3.56, suffix: "", label: "GPA", sub: "KSU", accent: "#16A34A" },
              { to: 2.7, suffix: "%", label: "vs Benchmark", sub: "Above SOTA", accent: "#9333EA" },
            ].map((s) => (
              <div key={s.label}
                className="flex flex-col justify-between"
                style={{ padding: "16px 14px", borderRadius: "16px", background: "#FFFFFF", border: "1.5px solid #E8E4DE", minWidth: "88px" }}>
                <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", lineHeight: 1, color: s.accent, letterSpacing: "-0.02em" }}>
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <div style={{ marginTop: "10px" }}>
                  <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "9px", color: "#4A4A4A", letterSpacing: "0.12em", textTransform: "uppercase" }}>{s.label}</p>
                  <p style={{ fontFamily: "'Geist', sans-serif", fontSize: "9px", color: "#C0BAB0", marginTop: "2px" }}>{s.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom CTA bar */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.0 }}
        className="relative z-10 max-w-[1320px] mx-auto w-full px-6 md:px-14 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        style={{ borderTop: "1px solid #E0DDD7" }}>
        <div className="flex gap-3 flex-wrap">
          <motion.button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
            style={{ background: "#0D0D0D", color: "#FAF9F6", borderRadius: "100px", padding: "14px 28px", fontFamily: "'Geist', sans-serif", fontWeight: 600, fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "8px", border: "none", cursor: "none" }}>
            See My Work
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M21 12H3" />
            </svg>
          </motion.button>
          <motion.a href="mailto:eymenfaruk479@gmail.com"
            whileHover={{ scale: 1.04, y: -2, borderColor: "#0D0D0D" }} whileTap={{ scale: 0.97 }}
            style={{ borderRadius: "100px", padding: "14px 28px", fontFamily: "'Geist', sans-serif", fontWeight: 500, fontSize: "14px", border: "1.5px solid #D0CCC4", color: "#4A4A4A", textDecoration: "none", display: "inline-flex", alignItems: "center", transition: "all 0.2s", cursor: "none" }}>
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
              style={{ fontFamily: "'Geist', sans-serif", fontWeight: 500, fontSize: "13px", color: "#A09484", textDecoration: "none", transition: "color 0.2s", cursor: "none" }}
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
