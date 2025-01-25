import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@heroui/react";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { ComponentPropsWithRef } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

interface SocialIconsProps {
  url: string;
}

function SocialIcon({
  url,
  children,
  ref,
}: ComponentPropsWithRef<"div"> & SocialIconsProps) {
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          rotate: 90,
        },
        visible: {
          opacity: 1,
          rotate: 0,
          transition: {
            duration: 0.5,
          },
        },
      }}
    >
      <Link
        href={url}
        target="_blank"
        className="text-[20pt] py-[0.5rem] duration-300 transition-[color,transform] text-foreground hover:text-primary hover:translate-x-[0.5rem]"
      >
        {children}
      </Link>
    </motion.div>
  );
}

const MotionSocialIcon = motion.create(SocialIcon);

export default function SocialSideBtns() {
  return (
    <motion.div
      className="hidden xl:flex flex-col items-center space-y-2 fixed left-[1rem] xl:left-[2rem] top-[50vh] translate-y-[-50%] z-20"
      initial="hidden"
      animate="visible"
      transition={{
        delayChildren: 2,
        staggerChildren: 0.2,
      }}
    >
      <MotionSocialIcon url="https://github.com/devlotfi">
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
      </MotionSocialIcon>
      <MotionSocialIcon url="mailto:debbal.lotfi.dev@gmail.com">
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
      </MotionSocialIcon>
      <MotionSocialIcon url="https://www.linkedin.com/in/lotfi-debbal-64489a2ba/">
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </MotionSocialIcon>
      <MotionSocialIcon url="https://x.com/LDebbal">
        <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon>
      </MotionSocialIcon>
    </motion.div>
  );
}
