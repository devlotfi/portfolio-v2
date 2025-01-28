import { Chip, cn } from "@heroui/react";
import { motion } from "motion/react";
import { PropsWithChildren } from "react";

interface Props {
  cardPosition: "LEFT" | "RIGHT";
  dateContent: string;
  endTop?: boolean;
  endBottom?: boolean;
}

export default function TimelineSection({
  children,
  cardPosition,
  dateContent,
  endTop,
  endBottom,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={cn(
        "flex relative gap-5 px-[1.5rem] w-full max-w-screen-lg lg:flex-row",
        cardPosition === "RIGHT" && "lg:flex-row-reverse"
      )}
    >
      <div className="flex flex-1 flex-col gap-3 py-[2rem] lg:py-[1.5rem]">
        <motion.div
          initial={{ x: cardPosition === "LEFT" ? -50 : 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="flex relative flex-col gap-3 z-10 rounded-lg p-[1.2rem] bg-background-light-100 card-outline-light dark:bg-background-dark-100 dark:card-outline-dark"
        >
          <Chip
            size="lg"
            color="primary"
            className={cn(
              "flex z-10 absolute top-[-1.5rem] bg-primary-gradient !font-medium self-start",
              cardPosition === "LEFT" && "lg:self-start",
              cardPosition === "RIGHT" && "lg:self-end"
            )}
          >
            {dateContent}
          </Chip>
          <div className="flex flex-col gap-3">{children}</div>
        </motion.div>
      </div>
      <div className="flex absolute items-center h-full lg:h-auto left-[50%] -translate-x-1/2 lg:translate-x-0 lg:static w-[3px] bg-foreground">
        {endTop ? (
          <div className="flex absolute h-[3px] w-[2rem] rounded-full bg-foreground top-0 left-[50%] -translate-x-1/2"></div>
        ) : null}
        {endBottom ? (
          <svg
            className="flex absolute h-[1.6rem] bottom-[-1.5rem] left-[50%] -translate-x-1/2"
            width="427"
            height="427"
            viewBox="0 0 427 427"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-foreground"
              d="M387.897 0H39.1033C10.1114 0 -8.74491 30.5102 4.22066 56.4413L178.617 405.235C192.99 433.98 234.01 433.98 248.383 405.235L422.779 56.4413C435.745 30.5102 416.889 0 387.897 0Z"
            />
          </svg>
        ) : null}

        <motion.div
          initial={{ scale: 0, translateX: "-50%" }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="flex absolute left-[50%] h-[1.3rem] w-[1.3rem] bg-foreground rounded-full"
        ></motion.div>
      </div>
      <div className="hidden lg:flex flex-1"></div>
    </div>
  );
}
