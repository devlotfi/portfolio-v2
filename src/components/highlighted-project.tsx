import { Button, cn, Link } from "@heroui/react";
import { motion } from "motion/react";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/theme-context";
import { ThemeOptions } from "../types/theme-options";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faReply,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { NavigationContext } from "../context/navigation-context";

interface Props {
  index: number;
}

export default function HighlightedProject({ index }: Props) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const { appliedTheme } = useContext(ThemeContext);
  const { setExpandedView } = useContext(NavigationContext);

  return (
    <div
      className={cn(
        "flex flex-col sticky mt-[3rem] w-full max-w-screen-md",
        expanded && "z-[500]"
      )}
      style={{
        top: `${(index + 1) * 2}rem`,
      }}
    >
      <motion.div
        layout
        className={cn(
          "flex flex-col flex-1 p-[1rem] rounded-lg card-outline-light dark:card-outline-dark",
          expanded &&
            "fixed top-0 left-0 h-dvh w-dvw rounded-none !border-none pt-0"
        )}
        style={{
          background:
            appliedTheme === ThemeOptions.LIGHT
              ? "linear-gradient(to top,#34D1D150, #ffffff), #ffffff"
              : "linear-gradient(to top,#34D1D150, #171717), #171717",
        }}
      >
        <div
          className={cn(
            "flex justify-between mb-[1rem] md:items-center flex-col md:flex-row",
            expanded && "m-0 flex-1"
          )}
        >
          <div className="flex h-[2.5rem] md:h-[4rem] gap-3 items-center">
            <img
              className="h-[1.5rem] md:h-[2.5rem]"
              src="https://raw.githubusercontent.com/devlotfi/stack-icons/main/github-assets/logo.svg"
              alt="project-logo"
            />
            <div className="flex text-[13pt] md:text-[18pt] font-black">
              Stack Icons
            </div>
          </div>

          <div className="flex gap-3 justify-between items-center">
            <div className="flex h-[3rem] gap-3">
              <Link>
                <FontAwesomeIcon
                  className="text-[23pt] text-foreground hover:text-primary duration-300 transition-[color] cursor-pointer"
                  icon={faGithub}
                ></FontAwesomeIcon>
              </Link>
              <Link>
                <FontAwesomeIcon
                  className="text-[23pt] text-foreground hover:text-primary duration-300 transition-[color] cursor-pointer"
                  icon={faGlobe}
                ></FontAwesomeIcon>
              </Link>
            </div>

            {expanded ? (
              <Button
                onPress={() => {
                  setExpanded(false);
                  setExpandedView(false);
                }}
                endContent={<FontAwesomeIcon icon={faReply}></FontAwesomeIcon>}
                variant="light"
              >
                Return
              </Button>
            ) : (
              <Button
                onPress={() => {
                  setExpanded(true);
                  setExpandedView(true);
                }}
                endContent={
                  <FontAwesomeIcon
                    icon={faUpRightAndDownLeftFromCenter}
                  ></FontAwesomeIcon>
                }
                variant="light"
              >
                Details
              </Button>
            )}
          </div>
        </div>

        {!expanded ? (
          <div className="flex mb-[1rem] text-[9pt] md:text-[13pt]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            hic a ex reiciendis laborum vero officiis autem aspernatur mollitia
            quo, accusantium deserunt cumque nulla ipsam natus possimus minima
          </div>
        ) : null}

        {!expanded ? (
          <img
            className="rounded-md border border-divider"
            style={{
              maskImage: "linear-gradient(to bottom, #fff, transparent)",
            }}
            src="https://raw.githubusercontent.com/devlotfi/stack-icons/main/github-assets/preview-1.png"
            alt=""
          />
        ) : null}

        {expanded ? (
          <>
            <div className="flex flex-col overflow-hidden rounded-lg border border-divider">
              <div className="flex flex-col bg-background-light-100 dark:bg-background-dark-100">
                <div className="flex relative border-b border-divider h-[2.3rem] items-center px-[0.5rem]">
                  <div className="flex gap-1">
                    <div className="flex bg-[#FC5753] border-[#DF4744] border h-[1.3rem] w-[1.3rem] rounded-full"></div>
                    <div className="flex bg-[#FDBC40] border-[#DE9F34] border h-[1.3rem] w-[1.3rem] rounded-full"></div>
                    <div className="flex bg-[#33C748] border-[#27AA35] border h-[1.3rem] w-[1.3rem] rounded-full"></div>
                  </div>

                  <div className="hidden md:flex text-[10pt] absolute left-1/2 -translate-x-1/2">
                    Stack Icons - README.md
                  </div>
                </div>
                <div className="flex items-center px-[0.5rem] h-[3.5rem] border-b border-divider">
                  <Button
                    variant="bordered"
                    startContent={
                      <FontAwesomeIcon icon={faMarkdown}></FontAwesomeIcon>
                    }
                    className="border-primary text-primary"
                  >
                    README.md
                  </Button>
                  <Button
                    startContent={
                      <FontAwesomeIcon icon={faMarkdown}></FontAwesomeIcon>
                    }
                    variant="light"
                    className="border-divider"
                  >
                    README.md
                  </Button>
                </div>
              </div>

              <div className="flex flex-col scrollbar-light dark:scrollbar-dark h-[calc(100dvh-3.5rem-2.3rem-5rem-1rem)] overflow-y-auto bg-background-light-200 dark:bg-background-dark-200">
                <h1 className="text-[50rem]">lol</h1>
                <h1 className="text-[50rem]">lol</h1>
                <h1 className="text-[50rem]">lol</h1>
              </div>
            </div>
          </>
        ) : null}
      </motion.div>

      <div className="flex flex-1"></div>
    </div>
  );
}
