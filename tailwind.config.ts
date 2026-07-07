import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Archivo", "system-ui", "sans-serif"],
        sans: ["Instrument Sans", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "#0A1517",
          2: "#0E1B1E",
          3: "#142529",
        },
        line: {
          DEFAULT: "#1C3036",
          2: "#2A454D",
        },
        paper: "#EAE6DB",
        body: "#93A5A2",
        dim: "#5C726F",
        amber: {
          DEFAULT: "#E8A64B",
          dim: "rgba(232,166,75,0.10)",
        },
        cyan: "#63CFC0",
        ok: "#4ED9A0",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
