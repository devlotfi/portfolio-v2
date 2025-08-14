import { useContext, useState } from "react";
import SectionTitleH1 from "../components/section-title-h1";
import { NavigationContext } from "../context/navigation-context";
import { faList, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import HighlightedProject from "../components/highlighted-project";
import { useQuery } from "@tanstack/react-query";
import { SectionTitleH2 } from "../components/section-title-h2";
import Project from "../components/project";
import { Button, Spinner } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { ProjectType } from "../types/project";
import { devData } from "../dev-data";
import axios, { AxiosResponse } from "axios";

export default function ProjectsSection() {
  const { sectionRefs } = useContext(NavigationContext);
  const [showFullList, setShowFullList] = useState<boolean>(false);

  const { isLoading, data } = useQuery({
    refetchOnWindowFocus: false,
    queryKey: ["PROJECTS"],
    queryFn: async () => {
      if (import.meta.env.MODE === "production") {
        try {
          const res: AxiosResponse<ProjectType[]> = await axios.get(
            `${import.meta.env.BASE_URL}projects.json`
          );
          return res.data;
        } catch {
          return [];
        }
      } else {
        return devData;
      }
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
        {!isLoading && data ? (
          data
            .filter((project) => project.highlighted)
            .map((project, index) => (
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
      <SectionTitleH2 className="mt-[2rem]">All projects</SectionTitleH2>
      <div className="flex px-[10rem] py-[5rem] bg-[radial-gradient(ellipse,hsl(var(--heroui-primary)/0.30),transparent_60%)] dark:bg-[radial-gradient(ellipse,hsl(var(--heroui-primary)/0.2),transparent_60%)]">
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
              className="bg-primary-gradient card-outline-light dark:card-outline-dark !border-none"
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
              className="bg-primary-gradient card-outline-light dark:card-outline-dark !border-none"
              startContent={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
              aria-label="show-more"
            >
              See the full list
            </Button>
          )}
        </motion.div>
      </div>

      {showFullList ? (
        !isLoading && data ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-[2rem] gap-7 w-full  max-w-screen-lg">
            {data.map((project) => (
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
