import { cn } from "@heroui/react";
import { ComponentProps } from "react";

export function SectionTitleH2({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn("flex justify-center w-full pb-[3rem]", className)}
      {...props}
    >
      <div className="flex relative justify-center items-center gap-3">
        <div className="flex z-10 text-[19pt] md:text-[30pt] font-['Roboto_Serif'] font-medium">
          {children}
        </div>
        <div
          className="flex absolute h-[5.5rem] w-full border-[3px] border-foreground rounded-[100%]"
          style={{
            maskImage:
              "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 25%)",
          }}
        ></div>
      </div>
    </div>
  );
}
