import {
  faAt,
  faBars,
  faBriefcase,
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
  const { onSidebarOpen } = useContext(NavigationContext);

  return (
    <div className="flex relative justify-between items-center min-h-[5rem] px-[1rem]">
      <div className="flex items-center space-x-2">
        <motion.div
          initial={{ opacity: 0, rotate: 90, scale: 0 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 2.5,
            type: "spring",
            stiffness: 70,
          }}
        >
          <Button
            onPress={() => onSidebarOpen()}
            className="lg:hidden group"
            isIconOnly
            variant="light"
            size="lg"
            aria-label="open-sidebar"
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
            delay: 3,
            type: "spring",
            stiffness: 70,
          }}
        >
          <Logo className="h-[2rem]"></Logo>
        </motion.div>
      </div>

      <motion.div
        className="bg-background-light-100 dark:bg-background-dark-100 card-outline-light dark:card-outline-dark !outline-[0.3rem] rounded-full p-[0.35rem] space-x-2 hidden lg:flex absolute left-1/2 -translate-x-1/2"
        initial="hidden"
        animate="visible"
        transition={{
          delayChildren: 2.5,
          staggerChildren: 0.2,
        }}
      >
        <NavbarLink icon={faInfoCircle} section={NavigationSections.ABOUT}>
          About me
        </NavbarLink>
        <NavbarLink icon={faStar} section={NavigationSections.SKILLS}>
          Skills
        </NavbarLink>
        <NavbarLink icon={faBriefcase} section={NavigationSections.EXPERIENCE}>
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
