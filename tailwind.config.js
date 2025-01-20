/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      robotoSlab: ["Roboto Slab", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
    },
    boxShadow: {
      custom:
        "0 5px 6px -1px rgba(128, 0, 128, 0.1), 0 2px 4px -1px rgba(128, 0, 128, 0.06)",
    },
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
