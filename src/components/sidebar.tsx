import {
  faAt,
  faBriefcase,
  faInfoCircle,
  faList,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Drawer } from "@heroui/react";
import { useContext } from "react";
import { NavigationContext } from "../context/navigation-context";
import SidebarLink from "./sidebar-link";
import { NavigationSections } from "../types/navigation-sections";

export default function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(NavigationContext);

  return (
    <Drawer.Backdrop isOpen={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
      <Drawer.Content placement="left">
        <Drawer.Dialog className="bg-background-light-100 dark:bg-background-dark-100 border-r border-border">
          <Drawer.CloseTrigger />
          <Drawer.Header>
            <Drawer.Heading>Menu</Drawer.Heading>
          </Drawer.Header>
          <Drawer.Body>
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
              <SidebarLink icon={faList} section={NavigationSections.PROJECTS}>
                Projects
              </SidebarLink>
              <SidebarLink icon={faAt} section={NavigationSections.CONTACT}>
                Contact
              </SidebarLink>
            </div>
          </Drawer.Body>
        </Drawer.Dialog>
      </Drawer.Content>
    </Drawer.Backdrop>
  );
}
