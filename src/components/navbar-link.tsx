import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, cn } from "@nextui-org/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { PropsWithChildren, useContext } from "react";
import { NavigationPages } from "../types/navigation-pages";
import { NavigationContext } from "../context/navigation-context";
import { PagesConfig } from "../pages-config";
import { motion, Variants } from "motion/react";

interface Props {
  icon: IconProp;
  linkPage: NavigationPages;
}

const childVariant: Variants = {
  hidden: { opacity: 0, y: 70 },
  show: { opacity: 1, y: 0 },
};

export default function NavbarLink({
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
      }, 700);
    }, 700);
  };

  return (
    <motion.div
      className="flex"
      variants={childVariant}
      transition={{
        duration: 0.5,
        delay: 1,
        type: "spring",
        stiffness: 70,
      }}
    >
      <Button
        onPress={navigate}
        variant="light"
        className="h-[3rem] font-bold"
        startContent={
          <Card
            shadow="none"
            className={cn(
              "h-[2rem] w-[2rem] justify-center items-center",
              linkPage === navigationData.page ? "primary-bg" : "bg-transparent"
            )}
          >
            <FontAwesomeIcon
              className={cn(
                "text-[15pt]",
                linkPage === navigationData.page && "text-primary-foreground"
              )}
              icon={icon}
            ></FontAwesomeIcon>
          </Card>
        }
      >
        <div
          className={cn(
            "flex",
            linkPage === navigationData.page &&
              "primary-bg bg-clip-text text-transparent"
          )}
        >
          {children}
        </div>
      </Button>
    </motion.div>
  );
}
