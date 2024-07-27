import type { Config } from "tailwindcss";

export const colors: Record<string, string> = {
  current: "currentColor",
  // primary: "#2761BA",
  primary: "#FFBD7A",
  secondary: "#6699E7",
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
  gray: "#7E7E7E",
  success: "#5CB85C",
  warning: "#F0AD4E",
  error: "#D9534F",
  info: "#5BC0DE",
  content: "#A6ADBB",
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
    colors: colors,
    extend: {
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      container: {
        center: true,
      },
      maxWidth: {
        wd: "1440px",
      },
      backgroundImage: {
        "home-image": "url('/images/home.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
