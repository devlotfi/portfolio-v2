import { PropsWithChildren } from "react";

export default function TimelineSectionListItem({
  children,
}: PropsWithChildren) {
  return (
    <div className="flex gap-3 items-center">
      <div className="flex min-h-[0.7rem] min-w-[0.7rem] bg-primary-gradient rounded-full"></div>
      <div className="flex">{children}</div>
    </div>
  );
}
