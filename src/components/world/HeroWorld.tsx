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

const W = "/world/";
// A ring of things from Eymen's world around the logo. Order = burst order.
const ITEMS: Item[] = [
  { key: "medal", src: W + "medal.webp", alt: "first-place medal", x: -36, y: -25, mx: -30, my: -33, size: 170, rotate: -10, z: 4 },
  { key: "laptop", src: W + "laptop.webp", alt: "laptop", x: -17, y: -31, size: 180, rotate: 7, z: 3 },
  { key: "rocket", src: W + "rocket.webp", alt: "rocket", x: 2, y: -34, mx: 2, my: -38, size: 150, rotate: 16, z: 4 },
  { key: "peach", src: W + "peach.webp", alt: "Georgia peach", x: 19, y: -30, size: 150, rotate: -12, z: 3 },
  { key: "package", src: W + "package.webp", alt: "shipping box", x: 36, y: -23, mx: 30, my: -33, size: 175, rotate: 9, z: 4 },
  { key: "dc", photo: { src: photos[0].src, caption: "D.C." }, alt: photos[0].alt, x: -42, y: 5, mx: -28, my: 24, size: 160, rotate: -8, z: 5 },
  { key: "phone", src: W + "mobile-phone.webp", alt: "phone", x: -27, y: -2, size: 135, rotate: 11, z: 3 },
  { key: "airplane", src: W + "airplane.webp", alt: "airplane", x: 27, y: -4, mx: 28, my: -20, size: 150, rotate: -14, z: 3 },
  { key: "lake", photo: { src: photos[2].src, caption: "recharging" }, alt: photos[2].alt, x: 42, y: 9, mx: 28, my: 24, size: 160, rotate: 8, z: 5 },
  { key: "umbrella", src: W + "umbrella.webp", alt: "umbrella", x: -30, y: 25, mx: -28, my: -20, size: 165, rotate: 13, z: 4 },
  { key: "cap", src: W + "graduation-cap.webp", alt: "graduation cap", x: -12, y: 31, mx: -10, my: 37, size: 180, rotate: -7, z: 3 },
  { key: "tea", src: W + "teacup.webp", alt: "cup of tea", x: 7, y: 32, mx: 14, my: 37, size: 150, rotate: 6, z: 4 },
  { key: "microscope", src: W + "microscope.webp", alt: "microscope", x: 24, y: 27, size: 165, rotate: -9, z: 3 },
  { key: "trophy", src: W + "trophy.webp", alt: "trophy", x: -2, y: 18, size: 120, rotate: 4, z: 2 },
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
  const start = 0.015 + i * 0.011;
  const end = start + 0.14;
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
  const drift = useTransform(progress, [0.3, 1], [1, reduced ? 1 : 1.12]);

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
            <img src={it.src} alt={it.alt} width={size} height={size} className="sticker block" style={{ width: size, height: size }} />
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
  const hintOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[230vh]" aria-label="Eymen's world">
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

        <motion.div aria-hidden className="absolute inset-x-0 bottom-7 flex flex-col items-center gap-2 text-cream/60" style={{ opacity: hintOpacity }}>
          <span className="note text-lg">scroll to open</span>
          <span className="flex h-9 w-5 justify-center rounded-full border border-cream/40 pt-1.5">
            <span className="h-2 w-1 rounded-full bg-cream/70" style={{ animation: reduced ? undefined : "bob 1.6s ease-in-out infinite" }} />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
