/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "gradient-custom":
          "linear-gradient(205.17deg, #418CD1 10.93%, #9C41D1 116.08%)",
      }),
    },
  },
  variants: {},

  plugins: [],
};