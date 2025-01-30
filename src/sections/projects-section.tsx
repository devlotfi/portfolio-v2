import { useContext, useState } from "react";
import SectionTitleH1 from "../components/section-title-h1";
import { NavigationContext } from "../context/navigation-context";
import { faList, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import HighlightedProject from "../components/highlighted-project";
import { useQuery } from "@tanstack/react-query";
import { supabaseClient } from "../supabase-client";
import { SectionTitleH2 } from "../components/section-title-h2";
import Project from "../components/project";
import { Button, Spinner } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

export default function ProjectsSection() {
  const { sectionRefs } = useContext(NavigationContext);
  const [showFullList, setShowFullList] = useState<boolean>(false);

  const {
    isLoading: isLoadingHighlightedProjects,
    data: highlightedProjectsData,
  } = useQuery({
    queryKey: ["HIGHLIGHTED_PROJECTS"],
    refetchOnWindowFocus: false,
    queryFn: async () => {
      const { data } = await supabaseClient
        .from("projects")
        .select()
        .eq("highlighted", true);
      return data;
    },
  });

  const { isLoading: isLoadingProjects, data: projectsData } = useQuery({
    enabled: showFullList,
    refetchOnWindowFocus: false,
    queryKey: ["PROJECTS"],
    queryFn: async () => {
      const { data } = await supabaseClient.from("projects").select();
      return data;
    },
  });

  return (
    <div
      ref={sectionRefs.current.PROJECTS}
      className="flex flex-col items-center px-[1rem]"
    >
      <SectionTitleH1 icon={faList} secondaryTitle="See my work">
        Projects
      </SectionTitleH1>
      <div className="flex flex-col relative gap-[2rem]">
        {!isLoadingHighlightedProjects && highlightedProjectsData ? (
          highlightedProjectsData.map((project, index) => (
            <HighlightedProject
              key={project.id}
              index={index}
              project={project}
            ></HighlightedProject>
          ))
        ) : (
          <div className="flex h-[50dvh]">
            <Spinner size="lg" color="primary"></Spinner>
          </div>
        )}
      </div>
      <SectionTitleH2 className="my-[2rem]">All projects</SectionTitleH2>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1, type: "spring", stiffness: 70 }}
      >
        {showFullList ? (
          <Button
            onPress={() => setShowFullList(false)}
            radius="full"
            color="primary"
            size="lg"
            variant="solid"
            className="bg-primary-gradient card-outline-dark"
            startContent={<FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>}
            aria-label="show-less"
          >
            Show less
          </Button>
        ) : (
          <Button
            onPress={() => setShowFullList(true)}
            radius="full"
            color="primary"
            size="lg"
            variant="solid"
            className="bg-primary-gradient card-outline-dark"
            startContent={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
            aria-label="show-more"
          >
            See the full list
          </Button>
        )}
      </motion.div>

      {showFullList ? (
        !isLoadingProjects && projectsData ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-[2rem] gap-7 w-full  max-w-screen-lg">
            {projectsData.map((project) => (
              <Project key={project.id} project={project}></Project>
            ))}
          </div>
        ) : (
          <div className="flex h-[50dvh]">
            <Spinner size="lg" color="primary"></Spinner>
          </div>
        )
      ) : null}
    </div>
  );
}
