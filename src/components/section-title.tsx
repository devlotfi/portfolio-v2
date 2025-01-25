import { PropsWithChildren } from "react";
import SectionTitleLines from "../assets/section-title-lines.svg";
import { motion } from "motion/react";

export default function SectionTitle({ children }: PropsWithChildren) {
  return (
    <motion.div className="flex w-full max-w-screen-xl my-[5rem] h-[10rem]">
      <motion.div
        initial={{ opacity: 0, x: "-50%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
        }}
        className="flex flex-1"
        style={{
          background: `url("${SectionTitleLines}")`,
          maskImage: "linear-gradient(to left, red, transparent)",
          backgroundRepeat: "no-repeat no-repeat",
          backgroundPosition: "right center",
        }}
      ></motion.div>
      <div className="flex items-center gap-3">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
          }}
          className="flex text-[30pt] font-black bg-primary-gradient bg-clip-text text-transparent px-[1rem]"
        >
          {children}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: "50%", scaleX: -1 }}
        whileInView={{ opacity: 1, x: 0, scaleX: -1 }}
        transition={{
          duration: 0.7,
        }}
        className="flex flex-1"
        style={{
          background: `url("${SectionTitleLines}")`,
          maskImage: "linear-gradient(to left, red, transparent)",
          backgroundRepeat: "no-repeat no-repeat",
          backgroundPosition: "right center",
        }}
      ></motion.div>
    </motion.div>
  );
}
