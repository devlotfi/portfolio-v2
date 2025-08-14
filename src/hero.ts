import { heroui } from "@heroui/react";
export default heroui({
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
        divider: "#8b96ab",
        foreground: "#2c4271",
        background: {
          foreground: "#2c4271",
        },
        default: {
          foreground: "#2c4271",
        },
        primary: {
          DEFAULT: "#2EB9DC",
          foreground: "#FFFFFF",
        },
      },
    },
    dark: {
      colors: {
        divider: "#575f69",
        foreground: "#dbe7f3",
        background: {
          foreground: "#dbe7f3",
        },
        default: {
          foreground: "#dbe7f3",
        },
        primary: {
          DEFAULT: "#2EB9DC",
          foreground: "#FFFFFF",
        },
      },
    },
  },
});
