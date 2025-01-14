import { useContext } from "react";
import Navbar from "./components/navbar";
import { cn } from "@nextui-org/react";
import { ThemeContext } from "./context/theme-context";
import { ThemeOptions } from "./types/theme-options";
import { NavigationContext } from "./context/navigation-context";
import { motion } from "motion/react";
import PageOverlay from "./layout/page-overlay";
import HomePage from "./pages/home-page";
import {
  faFileLines,
  faGraduationCap,
  faHome,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { NavigationPages } from "./types/navigation-pages";
import Sidebar from "./components/sidebar";
import SkillsPage from "./pages/skills-page";
import ExperiencePage from "./pages/experience-page";
import ProjectsPage from "./pages/projects-page";
import ScrollIndicator from "./components/scroll-indicator";
import SocialSideBtns from "./components/social-side-btns";
import ResumePage from "./pages/resume-page";
import CusorLight from "./components/cursor-light";

export default function App() {
  const { appliedTheme } = useContext(ThemeContext);
  const { navigationData } = useContext(NavigationContext);

  console.log("render app");

  return (
    <>
      <Sidebar></Sidebar>
      <motion.div
        className={cn(
          "flex flex-col h-screen w-screen duration-1000 transition-[background-size,background-position] will-change-[background-size,background-position]",
          appliedTheme === ThemeOptions.LIGHT ? "main-bg-light" : "main-bg-dark"
        )}
        style={{
          backgroundPosition: `0 0, 0 0, 0 0, ${navigationData.backgroundOffset} center, ${navigationData.backgroundOffset} center`,
          backgroundSize: `100% 100%, 100% 100%, 100% 100%, ${
            navigationData.zoomedOut
              ? "3rem 3rem, 3rem 3rem"
              : "5rem 5rem, 5rem 5rem"
          }`,
        }}
      >
        <Navbar></Navbar>
        <CusorLight></CusorLight>
        <ScrollIndicator
          hideWhenIn={[NavigationPages.RESUME]}
        ></ScrollIndicator>
        <SocialSideBtns></SocialSideBtns>

        <div className="flex min-h-[calc(100vh-5rem)] max-h-[calc(100vh-5rem)] max-w-[100vw] overflow-hidden">
          <motion.div
            className={cn(
              "flex space-x-[10vw] will-change-[transform-origin,transform]",
              navigationData.isNavigating &&
                "duration-1000 transition-[transform-origin,transform]"
            )}
            style={{
              transformOrigin: `${navigationData.transformOrigin} 50vh`,
              transform: `translate3d(${
                navigationData.translateOffset
              }, 0, 0) scale3d(${navigationData.zoomedOut ? "0.5" : "1"}, ${
                navigationData.zoomedOut ? "0.5" : "1"
              }, 100%)`,
            }}
          >
            <PageOverlay page={NavigationPages.HOME} title="home" icon={faHome}>
              <HomePage></HomePage>
            </PageOverlay>

            <PageOverlay
              page={NavigationPages.SKILLS}
              title="skills"
              icon={faStar}
            >
              <SkillsPage></SkillsPage>
            </PageOverlay>

            <PageOverlay
              page={NavigationPages.EXPERIENCE}
              title="experience"
              icon={faGraduationCap}
            >
              <ExperiencePage></ExperiencePage>
            </PageOverlay>

            <PageOverlay
              page={NavigationPages.PROJECTS}
              title="projects"
              icon={faStar}
            >
              <ProjectsPage></ProjectsPage>
            </PageOverlay>

            <PageOverlay
              page={NavigationPages.RESUME}
              title="resume"
              icon={faFileLines}
              hideFooter
            >
              <ResumePage></ResumePage>
            </PageOverlay>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
