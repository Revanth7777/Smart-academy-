/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        academy: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
      },
    },
  },
  safelist: [
    "bg-gradient-to-r",
    "bg-gradient-to-br",
    "bg-gradient-to-t",
    "from-emerald-200",
    "to-emerald-400",
    "from-emerald-400",
    "to-emerald-500",
    "from-emerald-500",
    "to-emerald-600",
    "from-emerald-600",
    "to-emerald-700",
    "from-emerald-700",
    "to-emerald-800",
    "from-emerald-800",
    "to-emerald-900",
    "from-emerald-950",
    "via-emerald-900",
    "to-emerald-800",
  ],
  plugins: [],
};
