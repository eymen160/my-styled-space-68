import { useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cutout, photos } from "../../content/site";
import { FundusO } from "./Logo";

type Card = { img?: string; art?: ReactNode; caption: string; bg?: string; side: "left" | "right"; tilt: number };

const CARDS: Record<string, Card> = {
  exploring: { img: photos[0].src, caption: "D.C., after dark", side: "right", tilt: 6 },
  "Computer Science": { img: cutout.src, caption: "hi, that's me", bg: "#2340D9", side: "left", tilt: -7 },
  research: {
    art: (
      <div className="flex aspect-square w-full items-center justify-center bg-[#1b0d08]">
        <FundusO size="78%" />
      </div>
    ),
    caption: "fovea · Dice 84.97%",
    side: "right",
    tilt: 5,
  },
  "a good view": { img: photos[2].src, caption: "somewhere quiet", side: "left", tilt: -5 },
};

/** A bold word that reveals a polaroid beside it on hover, focus, or tap. The card stays put. */
function Hot({ word }: { word: string }) {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const c = CARDS[word];

  return (
    <span className="relative inline-block">
      <button
        type="button"
        className="font-[700] text-cream underline decoration-sun/0 decoration-2 underline-offset-[6px] transition-[text-decoration-color] hover:decoration-sun focus-visible:decoration-sun"
        aria-expanded={open}
        onPointerEnter={(e) => e.pointerType === "mouse" && setOpen(true)}
        onPointerLeave={(e) => e.pointerType === "mouse" && setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen((o) => !o)}
      >
        {word}
      </button>
      <AnimatePresence>
        {open && (
          <motion.span
            aria-hidden
            className={`pointer-events-none absolute top-1/2 z-20 block w-[min(46vw,230px)] bg-white p-2.5 pb-11 shadow-[0_30px_60px_-15px_rgba(0,0,0,.6)] ${
              c.side === "right" ? "left-[85%]" : "right-[85%]"
            }`}
            style={{ translateY: "-50%" }}
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.55, rotate: c.tilt * 3, y: 30 }}
            animate={{ opacity: 1, scale: 1, rotate: c.tilt, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.7, rotate: c.tilt * 2, y: 10 }}
            transition={{ type: "spring", stiffness: 360, damping: 22 }}
          >
            {c.img ? (
              <img src={c.img} alt="" className="block aspect-square w-full object-cover" style={{ background: c.bg, objectPosition: c.bg ? "50% 0%" : undefined }} />
            ) : (
              c.art
            )}
            <span className="hand absolute inset-x-0 bottom-2.5 text-center text-[1.45rem] font-[600] leading-none text-ink">{c.caption}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

/** Four short lines, Julia-style cadence, Eymen's facts. */
export default function Bio() {
  const reduced = useReducedMotion();
  const line = (i: number) => ({
    initial: reduced ? false : { opacity: 0, y: 28, filter: "blur(6px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, margin: "-15% 0px" },
    transition: { duration: 0.9, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="grain relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 py-28" style={{ background: "var(--night)" }}>
      <div className="text-center text-[clamp(1.7rem,3.6vw,3rem)] font-[300] leading-[1.22] text-cream/90">
        <motion.p {...line(0)}>
          Based in Atlanta, happiest <Hot word="exploring" />.
        </motion.p>
        <motion.p {...line(1)}>
          <Hot word="Computer Science" /> at Kennesaw State.
        </motion.p>
        <motion.p {...line(2)}>
          Loves shipping things, <Hot word="research" />,
        </motion.p>
        <motion.p {...line(3)}>
          and, duh, <Hot word="a good view" />.
        </motion.p>
        <motion.p className="note mt-8 text-base text-cream/45" {...line(4)}>
          <span className="hidden [@media(hover:hover)]:inline">(hover over the bold stuff)</span>
          <span className="[@media(hover:hover)]:hidden">(tap the bold stuff)</span>
        </motion.p>
      </div>
    </section>
  );
}
