interface Props {
  title: string;
  image: string;
}

export default function SkillCard({ title, image }: Props) {
  return (
    <div className="flex flex-col rounded-lg border border-divider w-[5rem] bg-background-light-100 dark:bg-background-dark-100">
      <div className="flex w-full h-[4rem] justify-center items-center">
        <img className="h-[2.5rem]" src={image} alt="image" />
      </div>

      <div className="flex w-full h-[2rem] justify-center items-center py-[0.5rem] px-[0.5rem]">
        <div className="flex text-[9pt] leading-[0.8rem] font-bold text-wrap">
          {title}
        </div>
      </div>
    </div>
  );
}
