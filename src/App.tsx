import { useRef } from "react";
import Navbar from "./components/navbar";
import Developer from "./assets/developer.svg";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons/faAngleDoubleDown";

export default function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col min-h-screen main-bg">
      <Navbar
        sectionsRefs={[homeRef, skillsRef, experienceRef, projectsRef]}
      ></Navbar>
      <div
        ref={homeRef}
        id="home"
        className="flex h-[calc(100vh-5rem)] justify-center items-center"
      >
        <div className="flex">
          <img src={Developer} alt="developer" />
          <div className="flex flex-col">
            <div className="flex text-[30pt] font-black">
              Welcome, my name is
            </div>
            <div className="flex text-[30pt] font-black primary-bg bg-clip-text text-transparent">
              Debbal Lotfi
            </div>
            <div className="flex text-[25pt] font-bold opacity-70">
              Full-Stack Web developer
            </div>
            <Button
              className="primary-bg self-start"
              startContent={
                <FontAwesomeIcon icon={faAngleDoubleDown}></FontAwesomeIcon>
              }
            >
              About me
            </Button>
          </div>
        </div>
      </div>
      <div id="about-me" className="flex h-screen justify-center items-center">
        <h1>about me</h1>
      </div>
      <div
        ref={skillsRef}
        id="skills"
        className="flex h-screen justify-center items-center"
      >
        <h1>skills</h1>
      </div>
      <div
        ref={experienceRef}
        id="experience"
        className="flex h-screen justify-center items-center"
      >
        <h1>experience</h1>
      </div>
      <div
        ref={projectsRef}
        id="projects"
        className="flex h-screen justify-center items-center"
      >
        <h1>projects</h1>
      </div>
    </div>
  );
}
