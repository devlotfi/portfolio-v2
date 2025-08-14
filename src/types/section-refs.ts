import { RefObject } from "react";
import { NavigationSections } from "./navigation-sections";

export type SectionRefs = {
  [key in NavigationSections]: RefObject<HTMLDivElement | null>;
};
