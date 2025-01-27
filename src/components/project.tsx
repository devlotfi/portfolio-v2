import { Button, Link, useDisclosure } from "@heroui/react";
import { motion } from "motion/react";
import ProjectDetails from "./project-details";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Project() {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();

  return (
    <>
      <ProjectDetails
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      ></ProjectDetails>

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
          ease: "easeOut",
        }}
        className="flex flex-col gap-1 w-full max-w-screen-md p-[1rem] rounded-lg bg-background-light-100 dark:bg-background-dark-100 card-outline-light dark:card-outline-dark"
      >
        <div className="flex flex-col">
          <div className="flex h-[3rem] gap-3 items-center">
            <img
              className="h-[1.5rem]"
              src="https://raw.githubusercontent.com/devlotfi/stack-icons/main/github-assets/logo.svg"
              alt="project-logo"
            />
            <div className="flex font-['Roboto_Serif'] text-[14pt] font-bold">
              Stack Icons
            </div>
          </div>
        </div>

        <img
          className="flex rounded-md border border-divider hover:mask-none"
          style={{
            maskImage: "linear-gradient(to bottom, #fff, transparent)",
          }}
          src="https://raw.githubusercontent.com/devlotfi/stack-icons/main/github-assets/preview-1.png"
          alt=""
        />

        <div className="flex text-[9pt]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          hic a ex reiciendis laborum vero officiis autem aspernatur mollitia
          quo, accusantium deserunt cumque nulla ipsam natus possimus minima
        </div>

        <div className="flex gap-3 justify-between items-center">
          <div className="flex gap-3">
            <Link>
              <FontAwesomeIcon
                className="text-[20pt] text-foreground hover:text-primary duration-300 transition-[color] cursor-pointer"
                icon={faGithub}
              ></FontAwesomeIcon>
            </Link>
            <Link>
              <FontAwesomeIcon
                className="text-[20pt] text-foreground hover:text-primary duration-300 transition-[color] cursor-pointer"
                icon={faGlobe}
              ></FontAwesomeIcon>
            </Link>
          </div>

          <Button
            onPress={() => {
              onOpen();
            }}
            endContent={
              <FontAwesomeIcon icon={faUpRightFromSquare}></FontAwesomeIcon>
            }
            variant="light"
          >
            Details
          </Button>
        </div>
      </motion.div>
    </>
  );
}
