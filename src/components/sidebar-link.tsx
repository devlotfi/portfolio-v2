import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, cn } from "@heroui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { PropsWithChildren, useContext } from "react";
import { motion, useInView } from "motion/react";
import { NavigationSections } from "../types/navigation-sections";
import { NavigationContext } from "../context/navigation-context";

interface Props {
  icon: IconProp;
  section: NavigationSections;
}

function SidebarLinkComponent({
  icon,
  section,
  children,
}: PropsWithChildren<Props>) {
  const { sectionRefs, scrollRef, onSidebarClose } =
    useContext(NavigationContext);
  const isInView = useInView(sectionRefs.current[section], {
    root: scrollRef,
    margin: "-50% 0px -50% 0px",
  });

  return (
    <Button
      fullWidth
      onPress={() => {
        onSidebarClose();
        if (sectionRefs.current[section].current) {
          sectionRefs.current[section].current.scrollIntoView({
            block: "start",
          });
        }
      }}
      variant="light"
      className="h-[3rem] font-bold"
      startContent={
        <div
          className={cn(
            "flex rounded-lg h-[2.5rem] w-[2.5rem] justify-center items-center",
            isInView && "bg-primary-gradient"
          )}
        >
          <FontAwesomeIcon
            className="text-[18pt] text-primary-foreground"
            icon={icon}
          ></FontAwesomeIcon>
        </div>
      }
    >
      <div
        className={cn(
          "flex flex-1 text-[13pt]",
          isInView && "bg-primary-gradient bg-clip-text text-transparent"
        )}
      >
        {children}
      </div>
    </Button>
  );
}

const SidebarLink = motion.create(SidebarLinkComponent);
export default SidebarLink;
