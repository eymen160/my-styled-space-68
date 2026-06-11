import { useEffect, useState } from "react";
import { smoothScrollTo } from "../../lib/scrollTo";

function LocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit", minute: "2-digit",
        hour12: true, timeZone: "America/New_York",
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="text-[13px] tabular-nums" style={{ color: "var(--muted)" }}>
      Atlanta, GA · {time} ET
    </span>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative z-10 py-8 px-5 sm:px-8"
      style={{ background: "var(--bg2)", borderTop: "1px solid var(--line)" }}
    >
      <div className="max-w-[1120px] mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="text-[13px]" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} Eymen Faruk Keyvan
        </p>
        <LocalTime />
        <button
          onClick={() => smoothScrollTo(null)}
          className="text-[13px] font-medium bg-transparent border-none cursor-pointer transition-colors duration-200"
          style={{ color: "var(--body)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--body)")}
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
