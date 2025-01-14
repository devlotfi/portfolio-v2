import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Link } from "@nextui-org/react";
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
      whileHover={{
        rotate: 30,
        paddingTop: "1rem",
        paddingBottom: "1rem",
        transition: {
          duration: 0.3,
        },
      }}
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
      <Link href={url} target="_blank">
        <Button
          variant="light"
          isIconOnly
          className="text-[20pt] pointer-events-none"
        >
          {children}
        </Button>
      </Link>
    </motion.div>
  );
}

const MotionSocialIcon = motion.create(SocialIcon);

export default function SocialSideBtns() {
  return (
    <motion.div
      className="hidden lg:flex flex-col items-center space-y-2 fixed left-[2rem] top-[50vh] translate-y-[-50%] z-20"
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
