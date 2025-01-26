import { PropsWithChildren } from "react";
import { motion } from "motion/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconProp;
}

export default function SectionTitle({
  children,
  icon,
}: PropsWithChildren<Props>) {
  return (
    <div className="flex w-full max-w-screen-sm mt-[10rem] py-[5rem] items-center gap-5 bg-[radial-gradient(ellipse,hsl(var(--heroui-primary)/0.3),transparent_60%)] dark:bg-[radial-gradient(ellipse,hsl(var(--heroui-primary)/0.15),transparent_60%)]">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{
          duration: 0.7,
        }}
        className="flex flex-1 items-center origin-right h-[3px] bg-gradient-to-l from-foreground to-transparent"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
        }}
        className="flex flex-col items-center"
      >
        <div className="flex text-[25pt] lg:text-[45pt] font-medium font-['Roboto_Serif']">
          {children}
        </div>
        <div className="flex text-[15pt] font-medium bg-primary-gradient bg-clip-text text-transparent">
          What i can do
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{
          duration: 0.7,
        }}
        className="flex flex-1 items-center origin-left h-[3px] bg-gradient-to-r from-foreground to-transparent"
      ></motion.div>
    </div>
  );

  return (
    <motion.div className="flex items-center gap-3 w-full max-w-screen-lg mt-[10rem]">
      <div className="flex items-center gap-3">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.7,
          }}
          className="flex text-[19pt] md:text-[30pt] font-black bg-primary-gradient bg-clip-text text-transparent"
        >
          {children}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{
          duration: 0.7,
        }}
        className="flex flex-1 items-center origin-left h-[2px] bg-gradient-to-r from-divider to-transparent"
      ></motion.div>
      <motion.div
        initial={{ scale: 0, rotate: 90, opacity: 0 }}
        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
        }}
        className="flex justify-center items-center h-[2.3rem] w-[2.3rem] md:h-[3rem] md:w-[3rem] bg-primary-gradient rounded-lg"
      >
        <FontAwesomeIcon
          icon={icon}
          className="text-[17pt] text-primary-foreground"
        ></FontAwesomeIcon>
      </motion.div>
    </motion.div>
  );
}
