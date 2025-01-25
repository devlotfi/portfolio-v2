import { createRef, PropsWithChildren, useRef, useState } from "react";
import { NavigationContext } from "../context/navigation-context";
import { SectionRefs } from "../types/section-refs";
import { NavigationSections } from "../types/navigation-sections";
import { useDisclosure } from "@heroui/react";

export default function NavigationProvider({ children }: PropsWithChildren) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const sectionRefs = useRef<SectionRefs>({
    [NavigationSections.ABOUT]: createRef(),
    [NavigationSections.SKILLS]: createRef(),
    [NavigationSections.EXPERIENCE]: createRef(),
    [NavigationSections.PROJECTS]: createRef(),
    [NavigationSections.CONTACT]: createRef(),
  });

  const {
    isOpen: isSidebarOpen,
    onOpen: onSidebarOpen,
    onClose: onSidebarClose,
    onOpenChange: onSidebarOpenChange,
  } = useDisclosure();

  const [expandedView, setExpandedView] = useState<boolean>(false);

  return (
    <NavigationContext.Provider
      value={{
        isSidebarOpen,
        onSidebarOpen,
        onSidebarClose,
        onSidebarOpenChange,
        scrollRef,
        sectionRefs,
        expandedView,
        setExpandedView,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
