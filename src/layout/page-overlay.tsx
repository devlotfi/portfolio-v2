import { PropsWithChildren, useContext, useRef } from "react";
import { NavigationContext } from "../context/navigation-context";
import { Card, cn } from "@nextui-org/react";
import { ThemeContext } from "../context/theme-context";
import { ThemeOptions } from "../types/theme-options";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { NavigationPages } from "../types/navigation-pages";
import { useScroll, useMotionValueEvent, motion } from "motion/react";

interface Props {
  title: string;
  page: NavigationPages;
  icon: IconProp;
}

export default function PageOverlay({
  children,
  icon,
  page,
  title,
}: PropsWithChildren<Props>) {
  const { appliedTheme } = useContext(ThemeContext);
  const { navigationData } = useContext(NavigationContext);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <>
      <div
        ref={scrollRef}
        className={cn(
          "flex flex-col relative min-h-[calc(100vh-5rem)] min-w-[100vw] overflow-y-auto",
          navigationData.zoomedOut && "rounded-[2rem] overflow-hidden"
        )}
      >
        <motion.div
          className="flex w-screen h-[1rem] bg-primary fixed top-[-1rem] z-[1000]"
          style={{
            scaleX: scrollYProgress,
          }}
        ></motion.div>
        <div
          className={cn(
            "flex flex-col border border-divider justify-center items-center z-10 absolute top-0 left-0 opacity-0 h-full w-full duration-200 rounded-[2rem]",
            appliedTheme === ThemeOptions.LIGHT
              ? "card-gradient-bg-light"
              : "card-gradient-bg-dark",
            navigationData.zoomedOut && "opacity-100",
            !navigationData.zoomedOut && "pointer-events-none"
          )}
        >
          <Card
            shadow="none"
            className="primary-bg h-[10rem] w-[10rem] sm:h-[15rem] sm:w-[15rem] rounded-[1rem] justify-center items-center"
          >
            <FontAwesomeIcon
              icon={icon}
              className="text-[70pt] text-primary-foreground"
            ></FontAwesomeIcon>
          </Card>
          <div className="flex primary-bg bg-clip-text text-transparent text-[45pt] sm:text-[60pt] font-black">
            {title.toUpperCase()}
          </div>
        </div>
        {page === navigationData.page ? children : null}
      </div>
    </>
  );
}
