import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  ScrollShadow,
  cn,
} from "@heroui/react";
import ProjectReadme from "./project-readme";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ProjectStatistics from "./project-statistics";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function ProjectDetails({ isOpen, onOpenChange }: Props) {
  const [tab, setTab] = useState<"README" | "STATISTICS">("README");

  return (
    <Modal
      size="5xl"
      placement="center"
      scrollBehavior="inside"
      backdrop="blur"
      shadow="none"
      className="bg-transparent overflow-x-hidden"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton
    >
      <ModalContent className="min-h-[calc(100dvh-1rem)] sm:min-h-[calc(100dvh-8rem)]">
        {(onClose) => (
          <ModalBody className="flex flex-1 p-0 gap-0 flex-col overflow-hidden rounded-lg bg-background-light-100 dark:bg-background-dark-100 card-outline-light dark:card-outline-dark">
            <div className="flex flex-col">
              <div className="flex relative border-b border-divider h-[2.5rem] items-center px-[0.5rem]">
                <div className="flex gap-1">
                  <Button
                    onPress={onClose}
                    isIconOnly
                    className="flex bg-[#FC5753] border-[#DF4744] border min-w-[1rem] h-[1.7rem] w-[1.7rem] rounded-full"
                  ></Button>
                  <Button
                    isIconOnly
                    className="flex bg-[#FDBC40] border-[#DE9F34] border min-w-[1rem] h-[1.7rem] w-[1.7rem] rounded-full"
                  ></Button>
                  <Button
                    isIconOnly
                    className="flex bg-[#33C748] border-[#27AA35] border min-w-[1rem] h-[1.7rem] w-[1.7rem] rounded-full"
                  ></Button>
                </div>

                <div className="hidden md:flex text-[10pt] absolute left-1/2 -translate-x-1/2">
                  Stack Icons - README.md
                </div>
              </div>
              <div className="flex items-center gap-2 px-[0.5rem] h-[3.5rem] border-b border-divider">
                <Button
                  onPress={() => setTab("README")}
                  color={tab === "README" ? "primary" : "default"}
                  variant={tab === "README" ? "flat" : "light"}
                  className={cn(tab === "README" && "text-primary")}
                  startContent={
                    <FontAwesomeIcon icon={faMarkdown}></FontAwesomeIcon>
                  }
                >
                  README.md
                </Button>
                <Button
                  onPress={() => setTab("STATISTICS")}
                  color={tab === "STATISTICS" ? "primary" : "default"}
                  variant={tab === "STATISTICS" ? "flat" : "light"}
                  className={cn(tab === "STATISTICS" && "text-primary")}
                  startContent={
                    <FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>
                  }
                >
                  Statistics
                </Button>
              </div>
            </div>

            <ScrollShadow className="flex flex-1 flex-col bg-background-light-200 dark:bg-background-dark-200 scrollbar-light dark:scrollbar-dark overflow-y-auto">
              {tab === "README" ? (
                <ProjectReadme></ProjectReadme>
              ) : (
                <ProjectStatistics></ProjectStatistics>
              )}
            </ScrollShadow>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
}
