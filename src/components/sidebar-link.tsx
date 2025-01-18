import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, cn } from "@nextui-org/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ComponentPropsWithRef } from "react";
import { motion } from "motion/react";
import { useLocation, useNavigate } from "react-router";

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
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
        onPress={() => navigate(url)}
        variant="light"
        className="h-[3rem] font-bold"
        startContent={
          <Card
            shadow="none"
            className={cn(
              "h-[2.5rem] w-[2.5rem] justify-center items-center",
              url === pathname ? "primary-bg" : "bg-transparent"
            )}
          >
            <FontAwesomeIcon
              className={cn(
                "text-[18pt]",
                url === pathname && "text-primary-foreground"
              )}
              icon={icon}
            ></FontAwesomeIcon>
          </Card>
        }
      >
        <div
          className={cn(
            "flex flex-1 text-[13pt]",
            url === pathname && "primary-bg bg-clip-text text-transparent"
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
