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

import ProgrammingSVG from "../assets/freepik/programming.svg";
import FrontendSVG from "../assets/freepik/frontend.svg";
import BackendSVG from "../assets/freepik/backend.svg";
import DatabaseSVG from "../assets/freepik/database.svg";
import ToolsSVG from "../assets/freepik/tools.svg";

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
import { Heading } from "../components/heading";

export default function SkillsSection() {
  const { navigationData } = useContext(NavigationContext);

  return (
    <div
      className="flex flex-col flex-1 items-center px-[1.5rem] md:px-[2.5rem] lg:px-[6rem]"
      ref={navigationData.sectionRefs.current.SKILLS}
    >
      <div className="flex justify-center items-center w-full space-x-3 py-[3rem] max-w-screen-lg">
        <div className="flex h-[0.1rem] flex-1 bg-gradient-to-l from-divider to-transparent"></div>
        <Heading icon={faStar}>Skills</Heading>
        <div className="flex h-[0.1rem] flex-1 bg-gradient-to-r from-divider to-transparent"></div>
      </div>
      <div className="flex flex-col w-full max-w-screen-md">
        <div className="flex flex-col mt-[2rem]">
          <SkillsLineSection icon={faCode} left bottom endTopLeft index={0}>
            <div className="flex flex-col md:flex-row gap-7">
              <img
                className="h-[10rem]"
                src={ProgrammingSVG}
                alt="programming"
              />
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
            <div className="flex flex-col md:flex-row gap-7">
              <img className="h-[10rem]" src={FrontendSVG} alt="frontend" />
              <div className="flex flex-col space-y-3">
                <div className="flex font-black text-[20pt]">Front-end</div>
                <div className="flex gap-3 items-start flex-wrap">
                  <SkillCard title="React" image={ReactSVG}></SkillCard>
                  <SkillCard title="Tailwind" image={TailwindSVG}></SkillCard>
                  <SkillCard title="Hero UI" image={HeroUISVG}></SkillCard>
                  <SkillCard title="Daisy UI" image={DaisyUISVG}></SkillCard>
                  <SkillCard title="Electron" image={ElectronSVG}></SkillCard>
                  <SkillCard title="Tauri" image={TauriSVG}></SkillCard>
                  <SkillCard title="Expo" image={ExpoSVG}></SkillCard>
                </div>
              </div>
            </div>
          </SkillsLineSection>
          <SkillsLineSection icon={faServer} left top bottom index={4}>
            <div className="flex flex-col md:flex-row gap-7">
              <img className="h-[10rem]" src={BackendSVG} alt="backend" />
              <div className="flex flex-col space-y-3">
                <div className="flex font-black text-[20pt]">Back-end</div>
                <div className="flex gap-3 items-start flex-wrap">
                  <SkillCard title="Node JS" image={NodeJsSVG}></SkillCard>
                  <SkillCard title="Nest JS" image={NestJsSVG}></SkillCard>
                  <SkillCard title="Nest JS" image={NextJsSVG}></SkillCard>
                  <SkillCard title="DJango" image={DjangoSVG}></SkillCard>
                  <SkillCard title="Redis" image={RedisSVG}></SkillCard>
                  <SkillCard
                    title="Openapi (Swagger)"
                    image={OpenapiSVG}
                  ></SkillCard>
                  <SkillCard title="Graphql" image={GraphqlSVG}></SkillCard>
                </div>
              </div>
            </div>
          </SkillsLineSection>
          <SkillsLineSection icon={faDatabase} right top bottom index={5}>
            <div className="flex flex-col md:flex-row gap-7">
              <img className="h-[10rem]" src={DatabaseSVG} alt="database" />
              <div className="flex flex-col space-y-3">
                <div className="flex font-black text-[20pt]">Databases</div>
                <div className="flex gap-3 items-start flex-wrap">
                  <SkillCard title="Postgres" image={PostgresSVG}></SkillCard>
                  <SkillCard title="MongoDB" image={MongodbSVG}></SkillCard>
                  <SkillCard title="OracleDB" image={OracleSVG}></SkillCard>
                </div>
              </div>
            </div>
          </SkillsLineSection>
          <SkillsLineSection icon={faWrench} left top endBottomLeft index={7}>
            <div className="flex flex-col md:flex-row gap-7">
              <img className="h-[10rem]" src={ToolsSVG} alt="programming" />
              <div className="flex flex-col space-y-3">
                <div className="flex font-black text-[20pt]">Other tools</div>
                <div className="flex gap-3 items-start flex-wrap">
                  <SkillCard title="Git" image={GitSVG}></SkillCard>
                  <SkillCard title="Figma" image={FigmaSVG}></SkillCard>
                  <SkillCard title="Arduino" image={ArduinoSVG}></SkillCard>
                </div>
              </div>
            </div>
          </SkillsLineSection>
        </div>
      </div>
    </div>
  );
}
