import Logo from "../assets/logo.svg";
import {
  faGraduationCap,
  faInfoCircle,
  faList,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import NavbarLink from "./navbar-link";
import { RefObject, useEffect, useState } from "react";
import ThemeDropdown from "./theme-dropdown";

interface Props {
  sectionsRefs: RefObject<HTMLDivElement | null>[];
}

export default function Navbar({ sectionsRefs }: Props) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    console.log(sectionsRefs);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionsRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sectionsRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionsRefs]);

  return (
    <div className="sticky backdrop-blur-2xl top-0 flex justify-between items-center min-h-[5rem] px-[1rem] z-10">
      <img className="h-[2rem]" src={Logo} alt="logo" />

      <div className="flex space-x-2">
        <NavbarLink
          sectionId="home"
          icon={faInfoCircle}
          activeSectionId={activeSection}
        >
          About me
        </NavbarLink>
        <NavbarLink
          sectionId="skills"
          icon={faStar}
          activeSectionId={activeSection}
        >
          Skills
        </NavbarLink>
        <NavbarLink
          sectionId="experience"
          icon={faGraduationCap}
          activeSectionId={activeSection}
        >
          Experience
        </NavbarLink>
        <NavbarLink
          sectionId="projects"
          icon={faList}
          activeSectionId={activeSection}
        >
          Projects
        </NavbarLink>
      </div>

      <ThemeDropdown></ThemeDropdown>
    </div>
  );
}
