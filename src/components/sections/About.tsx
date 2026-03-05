import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { cat: "Languages", items: ["Python", "SQL", "Java", "HTML/CSS", "R"], dot: "#2563EB" },
  { cat: "AI / ML", items: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "Scikit-learn", "Albumentations"], dot: "#9333EA" },
  { cat: "Deep Learning", items: ["U-Net", "ResNet", "CNNs", "DeepLabV3+", "FPN", "Transfer Learning"], dot: "#16A34A" },
  { cat: "Tools", items: ["Git", "AWS", "Google Colab", "Flask", "MySQL", "Agile"], dot: "#B45309" },
];

const experience = [
  { role: "Undergraduate Research Assistant", org: "KSU — NIH-Funded Lab", period: "Sep 2025 – Present", dot: "#2563EB" },
  { role: "Vice President", org: "Global Dev & Networking Club", period: "2024 – Present", dot: "#B45309" },
  { role: "Capitol Hill AI Demo Day", org: "Washington D.C. — Featured Presenter", period: "2025", dot: "#9333EA" },
];

export default function About() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  const fadeLeft = (d = 0) => ({
    hidden: { opacity: 0, x: -28 },
    show: { opacity: 1, x: 0, transition: { duration: 0.72, delay: d, ease: [0.16, 1, 0.3, 1] } },
  });
  const fadeRight = (d = 0) => ({
    hidden: { opacity: 0, x: 28 },
    show: { opacity: 1, x: 0, transition: { duration: 0.72, delay: d, ease: [0.16, 1, 0.3, 1] } },
  });

  return (
    <section id="about" className="relative py-24 md:py-32" style={{ background: "#FAF9F6" }} ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px" style={{ background: "linear-gradient(90deg, transparent, #D0CCC4, transparent)" }} />

      <div className="max-w-[1360px] mx-auto px-6 md:px-14 relative z-10">
        <motion.div
          variants={fadeLeft()} initial="hidden" animate={iv ? "show" : "hidden"}
          className="mb-16"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] block mb-4" style={{ color: "#9B9589" }}>About Me</span>
          <h2 className="leading-[0.9] tracking-[-0.025em] max-w-2xl" style={{ fontSize: "clamp(2.4rem,6vw,5rem)", fontFamily: "'Playfair Display', serif", color: "#0D0D0D" }}>
            Built for the<br />
            <em style={{ color: "#6B6B6B" }}>intersection</em> of AI &amp; medicine
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <motion.div variants={fadeLeft(0.12)} initial="hidden" animate={iv ? "show" : "hidden"} className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <p className="text-[1rem] leading-[1.82] font-light" style={{ color: "#4A4A4A" }}>
                I'm a CS junior at <span className="font-semibold" style={{ color: "#0D0D0D" }}>Kennesaw State University</span> (GPA 3.56, Presidential Scholar), graduating December 2027. My research focuses on medical image segmentation with deep learning.
              </p>
              <p className="text-[1rem] leading-[1.82] font-light" style={{ color: "#4A4A4A" }}>
                As part of an NIH-funded lab, I build and train <span className="font-semibold" style={{ color: "#0D0D0D" }}>U-Net architectures</span> for retinal disease detection that outperform every comparable published benchmark. Outside research, I explore algorithmic trading and run a small UV printing business.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] mb-4" style={{ color: "#B0AA9E" }}>Experience</p>
              {experience.map((e, i) => (
                <motion.div
                  key={e.role}
                  initial={{ opacity: 0, x: -16 }}
                  animate={iv ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.28 + i * 0.09 }}
                  className="group flex gap-4 p-4 rounded-xl border transition-all duration-300"
                  style={{ borderColor: "#E5E2DC", background: "#FEFEFE" }}
                  onMouseEnter={(el) => { el.currentTarget.style.borderColor = "#D0CCC4"; el.currentTarget.style.background = "#FFFFFF"; }}
                  onMouseLeave={(el) => { el.currentTarget.style.borderColor = "#E5E2DC"; el.currentTarget.style.background = "#FEFEFE"; }}
                >
                  <div className="w-0.5 rounded-full shrink-0" style={{ background: e.dot, minHeight: "40px" }} />
                  <div>
                    <p className="text-[0.875rem] font-semibold leading-snug" style={{ color: "#0D0D0D" }}>{e.role}</p>
                    <p className="text-[0.78rem] font-light mt-0.5" style={{ color: "#7A7570" }}>{e.org}</p>
                    <p className="text-[0.72rem] mt-0.5" style={{ color: "#B0AA9E" }}>{e.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — skills */}
          <motion.div variants={fadeRight(0.2)} initial="hidden" animate={iv ? "show" : "hidden"} className="lg:col-span-7 space-y-3">
            {skills.map((g, gi) => (
              <motion.div
                key={g.cat}
                initial={{ opacity: 0, y: 18 }}
                animate={iv ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.24 + gi * 0.08 }}
                className="p-5 rounded-2xl border transition-all duration-300"
                style={{ borderColor: "#E5E2DC", background: "#FFFFFF" }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = "#D0CCC4"}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E2DC"}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: g.dot }} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: g.dot }}>{g.cat}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.88 }}
                      animate={iv ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.28 + gi * 0.07 + si * 0.025 }}
                      whileHover={{ scale: 1.07, y: -2, transition: { duration: 0.14 } }}
                      className="px-3.5 py-1.5 rounded-full text-[11px] font-medium border transition-colors duration-200 cursor-default"
                      style={{ borderColor: "#E5E2DC", color: "#5A5A5A", background: "#F8F6F1" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Currently pursuing */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={iv ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.6 }}
              className="p-5 rounded-2xl border"
              style={{ borderColor: "#BBF7D0", background: "#F0FDF4" }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute h-full w-full rounded-full opacity-75" style={{ background: "#16A34A" }} />
                  <span className="relative h-1.5 w-1.5 rounded-full" style={{ background: "#16A34A" }} />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: "#16A34A" }}>Currently Pursuing</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["AWS Cloud Practitioner", "LeetCode Patterns", "Graph ML", "DeepLabV3+ Benchmarking"].map((item) => (
                  <span key={item} className="px-3.5 py-1.5 rounded-full text-[11px] font-medium border" style={{ borderColor: "#86EFAC", color: "#166534", background: "#DCFCE7" }}>
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
