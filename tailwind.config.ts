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
        // Warm amber / gold primary — a deliberate move away from the
        // generic blue→purple palette.
        brand: {
          50: "#fdf6ec",
          100: "#fae8cd",
          200: "#f4cf96",
          300: "#edb45f",
          400: "#e79e36",
          500: "#d9821a",
          600: "#bd6512",
          700: "#9c4a12",
          800: "#7f3b15",
          900: "#693214",
          950: "#3c1808",
        },
        // Teal/emerald accent — complementary to the warm primary.
        accent: {
          50: "#edfcf6",
          100: "#d2f7e8",
          200: "#a8edd3",
          300: "#70ddbb",
          400: "#37c39d",
          500: "#13a884",
          600: "#08866b",
          700: "#076b58",
          800: "#085547",
          900: "#08463b",
          950: "#022922",
        },
        // Warm charcoal (stone-tinted) instead of cool blue-black.
        ink: {
          950: "#121110",
          900: "#1a1816",
          800: "#23211e",
          700: "#322e2a",
          600: "#494440",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(217, 130, 26, 0.45)",
        "glow-lg": "0 0 80px -20px rgba(19, 168, 132, 0.5)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at top, rgba(217, 130, 26, 0.18), transparent 55%)",
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
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
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
        "gradient-x": "gradient-x 8s ease infinite",
        marquee: "marquee 35s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
