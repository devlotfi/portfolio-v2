import { createContext, createRef } from "react";
import { NavigationData } from "../types/navigation-data";

interface NavigationContext {
  navigationData: NavigationData;
  setNavigationData: React.Dispatch<React.SetStateAction<NavigationData>>;
}

const initialValue: NavigationContext = {
  navigationData: {
    sidebarOpen: false,
    scrollRef: createRef(),
  },
  setNavigationData() {},
};

export const NavigationContext = createContext(initialValue);
