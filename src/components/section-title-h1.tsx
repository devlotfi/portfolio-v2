import { PropsWithChildren } from "react";
import { motion } from "motion/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconProp;
  secondaryTitle?: string;
}

export default function SectionTitleH1({
  children,
  secondaryTitle,
  icon,
}: PropsWithChildren<Props>) {
  return (
    <div className="flex relative w-full max-w-screen-sm mt-[10rem] py-[5rem] items-center gap-5 bg-[radial-gradient(ellipse,hsl(var(--heroui-primary)/0.3),transparent_60%)] dark:bg-[radial-gradient(ellipse,hsl(var(--heroui-primary)/0.15),transparent_60%)]">
      <motion.div
        initial={{ scale: 0, x: "-50%", y: "-3rem" }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.7,
        }}
        className="flex will-change-[transform] absolute left-[50%]"
      >
        <FontAwesomeIcon
          className="text-[7rem] text-primary"
          style={{
            maskImage: "linear-gradient(to bottom, red, transparent 65%)",
          }}
          icon={icon}
        ></FontAwesomeIcon>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{
          duration: 0.7,
        }}
        className="flex flex-1 will-change-[transform,opacity] items-center origin-right h-[3px] bg-gradient-to-l from-foreground to-transparent"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
        }}
        className="flex flex-col will-change-[transform,opacity] items-center z-10"
      >
        <div className="flex text-[25pt] lg:text-[45pt] font-medium font-['Roboto_Serif']">
          {children}
        </div>
        <div className="flex text-[12pt] lg:text-[15pt] font-medium bg-primary-gradient bg-clip-text text-transparent">
          {secondaryTitle}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{
          duration: 0.7,
        }}
        className="flex flex-1 will-change-[transform,opacity] items-center origin-left h-[3px] bg-gradient-to-r from-foreground to-transparent"
      ></motion.div>
    </div>
  );
}
