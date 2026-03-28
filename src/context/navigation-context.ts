import { createContext, createRef, RefObject } from "react";
import { SectionRefs } from "../types/section-refs";

interface NavigationContext {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  scrollRef: RefObject<HTMLDivElement | null>;
  sectionRefs: SectionRefs;
}

const initialValue: NavigationContext = {
  isSidebarOpen: false,
  setIsSidebarOpen() {},
  scrollRef: createRef(),
  sectionRefs: {} as SectionRefs,
};

export const NavigationContext = createContext(initialValue);
