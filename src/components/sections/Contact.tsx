import { motion } from "framer-motion";

const CARDS = [
  { label: "Location",  value: "Roswell, GA",   sub: "United States" },
  { label: "Response",  value: "< 24 hours",    sub: "Average reply time" },
];

const cardAnim = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad"
      style={{ background: "var(--cream-mid)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1160px] mx-auto">

        {/* Heading */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-4">04 — Contact</p>
          <h2
            className="display font-extrabold tracking-tight"
            style={{ fontSize: "clamp(2.4rem,6vw,5rem)", lineHeight: 1.0, color: "var(--navy)", letterSpacing: "-0.03em" }}
          >
            Let's work<br />
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>together.</span>
          </h2>
          <div
            className="mt-5"
            style={{
              height: 2,
              width: "min(260px,40vw)",
              background: "var(--gold)",
              borderRadius: 1,
              transformOrigin: "left",
              animation: "lineGrow 1s cubic-bezier(0.16,1,0.3,1) 0.3s both",
              opacity: 0.7,
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Left column */}
          <motion.div
            className="flex flex-col gap-3"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Status card */}
            <motion.div variants={cardAnim} className="card p-7">
              <p className="eyebrow mb-4" style={{ fontSize: 10 }}>Status</p>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-600 pulse-dot flex-shrink-0" />
                <span className="text-sm font-semibold" style={{ color: "var(--navy)" }}>Available Now</span>
              </div>
              <p
                className="display font-bold tracking-tight mb-1.5"
                style={{ fontSize: "1.3rem", color: "var(--navy)", letterSpacing: "-0.02em" }}
              >
                Summer 2026 Internship
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>AI/ML · Software Engineering · Data Analytics</p>
            </motion.div>

            {/* Location + Response */}
            <div className="grid grid-cols-2 gap-3">
              {CARDS.map(c => (
                <motion.div key={c.label} variants={cardAnim} className="card p-5">
                  <p className="eyebrow mb-3" style={{ fontSize: 10 }}>{c.label}</p>
                  <p
                    className="display font-bold tracking-tight mb-1"
                    style={{ fontSize: "1rem", color: "var(--navy)", letterSpacing: "-0.01em" }}
                  >
                    {c.value}
                  </p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{c.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Resume */}
            <motion.a
              variants={cardAnim}
              href="https://eymenkeyvan.com/resume/EYMEN_KEYVAN_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 no-underline flex items-center justify-between"
              whileHover={{ y: -3, borderColor: "var(--gold)", boxShadow: "0 12px 36px rgba(12,25,41,0.08)" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div>
                <p className="eyebrow mb-2" style={{ fontSize: 10 }}>Resume</p>
                <p
                  className="display font-bold tracking-tight"
                  style={{ fontSize: "1.1rem", color: "var(--navy)", letterSpacing: "-0.02em" }}
                >
                  Download PDF
                </p>
              </div>
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center text-base"
                style={{ background: "var(--gold-light)", color: "var(--gold)", border: "1px solid rgba(196,147,63,0.3)" }}
              >
                ↗
              </span>
            </motion.a>
          </motion.div>

          {/* Right column */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="card p-8 flex flex-col gap-7 flex-1">
              <p className="eyebrow" style={{ fontSize: 10 }}>Get in touch</p>

              <p className="text-base leading-[1.85]" style={{ color: "var(--body)" }}>
                Actively looking for{" "}
                <strong style={{ color: "var(--navy)", fontWeight: 700 }}>Summer 2026 internships</strong>{" "}
                in AI/ML engineering, software development, and data analytics. Open to research collaborations.
              </p>

              {/* Email */}
              <div>
                <p className="eyebrow mb-3" style={{ fontSize: 10 }}>Email</p>
                <a
                  href="mailto:ekeyvan@students.kennesaw.edu"
                  className="link-hover display font-bold tracking-tight"
                  style={{
                    fontSize: "clamp(1rem,2vw,1.35rem)",
                    color: "var(--navy)",
                    letterSpacing: "-0.02em",
                    display: "block",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--navy)")}
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
                      style={{
                        border: "1.5px solid var(--border)",
                        color: "var(--navy)",
                        background: "transparent",
                      }}
                      whileHover={{ borderColor: "var(--gold)", color: "var(--gold)", background: "var(--gold-light)" }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                    >
                      {label} ↗
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
