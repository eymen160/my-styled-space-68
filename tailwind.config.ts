import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    extend: {
      colors: {
        bg:      "#0a0a0a",
        primary: "#f0ece4",
        gold:    "#c9a84c",
        muted:   "rgba(240,236,228,0.45)",
        border:  "rgba(240,236,228,0.08)",
        surface: "rgba(240,236,228,0.04)",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        mono:  ["DM Mono", "JetBrains Mono", "monospace"],
      },
      keyframes: {
        "marquee-scroll": {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        "scale-pulse": {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)" },
          "50%":       { transform: "translate(-50%, -50%) scale(1.04)" },
        },
      },
      animation: {
        "marquee": "marquee-scroll 28s linear infinite",
        "bg-pulse": "scale-pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
