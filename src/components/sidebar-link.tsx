import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, cn } from "@heroui-v3/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { PropsWithChildren, useContext } from "react";
import { useInView } from "motion/react";
import { NavigationSections } from "../types/navigation-sections";
import { NavigationContext } from "../context/navigation-context";

interface Props {
  icon: IconProp;
  section: NavigationSections;
}

export default function SidebarLinkComponent({
  icon,
  section,
  children,
}: PropsWithChildren<Props>) {
  const { sectionRefs, scrollRef, onSidebarClose } =
    useContext(NavigationContext);
  const isInView = useInView(sectionRefs[section], {
    root: scrollRef,
    margin: "-50% 0px -50% 0px",
  });

  return (
    <Button
      fullWidth
      onPress={() => {
        onSidebarClose();
        if (sectionRefs[section].current) {
          sectionRefs[section].current.scrollIntoView({
            block: "start",
          });
        }
      }}
      variant="ghost"
      className="h-[3rem] font-bold"
      aria-label={`Navigate to ${section}`}
    >
      <div
        className={cn(
          "flex rounded-lg h-[2.5rem] w-[2.5rem] justify-center items-center",
          isInView && "bg-primary-gradient",
        )}
      >
        <FontAwesomeIcon
          className={cn(
            "text-[18pt] text-foreground",
            isInView && "text-accent-foreground",
          )}
          icon={icon}
        ></FontAwesomeIcon>
      </div>

      <div
        className={cn(
          "flex flex-1 text-[13pt]",
          isInView && "bg-primary-gradient bg-clip-text text-transparent",
        )}
      >
        {children}
      </div>
    </Button>
  );
}
