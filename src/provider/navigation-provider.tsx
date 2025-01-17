import { createRef, PropsWithChildren, useRef, useState } from "react";
import { NavigationContext } from "../context/navigation-context";
import { PagesConfig } from "../pages-config";
import { NavigationData } from "../types/navigation-data";
import { NavigationPages } from "../types/navigation-pages";
import { NavigationPagesRefs } from "../types/navigation-pages-refs";

export default function NavigationProvider({ children }: PropsWithChildren) {
  const pageRefs = useRef<NavigationPagesRefs>({
    [NavigationPages.ABOUT]: createRef(),
    [NavigationPages.SKILLS]: createRef(),
    [NavigationPages.EXPERIENCE]: createRef(),
    [NavigationPages.PROJECTS]: createRef(),
  });

  const [navigationData, setNavigationData] = useState<NavigationData>({
    page: NavigationPages.ABOUT,
    ...PagesConfig.ABOUT,
    zoomedOut: false,
    isNavigating: false,
    sidebarOpen: false,
    pageRefs,
  });

  return (
    <NavigationContext.Provider
      value={{
        navigationData,
        setNavigationData,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
