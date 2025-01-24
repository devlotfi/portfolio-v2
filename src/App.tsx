import { useContext } from "react";
import Navbar from "./components/navbar";
import { ScrollShadow } from "@heroui/react";
import { NavigationContext } from "./context/navigation-context";
import HomeSection from "./sections/home-section";
import Sidebar from "./components/sidebar";
import ScrollIndicator from "./components/scroll-indicator";
import SocialSideBtns from "./components/social-side-btns";
import Footer from "./components/footer";
import SkillsSection from "./sections/skills-section";
import { motion, useScroll, useTransform } from "motion/react";
import ContactSection from "./sections/contact-section";
import ProjectsSection from "./sections/projects-section";

export default function App() {
  const { navigationData } = useContext(NavigationContext);

  const { scrollY } = useScroll({
    container: navigationData.scrollRef,
    layoutEffect: false,
  });

  const backgroundPosition = useTransform(
    scrollY,
    (value) => `0 0, 0 0, 0 0, 0 -${value / 10}px, 0 -${value / 10}px`
  );

  return (
    <>
      <Sidebar></Sidebar>
      <ScrollIndicator></ScrollIndicator>
      <SocialSideBtns></SocialSideBtns>
      <motion.div
        className="flex flex-col h-[100dvh] main-bg-light dark:main-bg-dark"
        style={{
          backgroundPosition: backgroundPosition,
        }}
      >
        <Navbar></Navbar>

        <ScrollShadow
          ref={navigationData.scrollRef}
          isEnabled={false}
          className="scroll-smooth overflow-x-hidden custom-scrollbar-light dark:custom-scrollbar-dark"
        >
          <HomeSection></HomeSection>
          <SkillsSection></SkillsSection>
          <ProjectsSection></ProjectsSection>
          <ContactSection></ContactSection>
          <Footer></Footer>
        </ScrollShadow>
      </motion.div>
    </>
  );
}
