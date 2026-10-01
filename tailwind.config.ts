import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
        mono: ["Geist Mono", "ui-monospace", "monospace"],
      },
      colors: {
        night: "rgb(12 21 48 / <alpha-value>)",
        cream: "rgb(243 238 227 / <alpha-value>)",
        wall: "var(--wall)",
        ink: "rgb(20 19 18 / <alpha-value>)",
        "ink-2": "var(--ink-2)",
        "ink-3": "var(--ink-3)",
        sun: "rgb(255 216 77 / <alpha-value>)",
        cobalt: "var(--cobalt)",
        sky: "var(--sky)",
        mint: "var(--mint)",
        tomato: "var(--tomato)",
      },
      maxWidth: {
        page: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
