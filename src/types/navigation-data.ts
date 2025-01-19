import { RefObject } from "react";
import { SectionRefs } from "./section-refs";

export interface NavigationData {
  sidebarOpen: boolean;
  scrollRef: RefObject<HTMLDivElement | null>;
  sectionRefs: RefObject<SectionRefs>;
}
