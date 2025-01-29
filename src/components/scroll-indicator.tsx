import {
  motion,
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
} from "motion/react";
import { useContext, useState } from "react";
import { NavigationContext } from "../context/navigation-context";
import { Button } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollIndicator() {
  const { scrollRef } = useContext(NavigationContext);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const { scrollYProgress } = useScroll({
    container: scrollRef,
    layoutEffect: false,
  });

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (current === 0) {
      setShowScrollTop(false);
    } else {
      setShowScrollTop(true);
    }
  });

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };

  return (
    <>
      <motion.div
        className="flex w-screen h-[0.3rem] bg-primary-gradient z-10 fixed origin-left"
        style={{
          scaleX: scrollYProgress,
        }}
      ></motion.div>

      <AnimatePresence>
        {showScrollTop ? (
          <motion.div
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{
              duration: 3,
              type: "spring",
              stiffness: 70,
            }}
            className="fixed bottom-[2rem] right-[2rem] lg:bottom-[3rem] lg:right-[3rem] z-20"
          >
            <Button
              onPress={scrollToTop}
              color="primary"
              className="bg-primary-gradient"
              size="lg"
              radius="full"
              isIconOnly
              aria-label="scroll-top"
            >
              <FontAwesomeIcon
                className="text-[16pt]"
                icon={faAngleDoubleUp}
              ></FontAwesomeIcon>
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
