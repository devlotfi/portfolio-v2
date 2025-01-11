import { motion } from "motion/react";
import Logo from "./logo";
import { Button, Link } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { PropsWithChildren } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 70,
      }}
    >
      <Link href={url} target="_blank">
        <Button variant="light" isIconOnly className="text-[22pt]">
          {children}
        </Button>
      </Link>
    </motion.div>
  );
}

export default function Footer() {
  return (
    <div className="flex sm:flex-row flex-col sm:items-center space-y-10 sm:space-y-0 justify-around px-[2rem] py-[3rem] border-t border-divider card-gradient-bg-dark card-gradient-bg-light">
      <motion.div
        className="self-start"
        initial={{ rotate: 90, scale: 0, opacity: 0 }}
        whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{
          duration: 5,
          type: "spring",
          stiffness: 70,
        }}
      >
        <Logo className="h-[3.5rem]"></Logo>
      </motion.div>
      <div className="flex flex-col space-y-3">
        <div className="flex lg:hidden space-x-2">
          <SocialIcon delay={0} url="https://github.com/devlotfi">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </SocialIcon>
          <SocialIcon delay={0.2} url="mailto:debbal.lotfi.dev@gmail.com">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </SocialIcon>
          <SocialIcon
            delay={0.4}
            url="https://www.linkedin.com/in/lotfi-debbal-64489a2ba/"
          >
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </SocialIcon>
          <SocialIcon delay={0.6} url="https://x.com/LDebbal">
            <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon>
          </SocialIcon>
        </div>
        <motion.div
          className="flex space-x-1"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 150,
          }}
        >
          <div className="flex">Illustrations designed by</div>
          <Link
            href="https://freepik.com/"
            target="_blank"
            className="primary-bg bg-clip-text text-transparent"
          >
            Freepik
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
