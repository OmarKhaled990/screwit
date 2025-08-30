import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#f6f7fb",
        },
        brand: {
          red: "#e53e3e",
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(10,10,10,0.06)",
      },
      borderRadius: {
        xl2: "1rem",
      }
    },
  },
  plugins: [],
} satisfies Config;
