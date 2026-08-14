import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0B0C0E",
        panel: "#17181C",
        raised: "#1F2024",
        hairline: "#2A2B30",
        ink: "#EDEBE6",
        muted: "#8B8B92",
        amber: {
          DEFAULT: "#E8A33D",
          soft: "#3A2C17",
          dim: "#B77E2B",
        },
        cyan: {
          DEFAULT: "#4FD1C5",
          soft: "#123330",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "12px",
      },
      boxShadow: {
        panel: "0 0 0 1px rgba(255,255,255,0.03) inset",
      },
    },
  },
  plugins: [],
};
export default config;
