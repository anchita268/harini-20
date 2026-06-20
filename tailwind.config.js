/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F1E6",
        "paper-dark": "#EFE6D4",
        ink: "#1A1714",
        "ink-soft": "#3A3530",
        rouge: "#C8381F",
        "rouge-deep": "#8F2415",
        moss: "#6B7355",
        dust: "#D4A5A5",
        gold: "#B8924A",
        cream: "#FFFCF5",
        denim: "#39506B",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Helvetica", "Arial", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grain: "url('/textures/grain.svg')",
      },
      boxShadow: {
        polaroid: "0 2px 4px rgba(26,23,20,0.15), 0 12px 24px -8px rgba(26,23,20,0.35)",
        tape: "0 1px 2px rgba(26,23,20,0.2)",
        lift: "0 24px 60px -20px rgba(26,23,20,0.45)",
      },
      rotate: {
        1: "1deg",
        2: "2deg",
        3: "3deg",
        "-1": "-1deg",
        "-2": "-2deg",
        "-3": "-3deg",
      },
    },
  },
  plugins: [],
};
