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
  faGraduationCap,
  faHome,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { NavigationPages } from "./types/navigation-pages";
import Sidebar from "./components/sidebar";
import SkillsPage from "./pages/skills-page";
import ExperiencePage from "./pages/experience-page";
import ProjectsPage from "./pages/projects-page";

export default function App() {
  const { appliedTheme } = useContext(ThemeContext);
  const { navigationData } = useContext(NavigationContext);

  return (
    <>
      <Sidebar></Sidebar>
      <motion.div
        className={cn(
          "flex flex-col h-screen w-screen duration-300",
          appliedTheme === ThemeOptions.LIGHT ? "main-bg-light" : "main-bg-dark"
        )}
        style={{
          backgroundPosition: `0 0, 0 0, 0 0, ${navigationData.backgroundOffset} 0, ${navigationData.backgroundOffset} 0`,
          backgroundSize: `100% 100%, 100% 100%, 100% 100%, ${
            navigationData.isNavigating
              ? "3rem 3rem, 3rem 3rem"
              : "5rem 5rem, 5rem 5rem"
          }`,
        }}
      >
        <Navbar></Navbar>

        <div className="flex min-h-[calc(100vh-5rem)] max-h-[calc(100vh-5rem)] max-w-[100vw] overflow-hidden">
          <motion.div
            className="flex duration-400 space-x-[10vw]"
            style={{
              transformOrigin: `${navigationData.transformOrigin} 50vh`,
              transform: `translateX(${navigationData.translateOffset}) scale(${
                navigationData.zoomedOut ? "0.5" : "1"
              })`,
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
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
