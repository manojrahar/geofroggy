import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#175883",
          foreground: "#ffffff",
          dark: "#144a6a",
          deep: "#0f3d5c",
        },
        secondary: {
          DEFAULT: "#8AC63C",
          foreground: "#ffffff",
          dark: "#7ab52e",
          deep: "#426f05",
        },
        brand: {
          blue: "#175883",
          green: "#8AC63C",
          black: "#1F1F1F",
          text: "#383838",
        },
        accent: {
          gold: "#FFC107",
          sky: "#DEECF5",
        },
      },
      fontFamily: {
        display: ["var(--font-clash-display)", "Clash Display", "sans-serif"],
        body: ["var(--font-poppins)", "Poppins", "sans-serif"],
        prose: ["var(--font-roboto)", "Roboto", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        quote: ["var(--font-philosopher)", "Philosopher", "serif"],
        script: ["var(--font-yellowtail)", "Yellowtail", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
