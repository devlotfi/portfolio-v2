import { createContext, createRef, RefObject } from "react";
import { PagesConfig } from "../pages-config";
import { NavigationData } from "../types/navigation-data";
import { NavigationPages } from "../types/navigation-pages";
import { NavigationPagesRefs } from "../types/navigation-pages-refs";

interface NavigationContext {
  navigationData: NavigationData;
  setNavigationData: React.Dispatch<React.SetStateAction<NavigationData>>;
}

const initialValue: NavigationContext = {
  navigationData: {
    page: NavigationPages.ABOUT,
    ...PagesConfig.ABOUT,
    zoomedOut: false,
    isNavigating: false,
    sidebarOpen: false,
    pageRefs:
      createRef<NavigationPagesRefs>() as RefObject<NavigationPagesRefs>,
  },
  setNavigationData() {},
};

export const NavigationContext = createContext(initialValue);
