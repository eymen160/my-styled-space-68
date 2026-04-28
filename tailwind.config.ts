import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Bricolage Grotesque", "system-ui", "sans-serif"],
        sans:    ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        cream:      "#F8F4EC",
        "cream-dark": "#EDE8DC",
        "cream-mid":  "#F2EDE3",
        navy:       "#0C1929",
        "navy-mid": "#1A2F4A",
        gold:       "#C4933F",
        "gold-light": "#F5EDD8",
      },
      maxWidth: {
        container: "1160px",
      },
      borderRadius: {
        xl:  "12px",
        "2xl": "16px",
      },
    },
  },
  plugins: [],
};

export default config;
