import { SVGProps } from "react";

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1028 506"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 506L172.939 0H301.19L146.857 433.714H440.571V506H0Z"
        className="fill-foreground"
      />
      <path
        d="M514 506V0H881.143V72.2857H954.571V144.571H1028V361.429H954.571V433.714H881.143V506H514ZM660.857 433.714H807.714V361.429H881.143V144.571H807.714V72.2857H660.857V433.714Z"
        className="fill-foreground"
      />
    </svg>
  );
}
