import Logo from "./logo";
import { Button, Link } from "@heroui/react";
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
}

function SocialIcon({ url, children }: PropsWithChildren<SocialIconsProps>) {
  return (
    <Button
      href={url}
      target="_blank"
      as={Link}
      variant="light"
      isIconOnly
      className="text-[22pt] pointer-events-none"
      aria-label="social-media-link"
    >
      {children}
    </Button>
  );
}

export default function Footer() {
  return (
    <div className="flex sm:flex-row flex-col sm:items-center space-y-10 sm:space-y-0 justify-around px-[2rem] py-[3rem] border-t border-divider bg-background-light-100 dark:bg-background-dark-100">
      <div className="self-start">
        <Logo className="h-[3.5rem]"></Logo>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex xl:hidden space-x-2">
          <SocialIcon url="https://github.com/devlotfi">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </SocialIcon>
          <SocialIcon url="mailto:debbal.lotfi.dev@gmail.com">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </SocialIcon>
          <SocialIcon url="https://www.linkedin.com/in/lotfi-debbal-64489a2ba/">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </SocialIcon>
          <SocialIcon url="https://x.com/LDebbal">
            <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon>
          </SocialIcon>
        </div>
        <div>
          Memoji avatars figma project found{" "}
          <span>
            <Link
              href="https://www.figma.com/community/file/1128570662923831097/diverse-collection-of-1785-memojis"
              target="_blank"
              className="bg-primary-gradient bg-clip-text text-transparent font-bold"
            >
              Here
            </Link>
          </span>
        </div>
        <div className="flex ">
          &copy; Debbal Lotfi {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
