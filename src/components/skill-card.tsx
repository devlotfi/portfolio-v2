import { Card, cn, Divider } from "@nextui-org/react";
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
        "flex flex-col border border-divider",
        appliedTheme === ThemeOptions.LIGHT
          ? "card-gradient-bg-light"
          : "card-gradient-bg-dark"
      )}
      isPressable
    >
      <div className="flex h-[5rem] w-[5rem] justify-center items-center">
        <img className="h-[2.5rem]" src={image} alt="image" />
      </div>

      <div className="flex w-full justify-center items-center py-[0.5rem]">
        <div className="flex text-[9pt] leading-[0.5rem] font-bold">
          {title}
        </div>
      </div>
    </Card>
  );
}
