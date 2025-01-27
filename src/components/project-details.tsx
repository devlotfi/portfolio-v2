import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from "@heroui/react";
import ProjectReadme from "./project-readme";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function ProjectDetails({ isOpen, onOpenChange }: Props) {
  return (
    <Modal
      size="full"
      scrollBehavior="inside"
      className="bg-background-light-200 dark:bg-background-dark-200"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Project details
            </ModalHeader>
            <ModalBody className="p-[1rem] md:p-[2rem] pt-[0.5rem] md:pt-[0.5rem]">
              <div className="flex flex-col overflow-hidden rounded-lg bg-background-light-100 dark:bg-background-dark-100 card-outline-light dark:card-outline-dark">
                <div className="flex flex-col">
                  <div className="flex relative border-b border-divider h-[2.3rem] items-center px-[0.5rem]">
                    <div className="flex gap-1">
                      <div className="flex bg-[#FC5753] border-[#DF4744] border h-[1rem] w-[1rem] rounded-full"></div>
                      <div className="flex bg-[#FDBC40] border-[#DE9F34] border h-[1rem] w-[1rem] rounded-full"></div>
                      <div className="flex bg-[#33C748] border-[#27AA35] border h-[1rem] w-[1rem] rounded-full"></div>
                    </div>

                    <div className="hidden md:flex text-[10pt] absolute left-1/2 -translate-x-1/2">
                      Stack Icons - README.md
                    </div>
                  </div>
                  <div className="flex items-center px-[0.5rem] h-[3.5rem] border-b border-divider">
                    <Button
                      color="primary"
                      variant="flat"
                      startContent={
                        <FontAwesomeIcon icon={faMarkdown}></FontAwesomeIcon>
                      }
                      className="border-primary text-primary"
                    >
                      README.md
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col scrollbar-light dark:scrollbar-dark h-[calc(100dvh-12rem)] overflow-y-auto">
                  <ProjectReadme></ProjectReadme>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
