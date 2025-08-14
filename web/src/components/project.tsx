import { Link } from "@heroui/react";
import { motion } from "motion/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tables } from "../__generated__/database.types";

interface Props {
  project: Tables<"projects">;
}

export default function Project({ project }: Props) {
  return (
    <motion.div
      initial={{
        y: 50,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
      className="flex flex-col gap-1 w-full max-w-screen-md p-[1rem] rounded-lg bg-background-light-100 dark:bg-background-dark-100 card-outline-light dark:card-outline-dark"
    >
      <div className="flex flex-col">
        <div className="flex h-[3rem] gap-3 items-center">
          <img className="h-[1.5rem]" src={project.logo} alt="project-logo" />
          <div className="flex font-['Roboto_Serif'] text-[14pt] font-bold">
            {project.title}
          </div>
        </div>
      </div>

      <img
        className="flex rounded-md border border-divider hover:mask-none"
        style={{
          maskImage: "linear-gradient(to bottom, #fff, transparent)",
        }}
        src={project.thumbnail}
        alt="thumbnail"
      />

      <div className="flex flex-1 text-[9pt]">{project.description}</div>

      <div className="flex gap-3 justify-between items-center">
        <div className="flex gap-3">
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
      </div>
    </motion.div>
  );
}
