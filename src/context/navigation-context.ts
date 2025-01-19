import { createContext, createRef, RefObject } from "react";
import { NavigationData } from "../types/navigation-data";
import { SectionRefs } from "../types/section-refs";

interface NavigationContext {
  navigationData: NavigationData;
  setNavigationData: React.Dispatch<React.SetStateAction<NavigationData>>;
}

const initialValue: NavigationContext = {
  navigationData: {
    sidebarOpen: false,
    scrollRef: createRef(),
    sectionRefs: createRef() as RefObject<SectionRefs>,
  },
  setNavigationData() {},
};

export const NavigationContext = createContext(initialValue);
