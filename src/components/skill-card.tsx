import { Card } from "@heroui/react";

interface Props {
  title: string;
  image: string;
}

export default function SkillCard({ title, image }: Props) {
  return (
    <Card
      shadow="none"
      className="flex flex-col border border-divider w-[5rem] card-gradient-bg-light-100 dark:card-gradient-bg-dark-100"
    >
      <div className="flex w-full h-[4rem] justify-center items-center">
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
