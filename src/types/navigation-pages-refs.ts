import { RefObject } from "react";
import { NavigationPages } from "./navigation-pages";

export type NavigationPagesRefs = {
  [key in NavigationPages]: RefObject<HTMLElement | null>;
};
