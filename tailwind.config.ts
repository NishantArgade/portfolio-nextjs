import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xsm: "0.8rem",
        "1xl": "1rem",
        "2xl": "1.2rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.502rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary1: "#854CE6",
        background1: "#222A35",
        button: "#854CE6",
        background2: "#19212C",
        text: "#C8CFD8",
        text1: "#F2F5F7",
        text2: "#626970",
        text3: "#575C66",
        footerBackground: "#00012B",
      },
    },
    fontSize: {
      sm: "0.9rem",
    },
  },
  plugins: [],
};
export default config;
