import { faComputer, faHome, faStar } from "@fortawesome/free-solid-svg-icons";
import SkillsLineSection from "../components/skills-line-section";
import Desktop from "../assets/desktop.svg";
import { Heading } from "../components/heading";

export default function SkillsPage() {
  return (
    <div className="flex flex-col flex-1 items-center">
      <div className="flex flex-col w-full max-w-screen-lg">
        <Heading icon={faStar}>About me</Heading>
        <SkillsLineSection icon={faHome} right bottom>
          <div className="flex bg-cyan-300 h-[20rem] w-[10rem]"></div>
          <img src={Desktop} alt="" />
        </SkillsLineSection>
        <SkillsLineSection icon={faComputer} left top>
          <div className="flex bg-cyan-300 h-[20rem] w-[10rem]"></div>
        </SkillsLineSection>
      </div>
    </div>
  );
}
