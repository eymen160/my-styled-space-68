import { motion, useReducedMotion } from "framer-motion";
import useCounter from "../../hooks/useCounter";

const ease = [0.16, 1, 0.3, 1] as const;

const READOUTS = [
  { value: 84.97, suffix: "%", decimals: 2, label: "Fovea detection", sub: "Surpasses published benchmark" },
  { value: 2, suffix: "nd", decimals: 0, label: "Hacklanta · Finance track", sub: "Georgia State · 50+ teams" },
  { value: 3.56, suffix: "", decimals: 2, label: "GPA — Kennesaw State", sub: "Presidential Scholarship" },
];

/* ── Signature: fovea lock-on reticle ─────────────────────────────
   A diagnostic overlay on a retinal fundus — the subject of Eymen's
   NIH research. The reticle scans, then locks onto the fovea. */
function Reticle({ reduced }: { reduced: boolean }) {
  const CX = 200, CY = 200;
  const FOVEA = { x: 252, y: 214 };
  const DISC = { x: 142, y: 186 };

  const ticks = Array.from({ length: 72 }, (_, i) => {
    const a = (i / 72) * Math.PI * 2;
    const long = i % 6 === 0;
    const r1 = long ? 180 : 186;
    const r2 = 192;
    return {
      x1: CX + Math.cos(a) * r1, y1: CY + Math.sin(a) * r1,
      x2: CX + Math.cos(a) * r2, y2: CY + Math.sin(a) * r2,
      long,
    };
  });

  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-auto"
      role="img"
      aria-label="Stylized retinal fundus scan with a diagnostic reticle locked on the fovea"
    >
      <defs>
        <radialGradient id="fundus" cx="48%" cy="47%" r="55%">
          <stop offset="0%" stopColor="rgba(232,166,75,0.30)" />
          <stop offset="55%" stopColor="rgba(200,110,45,0.14)" />
          <stop offset="100%" stopColor="rgba(200,110,45,0)" />
        </radialGradient>
      </defs>

      {/* Fundus disc */}
      <circle cx={CX} cy={CY} r={158} fill="url(#fundus)" />
      <circle cx={CX} cy={CY} r={158} fill="none" stroke="var(--line)" strokeWidth="1" />

      {/* Vessels — faint arcs branching from the optic disc */}
      <g stroke="rgba(232,166,75,0.22)" strokeWidth="1.1" fill="none">
        <path d={`M ${DISC.x} ${DISC.y} C 160 120, 230 90, 292 138`} />
        <path d={`M ${DISC.x} ${DISC.y} C 155 260, 220 310, 288 272`} />
        <path d={`M ${DISC.x} ${DISC.y} C 190 170, 240 160, 300 190`} opacity="0.6" />
        <path d={`M ${DISC.x} ${DISC.y} C 180 230, 235 255, 296 240`} opacity="0.6" />
      </g>

      {/* Optic disc marker */}
      <circle cx={DISC.x} cy={DISC.y} r={13} fill="rgba(232,166,75,0.14)" stroke="rgba(232,166,75,0.3)" strokeWidth="1" />
      <text x={DISC.x - 20} y={DISC.y - 22} fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="0.12em" fill="var(--dim)">
        OPTIC DISC
      </text>

      {/* Tick ring */}
      <g>
        {ticks.map((t, i) => (
          <line
            key={i}
            x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
            stroke={t.long ? "var(--line2)" : "var(--line)"}
            strokeWidth="1"
          />
        ))}
      </g>

      {/* Rotating dashed rings */}
      <circle
        cx={CX} cy={CY} r={168}
        fill="none" stroke="rgba(232,166,75,0.35)" strokeWidth="1" strokeDasharray="2 10"
        className={reduced ? undefined : "reticle-spin"}
      />
      <circle
        cx={CX} cy={CY} r={110}
        fill="none" stroke="rgba(99,207,192,0.28)" strokeWidth="1" strokeDasharray="14 10"
        className={reduced ? undefined : "reticle-spin-rev"}
      />

      {/* Crosshair */}
      <line x1={CX} y1={16} x2={CX} y2={384} stroke="var(--line)" strokeWidth="1" />
      <line x1={16} y1={CY} x2={384} y2={CY} stroke="var(--line)" strokeWidth="1" />

      {/* Lock-on target — springs from center to the fovea */}
      <motion.g
        initial={reduced ? false : { x: CX - FOVEA.x, y: CY - FOVEA.y, scale: 2.4, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.9, ease }}
        style={{ transformOrigin: `${FOVEA.x}px ${FOVEA.y}px` }}
      >
        {/* Corner brackets */}
        <g stroke="var(--amber)" strokeWidth="1.4" fill="none">
          <path d={`M ${FOVEA.x - 16} ${FOVEA.y - 9} v -7 h 7`} />
          <path d={`M ${FOVEA.x + 9} ${FOVEA.y - 16} h 7 v 7`} />
          <path d={`M ${FOVEA.x + 16} ${FOVEA.y + 9} v 7 h -7`} />
          <path d={`M ${FOVEA.x - 9} ${FOVEA.y + 16} h -7 v -7`} />
        </g>
        <circle cx={FOVEA.x} cy={FOVEA.y} r={2.4} fill="var(--amber)" />
      </motion.g>

      {/* Callout — fades in after lock */}
      <motion.g
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.1 }}
      >
        <line
          x1={FOVEA.x - 16} y1={FOVEA.y + 16} x2={FOVEA.x - 48} y2={FOVEA.y + 58}
          stroke="var(--amber)" strokeWidth="1" opacity="0.6"
        />
        <text x={FOVEA.x - 52} y={FOVEA.y + 66} textAnchor="end" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="0.12em" fill="var(--amber)">
          FOVEA LOCALIZED
        </text>
        <text x={FOVEA.x - 52} y={FOVEA.y + 80} textAnchor="end" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="0.12em" fill="var(--dim)">
          CONF 84.97%
        </text>
      </motion.g>
    </svg>
  );
}

function Readout({ r, i }: { r: typeof READOUTS[0]; i: number }) {
  const [val, ref] = useCounter(r.value, r.decimals);
  return (
    <div
      ref={ref}
      className="flex-1 min-w-[140px]"
      style={{
        paddingLeft: i > 0 ? 28 : 0,
        paddingRight: i < READOUTS.length - 1 ? 28 : 0,
        borderRight: i < READOUTS.length - 1 ? "1px solid var(--line)" : "none",
      }}
    >
      <p
        className="font-mono font-semibold mb-1.5"
        style={{ fontSize: "clamp(1.35rem, 2.4vw, 1.9rem)", lineHeight: 1, color: "var(--amber)", letterSpacing: "-0.02em" }}
      >
        {val}{r.suffix}
      </p>
      <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--paper)" }}>{r.label}</p>
      <p className="text-xs" style={{ color: "var(--dim)" }}>{r.sub}</p>
    </div>
  );
}

export default function Hero() {
  const reduced = useReducedMotion() ?? false;
  const fade = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease },
  });

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden graticule"
      style={{ padding: "120px clamp(20px, 5vw, 56px) 72px", background: "var(--ink)" }}
    >
      <div className="max-w-container mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-center mb-16">

          {/* Left — identification */}
          <div>
            <motion.p {...fade(0.05)} className="mono-label flex items-center gap-2.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 pulse-dot" style={{ background: "var(--ok)" }} />
              <span style={{ color: "var(--ok)" }}>Open to Summer 2027 internships</span>
            </motion.p>

            <h1
              className="display font-extrabold uppercase mb-7"
              style={{ fontSize: "clamp(2.7rem, 8vw, 6.2rem)", lineHeight: 0.98, letterSpacing: "-0.015em" }}
            >
              <motion.span {...fade(0.15)} style={{ display: "block" }}>Eymen</motion.span>
              <motion.span {...fade(0.28)} style={{ display: "block" }}>Faruk</motion.span>
              <motion.span {...fade(0.41)} style={{ display: "block", color: "var(--amber)" }}>Keyvan</motion.span>
            </h1>

            <motion.p
              {...fade(0.6)}
              className="text-base leading-[1.8] mb-9"
              style={{ color: "var(--body)", maxWidth: 460 }}
            >
              AI researcher & engineer — CS student at Kennesaw State University.
              I build systems that hold up to measurement: NIH-funded retinal
              imaging models, LLM pipelines over SEC filings, and an
              award-winning customs auditor.
            </motion.p>

            <motion.div {...fade(0.72)} className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
                }}
                className="font-mono text-xs font-semibold uppercase tracking-[0.12em] px-7 py-3.5 border-none cursor-pointer transition-opacity duration-200 hover:opacity-85"
                style={{ background: "var(--amber)", color: "#0A1517", borderRadius: 2 }}
              >
                View projects ↓
              </button>
              <a
                href="/resume/EYMEN_KEYVAN_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-semibold uppercase tracking-[0.12em] px-7 py-3.5 no-underline transition-colors duration-200"
                style={{ color: "var(--paper)", border: "1px solid var(--line2)", borderRadius: 2 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.style.color = "var(--amber)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line2)"; e.currentTarget.style.color = "var(--paper)"; }}
              >
                Resume ↗
              </a>
            </motion.div>
          </div>

          {/* Right — the instrument */}
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease }}
            className="hidden sm:block max-w-[400px] w-full mx-auto lg:mx-0"
          >
            <Reticle reduced={reduced} />
            <p className="mono-label mt-4 text-center lg:text-left" style={{ fontSize: 10, lineHeight: 1.7 }}>
              Fig. 01 — Retinal fundus scan · 3 clinical datasets · n = 6,000+ images
            </p>
          </motion.div>
        </div>

        {/* Readout strip */}
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.0 }}
          className="flex flex-wrap gap-y-8"
          style={{ borderTop: "1px solid var(--line)", paddingTop: 30 }}
        >
          {READOUTS.map((r, i) => <Readout key={r.label} r={r} i={i} />)}
        </motion.div>
      </div>
    </section>
  );
}
