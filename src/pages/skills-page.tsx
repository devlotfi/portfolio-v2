import { faComputer, faHome, faStar } from "@fortawesome/free-solid-svg-icons";
import SkillsLineSection from "../components/skills-line-section";
import Desktop from "../assets/desktop.svg";
import Html from "../assets/html.svg";
import { Heading } from "../components/heading";
import SkillCard from "../components/skill-card";

export default function SkillsPage() {
  return (
    <div className="flex flex-col flex-1 items-center px-[2rem] md:px-[2.5rem] lg:px-[6rem]">
      <div className="flex flex-col w-full max-w-screen-lg">
        <Heading icon={faStar}>Skills</Heading>
        <div className="flex flex-col mt-[2rem]">
          <SkillsLineSection icon={faHome} left bottom endTopLeft>
            <div className="flex">
              <img className="h-[20rem]" src={Desktop} alt="desktop" />
              <div className="flex flex-col space-y-3">
                <div className="flex font-black text-[20pt]">
                  Programming languages
                </div>
                <div className="flex items-start">
                  <SkillCard title="html" image={Html}></SkillCard>
                </div>
              </div>
            </div>
          </SkillsLineSection>
          <SkillsLineSection icon={faComputer} right top endBottomRight>
            <div className="flex h-[20rem] w-[10rem]"></div>
          </SkillsLineSection>
        </div>
      </div>
    </div>
  );
}
