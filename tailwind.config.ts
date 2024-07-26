import type { Config } from "tailwindcss";

export const colors: Record<string, string> = {
  primary: "#2761BA",
  secondary: "#6699E7",
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
  gray: "#7E7E7E",
  success: "#5CB85C",
  warning: "#F0AD4E",
  error: "#D9534F",
  info: "#5BC0DE",
  "base-500": "#7E7E7E",
  "base-600": "#5E5E5E",
  "base-700": "#3D3D3D",
  "base-800": "#292929",
  "base-900": "#141414",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: colors,
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
