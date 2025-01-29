import { useQuery } from "@tanstack/react-query";
import { octokitClient } from "../octokit-client";
import { Spinner } from "@heroui/react";
import { StrictMode, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectReadme() {
  const shadoDomRef = useRef<HTMLDivElement>(null);

  const { isLoading: isLoadingRateLimit, data: rateLimitData } = useQuery({
    queryKey: ["RATE_LIMIT"],
    queryFn: async () => {
      const response = await octokitClient.rateLimit.get();
      return response;
    },
  });

  const { isLoading: isLoadingReadme, data: readmeData } = useQuery({
    refetchOnWindowFocus: false,
    enabled:
      !isLoadingRateLimit &&
      rateLimitData &&
      rateLimitData?.data.rate.remaining >= 5,
    queryKey: ["README"],
    queryFn: async () => {
      octokitClient.rateLimit.get();
      const response = await octokitClient.rest.repos.getReadme({
        owner: "devlotfi",
        repo: "etu-access",
      });
      const binaryString = atob(response.data.content);
      const utf8Decoder = new TextDecoder();
      const bytes = Uint8Array.from(binaryString, (char) => char.charCodeAt(0));
      const decodedText = utf8Decoder.decode(bytes);
      return decodedText;
    },
  });

  useEffect(() => {
    if (shadoDomRef.current && !shadoDomRef.current.shadowRoot && readmeData) {
      const shadow = shadoDomRef.current.attachShadow({ mode: "open" });

      createRoot(shadow).render(
        <StrictMode>
          <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
            {readmeData}
          </Markdown>
        </StrictMode>
      );
    }
  }, [readmeData]);

  if (
    !isLoadingRateLimit &&
    rateLimitData &&
    rateLimitData.data.rate.remaining < 5
  ) {
    return (
      <div className="flex flex-col text-center gap-2 px-[1rem] flex-1 justify-center items-center">
        <FontAwesomeIcon
          className="text-[50pt]"
          icon={faGithub}
        ></FontAwesomeIcon>
        <div className="flex text-[20pt] font-bold">Rate limit exceede</div>
        <div className="flex text-[12pt] opacity-80">
          The public Github API allow only 60 request/hour for each IP
        </div>
      </div>
    );
  }

  if (isLoadingReadme) {
    return (
      <div className="flex flex-1 justify-center items-center">
        <Spinner color="primary" size="lg"></Spinner>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div
        ref={shadoDomRef}
        className="shadow-dom max-w-screen-md w-full flex-col flex p-[0.7rem] md:p-[1rem] lg:border-l lg:border-r border-divider"
      ></div>
    </div>
  );
}
