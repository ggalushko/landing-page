/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#BBBBBB",
        link: "#2DABFF",
        button: "#0090FF",
        shadowed: "#767676",
        dark: "#323232",
        modal: "rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        "4xl": "32px",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        plus: "url(assets/images/plus.svg)",
        checkGreen: "url(assets/images/check-green.svg)",
        checkBlue: "url(assets/images/check-blue.svg)",
        cross: "url(assets/images/cross.svg)",
        mail: "url(assets/images/mail.svg)",
      },

    },
  },
  plugins: [],
};
