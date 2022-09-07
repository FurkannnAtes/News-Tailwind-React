/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        "main-red": "#ef1b48"
      },
      backgroundColor: {
        "main-bg-red": "#ef1b48"
      }
    },
  },
  plugins: [],
}
