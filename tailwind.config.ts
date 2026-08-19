import type { Config } from "tailwindcss";

/**
 * "Organic" design system — warm cream ground, terracotta accent, olive
 * secondary, Caprasimo display + Figtree body. Semantic roles are CSS
 * variables (swapped for dark mode in globals.css); the tonal ramps are
 * static so they can be reached directly when a specific step is wanted.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic roles — theme-aware.
        page: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        surface2: "rgb(var(--color-surface-2) / <alpha-value>)",
        ink: "rgb(var(--color-text) / <alpha-value>)",
        divider: "var(--color-divider)",
        onaccent: "rgb(var(--color-on-accent) / <alpha-value>)",
        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          solid: "rgb(var(--color-accent-solid) / <alpha-value>)",
          soft: "rgb(var(--color-accent-soft-bg) / <alpha-value>)",
          softfg: "rgb(var(--color-accent-soft-text) / <alpha-value>)",
          100: "#fff2eb",
          200: "#ffe1d0",
          300: "#ffc6a5",
          400: "#f6a06b",
          500: "#d67f48",
          600: "#b2622d",
          700: "#8c491a",
          800: "#643312",
          900: "#402310",
        },
        olive: {
          DEFAULT: "rgb(var(--color-accent-2) / <alpha-value>)",
          solid: "rgb(var(--color-accent-2-solid) / <alpha-value>)",
          soft: "rgb(var(--color-accent-2-soft-bg) / <alpha-value>)",
          softfg: "rgb(var(--color-accent-2-soft-text) / <alpha-value>)",
          100: "#f0fae1",
          200: "#e1eecc",
          300: "#ccdbb2",
          400: "#aebf92",
          500: "#8fa073",
          600: "#728157",
          700: "#56633f",
          800: "#3d472b",
          900: "#272e1b",
        },
        neutral: {
          100: "#f9f4ed",
          200: "#eee7db",
          300: "#dcd3c4",
          400: "#c0b6a5",
          500: "#a19786",
          600: "#82796a",
          700: "#645c50",
          800: "#474238",
          900: "#2e2b25",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-heading)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        sm: "8px",
        md: "16px",
        lg: "28px",
        xl: "32px",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 120s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
