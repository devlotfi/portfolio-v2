import { RefObject } from "react";

export interface NavigationData {
  sidebarOpen: boolean;
  scrollRef: RefObject<HTMLDivElement | null>;
}
