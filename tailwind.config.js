/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary": "#BBBBBB",
        "link": "#A2C3F9",
        "button": "rgba(100, 157, 249, 0.4)",
        "shadowed": "#767676",
        "dark": "#323232",
        "modal": "rgba(0, 0, 0, 0.5)"
      },
       borderRadius: {
        "4xl" : "32px"
       }
    },
  },
  plugins: [],
};
