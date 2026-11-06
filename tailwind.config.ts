import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: "#173D32",     // Deep forest green (Primary brand)
          dark: "#102B24",       // Dark green (Hero depth, footer, contrast)
          gold: "#C6A45C",       // Champagne gold (Accents, badges, highlights)
          "gold-light": "#E4D2A5", // Light gold (Subtle borders, gentle glow)
          ivory: "#F8F4EB",      // Warm ivory (Primary background)
          cream: "#EFE8DA",      // Cream (Card background, contrast panels)
          charcoal: "#282820",   // Charcoal (Primary dark text)
          muted: "#716F66",      // Muted slate (Secondary/body text)
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 10px 30px -10px rgba(23, 61, 50, 0.08)",
        "luxury-hover": "0 20px 40px -15px rgba(23, 61, 50, 0.15)",
        gold: "0 8px 24px -6px rgba(198, 164, 92, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
