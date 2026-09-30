import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { projects, type Project } from "../content/site";
import { Invoice, OpticDisc, Phone, Radar } from "./art";

const LOOK: Record<string, { bg: string; fg: string; sub: string; art: ReactNode }> = {
  "hey-buddy": { bg: "var(--violet)", fg: "#fff", sub: "var(--sun)", art: <Phone /> },
  tariffcheck: { bg: "var(--sun)", fg: "var(--ink)", sub: "var(--cobalt)", art: <Invoice /> },
  unet: { bg: "var(--tomato)", fg: "var(--ink)", sub: "#fff", art: <OpticDisc /> },
  "green-flight": { bg: "var(--forest)", fg: "var(--paper)", sub: "#2BD98B", art: <Radar /> },
};

function Card({ p, i, n, progress }: { p: Project; i: number; n: number; progress: MotionValue<number> }) {
  const reduced = useReducedMotion();
  const look = LOOK[p.slug];
  // once the next card starts covering this one, shrink it back into the stack
  const scale = useTransform(progress, [i / n, 1], reduced ? [1, 1] : [1, 1 - (n - 1 - i) * 0.05]);
  const artRotate = useTransform(progress, [i / n, (i + 1) / n], reduced ? [0, 0] : [-6, 6]);

  return (
    <div className="sticky h-[80vh] md:h-[82vh]" style={{ top: `calc(9vh + ${i * 22}px)` }}>
      <motion.article
        className="relative flex h-full origin-top flex-col overflow-hidden rounded-[28px] p-7 shadow-[0_-20px_50px_-20px_rgba(20,19,18,.35)] sm:p-10 md:flex-row md:gap-12 md:p-14"
        style={{ scale, background: look.bg, color: look.fg }}
      >
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center justify-between gap-4">
            <span className="label" style={{ color: look.sub }}>
              {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")} · {p.date}
            </span>
            {p.award && (
              <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: look.fg, color: look.bg }}>
                ★ {p.award.split(" · ")[0]}
              </span>
            )}
          </div>
          <h3 className="display mt-6 text-[clamp(2.8rem,7vw,6.4rem)] font-[600] leading-[0.88]">{p.title}</h3>
          <p className="mt-3 text-lg opacity-80">{p.tagline}</p>
          <p className="display mt-6 max-w-xl text-[clamp(1.3rem,2.4vw,2rem)] italic leading-snug">{p.result}</p>
          <ul className="mt-5 max-w-xl space-y-2 text-[0.9rem] leading-relaxed opacity-90 sm:text-[0.95rem]">
            {p.built.slice(0, 2).map((b, k) => (
              <li key={b} className={k > 0 ? "hidden sm:list-item" : undefined}>
                — {b}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
            {p.stack.slice(0, 6).map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
            {p.link && (
              <a
                href={p.link.href}
                target="_blank"
                rel="noopener"
                className="pill ml-auto"
                style={{ background: look.fg, color: look.bg }}
              >
                {p.link.label} ↗
              </a>
            )}
          </div>
        </div>
        <motion.div aria-hidden className="hidden shrink-0 items-center justify-center md:flex md:w-[340px]" style={{ rotate: artRotate }}>
          {look.art}
        </motion.div>
      </motion.article>
    </div>
  );
}

/** Project cards that stack on top of each other as you scroll. */
export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="work" className="scroll-mt-10 pt-32 sm:pt-40">
      <div className="wrap">
        <p className="label text-cobalt">02 — Selected work</p>
        <h2 className="display mt-5 text-[clamp(3rem,7vw,6.4rem)] font-[500] leading-[0.92]">
          Things I've <em className="italic text-cobalt">built.</em>
        </h2>
        <div ref={ref} className="relative mt-14 pb-[6vh]">
          {projects.map((p, i) => (
            <Card key={p.slug} p={p} i={i} n={projects.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
