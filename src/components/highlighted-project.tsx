import { Button, Link, useDisclosure } from "@heroui/react";
import { useContext, useRef } from "react";
import { ThemeContext } from "../context/theme-context";
import { ThemeOptions } from "../types/theme-options";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectDetails from "./project-details";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { NavigationContext } from "../context/navigation-context";

interface Props {
  index: number;
}

export default function HighlightedProject({ index }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { appliedTheme } = useContext(ThemeContext);
  const { scrollRef } = useContext(NavigationContext);
  const { isOpen, onOpenChange, onOpen } = useDisclosure();

  const { scrollYProgress } = useScroll({
    container: scrollRef,
    target: cardRef,
    layoutEffect: false,
    offset: ["end center", "start center"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  const spring = useSpring(cardScale);

  return (
    <>
      <ProjectDetails
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      ></ProjectDetails>

      <motion.div
        ref={cardRef}
        className="flex flex-col w-full origin-top max-w-screen-sm sticky top-0 p-[1rem] rounded-lg card-outline-light dark:card-outline-dark"
        style={{
          scale: spring,
          top: `${(index + 1) * 0.5}rem`,
          background:
            appliedTheme === ThemeOptions.LIGHT
              ? "linear-gradient(to top,#34D1D150, #ffffff), #ffffff"
              : "linear-gradient(to top,#34D1D150, #171717), #171717",
        }}
      >
        <div className="flex justify-between mb-[1rem] md:items-center flex-col md:flex-row">
          <div className="flex h-[3rem] md:h-[4rem] gap-3 items-center">
            <img
              className="h-[1.5rem] md:h-[2.5rem]"
              src="https://raw.githubusercontent.com/devlotfi/stack-icons/main/github-assets/logo.svg"
              alt="project-logo"
            />
            <div className="flex font-['Roboto_Serif'] text-[13pt] md:text-[18pt] font-bold">
              Stack Icons
            </div>
          </div>

          <div className="flex gap-3 justify-between items-center">
            <div className="flex h-[3rem] gap-3">
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
        </div>

        <div className="flex mb-[1rem] text-[9pt] md:text-[13pt]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          hic a ex reiciendis laborum vero officiis autem aspernatur mollitia
          quo, accusantium deserunt cumque nulla ipsam natus possimus minima
        </div>

        <img
          className="flex rounded-md border border-divider hover:mask-none"
          style={{
            maskImage: "linear-gradient(to bottom, #fff, transparent)",
          }}
          src="https://raw.githubusercontent.com/devlotfi/stack-icons/main/github-assets/preview-1.png"
          alt=""
        />
      </motion.div>
    </>
  );
}
