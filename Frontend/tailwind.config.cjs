/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0B1F3B",
          800: "#122B50",
          700: "#18365E"
        },
        lightgray: "#F2F4F7",
        alert: "#D7263D"
      },
      boxShadow: {
        card: "0 8px 24px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};
