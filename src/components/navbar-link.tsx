import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@heroui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ComponentPropsWithRef, useContext } from "react";
import { motion } from "motion/react";
import { NavigationContext } from "../context/navigation-context";
import { NavigationSections } from "../types/navigation-sections";

interface Props {
  icon: IconProp;
  section: NavigationSections;
}

function NavbarLinkComponent({
  icon,
  section,
  children,
  ref,
}: ComponentPropsWithRef<"div"> & Props) {
  const { navigationData } = useContext(NavigationContext);

  return (
    <motion.div
      className="flex"
      ref={ref}
      whileHover={{
        y: "0.5rem",
        transition: {
          duration: 0.3,
        },
      }}
      variants={{
        hidden: {
          opacity: 0,
          y: -70,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        },
      }}
    >
      <Button
        onPress={() => {
          if (navigationData.sectionRefs.current[section].current) {
            navigationData.sectionRefs.current[section].current.scrollIntoView({
              block: "start",
            });
          }
        }}
        variant="light"
        className="h-[3rem] font-bold"
        startContent={
          <FontAwesomeIcon
            className="text-[12pt]"
            icon={icon}
          ></FontAwesomeIcon>
        }
      >
        <div className="flex">{children}</div>
      </Button>
    </motion.div>
  );
}

const MotionNavbarLink = motion.create(NavbarLinkComponent);
export default MotionNavbarLink;
