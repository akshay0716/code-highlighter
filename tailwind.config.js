/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#4628FF",
          secondary: "#FFFFFF",
          ternory: "#307FF4",
          "blue-100": "#6E56FF",
          "white-200": " rgba(255,255,255,0.22)",
          "gray-100": "#CCCCCC",
          "gray-200": "#79797B",
          "gray-300": "rgba(163,163,163,0.08)",
          "gray-400": "rgba(24,24,24,0.21)",
          "black-100": "#2A2E31",
          "main-bg": "#181818",
          "black-300": "rgba(5,5,5,0.44)",
          "black-400": "#18181836",
        },
      },
    },
    plugins: [],
  };
  