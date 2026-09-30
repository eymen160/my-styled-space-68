import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { profile } from "../content/site";
import { ease, useFinePointer } from "../lib/motion";

/**
 * The resume as a physical sheet of paper: tilts toward the cursor in 3D with a moving sheen,
 * straightens on hover, and opens the PDF on click.
 */
export default function ResumeSheet({ delay = 0 }: { delay?: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();
  const fine = useFinePointer();
  const [hover, setHover] = useState(false);

  // -0.5 … 0.5 across the sheet
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 180, damping: 18, mass: 0.6 };
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-12, 12]), spring);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [10, -10]), spring);
  const sheenX = useTransform(px, [-0.5, 0.5], [0, 100]);
  const sheenY = useTransform(py, [-0.5, 0.5], [0, 100]);
  const sheen = useMotionTemplate`radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255,255,255,0.45), rgba(255,255,255,0) 55%)`;

  const onMove = (e: React.PointerEvent) => {
    if (!fine || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
    setHover(false);
  };

  return (
    <motion.div
      className="relative mx-auto w-[min(78vw,340px)] lg:w-[360px]"
      style={{ perspective: 1200 }}
      initial={reduced ? false : { opacity: 0, y: 60, rotate: -14 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1.4, delay, ease }}
    >
      {/* stacked sheets underneath */}
      <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rotate-[3deg] rounded-[6px] border hairline bg-paper-2" />
      <div aria-hidden className="absolute inset-0 translate-x-1.5 translate-y-1.5 rotate-[1deg] rounded-[6px] border hairline bg-paper-2" />

      <motion.a
        ref={ref}
        href={profile.resume}
        target="_blank"
        rel="noopener"
        aria-label="Open resume (PDF)"
        data-cursor
        className="group relative block rounded-[6px] bg-white"
        style={{
          rotateX: fine ? rotateX : 0,
          rotateY: fine ? rotateY : 0,
          transformStyle: "preserve-3d",
          boxShadow: "0 1px 2px rgb(var(--shadow) / 0.08), 0 30px 60px -20px rgb(var(--shadow) / 0.35)",
        }}
        animate={{ rotate: hover ? 0 : -3.5, y: hover ? -6 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        whileTap={{ scale: 0.97, y: -14 }}
        onPointerMove={onMove}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={onLeave}
      >
        <img
          src={profile.resumePreview}
          alt="First page of Eymen Keyvan's resume"
          width={773}
          height={1000}
          className="block h-auto w-full rounded-[6px]"
        />
        {fine && (
          <motion.div aria-hidden className="pointer-events-none absolute inset-0 rounded-[6px]" style={{ background: sheen }} />
        )}
        {/* paper tag */}
        <span
          className="absolute -right-3 -top-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[0.7rem] font-medium shadow-lg transition-transform duration-300 group-hover:-translate-y-0.5"
          style={{ background: "var(--accent)", color: "var(--paper)", transform: "translateZ(40px)" }}
        >
          Resume · PDF
          <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden>
            <path d="M3 9 9 3M4 3h5v5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          </svg>
        </span>
      </motion.a>
    </motion.div>
  );
}
