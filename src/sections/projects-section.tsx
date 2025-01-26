import { useContext } from "react";
import SectionTitle from "../components/section-title";
import { NavigationContext } from "../context/navigation-context";
import { faList } from "@fortawesome/free-solid-svg-icons";
import HighlightedProject from "../components/highlighted-project";
import { useQuery } from "@tanstack/react-query";
import { supabaseClient } from "../supabase-client";

export default function ProjectsSection() {
  const { sectionRefs } = useContext(NavigationContext);

  const { data } = useQuery({
    queryKey: ["lol"],
    queryFn: async () => {
      const { data } = await supabaseClient.from("projects").select();
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
      <SectionTitle icon={faList}>Projects</SectionTitle>
      <div className="flex flex-col relative gap-[10rem]">
        <HighlightedProject index={0}></HighlightedProject>
        <HighlightedProject index={1}></HighlightedProject>
        <HighlightedProject index={2}></HighlightedProject>
        <HighlightedProject index={3}></HighlightedProject>
        <HighlightedProject index={4}></HighlightedProject>
      </div>

      <SectionTitle icon={faList}>All projects</SectionTitle>
      <div className="flex h-screen"></div>
    </div>
  );
}
