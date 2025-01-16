import {
  faGraduationCap,
  faInfoCircle,
  faList,
  faStar,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, cn } from "@nextui-org/react";
import { useContext } from "react";
import { NavigationContext } from "../context/navigation-context";
import { ThemeContext } from "../context/theme-context";
import { ThemeOptions } from "../types/theme-options";
import SidebarLink from "./sidebar-link";
import { NavigationPages } from "../types/navigation-pages";
import { motion } from "motion/react";

export default function Sidebar() {
  const { appliedTheme } = useContext(ThemeContext);
  const { navigationData, setNavigationData } = useContext(NavigationContext);

  return (
    <>
      <div
        onClick={() =>
          setNavigationData((navigationData) => ({
            ...navigationData,
            sidebarOpen: false,
          }))
        }
        className={cn(
          "flex h-screen w-screen fixed top-0 left-0 z-20 bg-black opacity-50 duration-300 cursor-pointer",
          !navigationData.sidebarOpen && "opacity-0 pointer-events-none"
        )}
      ></div>
      <div
        className={cn(
          "flex flex-col p-[1rem] duration-300 border-r border-divider z-30 h-screen w-[20rem] fixed top-0 left-0 rounded-tr-2xl rounded-br-2xl",
          appliedTheme === ThemeOptions.LIGHT
            ? "card-gradient-bg-light"
            : "card-gradient-bg-dark",
          !navigationData.sidebarOpen && "ml-[-20rem]"
        )}
      >
        <div className="flex justify-end">
          <Button
            isIconOnly
            variant="light"
            size="lg"
            onPress={() =>
              setNavigationData((navigationData) => ({
                ...navigationData,
                sidebarOpen: false,
              }))
            }
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="text-[20pt]"
            ></FontAwesomeIcon>
          </Button>
        </div>

        {navigationData.sidebarOpen ? (
          <motion.div
            className="flex flex-col space-y-3 mt-[1rem]"
            initial="hidden"
            animate="visible"
            transition={{
              staggerChildren: 0.2,
            }}
          >
            <SidebarLink icon={faInfoCircle} linkPage={NavigationPages.HOME}>
              About me
            </SidebarLink>

            <SidebarLink icon={faStar} linkPage={NavigationPages.SKILLS}>
              Skills
            </SidebarLink>
            <SidebarLink
              icon={faGraduationCap}
              linkPage={NavigationPages.EXPERIENCE}
            >
              Experience
            </SidebarLink>
            <SidebarLink icon={faList} linkPage={NavigationPages.PROJECTS}>
              Projects
            </SidebarLink>
          </motion.div>
        ) : null}
      </div>
    </>
  );
}
