import { motion, useReducedMotion } from "framer-motion";
import Magnetic from "../Magnetic";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const reduced = useReducedMotion() ?? false;
  const fade = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section id="contact" className="section-pad" style={{ background: "var(--bg)" }}>
      <div className="max-w-container mx-auto text-center">
        <motion.p
          {...fade(0)}
          className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full text-[13px] font-medium"
          style={{ background: "var(--card2)", border: "1px solid var(--border)", color: "var(--body)" }}
        >
          <span className="w-2 h-2 rounded-full flex-shrink-0 pulse-dot" style={{ background: "var(--ok)" }} />
          Available for Summer 2027 internships
        </motion.p>

        <motion.h2
          {...fade(0.1)}
          className="font-extrabold glow mb-7"
          style={{ fontSize: "clamp(2.6rem, 7vw, 5.2rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
        >
          Let’s build something{" "}
          <em className="serif italic font-normal" style={{ color: "var(--warm)" }}>together</em>
        </motion.h2>

        <motion.p
          {...fade(0.2)}
          className="text-base md:text-lg leading-[1.85] mb-12 mx-auto"
          style={{ color: "var(--body)", maxWidth: 520 }}
        >
          Looking for Summer 2027 internships in AI/ML engineering, software
          development, and data analytics. Open to research collaborations —
          I reply within 24 hours.
        </motion.p>

        <motion.div {...fade(0.3)} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Magnetic>
            <a href="mailto:ekeyvan@students.kennesaw.edu" className="pill pill-solid">
              Say hello ✉
            </a>
          </Magnetic>
          <Magnetic>
            <a href="/resume/EYMEN_KEYVAN_RESUME.pdf" target="_blank" rel="noopener noreferrer" className="pill pill-outline">
              Resume ↗
            </a>
          </Magnetic>
        </motion.div>

        <motion.div {...fade(0.4)} className="flex flex-wrap items-center justify-center gap-7">
          {[
            ["ekeyvan@students.kennesaw.edu", "mailto:ekeyvan@students.kennesaw.edu"],
            ["GitHub", "https://github.com/eymen160"],
            ["LinkedIn", "https://linkedin.com/in/eymenkeyvan"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="link-hover text-sm font-medium"
              style={{ color: "var(--muted)" }}
            >
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
