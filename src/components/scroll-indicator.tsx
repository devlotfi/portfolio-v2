import { motion, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useContext, useState } from "react";
import { NavigationContext } from "../context/navigation-context";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { NavigationPages } from "../types/navigation-pages";

interface Props {
  hideWhenIn?: NavigationPages[];
}

export default function ScrollIndicator({ hideWhenIn }: Props) {
  const { navigationData } = useContext(NavigationContext);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useMotionValueEvent(navigationData.scrollYProgress!, "change", (current) => {
    if (current === 0) {
      setShowScrollTop(false);
    } else {
      setShowScrollTop(true);
    }
  });

  const scrollToTop = () => {
    if (navigationData.scrollRef.current) {
      navigationData.scrollRef.current.scrollTop = 0;
    }
  };

  if (
    (!hideWhenIn || hideWhenIn.indexOf(navigationData.page) === -1) &&
    !navigationData.zoomedOut
  ) {
    return (
      <>
        <motion.div
          className="flex w-screen h-[0.3rem] primary-bg z-10 fixed origin-left"
          style={{
            scaleX: navigationData.scrollYProgress,
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
                className="primary-bg text-primary-foreground"
                size="lg"
                radius="full"
                isIconOnly
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
}
