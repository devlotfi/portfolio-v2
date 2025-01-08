import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, cn, Link } from "@nextui-org/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { PropsWithChildren } from "react";

interface Props {
  icon: IconProp;
  sectionId: string;
  activeSectionId: string | null;
}

export default function NavbarLink({
  icon,
  activeSectionId,
  sectionId,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Link href={`#${sectionId}`}>
      <Button
        variant="light"
        className={cn("h-[3rem] w-[9rem]")}
        startContent={
          <Card
            shadow="none"
            className={cn(
              "h-[2rem] w-[2rem] justify-center items-center",
              activeSectionId === sectionId ? "primary-bg" : "bg-transparent"
            )}
          >
            <FontAwesomeIcon
              className="text-white text-[15pt]"
              icon={icon}
            ></FontAwesomeIcon>
          </Card>
        }
      >
        {children}
      </Button>
    </Link>
  );
}
