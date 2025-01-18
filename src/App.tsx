import { useContext } from "react";
import Navbar from "./components/navbar";
import { cn, ScrollShadow } from "@nextui-org/react";
import { ThemeContext } from "./context/theme-context";
import { ThemeOptions } from "./types/theme-options";
import { NavigationContext } from "./context/navigation-context";
import HomePage from "./pages/home-page";
import Sidebar from "./components/sidebar";
import ScrollIndicator from "./components/scroll-indicator";
import SocialSideBtns from "./components/social-side-btns";
import CusorLight from "./components/cursor-light";
import Footer from "./components/footer";
import { HashRouter, Route, Routes } from "react-router";
import SkillsPage from "./pages/skills-page";
import ExperiencePage from "./pages/experience-page";
import ProjectsPage from "./pages/projects-page";

export default function App() {
  const { appliedTheme } = useContext(ThemeContext);
  const { navigationData } = useContext(NavigationContext);

  return (
    <HashRouter>
      <Sidebar></Sidebar>
      <CusorLight></CusorLight>
      <ScrollIndicator></ScrollIndicator>
      <SocialSideBtns></SocialSideBtns>
      <div
        className={cn(
          "flex flex-col h-screen",
          appliedTheme === ThemeOptions.LIGHT ? "main-bg-light" : "main-bg-dark"
        )}
      >
        <Navbar></Navbar>

        <ScrollShadow ref={navigationData.scrollRef} className="scroll-smooth">
          <Routes>
            <Route index element={<HomePage></HomePage>}></Route>
            <Route path="/skills" element={<SkillsPage></SkillsPage>}></Route>
            <Route
              path="/experience"
              element={<ExperiencePage></ExperiencePage>}
            ></Route>
            <Route
              path="/projects"
              element={<ProjectsPage></ProjectsPage>}
            ></Route>
          </Routes>
          <Footer></Footer>
        </ScrollShadow>
      </div>
    </HashRouter>
  );
}
