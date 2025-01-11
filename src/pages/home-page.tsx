import {
  faAngleDoubleDown,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardBody, cn } from "@nextui-org/react";
import Developer from "../assets/developer.svg";
import { useContext, useRef } from "react";
import { ThemeContext } from "../context/theme-context";
import { ThemeOptions } from "../types/theme-options";
import "./home-page.css";
import { Heading } from "../components/heading";
import { motion } from "motion/react";

export default function HomePage() {
  const { appliedTheme } = useContext(ThemeContext);
  const aboutMeRef = useRef<HTMLDivElement>(null);

  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({
        block: "nearest",
      });
    }
  };

  return (
    <div className="flex flex-col home-page-lines">
      <div className="flex flex-col min-h-[calc(100vh-5rem)] pt-[2rem] lg:pt-0 lg:justify-center items-center">
        <div className="flex px-[2rem] flex-col lg:flex-row max-w-screen-md space-x-5">
          <motion.img
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{
              duration: 3,
              delay: 1,
              type: "spring",
              stiffness: 150,
            }}
            className="h-[15rem] lg:h-[19rem] self-start"
            src={Developer}
            alt="developer"
          />
          <div className="flex flex-col">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 1,
                type: "spring",
                stiffness: 150,
              }}
              className="flex text-[20pt] font-bold primary-bg bg-clip-text text-transparent"
            >
              Welcome, my name is
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 1.2,
                type: "spring",
                stiffness: 150,
              }}
              className="flex text-[35pt] font-black"
            >
              Debbal Lotfi
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 1.5,
                type: "spring",
                stiffness: 150,
              }}
              className="flex text-[15pt] opacity-70"
            >
              A Full-Stack Software Engineer crafting scalable and efficient
              digital solutions
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 1.7,
                type: "spring",
                stiffness: 150,
              }}
            >
              <Button
                color="primary"
                className="primary-bg self-start mt-[1rem]"
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
      </div>
      <div
        ref={aboutMeRef}
        className="flex flex-col justify-center items-center min-h-[calc(100vh-5rem)] px-[1rem] py-[10rem]"
      >
        <Card
          className={cn(
            "max-w-screen-md border border-divider",
            appliedTheme === ThemeOptions.LIGHT
              ? "card-gradient-bg-light"
              : "card-gradient-bg-dark"
          )}
          fullWidth
        >
          <CardBody className="p-[1.5rem] space-y-3 overflow-hidden">
            <Heading icon={faInfoCircle}>About me</Heading>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 150,
              }}
            >
              I am a passionate full-stack web developer with a comprehensive
              background in both front-end and back-end development, as well as
              mobile development. Throughout my career, I have worked on a
              diverse range of projects, building robust and scalable web and
              mobile applications. My expertise spans designing intuitive user
              interfaces, developing efficient server-side logic.
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 150,
              }}
            >
              I am committed to continuous learning and staying updated with the
              latest industry trends to deliver high-quality and innovative
              solutions. Whether working on a solo project or collaborating with
              a team, I strive to create user-centric applications that meet
              business objectives and provide exceptional user experiences.
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 150,
              }}
            >
              I hold a Bachelor's degree in Information Systems and Software
              Engineering from{" "}
              <a
                className="inline underline primary-bg bg-clip-text text-transparent"
                href="https://www.usthb.dz/"
                target="_blank"
              >
                USTHB University
              </a>
              , where I developed a strong foundation in software engineering
              principles.
            </motion.div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
