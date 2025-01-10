import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, cn } from "@nextui-org/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { PropsWithChildren, useContext } from "react";
import { NavigationPages } from "../types/navigation-pages";
import { NavigationContext } from "../context/navigation-context";
import { PagesConfig } from "../pages-config";

interface Props {
  icon: IconProp;
  linkPage: NavigationPages;
}

export default function SidebarLink({
  icon,
  linkPage,
  children,
}: PropsWithChildren<Props>) {
  const { navigationData, setNavigationData } = useContext(NavigationContext);

  const navigate = () => {
    if (navigationData.isNavigating || navigationData.page === linkPage) {
      return;
    }

    const nextPage = PagesConfig[linkPage];

    setNavigationData({
      ...navigationData,
      zoomedOut: true,
      isNavigating: true,
      sidebarOpen: false,
    });
    setTimeout(() => {
      setNavigationData((navigationData) => ({
        ...navigationData,
        transformOrigin: nextPage.transformOrigin,
        translateOffset: nextPage.translateOffset,
        backgroundOffset: nextPage.backgroundOffset,
        page: linkPage,
      }));

      setTimeout(() => {
        setNavigationData((navigationData) => ({
          ...navigationData,
          zoomedOut: false,
          isNavigating: false,
        }));
      }, 500);
    }, 500);
  };

  return (
    <Button
      onPress={navigate}
      variant="light"
      className="h-[3rem] font-bold"
      startContent={
        <Card
          shadow="none"
          className={cn(
            "h-[2.5rem] w-[2.5rem] justify-center items-center",
            linkPage === navigationData.page ? "primary-bg" : "bg-transparent"
          )}
        >
          <FontAwesomeIcon
            className={cn(
              "text-[18pt]",
              linkPage === navigationData.page && "text-primary-foreground"
            )}
            icon={icon}
          ></FontAwesomeIcon>
        </Card>
      }
    >
      <div
        className={cn(
          "flex flex-1 text-[13pt]",
          linkPage === navigationData.page &&
            "primary-bg bg-clip-text text-transparent"
        )}
      >
        {children}
      </div>
    </Button>
  );
}
