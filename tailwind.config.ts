import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#4D6479",
        "bg-secondary": "#597286",
        "panel-dark": "#3A4855",
        dark: "#252E35",
        "section-light": "#F5F5F6",
        "text-light": "#FFFFFF",
        "text-primary": "#F5F5F6",
        "text-muted": "#B0BAC5",
        "text-secondary": "#8E9EAD",
        accent: "#F4852C",
        "accent-warm": "#E7A54C",
        "accent-soft": "#F3CE9E",
        border: "#728799"
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "Montserrat", "system-ui", "sans-serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "Montserrat", "system-ui", "sans-serif"],
        body: ["var(--font-montserrat)", "Montserrat", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(37, 46, 53, 0.16)",
        panel: "0 18px 46px rgba(37, 46, 53, 0.26)"
      }
    }
  },
  plugins: []
};

export default config;
