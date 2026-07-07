import { useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Magnetic from "../Magnetic";

const ease = [0.16, 1, 0.3, 1] as const;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: "smooth" });
}

/* ── Drifting dust in the light ─────────────────────────────────── */
const DUST = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 61 + 13) % 100,
  top: (i * 37 + 7) % 100,
  size: 2 + (i % 3),
  dur: 8 + (i % 7) * 1.6,
  delay: (i * 1.7) % 9,
  o: 0.14 + (i % 4) * 0.07,
}));

function Dust() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {DUST.map((p, i) => (
        <span
          key={i}
          className="dust absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: "#FFC96B",
            opacity: p.o,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Letters that rise in and jump under the cursor ─────────────── */
function JumpyWord({ word, delay, reduced }: { word: string; delay: number; reduced: boolean }) {
  return (
    <span className="inline-block align-bottom">
      {word.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block cursor-default"
          initial={reduced ? false : { y: 46, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: delay + i * 0.05, ease }}
          whileHover={reduced ? undefined : { y: -12, color: "#FFC96B", transition: { type: "spring", stiffness: 420, damping: 11 } }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Fake QR for the badge back ─────────────────────────────────── */
const QR_ROWS = [
  "1111101010011111",
  "1000101100010001",
  "1011101011010111",
  "1011100101010111",
  "1000101110010001",
  "1111101010111111",
  "0000000110000000",
  "1010110101101101",
  "0110101010110010",
  "1010011011001011",
  "0000001010100110",
  "1111100110101010",
  "1000101011000101",
  "1011100101101110",
  "1011101101010011",
  "1111101010110101",
];

function FakeQr() {
  return (
    <svg width="88" height="88" viewBox="0 0 16 16" aria-hidden="true" style={{ imageRendering: "pixelated" }}>
      {QR_ROWS.flatMap((row, y) =>
        row.split("").map((c, x) =>
          c === "1" ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#22252C" /> : null
        )
      )}
    </svg>
  );
}

/* ── Signature: draggable, tilting, flippable researcher ID badge ─ */
function IdBadge({ reduced }: { reduced: boolean }) {
  const [flipped, setFlipped] = useState(false);

  const dragX = useMotionValue(0);
  const swing = useTransform(dragX, [-140, 140], [-13, 13]);

  // Cursor tilt
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotX = useSpring(useTransform(py, [-0.5, 0.5], [11, -11]), { stiffness: 160, damping: 14 });
  const rotY = useSpring(useTransform(px, [-0.5, 0.5], [-11, 11]), { stiffness: 160, damping: 14 });

  return (
    <div className="relative flex flex-col items-center select-none" aria-label="Researcher ID badge for Eymen Faruk Keyvan — drag it or click to flip">
      {/* Idle pendulum sway */}
      <motion.div
        style={{ transformOrigin: "50% -180px" }}
        animate={reduced ? undefined : { rotate: [1.4, -1.4, 1.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Drop-in */}
        <motion.div
          initial={reduced ? false : { y: -420, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 13, delay: 0.55 }}
        >
          {/* Drag + throw */}
          <motion.div
            drag
            dragSnapToOrigin
            dragElastic={0.16}
            dragConstraints={{ top: -50, bottom: 110, left: -150, right: 150 }}
            dragTransition={{ bounceStiffness: 260, bounceDamping: 11 }}
            whileDrag={{ scale: 1.03 }}
            onTap={() => setFlipped(f => !f)}
            style={{ x: dragX, rotate: swing, cursor: "grab", touchAction: "none" }}
            className="flex flex-col items-center"
          >
            {/* Lanyard strap */}
            <div
              className="w-[15px] h-[150px] flex-shrink-0"
              style={{ background: "linear-gradient(90deg, #10141C, #262C38 45%, #10141C)", borderRadius: 2 }}
            />
            {/* Clip */}
            <div
              className="w-[34px] h-[16px] -mt-[2px] flex-shrink-0"
              style={{ background: "#2C333F", borderRadius: "4px 4px 6px 6px", border: "1px solid #3A424F" }}
            />

            {/* Tilt frame */}
            <motion.div
              className="-mt-[3px]"
              style={{ perspective: 900 }}
              onMouseMove={e => {
                if (reduced) return;
                const r = e.currentTarget.getBoundingClientRect();
                px.set((e.clientX - r.left) / r.width - 0.5);
                py.set((e.clientY - r.top) / r.height - 0.5);
              }}
              onMouseLeave={() => { px.set(0); py.set(0); }}
            >
              <motion.div style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}>
                {/* Flip frame */}
                <motion.div
                  animate={{ rotateY: flipped ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 15 }}
                  style={{ transformStyle: "preserve-3d", position: "relative" }}
                >
                  {/* FRONT */}
                  <div
                    className="w-[248px] flex flex-col items-center px-6 pt-5 pb-6"
                    style={{
                      background: "#F7F5F0",
                      borderRadius: 18,
                      boxShadow: "0 30px 70px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.35)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <div className="w-[46px] h-[9px] rounded-full mb-4" style={{ background: "#04070D", opacity: 0.85 }} />
                    <p className="font-mono text-center" style={{ fontSize: 8.5, letterSpacing: "0.18em", color: "#8A8F98" }}>
                      KENNESAW STATE UNIVERSITY
                    </p>
                    <p className="font-mono text-center mb-4" style={{ fontSize: 8.5, letterSpacing: "0.18em", color: "#C98A2D" }}>
                      NIH DEEP LEARNING LAB
                    </p>
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
                    <p className="font-extrabold text-center" style={{ color: "#181C25", fontSize: 17, lineHeight: 1.25 }}>
                      Eymen Faruk Keyvan
                    </p>
                    <p className="text-center mb-4" style={{ color: "#6A6F7A", fontSize: 12, fontWeight: 500 }}>
                      AI Researcher · CS ’27
                    </p>
                    <div className="w-full h-px mb-4" style={{ background: "#E4E0D6" }} />
                    <svg width="132" height="30" viewBox="0 0 132 30" aria-hidden="true">
                      {[3, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1].map((w, i, arr) => {
                        const x = arr.slice(0, i).reduce((a, b) => a + b * 1.8 + 2.4, 0);
                        return <rect key={i} x={x} y={0} width={w * 1.8} height={30} fill="#22252C" />;
                      })}
                    </svg>
                    <p className="font-mono mt-2.5" style={{ fontSize: 8, letterSpacing: "0.22em", color: "#8A8F98" }}>
                      SUMMER 2027 · INTERN CANDIDATE
                    </p>
                  </div>

                  {/* BACK */}
                  <div
                    className="absolute inset-0 flex flex-col items-center px-6 pt-5 pb-6"
                    style={{
                      background: "#F1EEE7",
                      borderRadius: 18,
                      boxShadow: "0 30px 70px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.35)",
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <div className="w-[46px] h-[9px] rounded-full mb-4" style={{ background: "#04070D", opacity: 0.85 }} />
                    {/* Magnetic stripe */}
                    <div className="w-[248px] h-[34px] -mx-6 mb-5" style={{ background: "#1B1F27" }} />
                    <FakeQr />
                    <p className="font-mono mt-2 mb-4" style={{ fontSize: 8, letterSpacing: "0.2em", color: "#8A8F98" }}>
                      EYMENKEYVAN.COM
                    </p>
                    <div className="w-full h-px mb-4" style={{ background: "#E0DCD1" }} />
                    <p className="font-mono text-center mb-1" style={{ fontSize: 8.5, letterSpacing: "0.16em", color: "#6A6F7A" }}>
                      IF FOUND, PLEASE RETURN TO
                    </p>
                    <p className="font-mono text-center mb-4" style={{ fontSize: 8.5, letterSpacing: "0.16em", color: "#22252C" }}>
                      EYMENFARUK479@GMAIL.COM
                    </p>
                    {/* Stamp */}
                    <div
                      className="flex items-center justify-center text-center font-mono"
                      style={{
                        width: 108,
                        height: 108,
                        borderRadius: "50%",
                        border: "2.5px solid rgba(201,138,45,0.75)",
                        color: "#C98A2D",
                        fontSize: 9,
                        letterSpacing: "0.14em",
                        lineHeight: 1.7,
                        transform: "rotate(-12deg)",
                        padding: 10,
                      }}
                    >
                      OPEN TO<br />INTERN<br />OFFERS ★ 2027
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.p
        className="mt-7 text-xs"
        style={{ color: "var(--muted)" }}
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        grab it · click to flip
      </motion.p>
    </div>
  );
}

export default function Hero() {
  const reduced = useReducedMotion() ?? false;

  // Cursor spotlight
  const mx = useMotionValue(-600);
  const my = useMotionValue(-600);
  const smx = useSpring(mx, { stiffness: 90, damping: 20, mass: 0.6 });
  const smy = useSpring(my, { stiffness: 90, damping: 20, mass: 0.6 });
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${smx}px ${smy}px, rgba(255, 201, 107, 0.075), transparent 65%)`;

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
      onMouseMove={e => {
        if (reduced) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
    >
      {/* Static warm pool behind the badge */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%", right: "-6%",
          width: 760, height: 760,
          background: "radial-gradient(circle at 55% 40%, rgba(255,201,107,0.07) 0%, transparent 62%)",
        }}
      />
      {/* Cursor-following light */}
      {!reduced && (
        <motion.div className="absolute inset-0 pointer-events-none" style={{ background: spotlight }} />
      )}
      {!reduced && <Dust />}

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

            <h1
              className="font-extrabold glow mb-7"
              style={{ fontSize: "clamp(3.4rem, 8vw, 6.2rem)", lineHeight: 1.02, letterSpacing: "-0.03em" }}
            >
              <JumpyWord word="Eymen" delay={0.28} reduced={reduced} />
              <br />
              <JumpyWord word="Keyvan" delay={0.5} reduced={reduced} />
            </h1>

            <motion.p {...fade(0.75)} className="eyebrow mb-7">
              CS @ Kennesaw State · NIH-funded AI researcher
            </motion.p>

            <motion.p
              {...fade(0.85)}
              className="text-base leading-[1.85] mb-10 mx-auto lg:mx-0"
              style={{ color: "var(--body)", maxWidth: 440 }}
            >
              I turn research problems into working software: <strong style={{ color: "var(--text)", fontWeight: 600 }}>84.97% fovea
              detection</strong> for an NIH-funded study — beating a published benchmark —
              and a customs-duty auditor that took <strong style={{ color: "var(--text)", fontWeight: 600 }}>2nd place at Hacklanta 2026</strong>,
              shipped to production in 12 hours.
            </motion.p>

            <motion.div {...fade(0.97)} className="flex flex-wrap items-center gap-5 justify-center lg:justify-start">
              <Magnetic>
                <button onClick={() => scrollToId("contact")} className="pill pill-outline" style={{ border: "1px solid var(--border2)" }}>
                  Contact me
                </button>
              </Magnetic>
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
