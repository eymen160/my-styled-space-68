import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 18 });
  const sy = useSpring(my, { stiffness: 50, damping: 18 });

  useEffect(() => {
    const h = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 22);
      my.set((e.clientY / window.innerHeight - 0.5) * 16);
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, [mx, my]);

  const line = {
    hidden: { y: "100%", opacity: 0 },
    show: (i: number) => ({
      y: "0%", opacity: 1,
      transition: { duration: 1.1, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const fade = {
    hidden: { opacity: 0, y: 18 },
    show: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.8, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-32 pb-14"
      style={{ background: "#FAF9F6" }}
    >
      {/* Subtle parallax floating elements */}
      <motion.div className="pointer-events-none absolute inset-0" style={{ x: sx, y: sy }}>
        <div className="absolute top-[12%] right-[8%] w-72 h-72 rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, #E8E4DC 0%, transparent 70%)" }} />
        <div className="absolute bottom-[20%] left-[4%] w-52 h-52 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #D8D4CC 0%, transparent 70%)" }} />
      </motion.div>

      {/* Fine grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(#0D0D0D 1px, transparent 1px), linear-gradient(90deg, #0D0D0D 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

      <motion.div style={{ y: yText, opacity }} className="relative z-10 max-w-[1360px] mx-auto w-full px-6 md:px-14">

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 mb-16 px-4 py-2 rounded-full border"
          style={{ borderColor: "#E0DDD6", background: "#F5F3EE" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute h-full w-full rounded-full opacity-75" style={{ background: "#16A34A" }} />
            <span className="relative h-1.5 w-1.5 rounded-full" style={{ background: "#16A34A" }} />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "#6B6B6B" }}>
            Open for Summer 2026
          </span>
        </motion.div>

        {/* Giant serif headline */}
        <div className="mb-10">
          <div className="overflow-hidden pb-3">
            <motion.h1
              custom={0} variants={line} initial="hidden" animate="show"
              className="leading-[1.0] tracking-[-0.03em] select-none"
              style={{ fontSize: "clamp(3.8rem, 13vw, 11.5rem)", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#0D0D0D" }}
            >
              Eymen
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-5">
            <motion.h1
              custom={1} variants={line} initial="hidden" animate="show"
              className="leading-[1.0] tracking-[-0.03em] select-none italic"
              style={{ fontSize: "clamp(3.8rem, 13vw, 11.5rem)", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#A09484" }}
            >
              Keyvan.
            </motion.h1>
          </div>
        </div>

        {/* Bottom split */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.p
            custom={0} variants={fade} initial="hidden" animate="show"
            className="text-[1.05rem] md:text-[1.15rem] leading-[1.78] max-w-[460px] font-light"
            style={{ color: "#4A4A4A" }}
          >
            CS junior at{" "}
            <span className="font-semibold" style={{ color: "#0D0D0D" }}>Kennesaw State University</span>{" "}
            · NIH-funded AI/ML researcher. Building deep learning systems that{" "}
            <span className="font-semibold" style={{ color: "#0D0D0D" }}>outperform published SOTA</span>{" "}
            in medical image segmentation.
          </motion.p>

          <motion.div custom={1} variants={fade} initial="hidden" animate="show" className="flex gap-8 md:gap-12 shrink-0">
            {[
              { v: "99.69%", l: "Dice Score", s: "REFUGE2" },
              { v: "3.56", l: "GPA", s: "KSU" },
              { v: "+2.7%", l: "vs SOTA", s: "Benchmark" },
            ].map((s) => (
              <div key={s.l} className="text-right">
                <p className="font-bold leading-none tracking-tight" style={{ fontSize: "clamp(1.6rem,3vw,2.5rem)", fontFamily: "'Playfair Display', serif", color: "#0D0D0D" }}>{s.v}</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.13em] mt-1" style={{ color: "#9B9589" }}>{s.l}</p>
                <p className="text-[9px] mt-0.5" style={{ color: "#C0BAB0" }}>{s.s}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0 }}
        className="relative z-10 max-w-[1360px] mx-auto w-full px-6 md:px-14 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        style={{ borderTop: "1px solid #E5E2DC" }}
      >
        <div className="flex gap-3 flex-wrap">
          <motion.button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-[0.87rem] transition-all duration-200"
            style={{ background: "#0D0D0D", color: "#FAF9F6" }}
          >
            View Work
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M21 12H3" />
            </svg>
          </motion.button>
          <motion.a
            href="mailto:eymenfaruk479@gmail.com"
            whileHover={{ scale: 1.03, y: -2, borderColor: "#0D0D0D" }}
            className="inline-flex items-center px-7 py-3.5 rounded-full font-medium text-[0.87rem] border transition-all duration-200"
            style={{ borderColor: "#D0CCC4", color: "#4A4A4A" }}
          >
            Get in touch
          </motion.a>
        </div>

        <div className="flex items-center gap-7">
          {[
            { l: "GitHub", h: "https://github.com/eymen160" },
            { l: "LinkedIn", h: "https://linkedin.com/in/eymenkeyvan" },
            { l: "Resume", h: "/resume/EYMEN_KEYVAN_RESUME.pdf" },
          ].map((x) => (
            <motion.a key={x.l} href={x.h} target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-[0.82rem] font-medium transition-colors duration-200"
              style={{ color: "#9B9589" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0D0D0D")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9B9589")}
            >
              {x.l} ↗
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
