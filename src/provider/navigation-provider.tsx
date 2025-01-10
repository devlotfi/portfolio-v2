import { PropsWithChildren, useState } from "react";
import { NavigationContext } from "../context/navigation-context";
import { PagesConfig } from "../pages-config";
import { NavigationData } from "../types/navigation-data";
import { NavigationPages } from "../types/navigation-pages";

export default function NavigationProvider({ children }: PropsWithChildren) {
  const [navigationData, setNavigationData] = useState<NavigationData>({
    page: NavigationPages.HOME,
    ...PagesConfig.HOME,
    zoomedOut: false,
    isNavigating: false,
    sidebarOpen: false,
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
