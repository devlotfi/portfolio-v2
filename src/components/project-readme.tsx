import { useQuery } from "@tanstack/react-query";
import { octokitClient } from "../octokit-client";
import { Spinner } from "@heroui/react";
import { StrictMode, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function ProjectReadme() {
  const shadoDomRef = useRef<HTMLDivElement>(null);

  const { isLoading, data } = useQuery({
    queryKey: ["README"],
    queryFn: async () => {
      const response = await octokitClient.rest.repos.getReadme({
        owner: "devlotfi",
        repo: "etu-access",
      });
      const binaryString = atob(response.data.content);
      const utf8Decoder = new TextDecoder();
      const bytes = Uint8Array.from(binaryString, (char) => char.charCodeAt(0));
      const decodedText = utf8Decoder.decode(bytes);
      console.log(decodedText);

      return decodedText;
    },
  });

  useEffect(() => {
    if (shadoDomRef.current && !shadoDomRef.current.shadowRoot && data) {
      const shadow = shadoDomRef.current.attachShadow({ mode: "open" });

      createRoot(shadow).render(
        <StrictMode>
          <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
            {data}
          </Markdown>
        </StrictMode>
      );
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex flex-1 justify-center items-center">
        <Spinner color="primary" size="lg"></Spinner>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center px-[0.5rem]">
      <div
        ref={shadoDomRef}
        className="shadow-dom max-w-screen-md w-full flex-col flex p-[1rem] lg:border-l lg:border-r border-divider"
      ></div>
    </div>
  );
}
