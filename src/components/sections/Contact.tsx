import { motion } from "framer-motion";
import Reveal from "../Reveal";

const spring = { type: "spring", stiffness: 300, damping: 22 } as const;

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 section-pad overflow-hidden"
      style={{ background: "var(--bg2)", borderTop: "1px solid var(--line)" }}
    >
      {/* Dot grid echo from the hero */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      <div className="max-w-[760px] mx-auto relative z-10 flex flex-col items-center text-center">

        <Reveal>
          <span
            className="inline-flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full text-[13px] font-medium mb-8"
            style={{ background: "#fff", border: "1px solid var(--line)", color: "var(--body)" }}
          >
            <span className="w-2 h-2 rounded-full flex-shrink-0 pulse-dot" style={{ background: "var(--green)" }} />
            Available now · replies within 24 hours
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            className="font-bold tracking-tight mb-6"
            style={{ fontSize: "clamp(2.6rem, 6.5vw, 4.8rem)", lineHeight: 1.02, letterSpacing: "-0.045em", color: "var(--ink)" }}
          >
            Let's build something{" "}
            <span className="serif" style={{ color: "var(--accent)", fontSize: "1.05em" }}>worth shipping.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="max-w-[480px] text-[15.5px] leading-[1.7] mb-10" style={{ color: "var(--body)" }}>
            Looking for Summer 2026 internships in AI/ML engineering, software
            development, and data analytics. Also open to research collaborations.
            Based in Roswell, GA.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="mailto:ekeyvan@students.kennesaw.edu"
              className="px-8 py-4 rounded-full text-[15px] font-semibold no-underline"
              style={{ background: "var(--accent)", color: "#fff", boxShadow: "0 4px 16px rgba(0,113,227,0.25)" }}
              whileHover={{ scale: 1.045, backgroundColor: "#0077ED", boxShadow: "0 10px 32px rgba(0,113,227,0.35)" }}
              whileTap={{ scale: 0.97 }}
              transition={spring}
            >
              ekeyvan@students.kennesaw.edu
            </motion.a>
            {[
              ["LinkedIn", "https://linkedin.com/in/eymenkeyvan"],
              ["GitHub",   "https://github.com/eymen160"],
            ].map(([label, href]) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full text-[15px] font-semibold no-underline"
                style={{ background: "#fff", border: "1px solid var(--line)", color: "var(--ink)" }}
                whileHover={{ scale: 1.045, borderColor: "var(--line2)", boxShadow: "0 8px 24px rgba(0,0,0,0.07)" }}
                whileTap={{ scale: 0.97 }}
                transition={spring}
              >
                {label} ↗
              </motion.a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
