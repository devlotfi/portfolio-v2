import { createContext, createRef, RefObject } from "react";
import { SectionRefs } from "../types/section-refs";

interface NavigationContext {
  isSidebarOpen: boolean;
  onSidebarOpen: () => void;
  onSidebarClose: () => void;
  onSidebarOpenChange: () => void;
  scrollRef: RefObject<HTMLDivElement | null>;
  sectionRefs: RefObject<SectionRefs>;
}

const initialValue: NavigationContext = {
  isSidebarOpen: false,
  onSidebarOpen() {},
  onSidebarClose() {},
  onSidebarOpenChange() {},
  scrollRef: createRef(),
  sectionRefs: createRef() as RefObject<SectionRefs>,
};

export const NavigationContext = createContext(initialValue);
