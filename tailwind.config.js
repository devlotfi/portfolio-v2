import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
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
