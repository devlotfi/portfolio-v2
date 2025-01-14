import { NavigationPages } from "./types/navigation-pages";
import { PageAttributes } from "./types/page-attributes";

export const PagesConfig: { [key in NavigationPages]: PageAttributes } = {
  [NavigationPages.HOME]: {
    backgroundOffset: "0vw",
    transformOrigin: "50vw",
    translateOffset: "0vw",
  },
  [NavigationPages.SKILLS]: {
    backgroundOffset: "-5rem",
    transformOrigin: "calc(150vw + 10vw)",
    translateOffset: "calc(-100vw + -10vw)",
  },
  [NavigationPages.EXPERIENCE]: {
    backgroundOffset: "-10rem",
    transformOrigin: "calc(250vw + 20vw)",
    translateOffset: "calc(-200vw + -20vw)",
  },
  [NavigationPages.PROJECTS]: {
    backgroundOffset: "-15rem",
    transformOrigin: "calc(350vw + 30vw)",
    translateOffset: "calc(-300vw + -30vw)",
  },
  [NavigationPages.RESUME]: {
    backgroundOffset: "-20rem",
    transformOrigin: "calc(450vw + 40vw)",
    translateOffset: "calc(-400vw + -40vw)",
  },
};
