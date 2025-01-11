import {
  faBars,
  faGraduationCap,
  faInfoCircle,
  faList,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import NavbarLink from "./navbar-link";
import ThemeDropdown from "./theme-dropdown";
import Logo from "./logo";
import { NavigationPages } from "../types/navigation-pages";
import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { NavigationContext } from "../context/navigation-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between children animations
    },
  },
};

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
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        transition={{
          staggerChildren: 0.2,
        }}
        className="space-x-2 hidden lg:flex"
      >
        <NavbarLink
          delay={0}
          icon={faInfoCircle}
          linkPage={NavigationPages.HOME}
        >
          About me
        </NavbarLink>
        <NavbarLink delay={0.2} icon={faStar} linkPage={NavigationPages.SKILLS}>
          Skills
        </NavbarLink>
        <NavbarLink
          delay={0.4}
          icon={faGraduationCap}
          linkPage={NavigationPages.EXPERIENCE}
        >
          Experience
        </NavbarLink>
        <NavbarLink
          delay={0.6}
          icon={faList}
          linkPage={NavigationPages.PROJECTS}
        >
          Projects
        </NavbarLink>
      </motion.div>

      <ThemeDropdown></ThemeDropdown>
    </div>
  );
}
