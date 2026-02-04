import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./src/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        ivory: "rgb(var(--color-ivory) / <alpha-value>)",
        brass: "rgb(var(--color-brass) / <alpha-value>)",
        sand: "rgb(var(--color-sand) / <alpha-value>)",
        fog: "rgb(var(--color-fog) / <alpha-value>)",
        midnight: "rgb(var(--color-midnight) / <alpha-value>)"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      },
      letterSpacing: {
        luxe: "0.08em"
      },
      boxShadow: {
        card: "0 24px 80px -40px rgba(0,0,0,0.6)",
        soft: "0 12px 40px -20px rgba(0,0,0,0.45)"
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at top, rgba(255,255,255,0.12), transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;
