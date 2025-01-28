import { useContext } from "react";
import { NavigationContext } from "../context/navigation-context";
import SectionTitleH1 from "../components/section-title-h1";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { SectionTitleH2 } from "../components/section-title-h2";
import USTHB from "../assets/usthb.jpg";
import USTHBLogoLight from "../assets/usthb-logo-light.svg";
import USTHBLogoDark from "../assets/usthb-logo-dark.svg";

export default function ExperienceSection() {
  const { sectionRefs } = useContext(NavigationContext);

  return (
    <div
      ref={sectionRefs.current.EXPERIENCE}
      className="flex flex-col relative items-center"
    >
      <SectionTitleH1 icon={faBriefcase} secondaryTitle="My experience">
        Experience
      </SectionTitleH1>
      <SectionTitleH2 icon={faGraduationCap}>Education</SectionTitleH2>

      <img
        src={USTHB}
        alt="usthb"
        className="flex absolute top-[20rem] z-0 object-cover max-w-screen-md"
        style={{
          maskImage:
            "radial-gradient(circle, rgba(0,0,0,0.3), transparent 70%)",
        }}
      />

      <img
        className="h-[10rem] hidden dark:flex"
        src={USTHBLogoDark}
        alt="usthb-logo"
      />
      <img
        className="h-[10rem]  flex dark:hidden"
        src={USTHBLogoLight}
        alt="usthb-logo"
      />

      <div className="flex z-10 w-full items-center flex-col">
        <div className="flex relative gap-5 px-[1.5rem] w-full max-w-screen-lg flex-row-reverse lg:flex-row">
          <div className="flex flex-1 flex-col gap-3 py-[1.5rem]">
            <div className="flex z-10 bg-primary-gradient text-primary-foreground px-[1rem] py-[0.5rem] font-medium  self-center lg:self-start rounded-full">
              September 2021
            </div>
            <div className="flex flex-col gap-3 z-10 rounded-lg p-[1.5rem] overflow-hidden bg-background-light-100 card-outline-light dark:bg-background-dark-100 dark:card-outline-dark">
              <div className="flex">Started studying at USTHB</div>
            </div>
          </div>
          <div className="flex absolute h-full lg:h-auto left-[50%] -translate-x-1/2 lg:translate-x-0 lg:static w-[0.2rem] bg-divider"></div>
          <div className="hidden lg:flex flex-1">
            <h1>lol</h1>
          </div>
        </div>

        <div className="flex gap-5 px-[1.5rem] w-full max-w-screen-lg">
          <div className="hidden lg:flex flex-1">
            <h1>lol</h1>
          </div>
          <div className="flex w-[0.2rem] bg-divider"></div>
          <div className="flex flex-1 flex-col gap-3 py-[1.5rem]">
            <div className="flex bg-primary-gradient text-primary-foreground px-[1rem] py-[0.5rem] font-medium self-start lg:self-end rounded-full">
              September 2021
            </div>
            <div className="flex flex-col gap-3 rounded-lg p-[1.5rem] overflow-hidden bg-background-light-100 card-outline-light dark:bg-background-dark-100 dark:card-outline-dark">
              <div className="flex">Started studying at USTHB</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
