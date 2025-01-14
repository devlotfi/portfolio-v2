import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Link } from "@nextui-org/react";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { PropsWithChildren } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

interface SocialIconsProps {
  url: string;
  delay: number;
}

function SocialIcon({
  url,
  children,
  delay,
}: PropsWithChildren<SocialIconsProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: 90, scale: 0 }}
      animate={{ opacity: 1, rotate: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 2 + delay,
        type: "spring",
        stiffness: 70,
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

export default function SocialSideBtns() {
  return (
    <div className="hidden lg:flex flex-col items-center space-y-2 fixed left-[2rem] top-[50vh] translate-y-[-50%] z-20">
      <SocialIcon delay={0.6} url="https://github.com/devlotfi">
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
      </SocialIcon>
      <SocialIcon delay={0.4} url="mailto:debbal.lotfi.dev@gmail.com">
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
      </SocialIcon>
      <SocialIcon
        delay={0.2}
        url="https://www.linkedin.com/in/lotfi-debbal-64489a2ba/"
      >
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </SocialIcon>
      <SocialIcon delay={0} url="https://x.com/LDebbal">
        <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon>
      </SocialIcon>
    </div>
  );
}
