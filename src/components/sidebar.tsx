import {
  faAt,
  faGraduationCap,
  faInfoCircle,
  faList,
  faStar,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, cn } from "@heroui/react";
import { useContext } from "react";
import { NavigationContext } from "../context/navigation-context";
import SidebarLink from "./sidebar-link";
import { motion } from "motion/react";
import { NavigationSections } from "../types/navigation-sections";

export default function Sidebar() {
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
          "flex flex-col p-[1rem] duration-300 border-r border-divider z-30 h-screen w-[20rem] fixed top-0 left-0 rounded-tr-2xl rounded-br-2xl card-gradient-bg-light-100 dark:card-gradient-bg-dark-100",
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
            <SidebarLink icon={faInfoCircle} section={NavigationSections.ABOUT}>
              About me
            </SidebarLink>

            <SidebarLink icon={faStar} section={NavigationSections.SKILLS}>
              Skills
            </SidebarLink>
            <SidebarLink
              icon={faGraduationCap}
              section={NavigationSections.EXPERIENCE}
            >
              Experience
            </SidebarLink>
            <SidebarLink icon={faList} section={NavigationSections.PROJECTS}>
              Projects
            </SidebarLink>
            <SidebarLink icon={faAt} section={NavigationSections.CONTACT}>
              Contact
            </SidebarLink>
          </motion.div>
        ) : null}
      </div>
    </>
  );
}
