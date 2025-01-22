import { useEffect, useRef } from "react";
import { motion, SpringOptions, useMotionValue, useSpring } from "motion/react";
import "./cursor-light.css";

const spring: SpringOptions = { damping: 15, stiffness: 150, restDelta: 0.001 };

export default function CusorLight() {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (cursorRef.current) {
        xPoint.set(
          event.clientX -
            cursorRef.current.offsetLeft -
            cursorRef.current.offsetWidth / 2
        );
        yPoint.set(
          event.clientY -
            cursorRef.current.offsetTop -
            cursorRef.current.offsetHeight / 2
        );
      }
    };
    window.addEventListener("mousemove", handler);

    return () => {
      window.removeEventListener("mousemove", handler);
    };
  }, [xPoint, yPoint]);

  return (
    <motion.div
      ref={cursorRef}
      className="flex fixed h-[50vh] w-[50vh] mouse-cursor cursor-light dark:cursor-dark"
      style={{ x, y }}
    ></motion.div>
  );
}
