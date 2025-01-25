import { useContext } from "react";
import SectionTitle from "../components/section-title";
import { NavigationContext } from "../context/navigation-context";

export default function ProjectsSection() {
  const { sectionRefs } = useContext(NavigationContext);

  return (
    <div ref={sectionRefs.current.PROJECTS} className="flex flex-col">
      <SectionTitle>Projects</SectionTitle>
      <h1 className="h-screen">lol</h1>
    </div>
  );
}
