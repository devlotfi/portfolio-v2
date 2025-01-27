import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { PropsWithChildren } from "react";

interface Props {
  icon: IconProp;
}

export function SectionTitleH2({ children, icon }: PropsWithChildren<Props>) {
  return (
    <motion.div className="flex items-center gap-3 w-full max-w-screen-md mt-[10rem]">
      <div className="flex items-center gap-3">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.7,
          }}
          className="flex text-[19pt] md:text-[30pt] font-['Roboto_Serif'] font-medium"
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
        className="flex flex-1 items-center origin-left h-[2px] bg-gradient-to-r from-foreground to-transparent"
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
