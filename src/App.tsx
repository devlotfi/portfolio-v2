import { useContext } from "react";
import Navbar from "./components/navbar";
import { cn, ScrollShadow } from "@heroui/react";
import { ThemeContext } from "./context/theme-context";
import { ThemeOptions } from "./types/theme-options";
import { NavigationContext } from "./context/navigation-context";
import HomePage from "./pages/home-page";
import Sidebar from "./components/sidebar";
import ScrollIndicator from "./components/scroll-indicator";
import SocialSideBtns from "./components/social-side-btns";
import CusorLight from "./components/cursor-light";
import Footer from "./components/footer";
import SkillsPage from "./pages/skills-page";
import { motion, useScroll, useTransform } from "motion/react";

export default function App() {
  const { appliedTheme } = useContext(ThemeContext);
  const { navigationData } = useContext(NavigationContext);

  const { scrollY } = useScroll({
    container: navigationData.scrollRef,
    layoutEffect: false,
  });

  const bgPosition = useTransform(
    scrollY,
    (value) => `0 0, 0 0, 0 0, 0 -${value / 10}px, 0 -${value / 10}px`
  );

  return (
    <>
      <Sidebar></Sidebar>
      <CusorLight></CusorLight>
      <ScrollIndicator></ScrollIndicator>
      <SocialSideBtns></SocialSideBtns>
      <motion.div
        className={cn(
          "flex flex-col h-screen",
          appliedTheme === ThemeOptions.LIGHT ? "main-bg-light" : "main-bg-dark"
        )}
        style={{
          backgroundPosition: bgPosition,
        }}
      >
        <Navbar></Navbar>

        <ScrollShadow
          ref={navigationData.scrollRef}
          className={cn(
            "scroll-smooth overflow-x-hidden",
            appliedTheme === ThemeOptions.LIGHT
              ? "custom-scrollbar-light"
              : "custom-scrollbar-dark"
          )}
        >
          <HomePage></HomePage>
          <SkillsPage></SkillsPage>
          <Footer></Footer>
        </ScrollShadow>
      </motion.div>
    </>
  );
}
