import { PropsWithChildren, RefObject, useContext } from "react";
import { NavigationContext } from "../context/navigation-context";
import { Card, cn } from "@nextui-org/react";
import { ThemeContext } from "../context/theme-context";
import { ThemeOptions } from "../types/theme-options";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { NavigationPages } from "../types/navigation-pages";

interface Props {
  title: string;
  page: NavigationPages;
  icon: IconProp;
  scrollRef: RefObject<HTMLDivElement | null>;
}

export default function PageOverlay({
  children,
  icon,
  page,
  title,
  scrollRef,
}: PropsWithChildren<Props>) {
  const { appliedTheme } = useContext(ThemeContext);
  const { navigationData } = useContext(NavigationContext);

  return (
    <>
      <div
        ref={navigationData.page === page ? scrollRef : null}
        className={cn(
          "flex flex-col relative min-h-[calc(100vh-5rem)] min-w-[100vw] overflow-y-auto scroll-smooth",
          navigationData.zoomedOut && "rounded-[2rem] overflow-hidden"
        )}
      >
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
          <div className="flex primary-bg bg-clip-text text-transparent text-[30pt] sm:text-[60pt] font-black">
            {title.toUpperCase()}
          </div>
        </div>
        {page === navigationData.page ? children : null}
      </div>
    </>
  );
}
