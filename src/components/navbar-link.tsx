import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, cn } from "@heroui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ComponentPropsWithRef, useContext } from "react";
import { motion, useInView } from "motion/react";
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
  const { sectionRefs, scrollRef } = useContext(NavigationContext);
  const isInView = useInView(sectionRefs[section], {
    root: scrollRef,
    margin: "-50% 0px -50% 0px",
  });

  return (
    <motion.div
      className="flex"
      ref={ref}
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
          if (sectionRefs[section].current) {
            sectionRefs[section].current.scrollIntoView({
              block: "start",
            });
          }
        }}
        variant={isInView ? "primary" : "ghost"}
        className={cn(
          "flex rounded-full gap-2 font-medium hover:text-accent duration-300 transition-[color]",
          isInView &&
            "font-bold bg-accent-gradient hover:text-accent-foreground",
          !isInView && "text-foreground",
        )}
        aria-label={`navigate to ${section}`}
      >
        <FontAwesomeIcon className="text-[12pt]" icon={icon}></FontAwesomeIcon>
        <div className="flex text-[11pt]">{children}</div>
      </Button>
    </motion.div>
  );
}

const MotionNavbarLink = motion.create(NavbarLinkComponent);
export default MotionNavbarLink;
