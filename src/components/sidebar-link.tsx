import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card } from "@heroui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ComponentPropsWithRef, useContext } from "react";
import { motion } from "motion/react";
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
  ref,
}: ComponentPropsWithRef<"div"> & Props) {
  const { navigationData, setNavigationData } = useContext(NavigationContext);

  return (
    <motion.div
      className="flex"
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          y: 70,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 70,
          },
        },
      }}
    >
      <Button
        fullWidth
        onPress={() => {
          setNavigationData((navigationData) => ({
            ...navigationData,
            sidebarOpen: false,
          }));
          if (navigationData.sectionRefs.current[section].current) {
            navigationData.sectionRefs.current[section].current.scrollIntoView({
              block: "start",
            });
          }
        }}
        variant="light"
        className="h-[3rem] font-bold"
        startContent={
          <Card
            shadow="none"
            className="h-[2.5rem] w-[2.5rem] justify-center items-center primary-bg"
          >
            <FontAwesomeIcon
              className="text-[18pt] text-primary-foreground"
              icon={icon}
            ></FontAwesomeIcon>
          </Card>
        }
      >
        <div className="flex flex-1 text-[13pt]">{children}</div>
      </Button>
    </motion.div>
  );
}

const SidebarLink = motion.create(SidebarLinkComponent);
export default SidebarLink;
