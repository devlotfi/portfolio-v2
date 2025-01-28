import { motion, useScroll, useTransform } from "motion/react";
import { useContext } from "react";
import { NavigationContext } from "./context/navigation-context";
import { ScrollShadow } from "@heroui/react";
import Navbar from "./components/navbar";
import InitialLoading from "./components/initial-loading";
import Sidebar from "./components/sidebar";
import SocialSideBtns from "./components/social-side-btns";
import AboutSection from "./sections/about-section";
import Footer from "./components/footer";
import SkillsSection from "./sections/skills-section";
import ScrollIndicator from "./components/scroll-indicator";
import ProjectsSection from "./sections/projects-section";
import ContactSection from "./sections/contact-section";
import ExperienceSection from "./sections/experiecne-section";

export default function App() {
  const { scrollRef } = useContext(NavigationContext);

  const { scrollY } = useScroll({
    container: scrollRef,
    layoutEffect: false,
  });

  const backgroundPosition = useTransform(
    scrollY,
    (value) => `0 0, 0 0, 0 0, 0 -${value / 10}px, 0 -${value / 10}px`
  );

  return (
    <>
      <InitialLoading></InitialLoading>
      <ScrollIndicator></ScrollIndicator>
      <SocialSideBtns></SocialSideBtns>

      <motion.div
        className="flex flex-col h-dvh bg-main-light dark:bg-main-dark"
        style={{
          backgroundPosition: backgroundPosition,
        }}
      >
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <ScrollShadow
          ref={scrollRef}
          className="scroll-smooth overflow-x-hidden scrollbar-light dark:scrollbar-dark"
        >
          <AboutSection></AboutSection>
          <SkillsSection></SkillsSection>
          <ExperienceSection></ExperienceSection>
          <ProjectsSection></ProjectsSection>
          <ContactSection></ContactSection>
          <Footer></Footer>
        </ScrollShadow>
      </motion.div>
    </>
  );
}
