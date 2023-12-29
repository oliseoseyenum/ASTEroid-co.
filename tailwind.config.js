module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_b2": "#000000b2",
          "900_3f": "#0000003f",
        },
        deep_orange: {
          A700_1e: "#fc11111e",
          A700: "#fc1111",
          A700_e0: "#fc1111e0",
        },
        white: { A700: "#ffffff" },
        red: { A700: "#ff0000" },
      },
      fontFamily: {
        inter: "Inter",
        sourceserifpro: "Source Serif Pro",
        arial: "Arial",
      },
      boxShadow: { bs: "8px 9px  7px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
