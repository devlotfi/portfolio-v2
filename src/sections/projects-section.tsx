import { faList } from "@fortawesome/free-solid-svg-icons";
import { Heading } from "../components/heading";
import { Card, CardBody, cn } from "@heroui/react";
import ReactSVG from "../assets/skills/react.svg";
import { useContext, useState } from "react";
import { NavigationContext } from "../context/navigation-context";
import { motion } from "motion/react";

export default function ProjectsSection() {
  const { navigationData } = useContext(NavigationContext);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col items-center relative px-[1rem]"
      ref={navigationData.sectionRefs.current.PROJECTS}
    >
      <div className="flex justify-center items-center w-full space-x-3 py-[3rem] max-w-screen-lg">
        <div className="flex h-[0.1rem] flex-1 bg-gradient-to-l from-divider to-transparent"></div>
        <Heading icon={faList}>Projects</Heading>
        <div className="flex h-[0.1rem] flex-1 bg-gradient-to-r from-divider to-transparent"></div>
      </div>

      <Card
        shadow="none"
        className="max-w-screen-lg bg-[linear-gradient(to_top,#34D1D150,#fff)] dark:bg-[linear-gradient(to_top,#34D1D150,#171717)] card-outline-light dark:card-outline-dark"
        fullWidth
      >
        <CardBody className="p-[1.5rem] space-y-3 overflow-hidden">
          <div className="flex items-center gap-3">
            <img
              className="h-[2.5rem]"
              src="https://raw.githubusercontent.com/devlotfi/stack-icons/main/github-assets/logo.svg"
              alt=""
            />
            <div className="flex text-[15pt] font-bold">Stack icons</div>
          </div>

          <div className="flex">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
            perferendis dolores sed eum earum libero iusto culpa nulla
            aspernatur quam. Modi minus nesciunt itaque nostrum aliquid
          </div>
          <div className="flex gap-2 justify-end">
            <div className="flex justify-center items-center rounded-full h-[2.5rem] w-[2.5rem] border border-divider">
              <img className="h-[1.8rem]" src={ReactSVG} alt="" />
            </div>
            <div className="flex justify-center items-center rounded-full h-[2.5rem] w-[2.5rem] border border-divider">
              <img className="h-[1.8rem]" src={ReactSVG} alt="" />
            </div>
            <div className="flex justify-center items-center rounded-full h-[2.5rem] w-[2.5rem] border border-divider">
              <img className="h-[1.8rem]" src={ReactSVG} alt="" />
            </div>
          </div>
          <img
            className="rounded-md"
            style={{
              maskImage: "linear-gradient(to bottom, #fff, transparent)",
            }}
            src="https://raw.githubusercontent.com/devlotfi/stack-icons/main/github-assets/preview-1.png"
            alt=""
          />
        </CardBody>
      </Card>

      <div className="flex h-[10rem] w-[20rem]">
        <motion.div
          layout
          onClick={() => setOpen(!open)}
          className={cn(
            "flex mt-[2rem] flex-1 flex-col cursor-pointer border border-divider card-gradient-bg-dark-100 rounded-md",
            open && "fixed top-0 left-0 h-screen w-screen z-[1000] mt-0"
          )}
        >
          <div className="flex h-[5rem] bg-red-300">
            <div className="flex h-[5rem] w-[5rem] bg-green-400"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
