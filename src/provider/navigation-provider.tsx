import { createRef, PropsWithChildren, useRef, useState } from "react";
import { NavigationContext } from "../context/navigation-context";
import { NavigationData } from "../types/navigation-data";
import { SectionRefs } from "../types/section-refs";
import { NavigationSections } from "../types/navigation-sections";

export default function NavigationProvider({ children }: PropsWithChildren) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const sectionRefs = useRef<SectionRefs>({
    [NavigationSections.ABOUT]: createRef(),
    [NavigationSections.SKILLS]: createRef(),
    [NavigationSections.EXPERIENCE]: createRef(),
    [NavigationSections.PROJECTS]: createRef(),
    [NavigationSections.CONTACT]: createRef(),
  });

  const [navigationData, setNavigationData] = useState<NavigationData>({
    sidebarOpen: false,
    scrollRef,
    sectionRefs,
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
