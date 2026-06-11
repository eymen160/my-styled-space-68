import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "../Magnetic";
import { smoothScrollTo } from "../../lib/scrollTo";

const LINKS = [
  ["GitHub",   "https://github.com/eymen160"],
  ["LinkedIn", "https://linkedin.com/in/eymenkeyvan"],
  ["Email",    "mailto:ekeyvan@students.kennesaw.edu"],
] as const;

function LocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        hour12: true, timeZone: "America/New_York",
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="text-xs tabular-nums" style={{ color: "var(--muted)", fontVariantNumeric: "tabular-nums" }}>
      Atlanta, GA — {time} ET
    </span>
  );
}

export default function Footer() {
  return (
    <footer
      className="py-10 px-5 sm:px-8"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <button
            onClick={() => smoothScrollTo(null)}
            className="display font-extrabold text-base bg-transparent border-none cursor-pointer transition-colors duration-200"
            style={{ color: "var(--faint)", fontStyle: "italic", letterSpacing: "-0.02em" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--lime)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--faint)")}
          >
            EFK
          </button>

          <div className="flex gap-6">
            {LINKS.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs no-underline transition-colors duration-200 link-hover"
                style={{ color: "var(--muted)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--lime)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              >
                {label}
              </a>
            ))}
          </div>

          <Magnetic strength={0.4}>
            <motion.button
              onClick={() => smoothScrollTo(null)}
              className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer text-base"
              style={{ background: "transparent", border: "1px solid var(--border2)", color: "var(--body)" }}
              whileHover={{ borderColor: "var(--lime)", color: "var(--lime)", y: -2 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              aria-label="Back to top"
            >
              ↑
            </motion.button>
          </Magnetic>
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-3 pt-5"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs tracking-wide" style={{ color: "var(--faint)" }}>
            © {new Date().getFullYear()} Eymen Faruk Keyvan · CS @ KSU
          </p>
          <LocalTime />
        </div>
      </div>
    </footer>
  );
}
