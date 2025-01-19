import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    heroui({
      addCommonColors: true,
      layout: {
        radius: {
          small: "2px",
          medium: "4px",
          large: "6px",
        },
      },
      themes: {
        light: {
          colors: {
            divider: "#b9b9b9",
            foreground: "#273450",
            background: {
              foreground: "#273450",
            },
            default: {
              foreground: "#273450",
            },
            primary: {
              foreground: "#FFFFFF",
            },
          },
        },
        dark: {
          colors: {
            divider: "#575f69",
            foreground: "#FFFFFF",
            background: {
              foreground: "#FFFFFF",
            },
            default: {
              foreground: "#FFFFFF",
            },
            primary: {
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
};
