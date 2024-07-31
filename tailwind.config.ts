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
        "base-gradient": "linear-gradient(180deg, #807ECE 0%, #8E7ECE 100%)",
        button:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #2D2A37",
      },
      colors: {
        primary: "#2D2A37",
        secondary: "#EBEBEB",
        tertiary: "#6B6B6B",
      },
      boxShadow: {
        primary:
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 188px 52px 0px rgba(0, 0, 0, 0.01), 0px 120px 48px 0px rgba(0, 0, 0, 0.04), 0px 68px 41px 0px rgba(0, 0, 0, 0.15), 0px 30px 30px 0px rgba(0, 0, 0, 0.26), 0px 8px 17px 0px rgba(0, 0, 0, 0.29), 0px 6px 8px 0px rgba(255, 255, 255, 0.10) inset, 0px -4px 5px 0px rgba(0, 0, 0, 0.22) inset",
        button:
          "0px 11px 7px 0px rgba(0, 0, 0, 0.01), 0px 7px 7px 0px rgba(0, 0, 0, 0.04), 0px 4px 6px 0px rgba(0, 0, 0, 0.10), 0px 2px 4px 0px rgba(0, 0, 0, 0.26), 0px 0px 2px 0px rgba(0, 0, 0, 0.29), 0px 2px 3px 0px rgba(255, 255, 255, 0.06) inset",
      },
    },
  },
  plugins: [],
};
export default config;
