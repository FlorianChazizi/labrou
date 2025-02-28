import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Merriweather", "serif"],
        accent: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
