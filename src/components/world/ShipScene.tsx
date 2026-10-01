import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";

type Line = { text: string; kind: "cmd" | "out" | "ok" };

// The ritual behind every deploy on fomaprint.com: tests, health check, then prod.
const SCRIPT: Line[] = [
  { text: "git add .", kind: "cmd" },
  { text: 'git commit -m "one small commit"', kind: "cmd" },
  { text: "[main 9f17d93] one small commit · 3 files changed", kind: "out" },
  { text: "git push origin main", kind: "cmd" },
  { text: "→ running 250 tests ................ ✓ passed", kind: "ok" },
  { text: "→ health check ..................... ✓ ok", kind: "ok" },
  { text: "→ deploying to production .......... ✓ live", kind: "ok" },
];
const TOTAL = SCRIPT.reduce((n, l) => n + l.text.length, 0);
const TYPE_END = 0.5;

/**
 * Pinned scene. Scrolling types the deploy out character by character; when it lands, a check mark
 * appears and grows until its cream fill swallows the screen — the hand-off to the next scene.
 */
export default function ShipScene() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [chars, setChars] = useState(reduced ? TOTAL : 0);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (reduced) return;
    const n = Math.round(Math.min(1, p / TYPE_END) * TOTAL);
    setChars((c) => (c === n ? c : n));
  });

  const bar = useTransform(scrollYProgress, [0, TYPE_END], [0, 1]);
  const checkScale = useTransform(scrollYProgress, [TYPE_END, TYPE_END + 0.08], reduced ? [1, 1] : [0, 1], { clamp: true });
  const fill = useTransform(scrollYProgress, [0.6, 0.86], reduced ? [0, 0] : [0, 150], { clamp: true });
  const clip = useMotionTemplate`circle(${fill}% at 50% 50%)`;
  const termY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [40, -40]);

  let left = chars;
  const shown = SCRIPT.map((l) => {
    const take = Math.max(0, Math.min(l.text.length, left));
    left -= l.text.length;
    return { ...l, part: l.text.slice(0, take), done: take === l.text.length, started: take > 0 };
  });
  const cursorAt = shown.findIndex((l) => !l.done);

  return (
    <section ref={ref} className="relative h-[190vh]" aria-label="How I ship">
      <div className="grain sticky top-0 flex h-[100svh] flex-col items-center justify-center overflow-hidden px-4" style={{ background: "var(--night)" }}>
        <p className="note mb-6 text-center text-xl text-cream/60">every push, the same ritual —</p>

        <motion.div className="relative w-[min(860px,94vw)]" style={{ y: termY }}>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1f] shadow-[0_40px_120px_-30px_rgba(0,0,0,.8)]">
            <div className="flex items-center gap-2 border-b border-white/5 bg-[#111833] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              <span className="mono ml-3 text-xs text-white/40">eymen@macbook — ~/ship — zsh</span>
            </div>
            <div className="mono min-h-[300px] px-5 py-5 text-[clamp(0.72rem,1.6vw,0.98rem)] leading-[1.9] text-[#d8deef] sm:px-7">
              {shown.map((l, i) =>
                l.started ? (
                  <p key={i} className={l.kind === "ok" ? "text-mint" : l.kind === "out" ? "text-white/45" : undefined}>
                    {l.kind === "cmd" && <span className="text-sun">~/ship $ </span>}
                    {l.part}
                    {i === cursorAt && <span className="ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[0.18em] bg-cream" style={{ animation: "blink 1s steps(1) infinite" }} />}
                  </p>
                ) : null,
              )}
              {chars === 0 && (
                <p>
                  <span className="text-sun">~/ship $ </span>
                  <span className="inline-block h-[1.05em] w-[0.55em] translate-y-[0.18em] bg-cream" style={{ animation: "blink 1s steps(1) infinite" }} />
                </p>
              )}
            </div>
            <div className="h-1 bg-white/5">
              <motion.div className="h-full origin-left bg-mint" style={{ scaleX: bar }} />
            </div>
          </div>

          {/* the check that lands when the deploy goes live */}
          <motion.div
            aria-hidden
            className="absolute -right-5 -top-7 flex h-20 w-20 items-center justify-center rounded-full bg-mint text-4xl font-black text-night shadow-[0_20px_50px_-10px_rgba(43,217,139,.6)] sm:-right-8 sm:-top-10 sm:h-28 sm:w-28 sm:text-6xl"
            style={{ scale: checkScale }}
          >
            ✓
          </motion.div>
        </motion.div>

        {/* cream floods in from the centre */}
        <motion.div aria-hidden className="absolute inset-0 z-10" style={{ background: "var(--cream)", clipPath: clip }} />
      </div>
    </section>
  );
}
