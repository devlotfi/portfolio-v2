import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@heroui/react";
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
  const { sectionRefs } = useContext(NavigationContext);

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
      <Link
        onPress={() => {
          if (sectionRefs.current[section].current) {
            sectionRefs.current[section].current.scrollIntoView({
              block: "start",
            });
          }
        }}
        className="flex gap-2 whitespace-nowrap px-[1rem] py-[0.5rem] cursor-pointer text-foreground hover:text-primary duration-300 transition-[color]"
      >
        <FontAwesomeIcon className="text-[12pt]" icon={icon}></FontAwesomeIcon>
        <div className="flex text-[12pt] font-bold">{children}</div>
      </Link>
    </motion.div>
  );
}

const MotionNavbarLink = motion.create(NavbarLinkComponent);
export default MotionNavbarLink;
