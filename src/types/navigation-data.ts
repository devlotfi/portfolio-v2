import { RefObject } from "react";
import { SectionRefs } from "./section-refs";

export interface NavigationData {
  isSidebarOpen: boolean;
  onSidebarOpen: () => void;
  onSidebarOpenChange: () => void;
  scrollRef: RefObject<HTMLDivElement | null>;
  sectionRefs: RefObject<SectionRefs>;
}
