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
        canvas: {
          base: "#090D16",
          card: "#111827",
          hover: "#1E293B",
        },
        brand: {
          DEFAULT: "#F97316",
          hover: "#EA580C",
          glow: "rgba(249, 115, 22, 0.15)",
        },
        surface: {
          border: "rgba(255, 255, 255, 0.08)",
          highlight: "rgba(249, 115, 22, 0.35)",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "orange-gradient": "linear-gradient(135deg, #FF8A3D 0%, #F97316 50%, #FF5500 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
