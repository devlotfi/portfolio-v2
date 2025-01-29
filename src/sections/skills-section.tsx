import {
  faCode,
  faDatabase,
  faServer,
  faStar,
  faWindowRestore,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import SkillsLineSection from "../components/skills-line-section";
import SkillCard from "../components/skill-card";

import HtmlSVG from "../assets/skills/html.svg";
import CssSVG from "../assets/skills/css.svg";
import TypescriptSVG from "../assets/skills/typescript.svg";
import PythonSVG from "../assets/skills/python.svg";
import CsSVG from "../assets/skills/cs.svg";
import JavaSVG from "../assets/skills/java.svg";

import ReactSVG from "../assets/skills/react.svg";
import TailwindSVG from "../assets/skills/tailwind.svg";
import HeroUISVG from "../assets/skills/hero-ui.svg";
import DaisyUISVG from "../assets/skills/daisy-ui.svg";
import ElectronSVG from "../assets/skills/electron.svg";
import TauriSVG from "../assets/skills/tauri.svg";
import ExpoSVG from "../assets/skills/expo.svg";

import NodeJsSVG from "../assets/skills/nodejs.svg";
import NestJsSVG from "../assets/skills/nestjs.svg";
import NextJsSVG from "../assets/skills/nextjs.svg";
import DjangoSVG from "../assets/skills/django.svg";
import RedisSVG from "../assets/skills/redis.svg";
import OpenapiSVG from "../assets/skills/openapi.svg";
import GraphqlSVG from "../assets/skills/graphql.svg";

import PostgresSVG from "../assets/skills/postgres.svg";
import MongodbSVG from "../assets/skills/mongodb.svg";
import OracleSVG from "../assets/skills/oracle.svg";

import GitSVG from "../assets/skills/git.svg";
import FigmaSVG from "../assets/skills/figma.svg";
import ArduinoSVG from "../assets/skills/arduino.svg";

import { useContext } from "react";
import { NavigationContext } from "../context/navigation-context";
import SectionTitleH1 from "../components/section-title-h1";

export default function SkillsSection() {
  const { sectionRefs } = useContext(NavigationContext);

  return (
    <div
      className="flex flex-col flex-1 items-center px-[1.5rem] md:px-[2.5rem] lg:px-[6rem]"
      style={{
        background: "radial-gradient(at top, cyan / 20, transparent 20%)",
      }}
      ref={sectionRefs.current.SKILLS}
    >
      <SectionTitleH1 icon={faStar} secondaryTitle="What i can do">
        My Skills
      </SectionTitleH1>

      <div className="flex flex-col w-full max-w-screen-sm">
        <div className="flex flex-col mt-[2rem]">
          <SkillsLineSection
            title="Languages"
            icon={faCode}
            left
            bottom
            endPosition="TOP_LEFT"
            index={0}
          >
            <SkillCard title="Html" image={HtmlSVG}></SkillCard>
            <SkillCard title="Css" image={CssSVG}></SkillCard>
            <SkillCard title="Typescript" image={TypescriptSVG}></SkillCard>
            <SkillCard title="Python" image={PythonSVG}></SkillCard>
            <SkillCard title="C#" image={CsSVG}></SkillCard>
            <SkillCard title="Java" image={JavaSVG}></SkillCard>
          </SkillsLineSection>
          <SkillsLineSection
            title="Front-end"
            icon={faWindowRestore}
            right
            top
            bottom
            index={1}
          >
            <SkillCard title="React" image={ReactSVG}></SkillCard>
            <SkillCard title="Tailwind" image={TailwindSVG}></SkillCard>
            <SkillCard title="Hero UI" image={HeroUISVG}></SkillCard>
            <SkillCard title="Daisy UI" image={DaisyUISVG}></SkillCard>
            <SkillCard title="Electron" image={ElectronSVG}></SkillCard>
            <SkillCard title="Tauri" image={TauriSVG}></SkillCard>
            <SkillCard title="Expo" image={ExpoSVG}></SkillCard>
          </SkillsLineSection>
          <SkillsLineSection
            title="Back-end"
            icon={faServer}
            left
            top
            bottom
            index={4}
          >
            <SkillCard title="Node JS" image={NodeJsSVG}></SkillCard>
            <SkillCard title="Nest JS" image={NestJsSVG}></SkillCard>
            <SkillCard title="Nest JS" image={NextJsSVG}></SkillCard>
            <SkillCard title="Django" image={DjangoSVG}></SkillCard>
            <SkillCard title="Redis" image={RedisSVG}></SkillCard>
            <SkillCard title="Openapi (Swagger)" image={OpenapiSVG}></SkillCard>
            <SkillCard title="Graphql" image={GraphqlSVG}></SkillCard>
          </SkillsLineSection>
          <SkillsLineSection
            title="Databases"
            icon={faDatabase}
            right
            top
            bottom
            index={5}
          >
            <SkillCard title="Postgres" image={PostgresSVG}></SkillCard>
            <SkillCard title="MongoDB" image={MongodbSVG}></SkillCard>
            <SkillCard title="OracleDB" image={OracleSVG}></SkillCard>
          </SkillsLineSection>
          <SkillsLineSection
            title="Tools"
            icon={faWrench}
            left
            top
            endPosition="BOTTOM_LEFT"
            index={7}
          >
            <SkillCard title="Git" image={GitSVG}></SkillCard>
            <SkillCard title="Figma" image={FigmaSVG}></SkillCard>
            <SkillCard title="Arduino" image={ArduinoSVG}></SkillCard>
          </SkillsLineSection>
        </div>
      </div>
    </div>
  );
}
