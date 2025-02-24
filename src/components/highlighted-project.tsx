import { Button, Link, useDisclosure } from "@heroui/react";
import { useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectDetails from "./project-details";
import { motion, useScroll, useTransform } from "motion/react";
import { NavigationContext } from "../context/navigation-context";
import { Tables } from "../__generated__/database.types";

interface Props {
  index: number;
  project: Tables<"projects">;
}

export default function HighlightedProject({ index, project }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollRef } = useContext(NavigationContext);
  const { isOpen, onOpenChange, onOpen } = useDisclosure();

  const { scrollYProgress } = useScroll({
    container: scrollRef,
    target: cardRef,
    layoutEffect: false,
    offset: ["start end", "end end"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <>
      <ProjectDetails
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        project={project}
      ></ProjectDetails>

      <motion.div
        ref={cardRef}
        className="flex flex-col will-change-[transform,opacity] w-full origin-center max-w-screen-md p-[1rem] rounded-lg bg-background-light-100 dark:bg-background-dark-100 card-outline-light dark:card-outline-dark"
        style={{
          scale: cardScale,
          opacity: cardScale,
          top: `${(index + 1) * 2}rem`,
        }}
      >
        <div className="flex justify-between mb-[1rem] md:items-center flex-col md:flex-row">
          <div className="flex h-[3rem] md:h-[4rem] gap-3 items-center">
            <img
              className="h-[1.5rem] md:h-[2.5rem]"
              src={project.logo}
              alt="project-logo"
            />
            <div className="flex font-['Roboto_Serif'] text-[13pt] md:text-[18pt] font-bold">
              {project.title}
            </div>
          </div>

          <div className="flex gap-3 justify-between items-center">
            <div className="flex h-[3rem] gap-3">
              <Link href={project.repository} target="_blank">
                <FontAwesomeIcon
                  className="text-[20pt] text-foreground hover:text-primary duration-300 transition-[color] cursor-pointer"
                  icon={faGithub}
                ></FontAwesomeIcon>
              </Link>
              {project.website ? (
                <Link href={project.website} target="_blank">
                  <FontAwesomeIcon
                    className="text-[20pt] text-foreground hover:text-primary duration-300 transition-[color] cursor-pointer"
                    icon={faGlobe}
                  ></FontAwesomeIcon>
                </Link>
              ) : null}
            </div>

            <Button
              onPress={() => {
                onOpen();
              }}
              endContent={
                <FontAwesomeIcon icon={faUpRightFromSquare}></FontAwesomeIcon>
              }
              variant="light"
              aria-label="project-details"
            >
              Details
            </Button>
          </div>
        </div>

        <div className="flex mb-[1rem] text-[9pt] md:text-[13pt]">
          {project.description}
        </div>

        <img
          className="flex rounded-md border border-divider hover:mask-none"
          style={{
            maskImage: "linear-gradient(to bottom, #fff, transparent)",
          }}
          src={project.thumbnail}
          alt="thumbnail"
        />
      </motion.div>
    </>
  );
}
