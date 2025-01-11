import { RefObject } from "react";
import { NavigationPages } from "./navigation-pages";
import { MotionValue } from "motion/react";

export interface NavigationData {
  page: NavigationPages;
  translateOffset: string;
  transformOrigin: string;
  backgroundOffset: string;
  zoomedOut: boolean;
  isNavigating: boolean;
  sidebarOpen: boolean;
  scrollRef: RefObject<HTMLDivElement | null>;
  scrollYProgress?: MotionValue<number>;
}
