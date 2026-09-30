import { motion, useReducedMotion } from "framer-motion";
import { education, recognition, skills } from "../content/site";
import { ease } from "../lib/motion";
import SectionTitle from "./SectionTitle";
import Reveal from "./motion/Reveal";

export default function About() {
  const reduced = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-20 pt-28 sm:pt-40">
      <div className="wrap">
        <SectionTitle num="03" label="About" title={<>Toolkit &amp; training.</>} />

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* education + recognition */}
          <div className="space-y-12">
            <Reveal>
              <div className="rounded-2xl border hairline p-7 sm:p-9" style={{ background: "var(--paper-2)" }}>
                <p className="label mb-4">Education</p>
                <h3 className="display text-3xl font-[420] leading-tight">{education.school}</h3>
                <p className="mt-2 text-ink-2">
                  {education.degree} · {education.grad}
                </p>
                <div className="mt-7 grid grid-cols-2 gap-6 border-t hairline pt-6">
                  <div>
                    <p className="label mb-1">GPA</p>
                    <p className="display text-4xl text-accent">{education.gpa}</p>
                  </div>
                  <div>
                    <p className="label mb-1">Honors</p>
                    <p className="mt-2 leading-snug">{education.honors}</p>
                  </div>
                </div>
                <p className="label mb-3 mt-7">Relevant coursework</p>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((c) => (
                    <span key={c} className="chip">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="label mb-4">Recognition</p>
              <ul className="divide-y divide-[var(--rule)] border-y hairline">
                {recognition.map((r) => (
                  <li key={r} className="flex items-center gap-4 py-4">
                    <span aria-hidden className="text-accent">
                      ✦
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* skills */}
          <div>
            <p className="label mb-6">Skills</p>
            <dl>
              {skills.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="grid gap-3 border-t hairline py-6 sm:grid-cols-[9rem_1fr] sm:gap-6"
                  initial={reduced ? false : { opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-5% 0px" }}
                  transition={{ duration: 0.8, delay: i * 0.07, ease }}
                >
                  <dt className="display text-lg italic">{s.label}</dt>
                  <dd className="flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span key={it} className="rounded-md px-2.5 py-1 text-[0.92rem] text-ink-2 transition-colors hover:text-ink" style={{ background: "var(--paper-2)" }}>
                        {it}
                      </span>
                    ))}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
