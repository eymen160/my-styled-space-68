import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { cat: "Languages", items: ["Python", "SQL", "Java", "HTML / CSS", "R"], color: "#2563EB" },
  { cat: "AI & ML", items: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "Scikit-learn", "Albumentations"], color: "#9333EA" },
  { cat: "Deep Learning", items: ["U-Net", "ResNet", "CNNs", "DeepLabV3+", "FPN", "Transfer Learning"], color: "#16A34A" },
  { cat: "Tools", items: ["Git", "AWS", "Google Colab", "Flask", "MySQL", "Agile"], color: "#B45309" },
];

const roles = [
  { role: "Undergraduate Research Assistant", org: "Kennesaw State University · NIH-Funded", period: "Sep 2025 – Present", color: "#2563EB", tag: "NIH" },
  { role: "Vice President, GDNC", org: "Global Dev and Networking Club · KSU", period: "2024 – Present", color: "#B45309", tag: "Leadership" },
];

const aiNativeItems = [
  { icon: "⚡", label: "Claude API", desc: "Daily research & coding partner" },
  { icon: "🧠", label: "LLM Integration", desc: "Building AI-native pipelines" },
  { icon: "🔁", label: "NeetCode DSA", desc: "Structured algo practice" },
  { icon: "☁️", label: "AWS Cloud", desc: "Practitioner certification path" },
];

export default function About() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref}
      style={{ background: "#FAF9F6", paddingTop: "clamp(80px, 12vw, 130px)", paddingBottom: "clamp(80px, 12vw, 130px)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "1px", background: "linear-gradient(90deg, transparent, #D0CCC4, transparent)" }} />

      <div className="max-w-[1320px] mx-auto px-6 md:px-14">

        {/* Section heading */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.72 }} className="mb-16">
          <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9B9589", marginBottom: "14px" }}>
            About Me
          </p>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(2.4rem, 6.2vw, 4.8rem)", lineHeight: 0.9, letterSpacing: "-0.025em", color: "#0D0D0D" }}>
            AI-native researcher.<br /><em style={{ color: "#A09484" }}>Computer Scientist.</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">

          {/* Left col */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.72, delay: 0.1 }}
            className="lg:col-span-5 space-y-8">

            {/* Summary card */}
            <div style={{ padding: "28px", borderRadius: "20px", background: "#FFFFFF", border: "1.5px solid #E8E4DE" }}>
              <div className="flex items-center gap-2 mb-4">
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0D0D0D" }} />
                <span style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9B9589" }}>Summary</span>
              </div>
              <div className="space-y-3">
                <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: "0.975rem", lineHeight: 1.8, color: "#3A3A3A" }}>
                  CS junior at <strong style={{ fontWeight: 700, color: "#0D0D0D" }}>Kennesaw State University</strong> — GPA 3.56, Presidential Academic Hardship Scholar, graduating December 2027. I approach computer science the way researchers approach science: with rigor, curiosity, and a drive to push past the current baseline.
                </p>
                <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: "0.975rem", lineHeight: 1.8, color: "#3A3A3A" }}>
                  As part of an NIH-funded lab, I build deep learning models for retinal disease detection that outperform every comparable published benchmark. Alongside research, I explore algorithmic trading through a stacked ML pipeline.
                </p>
                <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: "0.975rem", lineHeight: 1.8, color: "#3A3A3A" }}>
                  I think AI-natively — tools like <strong style={{ fontWeight: 700, color: "#0D0D0D" }}>Claude</strong> and modern LLMs are part of how I research, build, and iterate every day.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#B0AA9E", marginBottom: "12px" }}>
                Experience
              </p>
              <div className="space-y-3">
                {roles.map((r, i) => (
                  <motion.div key={r.role}
                    initial={{ opacity: 0, x: -14 }} animate={iv ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.28 + i * 0.1 }}
                    style={{ display: "flex", gap: "14px", padding: "16px", borderRadius: "14px", border: "1.5px solid #E8E4DE", background: "#FEFEFE" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#C8C2B8"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E4DE"; }}>
                    <div style={{ width: "2px", background: r.color, borderRadius: "2px", minHeight: "48px", flexShrink: 0 }} />
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "0.87rem", color: "#0D0D0D" }}>{r.role}</p>
                        <span style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "2px 7px", borderRadius: "100px", background: r.color + "18", color: r.color }}>{r.tag}</span>
                      </div>
                      <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: "0.8rem", color: "#7A7570" }}>{r.org}</p>
                      <p style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.74rem", color: "#B0AA9E", marginTop: "2px" }}>{r.period}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right col */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.72, delay: 0.2 }}
            className="lg:col-span-7 space-y-3">

            {/* Skills grid */}
            {skills.map((g, gi) => (
              <motion.div key={g.cat}
                initial={{ opacity: 0, y: 16 }} animate={iv ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + gi * 0.07 }}
                style={{ padding: "18px 20px", borderRadius: "16px", border: "1.5px solid #E8E4DE", background: "#FFFFFF" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#C8C2B8"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#E8E4DE"}>
                <div className="flex items-center gap-2.5 mb-3">
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: g.color }} />
                  <span style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: g.color }}>{g.cat}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((skill, si) => (
                    <motion.span key={skill}
                      initial={{ opacity: 0, scale: 0.88 }} animate={iv ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.28, delay: 0.25 + gi * 0.06 + si * 0.022 }}
                      whileHover={{ scale: 1.06, y: -2, transition: { duration: 0.13 } }}
                      style={{ fontFamily: "'Geist', sans-serif", fontWeight: 500, fontSize: "12px", color: "#5A5A5A", background: "#F5F2EC", border: "1px solid #E8E4DE", borderRadius: "100px", padding: "6px 13px", cursor: "default" }}>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* AI-Native bento row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={iv ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ padding: "20px", borderRadius: "16px", border: "1.5px solid #BBF7D0", background: "linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 100%)" }}>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute h-full w-full rounded-full opacity-75" style={{ background: "#16A34A" }} />
                  <span className="relative h-1.5 w-1.5 rounded-full" style={{ background: "#16A34A" }} />
                </span>
                <span style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#16A34A" }}>Currently Building & Learning</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {aiNativeItems.map((item, i) => (
                  <motion.div key={item.label}
                    initial={{ opacity: 0, y: 10 }} animate={iv ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.65 + i * 0.07 }}
                    style={{ padding: "12px", borderRadius: "12px", background: "rgba(255,255,255,0.7)", border: "1px solid #BBF7D0" }}>
                    <div style={{ fontSize: "18px", marginBottom: "6px" }}>{item.icon}</div>
                    <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "11px", color: "#166534" }}>{item.label}</p>
                    <p style={{ fontFamily: "'Geist', sans-serif", fontSize: "10px", color: "#4ADE80", marginTop: "2px" }}>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
