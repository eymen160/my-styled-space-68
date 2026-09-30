import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { experience } from "../content/site";
import { ease } from "../lib/motion";
import SectionTitle from "./SectionTitle";
import Reveal from "./motion/Reveal";

export default function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 55%"] });
  const draw = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="experience" className="scroll-mt-20 pt-28 sm:pt-40">
      <div className="wrap">
        <SectionTitle num="01" label="Experience" title={<>Where I've shipped.</>} />

        <ol ref={listRef} className="relative">
          {/* the timeline rule draws itself with scroll */}
          <span aria-hidden className="absolute bottom-2 left-[5px] top-2 w-px bg-rule md:left-[calc(13rem+5px)]" />
          <motion.span
            aria-hidden
            className="absolute bottom-2 left-[5px] top-2 w-px origin-top md:left-[calc(13rem+5px)]"
            style={{ scaleY: reduced ? 1 : draw, backgroundColor: "var(--accent)" }}
          />

          {experience.map((r) => (
            <li key={r.org} className="relative grid gap-3 pb-16 pl-9 last:pb-0 md:grid-cols-[13rem_1fr] md:gap-0 md:pl-0">
              <div className="md:pr-10 md:pt-1.5">
                <p className="font-mono text-[0.8rem] text-ink-2">{r.period}</p>
                <p className="mt-1 text-[0.8rem] text-ink-3">{r.where}</p>
              </div>

              {/* timeline dot fills when the entry reaches mid-screen */}
              <motion.span
                aria-hidden
                className="absolute left-0 top-2 h-[11px] w-[11px] rounded-full border-2 md:left-[13rem]"
                style={{ borderColor: "var(--accent)" }}
                initial={reduced ? false : { backgroundColor: "var(--paper)", scale: 0.6 }}
                whileInView={{ backgroundColor: "var(--accent)", scale: 1 }}
                viewport={{ margin: "-45% 0px -45% 0px", once: true }}
                transition={{ duration: 0.5, ease }}
              />

              <Reveal className="md:pl-12">
                <h3 className="display text-[clamp(1.6rem,3vw,2.3rem)] font-[420] leading-tight">
                  {r.org}
                  <span className="ml-3 align-middle font-sans text-sm font-normal text-ink-3">{r.orgNote}</span>
                </h3>
                <p className="mt-1.5 flex flex-wrap items-center gap-2 text-[0.98rem] text-ink-2">
                  {r.title}
                  {r.current && (
                    <span className="rounded-full px-2 py-0.5 font-mono text-[0.66rem] uppercase tracking-wider" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
                      Current
                    </span>
                  )}
                </p>
                <ul className="mt-5 max-w-[46rem] space-y-3">
                  {r.bullets.map((b) => (
                    <li key={b} className="relative pl-5 leading-relaxed text-ink-2">
                      <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-2.5 bg-ink-3" />
                      {b}
                    </li>
                  ))}
                </ul>
                {r.links && (
                  <p className="mt-5 flex flex-wrap gap-5 text-sm">
                    {r.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener" className="ink-link font-medium">
                        {l.label} ↗
                      </a>
                    ))}
                  </p>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
