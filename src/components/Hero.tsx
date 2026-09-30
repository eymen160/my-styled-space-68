import { useCallback, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { metrics, profile } from "../content/site";
import { ease } from "../lib/motion";
import MaskLines from "./motion/MaskLines";
import RollingNumber from "./motion/RollingNumber";
import Scribble from "./motion/Scribble";
import Magnetic from "./motion/Magnetic";
import Sticker, { type StickerPos } from "./canvas/Sticker";
import GhostCursor, { type Stop } from "./canvas/GhostCursor";
import { Medal, Peach, Phone, ResumeFile, Retina, ShippingLabel, StickyNote, Tea, Terminal } from "./canvas/art";

type Item = { name: string; pos: StickerPos; art: ReactNode; href?: string };

// Positions are the sticker's top-left corner as % of the canvas. mx/my = mobile; omitted = desktop only.
const ITEMS: Item[] = [
  { name: "medal.svg", art: <Medal />, pos: { x: 7, y: 12, mx: 3, my: 8, rotate: -9, depth: 0.6 } },
  { name: "terminal", art: <Terminal />, pos: { x: 20, y: 7, rotate: -3, depth: 0.95 } },
  { name: "shipping-label.png", art: <ShippingLabel />, pos: { x: 73, y: 11, mx: 50, my: 9, rotate: 5, depth: 0.5 } },
  { name: "hey-buddy.fig", art: <Phone />, pos: { x: 84, y: 40, mx: 68, my: 73, rotate: 7, depth: 0.8 } },
  { name: "retina_fundus.tiff", art: <Retina />, pos: { x: 5, y: 49, mx: 37, my: 80, rotate: -5, depth: 0.7 } },
  { name: "sticky-note", art: <StickyNote />, pos: { x: 12, y: 73, mx: 4, my: 77, rotate: -6, depth: 0.45 } },
  { name: "çay.svg", art: <Tea />, pos: { x: 69, y: 71, rotate: 6, depth: 0.65 } },
  { name: "resume.pdf", art: <ResumeFile />, href: profile.resume, pos: { x: 86, y: 76, rotate: -4, depth: 0.55 } },
  { name: "atl-peach.svg", art: <Peach />, pos: { x: 27, y: 83, rotate: 10, depth: 0.85 } },
];

const TOUR: Stop[] = [
  { x: 12, y: 24, say: "1st of 57 teams at HackGT 13 🏅" },
  { x: 80, y: 22, say: "12,000+ orders a month ran through this platform" },
  { x: 88, y: 52, say: "Hey Buddy translates live phone calls in 0.9 s" },
  { x: 11, y: 58, say: "NIH research: fovea segmentation, 84.97% Dice" },
  { x: 29, y: 15, say: "every push: tests → health check → prod" },
  { x: 22, y: 80, say: "psst — you can drag everything here ✋" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [order, setOrder] = useState<string[]>(ITEMS.map((i) => i.name));
  const toFront = useCallback((name: string) => setOrder((o) => [...o.filter((n) => n !== name), name]), []);

  const fade = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <>
      <section
        id="top"
        ref={canvasRef}
        className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pb-16 pt-24 md:min-h-[820px] md:pb-10"
      >
        {/* the stickers */}
        {ITEMS.map((it, i) => (
          <Sticker
            key={it.name}
            name={it.name}
            pos={it.pos}
            index={i}
            canvasRef={canvasRef}
            z={20 + order.indexOf(it.name)}
            onFront={() => toFront(it.name)}
            href={it.href}
          >
            {it.art}
          </Sticker>
        ))}

        <GhostCursor canvasRef={canvasRef} stops={TOUR} />

        {/* the words */}
        <div className="pointer-events-none relative z-10 mx-auto max-w-[760px] px-5 text-center">
          <motion.p
            className="pointer-events-auto mx-auto mb-7 inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-[0.8rem] shadow-sm"
            style={{ background: "var(--paper)", borderColor: "var(--rule)" }}
            {...fade(0.05)}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0ACF83] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0ACF83]" />
            </span>
            Open to a <strong className="font-semibold">{profile.seeking}</strong>
          </motion.p>

          <h1 className="display text-[clamp(3.4rem,10.5vw,8.6rem)] font-[400] leading-[0.9]" style={{ fontVariationSettings: '"SOFT" 50' }}>
            <MaskLines delay={0.12} lines={[profile.shortName]} />
          </h1>

          <p className="display mt-4 text-[clamp(1.45rem,3.4vw,2.7rem)] font-[340] leading-[1.1] text-ink-2">
            <MaskLines
              delay={0.3}
              lines={[
                <>
                  builds software that ships to{" "}
                  <span className="relative inline-block italic text-accent" style={{ fontVariationSettings: '"SOFT" 100' }}>
                    production.
                    <Scribble delay={1.1} />
                  </span>
                </>,
              ]}
            />
          </p>

          <motion.p className="mx-auto mt-6 max-w-[34rem] text-[0.98rem] leading-relaxed text-ink-3" {...fade(0.7)}>
            CS @ Kennesaw State · Atlanta · {profile.relocation}
          </motion.p>

          <motion.div className="pointer-events-auto mt-8 flex flex-wrap items-center justify-center gap-3" {...fade(0.85)}>
            <Magnetic>
              <a href={profile.resume} target="_blank" rel="noopener" className="pill pill-solid px-5 py-2.5">
                Resume ↗
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#work" className="pill pill-line px-5 py-2.5" style={{ background: "var(--paper)" }}>
                See my work ↓
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.p
          aria-hidden
          className="hand absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 text-[1.35rem] text-ink-3 md:block"
          {...fade(1.6)}
        >
          psst — everything on this canvas is draggable ✋
        </motion.p>
      </section>

      {/* proof metrics */}
      <div className="wrap mt-6 sm:mt-10">
        <dl className="grid grid-cols-2 border-t hairline lg:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className={`border-b hairline py-7 pr-4 lg:border-b-0 ${i % 2 === 1 ? "pl-4 sm:pl-6" : ""} ${i > 0 ? "lg:border-l lg:pl-6" : ""}`}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * i, ease }}
            >
              <dt className="label mb-3">{m.source}</dt>
              <dd>
                <RollingNumber value={m.value} className="display text-[clamp(2.3rem,4.6vw,3.6rem)] font-[420] text-accent" />
                <p className="mt-3 max-w-[15rem] text-sm leading-snug text-ink-2">{m.label}</p>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </>
  );
}
