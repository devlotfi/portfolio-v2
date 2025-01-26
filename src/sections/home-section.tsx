import {
  faAngleDoubleDown,
  faCode,
  faFileLines,
  faInfoCircle,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider, Link } from "@heroui/react";
import Avatar from "../assets/avatar.png";
import AvatarMap from "../assets/avatar-map.png";
import { useContext, useRef } from "react";
import { Heading } from "../components/heading";
import { motion, Variants } from "motion/react";
import { Transition } from "motion";
import { NavigationContext } from "../context/navigation-context";
import MapLight from "../assets/map-light.jpg";
import MapDark from "../assets/map-dark.jpg";
import { ThemeContext } from "../context/theme-context";
import { ThemeOptions } from "../types/theme-options";

const variants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const transition: Transition = {
  duration: 1,
  type: "spring",
  stiffness: 70,
};

export default function HomeSection() {
  const { appliedTheme } = useContext(ThemeContext);
  const { sectionRefs } = useContext(NavigationContext);
  const aboutMeRef = useRef<HTMLDivElement>(null);

  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <div
      className="flex flex-col home-page-lines"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--heroui-primary) / 0.1), transparent 50%)",
      }}
      ref={sectionRefs.current.ABOUT}
    >
      <div className="flex flex-col relative min-h-[calc(100vh-5rem)] pt-[2rem] lg:pt-0 lg:justify-center items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.2,
            delayChildren: 3,
          }}
          className="flex px-[2rem] flex-col lg:flex-row items-center max-w-[50rem] gap-20 mt-[1rem] lg:mt-0"
        >
          <div className="flex justify-center items-center relative">
            <div className="flex h-[12rem] w-[12rem] lg:h-[16rem] lg:w-[16rem] border border-divider bg-background-light-100 dark:bg-background-dark-100 card-outline-light dark:card-outline-dark rounded-full overflow-hidden justify-center items-center">
              <motion.img
                variants={variants}
                transition={transition}
                className="h-[12rem] lg:h-[17rem] mb-[-1.5rem]"
                src={Avatar}
                alt="developer"
              />
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
              className="flex h-[16rem] w-[16rem] lg:h-[20rem] lg:w-[20rem] absolute justify-center items-center rounded-full border-[2px] border-dashed border-divider"
            >
              <div className="flex justify-center items-center absolute rounded-full top-0 mt-[-1rem] h-[2rem] w-[2rem] bg-primary-gradient">
                <FontAwesomeIcon
                  className="text-primary-foreground"
                  icon={faCode}
                ></FontAwesomeIcon>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              variants={variants}
              transition={transition}
              className="flex text-[20pt] font-bold bg-primary-gradient bg-clip-text text-transparent"
            >
              Hi, my name is
            </motion.div>
            <motion.div
              variants={variants}
              transition={transition}
              className="flex text-[35pt] font-['Roboto_Serif'] font-extrabold"
            >
              Debbal Lotfi
            </motion.div>
            <motion.div
              variants={variants}
              transition={transition}
              className="flex text-[15pt]"
            >
              A Full-Stack Software Engineer crafting scalable and efficient
              digital solutions
            </motion.div>
            <div className="flex space-x-2 mt-[1rem]">
              <motion.div
                className="self-start"
                variants={variants}
                transition={transition}
                whileHover={{
                  scale: 1.1,
                }}
              >
                <Button
                  as={Link}
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  target="_blank"
                  color="primary"
                  className="bg-primary-gradient"
                  startContent={
                    <FontAwesomeIcon icon={faFileLines}></FontAwesomeIcon>
                  }
                >
                  Resume
                </Button>
              </motion.div>
              <motion.div
                className="self-start"
                variants={variants}
                transition={transition}
                whileHover={{
                  scale: 1.1,
                }}
              >
                <Button
                  className="font-bold"
                  variant="light"
                  startContent={
                    <FontAwesomeIcon icon={faAngleDoubleDown}></FontAwesomeIcon>
                  }
                  onPress={scrollToAboutMe}
                >
                  About me
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        ref={aboutMeRef}
        className="flex flex-col relative gap-7 justify-center items-center px-[1rem] py-[10rem]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={transition}
          className="max-w-screen-md rounded-lg p-[1.5rem] z-10 space-y-3 overflow-hidden bg-background-light-100 card-outline-light dark:bg-background-dark-100 dark:card-outline-dark"
        >
          <Heading icon={faInfoCircle}>About me</Heading>
          <div>
            I am a passionate full-stack developer with expertise in front-end,
            back-end, and mobile development. I create scalable applications
            with intuitive user interfaces and efficient server-side logic.
            Committed to delivering innovative, user-focused solutions, I stay
            updated on industry trends and excel in both solo and collaborative
            projects. I hold a Bachelor's in Information Systems and Software
            Engineering from{" "}
            <a
              className="inline underline bg-primary-gradient bg-clip-text text-transparent"
              href="https://www.usthb.dz/"
              target="_blank"
            >
              USTHB University.
            </a>
          </div>
        </motion.div>
        <div className="flex w-full max-w-screen-md gap-7">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={transition}
            className="flex flex-1 rounded-lg p-[0.7rem] lg:p-[1.5rem] z-10 overflow-hidden bg-background-light-100 card-outline-light dark:bg-background-dark-100 dark:card-outline-dark"
          >
            <div className="flex flex-col text-center justify-center items-center flex-1">
              <div className="flex flex-col items-center">
                <div className="flex leading-[2.5rem] font-black text-[25pt] lg:text-[35pt] bg-primary-gradient bg-clip-text text-transparent">
                  5+
                </div>
                <div className="flex text-[15pt] lg:text-[18pt] font-bold bg-primary-gradient bg-clip-text text-transparent">
                  Years
                </div>
              </div>
              <div className="flex text-[11pt] lg:text-[12pt]">
                Experience in web development
              </div>
            </div>
            <Divider className="mx-[1rem]" orientation="vertical"></Divider>
            <div className="flex flex-col flex-1 justify-center items-center">
              <FontAwesomeIcon
                className="mb-[1rem] text-primary text-[40pt]"
                icon={faMapMarkerAlt}
              ></FontAwesomeIcon>
              <div className="flex text-[11pt] lg:text-[12pt]">Based in</div>
              <div className="flex text-[11pt] lg:text-[12pt]">
                Algiers, Algeria
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={transition}
            className="hidden lg:flex relative rounded-lg z-10 overflow-hidden bg-background-light-100 card-outline-light dark:bg-background-dark-100 dark:card-outline-dark"
          >
            <div
              className="flex justify-center items-center absolute h-full w-full top-0 left-0"
              style={{
                background:
                  "radial-gradient(circle, hsl(var(--heroui-primary)), transparent 30%), hsl(var(--heroui-primary) / 0.3)",
              }}
            >
              <div className="flex justify-center items-center h-[4rem] w-[4rem] rounded-full bg-primary-gradient">
                <img src={AvatarMap} alt="avatar" />
              </div>
            </div>
            {appliedTheme === ThemeOptions.LIGHT ? (
              <img className="h-[15rem]" src={MapLight} alt="map" />
            ) : (
              <img className="h-[15rem]" src={MapDark} alt="map" />
            )}
          </motion.div>
        </div>

        <div className="flex absolute h-full gap-10">
          <div className="flex w-[0.2rem] bg-gradient-to-t from-transparent via-divider to-transparent"></div>
          <div className="flex w-[0.2rem] bg-gradient-to-t from-transparent via-divider to-transparent"></div>
          <div className="flex w-[0.2rem] bg-gradient-to-t from-transparent via-divider to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
