import { useContext } from "react";
import SectionTitleH1 from "../components/section-title-h1";
import { NavigationContext } from "../context/navigation-context";
import { faList } from "@fortawesome/free-solid-svg-icons";
import HighlightedProject from "../components/highlighted-project";
import { useQuery } from "@tanstack/react-query";
import { supabaseClient } from "../supabase-client";
import { SectionTitleH2 } from "../components/section-title-h2";
import Project from "../components/project";

export default function ProjectsSection() {
  const { sectionRefs } = useContext(NavigationContext);

  const { data } = useQuery({
    queryKey: ["lol"],
    queryFn: async () => {
      const { data } = await supabaseClient
        .from("projects")
        .select()
        .eq("highlighted", false);
      console.log(data);

      return {};
    },
    refetchOnWindowFocus: false,
  });

  return (
    <div
      ref={sectionRefs.current.PROJECTS}
      className="flex flex-col items-center px-[1rem]"
    >
      {JSON.stringify(data)}
      <SectionTitleH1 icon={faList}>Projects</SectionTitleH1>
      <div className="flex flex-col relative gap-[10rem]">
        <HighlightedProject index={0}></HighlightedProject>
        <HighlightedProject index={1}></HighlightedProject>
        <HighlightedProject index={2}></HighlightedProject>
        <HighlightedProject index={3}></HighlightedProject>
        <HighlightedProject index={4}></HighlightedProject>
      </div>

      <SectionTitleH2 icon={faList}>All projects</SectionTitleH2>
      <div className="grid grid-cols-3 gap-7 w-full  max-w-screen-lg">
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </div>
    </div>
  );
}
