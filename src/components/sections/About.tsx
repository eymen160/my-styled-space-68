import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { cat: "Languages", items: ["Python", "SQL", "Java", "HTML / CSS", "R"], color: "#2563EB" },
  { cat: "AI and ML Frameworks", items: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "Scikit-learn", "Albumentations"], color: "#9333EA" },
  { cat: "Deep Learning", items: ["U-Net", "ResNet", "CNNs", "DeepLabV3+", "FPN", "Transfer Learning"], color: "#16A34A" },
  { cat: "Tools and Platforms", items: ["Git", "AWS", "Google Colab", "Flask", "MySQL", "Agile"], color: "#B45309" },
];

const roles = [
  { role: "Undergraduate Research Assistant", org: "Kennesaw State University · NIH-Funded", period: "Sep 2025 to Present", color: "#2563EB", tag: "NIH" },
  { role: "Vice President, GDNC", org: "Global Dev and Networking Club at KSU", period: "2024 to Present", color: "#B45309", tag: "Leadership" },
];

export default function About() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} style={{ background: "#FAF9F6", paddingTop: "clamp(80px, 12vw, 130px)", paddingBottom: "clamp(80px, 12vw, 130px)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "500px", height: "1px", background: "linear-gradient(90deg, transparent, #D0CCC4, transparent)" }} />

      <div className="max-w-[1320px] mx-auto px-6 md:px-14">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={iv ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.72 }} className="mb-16">
          <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9B9589", marginBottom: "16px" }}>
            About Me
          </p>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(2.5rem, 6.5vw, 5rem)", lineHeight: 0.9, letterSpacing: "-0.025em", color: "#0D0D0D" }}>
            AI-native researcher.<br /><em style={{ color: "#A09484" }}>Computer Scientist.</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -28 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.72, delay: 0.12 }} className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: "1.05rem", lineHeight: 1.82, color: "#3A3A3A" }}>
                CS junior at <strong style={{ fontWeight: 700, color: "#0D0D0D" }}>Kennesaw State University</strong> — GPA 3.56, Presidential Academic Hardship Scholar, graduating December 2027. I approach computer science the way researchers approach science: with rigor, curiosity, and a drive to push past the current baseline.
              </p>
              <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: "1.05rem", lineHeight: 1.82, color: "#3A3A3A" }}>
                As part of an NIH-funded lab, I build deep learning models for retinal disease detection that outperform every comparable published benchmark. Alongside research, I explore algorithmic trading through a stacked ML pipeline and actively build my problem-solving foundation through structured algorithms study.
              </p>
              <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: "1.05rem", lineHeight: 1.82, color: "#3A3A3A" }}>
                I think AI-natively — tools like <strong style={{ fontWeight: 700, color: "#0D0D0D" }}>Claude</strong> and modern LLMs are part of how I research, build, and iterate. I'm not just learning to use AI; I'm building a career at its frontier.
              </p>
            </div>

            {/* Experience */}
            <div>
              <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#B0AA9E", marginBottom: "14px" }}>
                Experience
              </p>
              <div className="space-y-3">
                {roles.map((r, i) => (
                  <motion.div key={r.role}
                    initial={{ opacity: 0, x: -16 }} animate={iv ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
                    style={{ display: "flex", gap: "14px", padding: "16px", borderRadius: "14px", border: "1.5px solid #E8E4DE", background: "#FEFEFE" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#C8C2B8"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E4DE"; }}>
                    <div style={{ width: "2px", background: r.color, borderRadius: "2px", minHeight: "48px", flexShrink: 0 }} />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "#0D0D0D" }}>{r.role}</p>
                        <span style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "2px 7px", borderRadius: "100px", background: r.color + "18", color: r.color }}>{r.tag}</span>
                      </div>
                      <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: "0.8rem", color: "#7A7570" }}>{r.org}</p>
                      <p style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.75rem", color: "#B0AA9E", marginTop: "2px" }}>{r.period}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, x: 28 }} animate={iv ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.72, delay: 0.22 }} className="lg:col-span-7 space-y-3">
            {skills.map((g, gi) => (
              <motion.div key={g.cat}
                initial={{ opacity: 0, y: 18 }} animate={iv ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.28 + gi * 0.08 }}
                style={{ padding: "20px", borderRadius: "16px", border: "1.5px solid #E8E4DE", background: "#FFFFFF" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#C8C2B8"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#E8E4DE"}>
                <div className="flex items-center gap-2.5 mb-4">
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: g.color }} />
                  <span style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: g.color }}>{g.cat}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((skill, si) => (
                    <motion.span key={skill}
                      initial={{ opacity: 0, scale: 0.88 }} animate={iv ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.28 + gi * 0.07 + si * 0.025 }}
                      whileHover={{ scale: 1.07, y: -2, transition: { duration: 0.14 } }}
                      style={{ fontFamily: "'Geist', sans-serif", fontWeight: 500, fontSize: "12px", color: "#5A5A5A", background: "#F5F2EC", border: "1px solid #E8E4DE", borderRadius: "100px", padding: "7px 14px", cursor: "default" }}>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Currently learning */}
            <motion.div
              initial={{ opacity: 0, y: 18 }} animate={iv ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.62 }}
              style={{ padding: "20px", borderRadius: "16px", border: "1.5px solid #BBF7D0", background: "#F0FDF4" }}>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute h-full w-full rounded-full opacity-75" style={{ background: "#16A34A" }} />
                  <span className="relative h-1.5 w-1.5 rounded-full" style={{ background: "#16A34A" }} />
                </span>
                <span style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#16A34A" }}>Currently Pursuing</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["AWS Cloud Practitioner", "NeetCode · DSA Patterns", "Claude API Development", "Graph ML", "DeepLabV3+ Benchmarking"].map(item => (
                  <span key={item} style={{ fontFamily: "'Geist', sans-serif", fontWeight: 500, fontSize: "12px", color: "#166534", background: "#DCFCE7", border: "1px solid #86EFAC", borderRadius: "100px", padding: "7px 14px" }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
