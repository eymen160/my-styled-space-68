import { profile } from "../content/site";
import Magnetic from "./motion/Magnetic";
import Reveal from "./motion/Reveal";
import { motion, useReducedMotion } from "framer-motion";
import { ease } from "../lib/motion";

export default function Contact() {
  const reduced = useReducedMotion();

  return (
    <section id="contact" className="scroll-mt-20 pt-28 sm:pt-40">
      <div className="wrap">
        <div className="rounded-[2rem] px-6 py-16 sm:px-14 sm:py-24" style={{ background: "#16150F", color: "#F4F1EA", border: "1px solid var(--rule)" }}>
          <p className="label mb-8" style={{ color: "rgba(244,241,234,0.6)" }}>
            <span style={{ color: "#8599FF" }}>04</span> — Contact
          </p>
          <motion.h2
            className="display text-[clamp(2.6rem,7.5vw,6.4rem)] font-[360] leading-[0.95]"
            initial={reduced ? false : "hidden"}
            whileInView="shown"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            <InView>Hiring for Summer 2027?</InView>
            <InView delay={0.08}>
              <em className="italic" style={{ color: "#8599FF" }}>
                Let's talk.
              </em>
            </InView>
          </motion.h2>

          <Reveal delay={0.15}>
            <a
              href={`mailto:${profile.email}`}
              className="mt-12 inline-block break-all font-mono text-[clamp(1rem,2.6vw,1.6rem)] underline decoration-1 underline-offset-8 transition-colors hover:text-[#8599FF]"
            >
              {profile.email}
            </a>
            <p className="mt-5 max-w-xl leading-relaxed" style={{ color: "rgba(244,241,234,0.72)" }}>
              {profile.location} · {profile.relocation}. Looking for a {profile.seeking}.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Magnetic>
                <a href={profile.resume} target="_blank" rel="noopener" className="pill" style={{ background: "#8599FF", color: "#16150F" }}>
                  Download resume ↓
                </a>
              </Magnetic>
              <Magnetic>
                <a href={profile.linkedin} target="_blank" rel="noopener" className="pill border" style={{ borderColor: "rgba(244,241,234,0.3)" }}>
                  LinkedIn ↗
                </a>
              </Magnetic>
              <Magnetic>
                <a href={profile.github} target="_blank" rel="noopener" className="pill border" style={{ borderColor: "rgba(244,241,234,0.3)" }}>
                  GitHub ↗
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InView({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
      <motion.span className="block" variants={{ hidden: { y: "108%" }, shown: { y: "0%" } }} transition={{ duration: 1.05, delay, ease }}>
        {children}
      </motion.span>
    </span>
  );
}
