import { useContext } from "react";
import SectionTitle from "../components/section-title";
import { NavigationContext } from "../context/navigation-context";
import { faList } from "@fortawesome/free-solid-svg-icons";
import HighlightedProject from "../components/highlighted-project";

export default function ProjectsSection() {
  const { sectionRefs } = useContext(NavigationContext);

  return (
    <div
      ref={sectionRefs.current.PROJECTS}
      className="flex flex-col items-center px-[1rem]"
    >
      <SectionTitle icon={faList}>Projects</SectionTitle>
      <div className="flex flex-col relative">
        <HighlightedProject index={0}></HighlightedProject>
        <HighlightedProject index={1}></HighlightedProject>
        <HighlightedProject index={2}></HighlightedProject>
      </div>

      <SectionTitle icon={faList}>All projects</SectionTitle>
      <div className="flex h-screen"></div>
    </div>
  );
}
