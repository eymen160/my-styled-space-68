import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      mouseX.set((e.clientX / w - 0.5) * 40);
      mouseY.set((e.clientY / h - 0.5) * 30);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };
  const revealLine = {
    hidden: { y: "110%" },
    show: { y: "0%", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#080808] pt-28 pb-14">
      {/* Animated gradient orbs responding to mouse */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ x: springX, y: springY }}
      >
        <div className="absolute top-[-15%] right-[5%] w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-20%] left-[-5%] w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)" }} />
      </motion.div>

      {/* Subtle dot grid */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* Grain overlay */}
      <div className="pointer-events-none absolute inset-0 z-1 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px",
        }} />

      <motion.div style={{ y: yParallax, opacity: fadeOut }} className="relative z-10 max-w-[1360px] mx-auto w-full px-6 md:px-12">
        
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-16 border border-white/12 bg-white/[0.05]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-white/70">
            Available · Summer 2026 Internships
          </span>
        </motion.div>

        {/* Name — massive editorial */}
        <motion.div variants={stagger} initial="hidden" animate="show">
          <div className="overflow-hidden mb-1">
            <motion.div variants={revealLine}>
              <h1 className="text-[clamp(4rem,14vw,12rem)] font-black leading-[0.85] tracking-[-0.04em] text-white">
                EYMEN
              </h1>
            </motion.div>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.div variants={revealLine}>
              <h1
                className="text-[clamp(4rem,14vw,12rem)] font-black leading-[0.85] tracking-[-0.04em]"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.22)", color: "transparent" }}
              >
                KEYVAN
              </h1>
            </motion.div>
          </div>

          {/* Role strip */}
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-xl">
              <p className="text-[1.15rem] md:text-[1.3rem] text-white/80 leading-[1.7] font-light">
                Computer Science junior at{" "}
                <span className="font-semibold text-white">Kennesaw State University</span>{" "}
                · NIH-funded AI/ML researcher pushing the boundaries of{" "}
                <span className="font-semibold text-white">medical image segmentation</span>.
              </p>
              <p className="text-[1rem] text-white/50 mt-3 font-light">
                99.69% Dice on REFUGE2 · +2.7% over published SOTA
              </p>
            </div>

            {/* Stat row */}
            <motion.div
              variants={fadeUp}
              className="flex gap-8 md:gap-12 shrink-0"
            >
              {[
                { val: "99.69%", lbl: "Dice Score", sub: "REFUGE2" },
                { val: "3.56", lbl: "GPA", sub: "KSU" },
                { val: "+2.7%", lbl: "vs SOTA", sub: "Benchmark" },
              ].map((s) => (
                <div key={s.lbl} className="text-right">
                  <p className="text-3xl md:text-4xl font-black text-white tracking-tight leading-none">{s.val}</p>
                  <p className="text-[11px] uppercase tracking-[0.12em] font-semibold text-white/50 mt-1">{s.lbl}</p>
                  <p className="text-[10px] text-white/30 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="relative z-10 max-w-[1360px] mx-auto w-full px-6 md:px-12 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
      >
        <div className="flex gap-3 flex-wrap">
          <motion.button
            onClick={() => scrollTo("work")}
            whileHover={{ scale: 1.03, backgroundColor: "#ffffff" }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 rounded-full bg-white text-[#080808] font-bold text-sm tracking-wide transition-all duration-200 flex items-center gap-2"
          >
            View Work
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </motion.button>
          <motion.a
            href="mailto:eymenfaruk479@gmail.com"
            whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 rounded-full border border-white/20 text-white/80 font-medium text-sm transition-all duration-200 hover:text-white"
          >
            Get in touch
          </motion.a>
        </div>

        <div className="flex items-center gap-6">
          {[
            { label: "GitHub", href: "https://github.com/eymen160" },
            { label: "LinkedIn", href: "https://linkedin.com/in/eymenkeyvan" },
            { label: "Resume", href: "/resume/EYMEN_KEYVAN_RESUME.pdf" },
          ].map((l) => (
            <motion.a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-sm font-medium text-white/45 hover:text-white/80 transition-colors duration-200"
            >
              {l.label} ↗
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
