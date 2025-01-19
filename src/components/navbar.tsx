import {
  faAt,
  faBars,
  faGraduationCap,
  faInfoCircle,
  faList,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import NavbarLink from "./navbar-link";
import ThemeDropdown from "./theme-dropdown";
import Logo from "./logo";
import { Button } from "@heroui/react";
import { useContext } from "react";
import { NavigationContext } from "../context/navigation-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { NavigationSections } from "../types/navigation-sections";

export default function Navbar() {
  const { setNavigationData } = useContext(NavigationContext);

  return (
    <div className="flex justify-between items-center min-h-[5rem] px-[1rem] z-10">
      <div className="flex items-center space-x-2">
        <motion.div
          initial={{ opacity: 0, rotate: 90, scale: 0 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 2.3,
            type: "spring",
            stiffness: 70,
          }}
        >
          <Button
            onPress={() =>
              setNavigationData((navigationData) => ({
                ...navigationData,
                sidebarOpen: true,
              }))
            }
            className="lg:hidden group"
            isIconOnly
            variant="light"
            size="lg"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="text-[20pt]"
            ></FontAwesomeIcon>
          </Button>
        </motion.div>
        <motion.div
          initial={{ rotate: 90, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{
            duration: 5,
            delay: 2,
            type: "spring",
            stiffness: 70,
          }}
        >
          <Logo className="h-[2rem]"></Logo>
        </motion.div>
      </div>

      <motion.div
        className="space-x-2 hidden lg:flex"
        initial="hidden"
        animate="visible"
        transition={{
          delayChildren: 2,
          staggerChildren: 0.2,
        }}
      >
        <NavbarLink icon={faInfoCircle} section={NavigationSections.ABOUT}>
          About me
        </NavbarLink>
        <NavbarLink icon={faStar} section={NavigationSections.SKILLS}>
          Skills
        </NavbarLink>
        <NavbarLink
          icon={faGraduationCap}
          section={NavigationSections.EXPERIENCE}
        >
          Experience
        </NavbarLink>
        <NavbarLink icon={faList} section={NavigationSections.PROJECTS}>
          Projects
        </NavbarLink>
        <NavbarLink icon={faAt} section={NavigationSections.CONTACT}>
          Contact
        </NavbarLink>
      </motion.div>

      <ThemeDropdown></ThemeDropdown>
    </div>
  );
}
