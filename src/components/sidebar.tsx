import {
  faAt,
  faBriefcase,
  faInfoCircle,
  faList,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Drawer, DrawerBody, DrawerContent, DrawerHeader } from "@heroui/react";
import { useContext } from "react";
import { NavigationContext } from "../context/navigation-context";
import SidebarLink from "./sidebar-link";
import { NavigationSections } from "../types/navigation-sections";

export default function Sidebar() {
  const { isSidebarOpen, onSidebarOpenChange } = useContext(NavigationContext);

  return (
    <Drawer
      size="xs"
      shadow="none"
      placement="left"
      isOpen={isSidebarOpen}
      onOpenChange={onSidebarOpenChange}
      className="bg-background-light-100 dark:bg-background-dark-100 border-r border-divider"
    >
      <DrawerContent>
        {() => (
          <>
            <DrawerHeader className="flex flex-col gap-1">Menu</DrawerHeader>
            <DrawerBody>
              <div className="flex flex-col gap-3">
                <SidebarLink
                  icon={faInfoCircle}
                  section={NavigationSections.ABOUT}
                >
                  About me
                </SidebarLink>

                <SidebarLink icon={faStar} section={NavigationSections.SKILLS}>
                  Skills
                </SidebarLink>
                <SidebarLink
                  icon={faBriefcase}
                  section={NavigationSections.EXPERIENCE}
                >
                  Experience
                </SidebarLink>
                <SidebarLink
                  icon={faList}
                  section={NavigationSections.PROJECTS}
                >
                  Projects
                </SidebarLink>
                <SidebarLink icon={faAt} section={NavigationSections.CONTACT}>
                  Contact
                </SidebarLink>
              </div>
            </DrawerBody>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
