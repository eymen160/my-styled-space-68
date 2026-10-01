import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { photos } from "../../content/site";
import Logo from "./Logo";

type Item = {
  key: string;
  /** final offset from the centre, in % of the viewport (desktop / mobile) */
  x: number;
  y: number;
  mx?: number;
  my?: number;
  size: number;
  rotate: number;
  z: number;
  src?: string;
  photo?: { src: string; caption: string };
  alt: string;
};

const O = "/objects/";
// Real, cut-out objects from Eymen's world around the logo. Order = burst order. size = width in px.
const ITEMS: Item[] = [
  { key: "medal", src: O + "medal.webp", alt: "first-place medal", x: -36, y: -24, mx: -30, my: -32, size: 120, rotate: -10, z: 4 },
  { key: "laptop", src: O + "laptop.webp", alt: "laptop", x: -15, y: -31, size: 230, rotate: -4, z: 3 },
  { key: "plane", src: O + "plane.webp", alt: "paper airplane", x: 7, y: -35, mx: 4, my: -38, size: 210, rotate: -9, z: 4 },
  { key: "headphones", src: O + "headphones.webp", alt: "headphones", x: 22, y: -27, size: 160, rotate: 8, z: 3 },
  { key: "box", src: O + "box.webp", alt: "shipping box", x: 37, y: -21, mx: 30, my: -31, size: 170, rotate: 7, z: 4 },
  { key: "dc", photo: { src: photos[0].src, caption: "D.C." }, alt: photos[0].alt, x: -42, y: 5, mx: -28, my: 24, size: 160, rotate: -8, z: 5 },
  { key: "camera", src: O + "camera.webp", alt: "film camera", x: 27, y: -2, mx: 28, my: -19, size: 170, rotate: -7, z: 3 },
  { key: "lake", photo: { src: photos[2].src, caption: "recharging" }, alt: photos[2].alt, x: 42, y: 10, mx: 28, my: 24, size: 160, rotate: 8, z: 5 },
  { key: "bulb", src: O + "bulb.webp", alt: "light bulb", x: -29, y: 26, mx: -28, my: -19, size: 150, rotate: -16, z: 4 },
  { key: "cap", src: O + "cap.webp", alt: "graduation cap", x: -11, y: 31, mx: -10, my: 37, size: 200, rotate: -6, z: 3 },
  { key: "tea", src: O + "tea.webp", alt: "Turkish tea", x: 8, y: 31, mx: 14, my: 37, size: 130, rotate: 4, z: 4 },
  { key: "notebook", src: O + "notebook.webp", alt: "notebook", x: 24, y: 28, size: 115, rotate: 10, z: 3 },
  { key: "trophy", src: O + "trophy.webp", alt: "trophy", x: -1, y: 19, size: 105, rotate: 3, z: 2 },
];

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const u = () => setM(mq.matches);
    u();
    mq.addEventListener("change", u);
    return () => mq.removeEventListener("change", u);
  }, []);
  return m;
}

function Burst({ it, i, progress, mobile }: { it: Item; i: number; progress: MotionValue<number>; mobile: boolean }) {
  const reduced = useReducedMotion();
  // each object leaves the logo a beat after the previous one
  const start = 0.01 + i * 0.014;
  const end = start + 0.2;
  const tx = mobile ? (it.mx ?? it.x) : it.x;
  const ty = mobile ? (it.my ?? it.y) : it.y;
  const t = useTransform(progress, [start, end], [0, 1], { clamp: true });
  const out = (v: number) => 1 - Math.pow(1 - v, 3);
  const x = useTransform(t, (v) => `${(reduced ? 1 : out(v)) * tx}vw`);
  const y = useTransform(t, (v) => `${(reduced ? 1 : out(v)) * ty}vh`);
  const scale = useTransform(t, (v) => (reduced ? 1 : 0.2 + 0.8 * out(v)));
  const rotate = useTransform(t, (v) => (reduced ? 1 : out(v)) * it.rotate);
  const opacity = useTransform(t, (v) => (reduced ? 1 : Math.min(1, v * 3)));
  // after the burst they drift outward a little as you keep scrolling
  const drift = useTransform(progress, [0.45, 1], [1, reduced ? 1 : 1.1]);

  const size = mobile ? it.size * 0.55 : it.size;
  if (mobile && it.mx === undefined) return null;

  return (
    <motion.div className="absolute left-1/2 top-1/2" style={{ x, y, scale, rotate, opacity, zIndex: it.z }}>
      <motion.div style={{ scale: drift, translateX: "-50%", translateY: "-50%" }}>
        <div style={{ animation: reduced ? undefined : `bob ${4.2 + (i % 5) * 0.55}s ${i * 0.2}s ease-in-out infinite` }}>
          {it.photo ? (
            <figure className="sticker relative bg-white p-[6%] pb-[20%]" style={{ width: size }}>
              <img src={it.photo.src} alt={it.alt} className="aspect-square w-full object-cover" loading="eager" />
              <figcaption className="hand absolute inset-x-0 bottom-[3%] text-center text-[1.35em] leading-none text-ink" style={{ fontSize: size * 0.11 }}>
                {it.photo.caption}
              </figcaption>
            </figure>
          ) : (
            <img src={it.src} alt={it.alt} className="sticker block h-auto" style={{ width: size }} decoding="async" />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/**
 * Opening scene. Midnight, the logo writes itself in; the first scroll makes Eymen's world burst out
 * from behind it. The stage is pinned while that plays, then scrolls away naturally.
 */
export default function HeroWorld() {
  const ref = useRef<HTMLElement>(null);
  const mobile = useIsMobile();
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const logoScale = useTransform(scrollYProgress, [0, 0.25, 1], reduced ? [1, 1, 1] : [1, 0.94, 0.9]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[175vh]" aria-label="Eymen's world">
      <div className="grain sticky top-0 h-[100svh] overflow-hidden" style={{ background: "radial-gradient(120% 90% at 50% 45%, var(--night-2) 0%, var(--night) 62%)" }}>
        {ITEMS.map((it, i) => (
          <Burst key={it.key} it={it} i={i} progress={scrollYProgress} mobile={mobile} />
        ))}

        <div className="absolute left-1/2 top-1/2 z-[6] -translate-x-1/2 -translate-y-1/2">
          <motion.h1 style={{ scale: logoScale }}>
            <span className="sr-only">Eymen Faruk Keyvan — Eymen's world</span>
            <Logo />
          </motion.h1>
        </div>

        <motion.div className="absolute inset-x-0 bottom-7 flex flex-col items-center gap-2 text-cream/60" style={{ opacity: hintOpacity }}>
          <span className="note text-lg">
            scroll to open ·{" "}
            <a href="#desk" className="underline decoration-cream/40 underline-offset-4 hover:text-cream">
              or jump to my desk
            </a>
          </span>
          <span aria-hidden className="flex h-9 w-5 justify-center rounded-full border border-cream/40 pt-1.5">
            <span className="h-2 w-1 rounded-full bg-cream/70" style={{ animation: reduced ? undefined : "bob 1.6s ease-in-out infinite" }} />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
