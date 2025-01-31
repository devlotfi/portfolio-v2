import { faGithub, faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  ScrollShadow,
  cn,
  Spinner,
} from "@heroui/react";
import ProjectReadme from "./project-readme";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import ProjectStatistics from "./project-statistics";
import { Tables } from "../__generated__/database.types";
import ScrollIndicator from "./scroll-indicator";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { octokitClient } from "../octokit-client";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  project: Tables<"projects">;
}

export default function ProjectDetails({
  isOpen,
  onOpenChange,
  project,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<"README" | "STATISTICS">("README");

  const { isLoading: isLoadingRateLimit, data: rateLimitData } = useQuery({
    enabled: isOpen,
    queryKey: ["RATE_LIMIT"],
    queryFn: async () => {
      const response = await octokitClient.rateLimit.get();
      return response;
    },
  });

  const { isLoading: isLoadingReadme, data: readmeData } = useQuery({
    refetchOnWindowFocus: false,
    enabled:
      isOpen &&
      !isLoadingRateLimit &&
      rateLimitData &&
      rateLimitData?.data.rate.remaining >= 5,
    queryKey: ["README", project.repository_name],
    queryFn: async ({
      queryKey: [, respository_name],
    }: QueryFunctionContext<[string, string]>) => {
      octokitClient.rateLimit.get();
      const response = await octokitClient.rest.repos.getReadme({
        owner: "devlotfi",
        repo: respository_name,
      });
      const binaryString = atob(response.data.content);
      const utf8Decoder = new TextDecoder();
      const bytes = Uint8Array.from(binaryString, (char) => char.charCodeAt(0));
      const decodedText = utf8Decoder.decode(bytes);
      return decodedText;
    },
  });

  return (
    <Modal
      size="5xl"
      placement="center"
      scrollBehavior="inside"
      shadow="none"
      className="bg-transparent overflow-hidden"
      classNames={{
        wrapper: "overflow-hidden",
      }}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton
    >
      <ModalContent className="min-h-[calc(100dvh-1rem)] sm:min-h-[calc(100dvh-2rem)]">
        {(onClose) => (
          <ModalBody className="flex flex-1 p-0 gap-0 flex-col overflow-hidden rounded-lg bg-background-light-100 dark:bg-background-dark-100 card-outline-light dark:card-outline-dark">
            <div className="flex flex-col">
              <div className="flex relative border-b border-divider h-[2.5rem] items-center px-[0.5rem]">
                <div className="flex gap-1">
                  <Button
                    onPress={onClose}
                    isIconOnly
                    className="flex bg-[#FC5753] border-[#DF4744] border min-w-[1rem] h-[1.5rem] w-[1.5rem] rounded-full"
                    aria-label="close-modal"
                  ></Button>
                  <Button
                    isIconOnly
                    className="flex bg-[#FDBC40] border-[#DE9F34] border min-w-[1rem] h-[1.5rem] w-[1.5rem] rounded-full"
                    aria-label="unused-1"
                  ></Button>
                  <Button
                    isIconOnly
                    className="flex bg-[#33C748] border-[#27AA35] border min-w-[1rem] h-[1.5rem] w-[1.5rem] rounded-full"
                    aria-label="unused-2"
                  ></Button>
                </div>

                <div className="hidden md:flex text-[10pt] absolute left-1/2 -translate-x-1/2">
                  {project.title} - README.md
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
                  aria-label="readme-tab"
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
                  aria-label="statistics-tab"
                >
                  Statistics
                </Button>
              </div>
            </div>

            <div className="flex h-[calc(100dvh-1rem-2.5rem-3.5rem)] sm:h-[calc(100dvh-2rem-2.5rem-3.5rem)]">
              {!isLoadingRateLimit && !isLoadingReadme ? (
                <>
                  {rateLimitData && rateLimitData.data.rate.remaining >= 5 ? (
                    <>
                      {tab === "README" ? (
                        <ScrollIndicator
                          scrollRef={scrollRef}
                        ></ScrollIndicator>
                      ) : null}
                      <ScrollShadow
                        ref={scrollRef}
                        className="flex flex-1 flex-col bg-background-light-200 dark:bg-background-dark-200 scrollbar-light dark:scrollbar-dark overflow-y-auto scroll-smooth"
                      >
                        {tab === "README" ? (
                          <ProjectReadme readme={readmeData!}></ProjectReadme>
                        ) : (
                          <ProjectStatistics
                            project={project}
                          ></ProjectStatistics>
                        )}
                      </ScrollShadow>
                    </>
                  ) : (
                    <div className="flex flex-col bg-background-light-200 dark:bg-background-dark-200 text-center gap-2 px-[1rem] flex-1 justify-center items-center">
                      <FontAwesomeIcon
                        className="text-[50pt]"
                        icon={faGithub}
                      ></FontAwesomeIcon>
                      <div className="flex text-[20pt] font-bold">
                        Rate limit exceede
                      </div>
                      <div className="flex text-[12pt] opacity-80">
                        The public Github API allow only 60 request/hour for
                        each IP
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-1 justify-center items-center">
                  <Spinner size="lg" color="primary"></Spinner>
                </div>
              )}
            </div>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
}
