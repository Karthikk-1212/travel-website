import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Palette pulled from Hampi itself: weathered basalt boulders,
        // brass temple bells, kumkum vermilion, banana-plantation green.
        basalt: {
          950: "#1C1815",
          900: "#231F1B",
          800: "#2B2622",
          700: "#3A3430",
          600: "#4A433C",
        },
        parchment: {
          50: "#FBF8F1",
          100: "#EFE7D8",
          200: "#E3D8C2",
        },
        brass: {
          400: "#DDB35E",
          500: "#C9962F",
          600: "#A97922",
        },
        kumkum: {
          500: "#A23B2E",
          600: "#872F24",
        },
        leaf: {
          500: "#5C7A52",
          600: "#496341",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "boulder-texture":
          "radial-gradient(circle at 20% 20%, rgba(201,150,47,0.08), transparent 40%), radial-gradient(circle at 80% 60%, rgba(162,59,46,0.08), transparent 45%)",
      },
      borderRadius: {
        card: "0.375rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
