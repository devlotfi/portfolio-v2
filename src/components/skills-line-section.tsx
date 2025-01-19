import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, cn } from "@heroui/react";
import { motion } from "motion/react";
import { PropsWithChildren } from "react";

interface Props {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  endTopLeft?: boolean;
  endTopRight?: boolean;
  endBottomLeft?: boolean;
  endBottomRight?: boolean;
  icon: IconProp;
  index?: number;
}

export default function SkillsLineSection({
  children,
  top,
  bottom,
  left,
  right,
  endTopLeft,
  endTopRight,
  endBottomLeft,
  endBottomRight,
  icon,
  index,
}: PropsWithChildren<Props>) {
  return (
    <div className="flex flex-col relative p-[1.5rem] md:p-[3rem] mt-[-2px]">
      <div
        className={cn(
          "flex absolute top-0 h-full w-1/2 border-divider pointer-events-none",
          top && "border-t-[2px]",
          bottom && "border-b-[2px]",
          left && "border-l-[2px] left-0",
          right && "border-r-[2px] right-0",
          top && right && "rounded-tr-3xl",
          top && left && "rounded-tl-3xl",
          bottom && right && "rounded-br-3xl",
          bottom && left && "rounded-bl-3xl"
        )}
      ></div>
      {endTopLeft || endTopRight || endBottomLeft || endBottomRight ? (
        <div
          className={cn(
            "flex absolute h-[1rem] w-[1rem] bg-divider rounded-full",
            endTopLeft && "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
            endTopRight && "top-0 right-0 translate-x-1/2 -translate-y-1/2",
            endBottomLeft && "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
            endBottomRight && "bottom-0 right-0 translate-x-1/2 translate-y-1/2"
          )}
          style={{
            marginTop: index ? `-${index * 2}rem` : undefined,
          }}
        ></div>
      ) : null}

      <motion.div
        className={cn(
          "flex absolute top-1/2",
          left && "left-0",
          right && "right-0"
        )}
        style={{ x: right ? "50%" : left ? "-50%" : undefined, y: "-50%" }}
        initial={{ opacity: 0, rotate: 90, scale: 0 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 70,
        }}
      >
        <Card
          shadow="none"
          className={cn(
            "primary-bg justify-center items-center h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem]"
          )}
        >
          <FontAwesomeIcon
            className="text-[15pt] md:text-[17pt] text-primary-foreground"
            icon={icon}
          ></FontAwesomeIcon>
        </Card>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
