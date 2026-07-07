import { motion, useMotionValue, useTransform, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: "smooth" });
}

function Barcode() {
  const widths = [3, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1];
  let x = 0;
  return (
    <svg width="132" height="30" viewBox="0 0 132 30" aria-hidden="true">
      {widths.map((w, i) => {
        const rect = <rect key={i} x={x} y={0} width={w * 1.8} height={30} fill="#22252C" />;
        x += w * 1.8 + 2.4;
        return rect;
      })}
    </svg>
  );
}

/* ── Signature: draggable researcher ID badge ─────────────────────
   Hangs from a lanyard, swings idly, and can be grabbed and thrown —
   it springs back to rest. */
function IdBadge({ reduced }: { reduced: boolean }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-140, 140], [-13, 13]);

  return (
    <div className="relative flex flex-col items-center select-none" aria-label="Researcher ID badge for Eymen Faruk Keyvan">
      {/* Idle pendulum sway */}
      <motion.div
        style={{ transformOrigin: "50% -180px" }}
        animate={reduced ? undefined : { rotate: [1.4, -1.4, 1.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          initial={reduced ? false : { y: -420, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 13, delay: 0.55 }}
        >
          <motion.div
            drag
            dragSnapToOrigin
            dragElastic={0.16}
            dragConstraints={{ top: -50, bottom: 110, left: -150, right: 150 }}
            dragTransition={{ bounceStiffness: 260, bounceDamping: 11 }}
            whileDrag={{ scale: 1.03 }}
            style={{ x, rotate, cursor: "grab", touchAction: "none" }}
            whileTap={{ cursor: "grabbing" }}
            className="flex flex-col items-center"
          >
            {/* Lanyard strap */}
            <div
              className="w-[15px] h-[150px] flex-shrink-0"
              style={{
                background: "linear-gradient(90deg, #10141C, #262C38 45%, #10141C)",
                borderRadius: 2,
              }}
            />
            {/* Clip */}
            <div
              className="w-[34px] h-[16px] -mt-[2px] flex-shrink-0"
              style={{ background: "#2C333F", borderRadius: "4px 4px 6px 6px", border: "1px solid #3A424F" }}
            />

            {/* Card */}
            <div
              className="w-[248px] -mt-[3px] flex flex-col items-center px-6 pt-5 pb-6"
              style={{
                background: "#F7F5F0",
                borderRadius: 18,
                boxShadow: "0 30px 70px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.35)",
              }}
            >
              {/* Punch hole */}
              <div className="w-[46px] h-[9px] rounded-full mb-4" style={{ background: "#04070D", opacity: 0.85 }} />

              {/* Org line */}
              <p className="font-mono text-center" style={{ fontSize: 8.5, letterSpacing: "0.18em", color: "#8A8F98" }}>
                KENNESAW STATE UNIVERSITY
              </p>
              <p className="font-mono text-center mb-4" style={{ fontSize: 8.5, letterSpacing: "0.18em", color: "#C98A2D" }}>
                NIH DEEP LEARNING LAB
              </p>

              {/* Avatar */}
              <div
                className="w-[82px] h-[82px] rounded-full flex items-center justify-center mb-4 font-extrabold"
                style={{
                  background: "radial-gradient(circle at 32% 28%, #2E3A52, #10141C)",
                  color: "#FFC96B",
                  fontSize: 26,
                  border: "3px solid #E7E3D9",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
                }}
              >
                EK
              </div>

              {/* Name & role */}
              <p className="font-extrabold text-center" style={{ color: "#181C25", fontSize: 17, lineHeight: 1.25 }}>
                Eymen Faruk Keyvan
              </p>
              <p className="text-center mb-4" style={{ color: "#6A6F7A", fontSize: 12, fontWeight: 500 }}>
                AI Researcher · CS ’27
              </p>

              {/* Divider */}
              <div className="w-full h-px mb-4" style={{ background: "#E4E0D6" }} />

              {/* Barcode + tag */}
              <Barcode />
              <p className="font-mono mt-2.5" style={{ fontSize: 8, letterSpacing: "0.22em", color: "#8A8F98" }}>
                SUMMER 2027 · INTERN CANDIDATE
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <p className="mt-7 text-xs" style={{ color: "var(--muted)" }}>
        go ahead — grab it
      </p>
    </div>
  );
}

export default function Hero() {
  const reduced = useReducedMotion() ?? false;
  const fade = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease },
  });

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ padding: "110px clamp(24px, 6vw, 64px) 64px", background: "var(--bg)" }}
    >
      {/* Warm pool of light behind the badge */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%", right: "-6%",
          width: 760, height: 760,
          background: "radial-gradient(circle at 55% 40%, rgba(255,201,107,0.07) 0%, transparent 62%)",
        }}
      />

      <div className="max-w-container mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-8 items-center">

          {/* Left — greeting */}
          <div className="text-center lg:text-left">
            <motion.p
              {...fade(0.05)}
              className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full text-[13px] font-medium"
              style={{ background: "var(--card2)", border: "1px solid var(--border)", color: "var(--body)" }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0 pulse-dot" style={{ background: "var(--ok)" }} />
              Open to Summer 2027 internships
            </motion.p>

            <motion.p
              {...fade(0.15)}
              className="serif italic glow mb-3"
              style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)", lineHeight: 1.1, color: "var(--text)" }}
            >
              Hey there — I’m
            </motion.p>

            <motion.h1
              {...fade(0.26)}
              className="font-extrabold glow mb-7"
              style={{ fontSize: "clamp(3.4rem, 8vw, 6.2rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
            >
              Eymen<br />Keyvan
            </motion.h1>

            <motion.p {...fade(0.4)} className="eyebrow mb-7">
              CS @ Kennesaw State · NIH-funded AI researcher
            </motion.p>

            <motion.p
              {...fade(0.5)}
              className="text-base leading-[1.85] mb-10 mx-auto lg:mx-0"
              style={{ color: "var(--body)", maxWidth: 440 }}
            >
              I build AI systems that hold up to measurement — retinal imaging
              models, LLM pipelines over SEC filings, and an award-winning
              customs auditor.
            </motion.p>

            <motion.div {...fade(0.62)} className="flex flex-wrap items-center gap-5 justify-center lg:justify-start">
              <button onClick={() => scrollToId("contact")} className="pill pill-outline border-none" style={{ border: "1px solid var(--border2)" }}>
                Contact me
              </button>
              <button
                onClick={() => scrollToId("projects")}
                className="link-hover text-sm font-medium bg-transparent border-none cursor-pointer"
                style={{ color: "var(--body)" }}
              >
                or see my work ↓
              </button>
            </motion.div>
          </div>

          {/* Right — the badge */}
          <div className="flex justify-center lg:justify-end lg:pr-8">
            <IdBadge reduced={reduced} />
          </div>
        </div>
      </div>
    </section>
  );
}
