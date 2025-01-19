import { Card, cn } from "@heroui/react";
import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import { ThemeOptions } from "../types/theme-options";

interface Props {
  title: string;
  image: string;
}

export default function SkillCard({ title, image }: Props) {
  const { appliedTheme } = useContext(ThemeContext);

  return (
    <Card
      shadow="none"
      className={cn(
        "flex flex-col border border-divider w-[5rem]",
        appliedTheme === ThemeOptions.LIGHT
          ? "card-gradient-bg-light-100"
          : "card-gradient-bg-dark-100"
      )}
      isPressable
    >
      <div className="flex w-full h-[5rem] justify-center items-center">
        <img className="h-[2.5rem]" src={image} alt="image" />
      </div>

      <div className="flex w-full h-[2rem] justify-center items-center py-[0.5rem] px-[0.5rem]">
        <div className="flex text-[9pt] leading-[0.8rem] font-bold text-wrap">
          {title}
        </div>
      </div>
    </Card>
  );
}
