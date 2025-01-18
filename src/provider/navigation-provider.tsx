import { PropsWithChildren, useRef, useState } from "react";
import { NavigationContext } from "../context/navigation-context";
import { NavigationData } from "../types/navigation-data";

export default function NavigationProvider({ children }: PropsWithChildren) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [navigationData, setNavigationData] = useState<NavigationData>({
    sidebarOpen: false,
    scrollRef,
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
