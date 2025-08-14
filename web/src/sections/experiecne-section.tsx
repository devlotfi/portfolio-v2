import { useContext } from "react";
import { NavigationContext } from "../context/navigation-context";
import SectionTitleH1 from "../components/section-title-h1";
import { faBriefcase, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { SectionTitleH2 } from "../components/section-title-h2";
import USTHB from "../assets/usthb.jpg";
import USTHBLogoLightSVG from "../assets/usthb-logo-light.svg";
import USTHBLogoDarkSVG from "../assets/usthb-logo-dark.svg";
import TimelineSection from "../components/timeline-section";
import TimelineSectionListItem from "../components/timeline-section-list-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ExperienceSection() {
  const { sectionRefs } = useContext(NavigationContext);

  return (
    <div
      ref={sectionRefs.current.EXPERIENCE}
      className="flex flex-col relative items-center px-[1rem]"
    >
      <SectionTitleH1
        icon={faBriefcase}
        secondaryTitle="What i have done so far"
      >
        Experience
      </SectionTitleH1>
      <SectionTitleH2>Education</SectionTitleH2>

      <img
        src={USTHB}
        alt="usthb"
        className="flex absolute top-[30rem] z-0 object-cover max-w-screen-md"
        style={{
          maskImage:
            "radial-gradient(circle, rgba(0,0,0,0.35), transparent 70%)",
        }}
      />

      <div className="flex p-[2rem] z-10">
        <img
          className="h-[8rem] hidden dark:flex"
          src={USTHBLogoDarkSVG}
          alt="usthb-logo"
        />
        <img
          className="h-[8rem] flex dark:hidden"
          src={USTHBLogoLightSVG}
          alt="usthb-logo"
        />
      </div>

      <TimelineSection cardPosition="LEFT" dateContent="september 2021">
        <TimelineSectionListItem>
          Started studying at USTHB
        </TimelineSectionListItem>
        <TimelineSectionListItem>
          Completed several projects during the studies
        </TimelineSectionListItem>
        <TimelineSectionListItem>
          Learned various technologies and skills
        </TimelineSectionListItem>
      </TimelineSection>
      <TimelineSection cardPosition="RIGHT" dateContent="10 july 2024">
        <TimelineSectionListItem>
          Obtained a bachelor's degree in Information Systems and Software
          Engineering
        </TimelineSectionListItem>
      </TimelineSection>
      <TimelineSection
        cardPosition="LEFT"
        dateContent="In Progress..."
        endBottom
      >
        <TimelineSectionListItem>
          Currently studying for a master's degree
        </TimelineSectionListItem>
        <TimelineSectionListItem>
          Specializing in Networks and Distributed Systems
        </TimelineSectionListItem>
      </TimelineSection>

      <SectionTitleH2 className="mt-[3rem]">Developer Jobs</SectionTitleH2>
      <div className="flex items-center gap-5 p-[2rem]">
        <FontAwesomeIcon
          className="text-[25pt]"
          icon={faFolderOpen}
        ></FontAwesomeIcon>
        <div className="flex text-[25pt] font-['Roboto_Serif']">Not yet</div>
      </div>
    </div>
  );
}
