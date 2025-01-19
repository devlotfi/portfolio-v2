import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, cn } from "@heroui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ComponentPropsWithRef, useContext } from "react";
import { motion } from "motion/react";
import { NavigationContext } from "../context/navigation-context";

interface Props {
  icon: IconProp;
  url: string;
}

function NavbarLinkComponent({
  icon,
  url,
  children,
  ref,
}: ComponentPropsWithRef<"div"> & Props) {
  const { navigationData } = useContext(NavigationContext);

  return (
    <motion.div
      className="flex"
      ref={ref}
      whileHover={{
        y: "0.5rem",
        transition: {
          duration: 0.3,
        },
      }}
      variants={{
        hidden: {
          opacity: 0,
          y: -70,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        },
      }}
    >
      <Button
        onPress={() => {}}
        variant="light"
        className="h-[3rem] font-bold"
        startContent={
          <Card
            shadow="none"
            className={cn(
              "h-[2rem] w-[2rem] justify-center items-center",
              true ? "primary-bg" : "bg-transparent"
            )}
          >
            <FontAwesomeIcon
              className={cn("text-[15pt]", true && "text-primary-foreground")}
              icon={icon}
            ></FontAwesomeIcon>
          </Card>
        }
      >
        <div
          className={cn(
            "flex",
            true && "primary-bg bg-clip-text text-transparent"
          )}
        >
          {children}
        </div>
      </Button>
    </motion.div>
  );
}

const MotionNavbarLink = motion.create(NavbarLinkComponent);
export default MotionNavbarLink;
