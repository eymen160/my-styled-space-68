import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { projects, type Project } from "../content/site";
import { ease, useFinePointer } from "../lib/motion";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  const fine = useFinePointer();
  const [open, setOpen] = useState<string | null>(null);
  const [hovered, setHovered] = useState<Project | null>(null);

  // floating preview trails the cursor with spring lag
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 26, mass: 0.6 });
  const y = useSpring(my, { stiffness: 220, damping: 26, mass: 0.6 });

  return (
    <section id="work" className="scroll-mt-20 pt-28 sm:pt-40">
      <div className="wrap">
        <SectionTitle num="02" label="Selected work" title={<>Things I've built.</>} />

        <ul
          className="border-t hairline"
          onPointerMove={(e) => {
            mx.set(e.clientX);
            my.set(e.clientY);
          }}
          onPointerLeave={() => setHovered(null)}
        >
          {projects.map((p, i) => (
            <ProjectRow
              key={p.slug}
              p={p}
              index={i}
              open={open === p.slug}
              onToggle={() => setOpen((cur) => (cur === p.slug ? null : p.slug))}
              onHover={(on) => setHovered(on ? p : null)}
            />
          ))}
        </ul>
      </div>

      {fine && (
        <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-40" style={{ x, y }}>
          <AnimatePresence>
            {hovered && open !== hovered.slug && (
              <motion.div
                key={hovered.slug}
                className="ml-6 mt-6 w-72 rounded-2xl border hairline p-5 shadow-2xl"
                style={{ background: "var(--paper)", boxShadow: "0 30px 60px -20px rgb(var(--shadow) / 0.35)" }}
                initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 3 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
              >
                <p className="label mb-2">{hovered.award ?? hovered.tagline}</p>
                <p className="display text-xl leading-snug text-accent">{hovered.result}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {hovered.stack.slice(0, 5).map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}

function ProjectRow({
  p,
  index,
  open,
  onToggle,
  onHover,
}: {
  p: Project;
  index: number;
  open: boolean;
  onToggle: () => void;
  onHover: (on: boolean) => void;
}) {
  const reduced = useReducedMotion();
  const num = String(index + 1).padStart(2, "0");
  const panelId = `project-${p.slug}`;

  return (
    <motion.li
      className="border-b hairline"
      initial={reduced ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.9, delay: index * 0.06, ease }}
    >
      <button
        type="button"
        className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 py-7 text-left sm:grid-cols-[4rem_1fr_auto_auto] sm:gap-x-8 sm:py-9"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        onPointerEnter={() => onHover(true)}
        onPointerLeave={() => onHover(false)}
      >
        <span className="font-mono text-sm text-ink-3 transition-colors group-hover:text-accent">{num}</span>
        <span className="min-w-0">
          <span className="display block text-[clamp(1.9rem,5vw,3.6rem)] font-[400] leading-none transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-2">
            {p.title}
            {p.award && (
              <span aria-hidden className="ml-3 inline-block translate-y-[-0.6em] align-middle text-[0.3em] text-accent">
                ★
              </span>
            )}
          </span>
          <span className="mt-2 block text-[0.98rem] text-ink-2">
            {p.tagline}
            {p.award && <span className="text-ink-3"> — {p.award}</span>}
          </span>
        </span>
        <span className="hidden font-mono text-sm text-ink-3 sm:block">{p.date}</span>
        <motion.span
          aria-hidden
          className="flex h-10 w-10 items-center justify-center rounded-full border hairline transition-colors group-hover:border-ink sm:h-12 sm:w-12"
          animate={{ rotate: open ? 45 : 0, backgroundColor: open ? "var(--ink)" : "rgba(0,0,0,0)", color: open ? "var(--paper)" : "var(--ink)" }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.6, ease }, opacity: { duration: 0.35 } }}
          >
            <motion.div
              className="grid gap-10 pb-12 sm:pl-[6rem] md:grid-cols-[1fr_1.4fr]"
              initial="hidden"
              animate="shown"
              variants={{ shown: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } } }}
            >
              <Stagger>
                <p className="label mb-3">Result</p>
                <p className="display text-[clamp(1.4rem,2.6vw,2rem)] leading-snug text-accent">{p.result}</p>
                <p className="label mb-3 mt-8">Problem</p>
                <p className="leading-relaxed text-ink-2">{p.problem}</p>
              </Stagger>
              <Stagger>
                <p className="label mb-3">What I built</p>
                <ul className="space-y-3">
                  {p.built.map((b) => (
                    <li key={b} className="relative pl-5 leading-relaxed text-ink-2">
                      <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-2.5 bg-ink-3" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a href={p.link.href} target="_blank" rel="noopener" className="ink-link mt-7 inline-block font-medium">
                    {p.link.label} ↗
                  </a>
                )}
              </Stagger>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

function Stagger({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 16 }, shown: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.6, ease }}
    >
      {children}
    </motion.div>
  );
}
