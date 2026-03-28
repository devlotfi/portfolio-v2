import { createContext, createRef, RefObject } from "react";
import { SectionRefs } from "../types/section-refs";

interface NavigationContext {
  isSidebarOpen: boolean;
  onSidebarOpen: () => void;
  onSidebarClose: () => void;
  onSidebarOpenChange: () => void;
  scrollRef: RefObject<HTMLDivElement | null>;
  sectionRefs: SectionRefs;
}

const initialValue: NavigationContext = {
  isSidebarOpen: false,
  onSidebarOpen() {},
  onSidebarClose() {},
  onSidebarOpenChange() {},
  scrollRef: createRef(),
  sectionRefs: {} as SectionRefs,
};

export const NavigationContext = createContext(initialValue);
