import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { experience, type Role } from "../content/site";
import { NameBadge, Retina, ShippingLabel, Terminal } from "./art";

const LOOK: Record<string, { bg: string; fg: string; sub: string; art: ReactNode }> = {
  FOMA: {
    bg: "var(--ink)",
    fg: "var(--paper)",
    sub: "var(--sun)",
    art: (
      <div className="relative h-[330px] w-[300px]">
        <div className="absolute left-0 top-0 rotate-[-6deg]">
          <ShippingLabel />
        </div>
        <div className="absolute bottom-0 right-[-20px] rotate-[4deg]">
          <Terminal />
        </div>
      </div>
    ),
  },
  "Kennesaw State University": {
    bg: "var(--cobalt)",
    fg: "var(--paper)",
    sub: "var(--sun)",
    art: (
      <div className="rotate-[5deg] scale-[1.35]">
        <Retina />
      </div>
    ),
  },
  "Global Development & Networking Club": {
    bg: "var(--sun)",
    fg: "var(--ink)",
    sub: "var(--tomato)",
    art: (
      <div className="rotate-[-5deg]">
        <NameBadge />
      </div>
    ),
  },
};

function Card({ r }: { r: Role }) {
  const look = LOOK[r.org];
  return (
    <article
      className="relative flex w-[86vw] shrink-0 flex-col overflow-hidden rounded-[28px] p-7 sm:p-10 md:h-[74vh] md:w-[min(72vw,1040px)] md:flex-row md:gap-10"
      style={{ background: look.bg, color: look.fg }}
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <p className="label" style={{ color: look.sub }}>
          {r.period} · {r.where}
        </p>
        <h3 className="display mt-4 text-[clamp(2.2rem,4.4vw,4rem)] font-[600] leading-[0.95]">{r.org}</h3>
        <p className="mt-2 opacity-80">
          {r.title} · {r.orgNote}
        </p>
        <ul className="mt-6 space-y-2.5 text-[0.95rem] leading-relaxed opacity-90 md:overflow-y-auto md:pr-2">
          {r.bullets.map((b) => (
            <li key={b} className="relative pl-5">
              <span aria-hidden className="absolute left-0 top-[0.62em] h-1.5 w-1.5 rounded-full" style={{ background: look.sub }} />
              {b}
            </li>
          ))}
        </ul>
        {r.links && (
          <p className="mt-auto flex gap-5 pt-6 text-sm font-medium">
            {r.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener" className="under">
                {l.label} ↗
              </a>
            ))}
          </p>
        )}
      </div>
      <div aria-hidden className="hidden shrink-0 items-center justify-center md:flex md:w-[330px]">
        {look.art}
      </div>
    </article>
  );
}

/**
 * The section pins, and the cards travel sideways as you keep scrolling down.
 * Height is measured so the vertical distance equals the horizontal travel.
 */
export default function Experience() {
  const reduced = useReducedMotion();
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (track.current) setTravel(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.0005 });
  const x = useTransform(smooth, [0, 1], [0, -travel]);

  const intro = (
    <div className="flex w-[80vw] shrink-0 flex-col justify-center md:w-[36vw]">
      <p className="label text-cobalt">01 — Experience</p>
      <h2 className="display mt-5 text-[clamp(3rem,7vw,6.4rem)] font-[500] leading-[0.92]">
        Where I've <em className="italic text-cobalt">shipped.</em>
      </h2>
      <p className="mt-6 max-w-sm text-ink-2">Real users, real data, real consequences. Keep scrolling →</p>
    </div>
  );

  if (reduced) {
    return (
      <section id="experience" className="wrap scroll-mt-20 space-y-6 py-32">
        {intro}
        {experience.map((r) => (
          <Card key={r.org} r={r} />
        ))}
      </section>
    );
  }

  return (
    <section id="experience" ref={section} className="relative" style={{ height: `calc(100vh + ${travel}px)` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div ref={track} className="flex items-center gap-6 pl-5 pr-[8vw] sm:pl-8 md:gap-8 lg:pl-[max(2rem,calc((100vw-1200px)/2+2rem))]" style={{ x }}>
          {intro}
          {experience.map((r) => (
            <Card key={r.org} r={r} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
