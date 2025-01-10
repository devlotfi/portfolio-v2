import { NavigationPages } from "./navigation-pages";

export interface NavigationData {
  page: NavigationPages;
  translateOffset: string;
  transformOrigin: string;
  backgroundOffset: string;
  zoomedOut: boolean;
  isNavigating: boolean;
  sidebarOpen: boolean;
}
