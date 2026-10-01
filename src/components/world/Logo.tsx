import { motion, useReducedMotion } from "framer-motion";


/** A retina fundus standing in for the "o" — the research, hiding in plain sight. */
export function FundusO({ size = "0.74em" }: { size?: string }) {
  return (
    <svg viewBox="0 0 100 100" style={{ width: size, height: size }} aria-hidden className="inline-block align-baseline">
      <defs>
        <radialGradient id="fo-bg" cx="50%" cy="50%" r="55%">
          <stop offset="0" stopColor="#F6A04D" />
          <stop offset=".6" stopColor="#D8532A" />
          <stop offset="1" stopColor="#6E1A0E" />
        </radialGradient>
        <radialGradient id="fo-disc" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#FFF6C9" />
          <stop offset="1" stopColor="#F5C66A" />
        </radialGradient>
        <clipPath id="fo-clip">
          <circle cx="50" cy="50" r="44" />
        </clipPath>
      </defs>
      <circle cx="50" cy="50" r="50" fill="#fff" />
      <circle cx="50" cy="50" r="44" fill="url(#fo-bg)" />
      <g clipPath="url(#fo-clip)" fill="none" stroke="#7A160C" strokeLinecap="round" opacity=".7">
        <path d="M30 48 C 40 32, 58 24, 84 20" strokeWidth="2" />
        <path d="M30 50 C 42 64, 62 74, 88 78" strokeWidth="2" />
        <path d="M30 46 C 27 30, 31 16, 40 5" strokeWidth="1.6" />
        <path d="M30 52 C 24 70, 30 84, 39 96" strokeWidth="1.6" />
        <path d="M54 30 C 63 38, 70 40, 79 37" strokeWidth="1.1" />
        <path d="M56 69 C 64 62, 73 62, 83 65" strokeWidth="1.1" />
      </g>
      <circle cx="30" cy="49" r="9" fill="url(#fo-disc)" />
      <circle cx="61" cy="52" r="5" fill="#8A2410" opacity=".55" />
      <circle cx="61" cy="52" r="11.5" fill="none" stroke="#0D99FF" strokeWidth="1.8" strokeDasharray="3 2.4" />
    </svg>
  );
}

/** "Eymen's world": the script half writes itself in, the bold half pops up letter by letter. */
export default function Logo({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();
  const letters = ["w", "o", "r", "l", "d"];

  return (
    <div className={`flex select-none flex-col items-center leading-none ${className}`}>
      <motion.span
        className="hand relative -mb-[0.32em] text-[clamp(3rem,7.4vw,6.6rem)] font-[600] text-cream"
        style={{ rotate: -6 }}
        initial={reduced ? false : { clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1.3, delay: 0.25, ease: [0.65, 0, 0.35, 1] }}
      >
        Eymen's
        <motion.span
          className="absolute -right-[0.55em] -top-[0.25em] text-[0.55em] text-sun"
          initial={reduced ? false : { scale: 0, rotate: -120 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 12, delay: 1.45 }}
        >
          ✦
        </motion.span>
      </motion.span>
      <span className="round flex items-baseline text-[clamp(5.4rem,13.5vw,12rem)] font-[900] tracking-[-0.04em] text-cream">
        {letters.map((ch, i) =>
          ch === "o" ? (
            <motion.span
              key={i}
              className="mx-[0.02em] inline-flex translate-y-[0.03em]"
              initial={reduced ? false : { scale: 0, rotate: -200 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 13, delay: 0.75 }}
            >
              <FundusO />
            </motion.span>
          ) : (
            <motion.span
              key={i}
              className="inline-block"
              initial={reduced ? false : { y: "60%", opacity: 0, scale: 0.7 }}
              animate={{ y: "0%", opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.55 + i * 0.07 }}
            >
              {ch}
            </motion.span>
          ),
        )}
      </span>
    </div>
  );
}

