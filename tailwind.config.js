import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        surface: "var(--surface)",
        surfaceSoft: "var(--surface-soft)",
        surfaceStrong: "var(--surface-strong)",
        textPrimary: "var(--text)",
        textMuted: "var(--muted)",
        accent: "var(--accent)",
        accent2: "var(--accent-2)",
        accentWarm: "var(--accent-warm)",
        accentSoft: "var(--accent-soft)",
        successPill: "var(--success-pill)",
        successBg: "var(--success-bg)",
        fieldBg: "var(--field-bg)",
        fieldStroke: "var(--field-stroke)",
        button: "var(--button)",
        buttonHover: "var(--button-hover)"
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans]
      },
      boxShadow: {
        card: "0 20px 45px -35px rgba(12, 24, 42, 0.7)",
        inset: "inset 0 1px 0 0 rgba(255, 255, 255, 0.04)",
        glow: "0 0 20px rgba(44, 179, 243, 0.35)"
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        marquee: "marquee 30s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
