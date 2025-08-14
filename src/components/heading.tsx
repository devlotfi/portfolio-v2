import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@heroui/react";
import { PropsWithChildren } from "react";

interface ClassNames {
  wrapper?: string;
  icon?: string;
  text?: string;
}

interface Props {
  icon: IconProp;
  classNames?: ClassNames;
}

export function Heading({
  classNames = {},
  icon,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={cn(
        "flex items-center space-x-3 text-[20pt]",
        classNames.wrapper
      )}
    >
      <div className="flex h-[2.5rem] w-[2.5rem] justify-center items-center bg-primary-gradient rounded-lg">
        <FontAwesomeIcon
          icon={icon}
          className={cn("text-primary-foreground", classNames.icon)}
        ></FontAwesomeIcon>
      </div>
      <div className={cn("font-bold font-['Roboto_Serif']", classNames.text)}>
        {children}
      </div>
    </div>
  );
}
