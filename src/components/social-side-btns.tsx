import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Link } from "@nextui-org/react";
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
    <Link href={url} target="_blank">
      <Button variant="light" isIconOnly className="text-[20pt]">
        {children}
      </Button>
    </Link>
  );
}

export default function SocialSideBtns() {
  return (
    <div className="hidden lg:flex flex-col items-center space-y-2 fixed left-[2rem] bottom-0 z-20">
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

      <div className="flex w-[0.3rem] h-[7rem] bg-gradient-to-t from-transparent to-foreground"></div>
    </div>
  );
}
