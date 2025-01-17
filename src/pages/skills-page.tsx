import {
  faCode,
  faComputer,
  faDatabase,
  faDesktop,
  faGlobe,
  faHome,
  faMobileScreen,
  faMobileScreenButton,
  faServer,
  faStar,
  faWindowRestore,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import SkillsLineSection from "../components/skills-line-section";
import { Heading } from "../components/heading";
import SkillCard from "../components/skill-card";

import ProgrammingSVG from "../assets/freepik/programming.svg";
import FrontendSVG from "../assets/freepik/frontend.svg";
import DesktopSVG from "../assets/freepik/desktop.svg";
import MobileSVG from "../assets/freepik/mobile.svg";
import BackendSVG from "../assets/freepik/backend.svg";
import ApiSVG from "../assets/freepik/api.svg";
import DatabasSVGe from "../assets/freepik/database.svg";
import ToolsSVG from "../assets/freepik/tools.svg";

import HtmlSVG from "../assets/skills/html.svg";
import CssSVG from "../assets/skills/css.svg";
import TypescriptSVG from "../assets/skills/typescript.svg";
import PythonSVG from "../assets/skills/python.svg";
import CsSVG from "../assets/skills/cs.svg";
import JavaSVG from "../assets/skills/java.svg";

export default function SkillsPage() {
  return (
    <div className="flex flex-col flex-1 items-center px-[2rem] md:px-[2.5rem] lg:px-[6rem]">
      <div className="flex flex-col w-full max-w-screen-md">
        <div className="flex flex-col mt-[2rem]">
          <SkillsLineSection icon={faCode} left bottom endTopLeft index={0}>
            <div className="flex gap-7">
              <img className="h-[15rem]" src={ProgrammingSVG} alt="desktop" />
              <div className="flex flex-col space-y-3">
                <div className="flex font-black text-[20pt]">
                  Programming languages
                </div>
                <div className="flex gap-3 items-start flex-wrap">
                  <SkillCard title="Html" image={HtmlSVG}></SkillCard>
                  <SkillCard title="Css" image={CssSVG}></SkillCard>
                  <SkillCard
                    title="Typescript"
                    image={TypescriptSVG}
                  ></SkillCard>
                  <SkillCard title="Python" image={PythonSVG}></SkillCard>
                  <SkillCard title="C#" image={CsSVG}></SkillCard>
                  <SkillCard title="Java" image={JavaSVG}></SkillCard>
                </div>
              </div>
            </div>
          </SkillsLineSection>
          <SkillsLineSection icon={faWindowRestore} right top bottom index={1}>
            <div className="flex gap-7">
              <div className="flex flex-col space-y-3">
                <div className="flex font-black text-[20pt]">Front-end</div>
                <div className="flex gap-3 items-start flex-wrap">
                  <SkillCard title="Html" image={HtmlSVG}></SkillCard>
                  <SkillCard title="Css" image={CssSVG}></SkillCard>
                </div>
                <div className="flex font-black text-[20pt]">Libraries</div>
                <div className="flex gap-3 items-start flex-wrap">
                  <SkillCard title="Html" image={HtmlSVG}></SkillCard>
                  <SkillCard title="Css" image={CssSVG}></SkillCard>
                  <SkillCard
                    title="Typescript"
                    image={TypescriptSVG}
                  ></SkillCard>
                  <SkillCard title="Python" image={PythonSVG}></SkillCard>
                  <SkillCard title="C#" image={CsSVG}></SkillCard>
                  <SkillCard title="Java" image={JavaSVG}></SkillCard>
                </div>
              </div>
              <img className="h-[15rem]" src={FrontendSVG} alt="desktop" />
            </div>
          </SkillsLineSection>
          <SkillsLineSection icon={faDesktop} left top bottom index={2}>
            <div className="flex h-[20rem] w-[10rem]">desktop</div>
          </SkillsLineSection>
          <SkillsLineSection
            icon={faMobileScreenButton}
            right
            top
            bottom
            index={3}
          >
            <div className="flex h-[20rem] w-[10rem]">mobile</div>
          </SkillsLineSection>
          <SkillsLineSection icon={faServer} left top bottom index={4}>
            <div className="flex h-[20rem] w-[10rem]">backend</div>
          </SkillsLineSection>
          <SkillsLineSection icon={faDatabase} right top bottom index={5}>
            <div className="flex h-[20rem] w-[10rem]">database</div>
          </SkillsLineSection>
          <SkillsLineSection icon={faGlobe} left top bottom index={6}>
            <div className="flex h-[20rem] w-[10rem]">api</div>
          </SkillsLineSection>
          <SkillsLineSection icon={faWrench} right top endBottomRight index={7}>
            <div className="flex h-[20rem] w-[10rem]">tools</div>
          </SkillsLineSection>
        </div>
      </div>
    </div>
  );
}
