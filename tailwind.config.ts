import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        bitLessBlack: "#0E0E0E",
        bitLessGray: "#707070",
        darkGray: "#3C3C3C",
      },
      fontSize: {
        controlTitle:"28px",
        meetLink: "30px",
        meettitle: "32px",
      },
      fontFamily: {
        intertight: "Inter Tight",
      },
      borderColor: {
        bitGray: "#D6D8DC",
        lightGray: "#D9D9D9",
      },
      backgroundColor: {
        darkGray: "#3C3C3C",
      },
    },
  },
  plugins: [],
};
export default config;
