import { cn } from "@heroui/react";
import { useEffect, useState } from "react";

export default function InitialLoading() {
  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHidden(true);
    }, 2300);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed h-dvh w-dvw top-0 left-0 flex justify-center items-center z-[1000] duration-300 transition-[opacity] bg-background-light-100 dark:bg-background-dark-100",
        hidden && "opacity-0 pointer-events-none"
      )}
    >
      <svg
        className="h-[7rem]"
        viewBox="0 -10 1028 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="stroke-foreground animate-[line-light_2s_ease] dark:animate-[line-dark_2s_ease]"
          style={{
            strokeWidth: 10,
            strokeDasharray: 1930,
            strokeDashoffset: 1930,
            animationFillMode: "forwards",
          }}
          d="M0 506L172.939 0H301.19L146.857 433.714H440.571V506H0Z"
        />
        <path
          className="stroke-foreground animate-[line-light_2s_ease] dark:animate-[line-dark_2s_ease]"
          style={{
            strokeWidth: 10,
            strokeDasharray: 2070,
            strokeDashoffset: 2070,
            animationFillMode: "forwards",
          }}
          d="M514 506V0H881.143V72.2857H954.571V144.571H1028V361.429H954.571V433.714H881.143V506H514ZM660.857 433.714H807.714V361.429H881.143V144.571H807.714V72.2857H660.857V433.714Z"
        />
      </svg>
    </div>
  );
}
