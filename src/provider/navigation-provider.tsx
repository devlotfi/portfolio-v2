import { PropsWithChildren, useRef, useState } from "react";
import { NavigationContext } from "../context/navigation-context";
import { PagesConfig } from "../pages-config";
import { NavigationData } from "../types/navigation-data";
import { NavigationPages } from "../types/navigation-pages";
import { useScroll } from "motion/react";

export default function NavigationProvider({ children }: PropsWithChildren) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  const [navigationData, setNavigationData] = useState<NavigationData>({
    page: NavigationPages.HOME,
    ...PagesConfig.HOME,
    zoomedOut: false,
    isNavigating: false,
    sidebarOpen: false,
    scrollRef,
    scrollYProgress,
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
