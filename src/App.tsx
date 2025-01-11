import { useContext, useRef } from "react";
import Navbar from "./components/navbar";
import { NavigationContext } from "./context/navigation-context";
import { motion, useScroll } from "motion/react";
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
import SocialSideBtns from "./components/social-side-btns";

export default function App() {
  const { navigationData } = useContext(NavigationContext);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  return (
    <>
      <Sidebar></Sidebar>
      <motion.div
        className="flex flex-col h-screen w-screen duration-500 main-bg-light main-bg-dark transition-[background-size,background-position] will-change-[background-size,background-position]"
        style={{
          backgroundPosition: `0 0, 0 0, 0 0, ${navigationData.backgroundOffset} center, ${navigationData.backgroundOffset} center`,
          backgroundSize: `100% 100%, 100% 100%, 100% 100%, ${
            navigationData.isNavigating
              ? "3rem 3rem, 3rem 3rem"
              : "5rem 5rem, 5rem 5rem"
          }`,
        }}
      >
        <Navbar></Navbar>
        <motion.div
          className="flex w-screen h-[0.3rem] primary-bg z-10 fixed origin-left"
          style={{
            scaleX: scrollYProgress,
          }}
        ></motion.div>
        <SocialSideBtns></SocialSideBtns>

        <div className="flex min-h-[calc(100vh-5rem)] max-h-[calc(100vh-5rem)] max-w-[100vw] overflow-hidden">
          <motion.div
            className="flex duration-500 space-x-[10vw] transition-[transform-origin,transform] will-change-[transform-origin,transform]"
            style={{
              transformOrigin: `${navigationData.transformOrigin} 50vh`,
              transform: `translateX(${navigationData.translateOffset}) scale(${
                navigationData.zoomedOut ? "0.5" : "1"
              })`,
            }}
          >
            <PageOverlay
              page={NavigationPages.HOME}
              title="home"
              icon={faHome}
              scrollRef={scrollRef}
            >
              <HomePage></HomePage>
            </PageOverlay>

            <PageOverlay
              page={NavigationPages.SKILLS}
              title="skills"
              icon={faStar}
              scrollRef={scrollRef}
            >
              <SkillsPage></SkillsPage>
            </PageOverlay>

            <PageOverlay
              page={NavigationPages.EXPERIENCE}
              title="experience"
              icon={faGraduationCap}
              scrollRef={scrollRef}
            >
              <ExperiencePage></ExperiencePage>
            </PageOverlay>

            <PageOverlay
              page={NavigationPages.PROJECTS}
              title="projects"
              icon={faStar}
              scrollRef={scrollRef}
            >
              <ProjectsPage></ProjectsPage>
            </PageOverlay>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
