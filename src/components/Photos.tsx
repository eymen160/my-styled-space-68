import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { photos, type Photo } from "../content/site";

// Where each polaroid lands once the stack has fanned out: [x (vw), y (px), rotate (deg)].
const FAN: [number, number, number][] = [
  [-27, 30, -9],
  [0, -10, 2],
  [27, 40, 8],
];
// Where each one starts, as a tidy stack.
const STACK: [number, number, number][] = [
  [-1.5, 0, -4],
  [0, -6, 3],
  [1.5, 4, -1],
];

function Polaroid({ p, i, progress }: { p: Photo; i: number; progress: MotionValue<number> }) {
  const reduced = useReducedMotion();
  const [sx, sy, sr] = STACK[i];
  const [fx, fy, fr] = FAN[i];
  const x = useTransform(progress, [0, 1], reduced ? [`${fx}vw`, `${fx}vw`] : [`${sx}vw`, `${fx}vw`]);
  const y = useTransform(progress, [0, 1], reduced ? [fy, fy] : [sy, fy]);
  const rotate = useTransform(progress, [0, 1], reduced ? [fr, fr] : [sr, fr]);

  return (
    <motion.figure
      className="absolute left-1/2 top-1/2 w-[min(62vw,300px)] bg-white p-3 pb-14 shadow-[0_30px_60px_-20px_rgba(20,19,18,.45)] md:w-[min(26vw,330px)]"
      style={{ x, y, rotate, translateX: "-50%", translateY: "-50%", zIndex: i === 1 ? 3 : 2 - i }}
    >
      <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" className="block aspect-[4/5] w-full object-cover" />
      <figcaption className="hand absolute inset-x-0 bottom-3 text-center text-[1.6rem] leading-none text-[#2b2410]">{p.caption}</figcaption>
    </motion.figure>
  );
}

/** "Off the clock": a stack of polaroids that fans out as the section scrolls into view. */
export default function Photos() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "center 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <section ref={ref} className="relative overflow-hidden pb-10 pt-32 sm:pt-44">
      <div className="wrap flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <h2 className="display text-[clamp(2.6rem,6.5vw,5.6rem)] font-[500] leading-[0.95]">
          Off the <em className="italic text-tomato">clock.</em>
        </h2>
        <p className="max-w-sm text-ink-2">The person behind the pull requests — usually outside, usually walking somewhere new.</p>
      </div>
      <div className="relative mx-auto mt-10 h-[min(115vw,560px)] md:h-[600px]">
        {photos.map((p, i) => (
          <Polaroid key={p.src} p={p} i={i} progress={progress} />
        ))}
      </div>
    </section>
  );
}
