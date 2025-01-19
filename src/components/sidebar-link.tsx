import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, cn } from "@heroui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ComponentPropsWithRef } from "react";
import { motion } from "motion/react";

interface Props {
  icon: IconProp;
  url: string;
}

function SidebarLinkComponent({
  icon,
  url,
  children,
  ref,
}: ComponentPropsWithRef<"div"> & Props) {
  return (
    <motion.div
      className="flex"
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          y: 70,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 70,
          },
        },
      }}
    >
      <Button
        fullWidth
        onPress={() => {}}
        variant="light"
        className="h-[3rem] font-bold"
        startContent={
          <Card
            shadow="none"
            className={cn(
              "h-[2.5rem] w-[2.5rem] justify-center items-center",
              true ? "primary-bg" : "bg-transparent"
            )}
          >
            <FontAwesomeIcon
              className={cn("text-[18pt]", true && "text-primary-foreground")}
              icon={icon}
            ></FontAwesomeIcon>
          </Card>
        }
      >
        <div
          className={cn(
            "flex flex-1 text-[13pt]",
            true && "primary-bg bg-clip-text text-transparent"
          )}
        >
          {children}
        </div>
      </Button>
    </motion.div>
  );
}

const SidebarLink = motion.create(SidebarLinkComponent);
export default SidebarLink;
