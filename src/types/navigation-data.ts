import { RefObject } from "react";
import { NavigationPages } from "./navigation-pages";
import { NavigationPagesRefs } from "./navigation-pages-refs";

export interface NavigationData {
  page: NavigationPages;
  translateOffset: string;
  transformOrigin: string;
  backgroundOffset: string;
  zoomedOut: boolean;
  isNavigating: boolean;
  sidebarOpen: boolean;
  pageRefs: RefObject<NavigationPagesRefs>;
}
