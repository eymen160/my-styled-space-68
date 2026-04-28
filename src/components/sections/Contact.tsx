import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const spring = { type: "spring", stiffness: 300, damping: 22 } as const;

const INFO_CARDS = [
  { label: "Location",  value: "Roswell, GA",   sub: "United States" },
  { label: "Response",  value: "< 24 hours",    sub: "Average reply time" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section heading */}
        <div className="relative mb-16 overflow-hidden">
          <span
            className="display font-extrabold absolute select-none pointer-events-none"
            style={{
              fontSize: "clamp(8rem, 20vw, 16rem)",
              lineHeight: 1,
              color: "rgba(255,255,255,0.025)",
              top: "-0.18em",
              left: "-0.04em",
              letterSpacing: "-0.05em",
            }}
          >
            04
          </span>
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease }}
            >
              <p className="eyebrow mb-3">04 — Contact</p>
              <h2
                className="display font-extrabold tracking-tight"
                style={{ fontSize: "clamp(2.4rem, 6.5vw, 6.5rem)", lineHeight: 0.97, color: "var(--text)", letterSpacing: "-0.035em" }}
              >
                Let's work<br />
                <em style={{ color: "var(--lime)", fontStyle: "italic" }}>together.</em>
              </h2>
              <motion.div
                style={{ height: 1, background: "var(--lime)", transformOrigin: "left", marginTop: 24, maxWidth: 240 }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.1, delay: 0.25, ease }}
              />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Left column */}
          <motion.div
            className="flex flex-col gap-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Status card */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
              className="card p-7"
            >
              <p className="eyebrow mb-4" style={{ fontSize: 10 }}>Status</p>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2 h-2 rounded-full flex-shrink-0 pulse-dot" style={{ background: "var(--green)" }} />
                <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>Available Now</span>
              </div>
              <p
                className="display font-bold tracking-tight mb-1.5"
                style={{ fontSize: "1.3rem", color: "var(--text)", letterSpacing: "-0.02em" }}
              >
                Summer 2026 Internship
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>AI/ML · Software Engineering · Data Analytics</p>
            </motion.div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-3">
              {INFO_CARDS.map(c => (
                <motion.div
                  key={c.label}
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
                  className="card p-5"
                >
                  <p className="eyebrow mb-3" style={{ fontSize: 10 }}>{c.label}</p>
                  <p
                    className="display font-bold tracking-tight mb-1"
                    style={{ fontSize: "1rem", color: "var(--text)", letterSpacing: "-0.01em" }}
                  >
                    {c.value}
                  </p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{c.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Resume download */}
            <motion.a
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
              href="/resume/EYMEN_KEYVAN_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 no-underline flex items-center justify-between"
              whileHover={{ y: -3, borderColor: "var(--lime)", boxShadow: "0 12px 40px rgba(0,0,0,0.4)" }}
              transition={spring}
            >
              <div>
                <p className="eyebrow mb-2" style={{ fontSize: 10 }}>Resume</p>
                <p
                  className="display font-bold tracking-tight"
                  style={{ fontSize: "1.1rem", color: "var(--text)", letterSpacing: "-0.02em" }}
                >
                  Download PDF
                </p>
              </div>
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center text-base"
                style={{ background: "var(--lime-dim)", color: "var(--lime)", border: "1px solid rgba(200,255,62,0.2)" }}
              >
                ↗
              </span>
            </motion.a>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.14, ease }}
            className="card p-8 flex flex-col gap-7"
          >
            <p className="eyebrow" style={{ fontSize: 10 }}>Get in touch</p>

            <p className="text-base leading-[1.85]" style={{ color: "var(--body)" }}>
              Actively looking for{" "}
              <strong style={{ color: "var(--text)", fontWeight: 700 }}>Summer 2026 internships</strong>{" "}
              in AI/ML engineering, software development, and data analytics. Open to research collaborations.
            </p>

            {/* Email */}
            <div>
              <p className="eyebrow mb-3" style={{ fontSize: 10 }}>Email</p>
              <a
                href="mailto:ekeyvan@students.kennesaw.edu"
                className="link-hover display font-bold tracking-tight"
                style={{
                  fontSize: "clamp(0.95rem, 1.8vw, 1.35rem)",
                  color: "var(--text)",
                  letterSpacing: "-0.02em",
                  display: "block",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--lime)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text)")}
              >
                ekeyvan@students.kennesaw.edu ↗
              </a>
            </div>

            {/* Profiles */}
            <div>
              <p className="eyebrow mb-3" style={{ fontSize: 10 }}>Profiles</p>
              <div className="flex gap-2 flex-wrap">
                {[
                  ["LinkedIn", "https://linkedin.com/in/eymenkeyvan"],
                  ["GitHub",   "https://github.com/eymen160"],
                ].map(([label, href]) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium no-underline px-5 py-2.5 rounded-lg"
                    style={{ border: "1px solid var(--border)", color: "var(--body)", background: "transparent" }}
                    whileHover={{ borderColor: "var(--lime)", color: "var(--lime)", background: "var(--lime-dim)" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    {label} ↗
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
