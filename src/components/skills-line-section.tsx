import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, cn } from "@nextui-org/react";
import { PropsWithChildren } from "react";

interface Props {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  icon: IconProp;
}

export default function SkillsLineSection({
  children,
  top,
  bottom,
  left,
  right,
  icon,
}: PropsWithChildren<Props>) {
  return (
    <div className="flex relative p-[3rem]">
      <div
        className={cn(
          "flex absolute top-0 h-full w-1/2 border-divider",
          top && "border-t-[2px] mt-[-2px]",
          bottom && "border-b-[2px]",
          left && "border-l-[2px] left-0",
          right && "border-r-[2px] right-0",
          top && right && "rounded-tr-3xl",
          top && left && "rounded-tl-3xl",
          bottom && right && "rounded-br-3xl",
          bottom && left && "rounded-bl-3xl"
        )}
      ></div>
      <Card
        className={cn(
          "flex absolute top-1/2 -translate-y-1/2 primary-bg justify-center items-center h-[3rem] w-[3rem]",
          left && "-translate-x-1/2 left-0",
          right && "translate-x-1/2 right-0"
        )}
      >
        <FontAwesomeIcon
          className="text-[17pt] text-primary-foreground"
          icon={icon}
        ></FontAwesomeIcon>
      </Card>

      {children}
    </div>
  );
}
