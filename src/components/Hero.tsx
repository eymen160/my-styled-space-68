import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cutout, profile } from "../content/site";
import { ease } from "../lib/motion";
import SpinBadge from "./SpinBadge";

const NAME_STYLE = { fontSize: "clamp(5.2rem, 13vw, 14rem)", fontVariationSettings: '"SOFT" 100, "WONK" 1', letterSpacing: "-0.035em" } as const;

const COVER_LINES_LEFT = [
  { k: "Ships to production", v: "12,000+ orders a month" },
  { k: "NIH-funded research", v: "84.97% Dice, fovea segmentation" },
];
const COVER_LINES_RIGHT = [
  { k: "HackGT 13", v: "1st place, ElevenLabs track" },
  { k: "Summer 2027", v: "SWE / ML intern · anywhere in the US" },
];

function Letters({ word, delay, className = "" }: { word: string; delay: number; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <span className={`inline-flex overflow-hidden pb-[0.06em] pr-[0.1em] ${className}`} aria-hidden>
      {word.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={reduced ? false : { y: "105%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.1, delay: delay + i * 0.045, ease }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

/**
 * A magazine cover: EYMEN behind him, KEYVAN in front. As you scroll he steps forward (scales up)
 * while the two words slide apart and the cover lines fall away.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // with reduced motion every scroll-linked value stays at its starting point
  const m = (v: number[]) => (reduced ? v.map(() => v[0]) : v);

  const personScale = useTransform(scrollYProgress, [0, 1], m([1, 1.22]));
  const personY = useTransform(scrollYProgress, [0, 1], m([0, 80]));
  const leftX = useTransform(scrollYProgress, [0, 1], m([0, -260]));
  const rightX = useTransform(scrollYProgress, [0, 1], m([0, 260]));
  const linesOpacity = useTransform(scrollYProgress, [0, 0.45], m([1, 0]));
  const linesY = useTransform(scrollYProgress, [0, 0.45], m([0, 40]));

  return (
    <section id="top" ref={ref} className="relative h-[165svh]" style={{ background: "var(--cobalt)", color: "var(--paper)" }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* soft light behind the head */}
        <div
          aria-hidden
          className="absolute left-1/2 top-[40%] h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
          style={{ background: "radial-gradient(circle, #5470ff 0%, transparent 68%)" }}
        />

        {/* masthead strip */}
        <motion.div
          className="wrap label absolute inset-x-0 top-[4.6rem] flex justify-between"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <span>Vol. 1 — Fall 2026</span>
          <span className="hidden sm:inline">Kennesaw State · Computer Science</span>
          <span>Atlanta, GA</span>
        </motion.div>

        {/* EYMEN sits behind the person … */}
        <h1 className="display pointer-events-none absolute inset-0 font-[800] uppercase leading-[0.8]" style={NAME_STYLE}>
          <span className="sr-only">{profile.name}</span>
          <span className="absolute left-1/2 top-[15%] -translate-x-1/2 md:left-[4vw] md:top-[12.5%] md:translate-x-0">
            <motion.span className="block" style={{ x: leftX }}>
              <Letters word="Eymen" delay={0.15} />
            </motion.span>
          </span>
          {/* mobile: both words stay behind, stacked */}
          <span className="absolute left-1/2 top-[26%] -translate-x-1/2 md:hidden">
            <Letters word="Keyvan" delay={0.35} className="italic" />
          </span>
        </h1>

        {/* the person */}
        <motion.div className="absolute bottom-0 left-1/2 z-10 w-[min(88vw,560px)] origin-bottom md:left-[56%]" style={{ x: "-50%", scale: personScale, y: personY }}>
          <motion.img
            src={cutout.src}
            width={cutout.w}
            height={cutout.h}
            alt="Portrait of Eymen Keyvan, smiling"
            className="block h-auto max-h-[84svh] w-full object-contain object-bottom"
            style={{ maskImage: "linear-gradient(to bottom, #000 82%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, #000 82%, transparent)" }}
            initial={reduced ? false : { y: 120, opacity: 0, filter: "blur(12px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.55, ease }}
          />
        </motion.div>

        {/* … and KEYVAN steps in front of him (desktop), like a magazine cover */}
        <div aria-hidden className="display pointer-events-none absolute bottom-[6%] right-[4vw] z-20 hidden font-[800] uppercase leading-[0.8] md:block" style={NAME_STYLE}>
          <motion.span className="block" style={{ x: rightX, textShadow: "0 18px 40px rgba(10,20,90,.35)" }}>
            <Letters word="Keyvan" delay={0.35} className="italic" />
          </motion.span>
        </div>

        {/* cover lines */}
        <motion.ul className="pointer-events-none absolute bottom-[8%] left-[max(1.25rem,calc((100vw-1200px)/2+2rem))] z-10 hidden max-w-[15rem] space-y-5 md:block" style={{ opacity: linesOpacity, y: linesY }}>
          {COVER_LINES_LEFT.map((l, i) => (
            <CoverLine key={l.k} {...l} delay={1.2 + i * 0.12} />
          ))}
        </motion.ul>
        <motion.ul className="pointer-events-none absolute right-[max(1.25rem,calc((100vw-1200px)/2+2rem))] top-[40%] z-10 hidden max-w-[15rem] space-y-5 text-right md:block" style={{ opacity: linesOpacity, y: linesY }}>
          {COVER_LINES_RIGHT.map((l, i) => (
            <CoverLine key={l.k} {...l} delay={1.35 + i * 0.12} />
          ))}
        </motion.ul>

        {/* mobile cover line */}
        <motion.div className="absolute inset-x-0 bottom-6 z-20 flex justify-center px-5 md:hidden" style={{ opacity: linesOpacity }}>
          <span className="rounded-full px-3.5 py-2 text-center text-sm font-medium shadow-lg" style={{ background: "var(--sun)", color: "var(--ink)" }}>
            Summer 2027 SWE / ML intern · open to relocation
          </span>
        </motion.div>

        <motion.div
          className="absolute right-[5%] top-[13%] z-10 hidden lg:block"
          style={{ opacity: linesOpacity }}
          initial={reduced ? false : { scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 140, damping: 14, delay: 1.5 }}
        >
          <SpinBadge href={profile.resume} text="Open to work · Summer 2027 · Read the resume · " />
        </motion.div>
      </div>
    </section>
  );
}

function CoverLine({ k, v, delay }: { k: string; v: string; delay: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.li initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay, ease }}>
      <p className="label" style={{ color: "var(--sun)" }}>
        {k}
      </p>
      <p className="display mt-1 text-[1.35rem] leading-tight">{v}</p>
    </motion.li>
  );
}
