import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const ease = [0.16, 1, 0.3, 1] as const;

const CHANNELS = [
  { label: "Email", value: "ekeyvan@students.kennesaw.edu", href: "mailto:ekeyvan@students.kennesaw.edu" },
  { label: "LinkedIn", value: "linkedin.com/in/eymenkeyvan", href: "https://linkedin.com/in/eymenkeyvan" },
  { label: "GitHub", value: "github.com/eymen160", href: "https://github.com/eymen160" },
  { label: "Resume", value: "Download PDF", href: "/resume/EYMEN_KEYVAN_RESUME.pdf" },
];

export default function Contact() {
  const reduced = useReducedMotion() ?? false;
  return (
    <section id="contact" className="section-pad" style={{ background: "var(--ink2)", borderTop: "1px solid var(--line)" }}>
      <div className="max-w-container mx-auto">
        <SectionHeader index="04" label="Contact" meta="Response < 24 hours · Roswell, GA" title="Open to Summer 2027 internships" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left — the pitch */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="mono-label flex items-center gap-2.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 pulse-dot" style={{ background: "var(--ok)" }} />
              <span style={{ color: "var(--ok)" }}>Available now</span>
            </p>
            <p className="text-base leading-[1.85] mb-5" style={{ color: "var(--body)", maxWidth: 440 }}>
              Actively looking for{" "}
              <strong style={{ color: "var(--paper)", fontWeight: 600 }}>Summer 2027 internships</strong>{" "}
              in AI/ML engineering, software development, and data analytics.
              Open to research collaborations.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: "var(--dim)", maxWidth: 440 }}>
              If you're hiring engineers who verify their own results before
              publishing them, we should talk.
            </p>
          </motion.div>

          {/* Right — channel ledger */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            style={{ borderTop: "1px solid var(--line)" }}
          >
            {CHANNELS.map(c => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 no-underline py-5 group transition-colors duration-200"
                style={{ borderBottom: "1px solid var(--line)" }}
              >
                <span className="mono-label" style={{ fontSize: 10, minWidth: 76 }}>{c.label}</span>
                <span
                  className="font-mono text-sm flex-1 text-right transition-colors duration-200 group-hover:!text-[var(--amber)]"
                  style={{ color: "var(--paper)", wordBreak: "break-all" }}
                >
                  {c.value}
                </span>
                <span className="font-mono text-sm flex-shrink-0" style={{ color: "var(--amber)" }}>↗</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
