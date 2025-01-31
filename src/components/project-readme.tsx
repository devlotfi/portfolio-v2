import { StrictMode, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

interface Props {
  readme: string;
}

export default function ProjectReadme({ readme }: Props) {
  const shadoDomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shadoDomRef.current && !shadoDomRef.current.shadowRoot && readme) {
      const shadow = shadoDomRef.current.attachShadow({ mode: "open" });

      createRoot(shadow).render(
        <StrictMode>
          <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
            {readme}
          </Markdown>
        </StrictMode>
      );
    }
  }, [readme]);

  return (
    <div className="flex flex-col items-center">
      <div
        ref={shadoDomRef}
        className="shadow-dom max-w-screen-md w-full flex-col flex p-[0.7rem] md:p-[1rem] lg:border-l lg:border-r border-divider"
      ></div>
    </div>
  );
}
