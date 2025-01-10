import { createContext } from "react";
import { PagesConfig } from "../pages-config";
import { NavigationData } from "../types/navigation-data";
import { NavigationPages } from "../types/navigation-pages";

interface NavigationContext {
  navigationData: NavigationData;
  setNavigationData: React.Dispatch<React.SetStateAction<NavigationData>>;
}

const initialValue: NavigationContext = {
  navigationData: {
    page: NavigationPages.HOME,
    ...PagesConfig.HOME,
    zoomedOut: false,
    isNavigating: false,
    sidebarOpen: false,
  },
  setNavigationData() {},
};

export const NavigationContext = createContext(initialValue);
