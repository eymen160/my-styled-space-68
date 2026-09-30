import { motion, useReducedMotion } from "framer-motion";
import { education, recognition, skills } from "../content/site";
import { ease } from "../lib/motion";

/** Bento grid: every tile pops in on its own beat. */
export default function About() {
  const reduced = useReducedMotion();
  const tile = (i: number) => ({
    initial: reduced ? false : { opacity: 0, y: 40, scale: 0.96 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-8% 0px" },
    transition: { duration: 0.9, delay: (i % 3) * 0.08, ease },
  });

  return (
    <section id="about" className="scroll-mt-20 pt-32 sm:pt-44">
      <div className="wrap">
        <p className="label text-cobalt">03 — About</p>
        <h2 className="display mt-5 text-[clamp(3rem,7vw,6.4rem)] font-[500] leading-[0.92]">
          Toolkit &amp; <em className="italic text-cobalt">training.</em>
        </h2>

        <div className="mt-14 grid auto-rows-[minmax(0,auto)] gap-4 md:grid-cols-6">
          <motion.div {...tile(0)} className="rounded-[24px] p-7 md:col-span-4 md:p-9" style={{ background: "var(--ink)", color: "var(--paper)" }}>
            <p className="label" style={{ color: "var(--sun)" }}>
              Education
            </p>
            <h3 className="display mt-3 text-[clamp(1.8rem,3.4vw,2.8rem)] font-[500] leading-tight">{education.school}</h3>
            <p className="mt-1 opacity-75">
              {education.degree} · {education.grad}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div {...tile(1)} className="flex flex-col justify-between rounded-[24px] p-7 md:col-span-2 md:p-9" style={{ background: "var(--cobalt)", color: "var(--paper)" }}>
            <p className="label" style={{ color: "var(--sun)" }}>
              GPA
            </p>
            <p className="display text-[clamp(4rem,9vw,7rem)] font-[600] leading-none">{education.gpa}</p>
            <p className="opacity-80">{education.honors}</p>
          </motion.div>

          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              {...tile(i + 2)}
              className={`rounded-[24px] border border-ink/10 p-7 ${i < 3 ? "md:col-span-2" : "md:col-span-3"}`}
              style={{ background: i === 4 ? "var(--sun)" : "var(--paper-2)" }}
            >
              <p className="display text-xl font-[600] italic">{s.label}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.items.map((it) => (
                  <span key={it} className="rounded-full bg-white/70 px-2.5 py-1 text-[0.88rem] text-ink-2">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div {...tile(7)} className="rounded-[24px] p-7 md:col-span-6 md:p-9" style={{ background: "var(--tomato)", color: "var(--ink)" }}>
            <p className="label">Recognition</p>
            <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {recognition.map((r) => (
                <li key={r} className="display flex items-baseline gap-3 text-[1.25rem] leading-snug">
                  <span aria-hidden>✺</span>
                  {r}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
