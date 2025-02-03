import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, cn } from "@heroui/react";
import { motion, useScroll, useTransform } from "motion/react";
import { PropsWithChildren, useContext, useRef } from "react";
import { NavigationContext } from "../context/navigation-context";

interface Props {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  endPosition?: "TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT";
  title: string;
  icon: IconProp;
  index?: number;
}

export default function SkillsLineSection({
  children,
  top,
  bottom,
  left,
  right,
  endPosition,
  title,
  icon,
  index,
}: PropsWithChildren<Props>) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollRef } = useContext(NavigationContext);

  const { scrollYProgress } = useScroll({
    container: scrollRef,
    target: contentRef,
    layoutEffect: false,
    offset: ["start center", "end 1.5"],
  });

  const cardTranslateLeft = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );
  const cardTranslateRight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-100%"]
  );
  const cardOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="flex flex-col relative p-[1.5rem] md:p-[3rem] mt-[-2px]">
      <div
        className={cn(
          "flex absolute top-0 h-full w-1/2 border-divider border-dashed pointer-events-none",
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
      {endPosition ? (
        <div
          className={cn(
            "flex absolute h-[1rem] w-[1rem] bg-divider rounded-full",
            endPosition === "TOP_LEFT" &&
              "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
            endPosition === "TOP_RIGHT" &&
              "top-0 right-0 translate-x-1/2 -translate-y-1/2",
            endPosition === "BOTTOM_LEFT" &&
              "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
            endPosition === "BOTTOM_RIGHT" &&
              "bottom-0 right-0 translate-x-1/2 translate-y-1/2"
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
            "bg-primary-gradient justify-center items-center h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem]"
          )}
        >
          <FontAwesomeIcon
            className="text-[15pt] md:text-[17pt] text-primary-foreground"
            icon={icon}
          ></FontAwesomeIcon>
        </Card>
      </motion.div>

      <motion.div
        ref={contentRef}
        style={{
          translateX: left ? cardTranslateLeft : cardTranslateRight,
          opacity: cardOpacity,
        }}
        className="flex flex-col will-change-[transform,opacity] md:flex-row gap-7"
      >
        <div className="flex flex-col items-center flex-1 space-y-3">
          <div className="flex font-bold text-[20pt] font-['Roboto_Serif']">
            {title}
          </div>
          <div className="flex gap-3 justify-center items-start flex-wrap">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
