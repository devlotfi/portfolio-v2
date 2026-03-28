import { createRef, PropsWithChildren, useMemo, useRef, useState } from "react";
import { NavigationContext } from "../context/navigation-context";
import { SectionRefs } from "../types/section-refs";
import { NavigationSections } from "../types/navigation-sections";

export default function NavigationProvider({ children }: PropsWithChildren) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const sectionRefs = useMemo<SectionRefs>(
    () => ({
      [NavigationSections.ABOUT]: createRef(),
      [NavigationSections.SKILLS]: createRef(),
      [NavigationSections.EXPERIENCE]: createRef(),
      [NavigationSections.PROJECTS]: createRef(),
      [NavigationSections.CONTACT]: createRef(),
    }),
    [],
  );

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <NavigationContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        scrollRef,
        sectionRefs,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
