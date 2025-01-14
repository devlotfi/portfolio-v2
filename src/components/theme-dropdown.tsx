import {
  faComputer,
  faMoon,
  faPaintBrush,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  cn,
} from "@nextui-org/react";
import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import { ThemeOptions } from "../types/theme-options";
import { motion } from "motion/react";

export default function ThemeDropdown() {
  const { themeOption, appliedTheme, setTheme } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0, rotate: 90 }}
      animate={{
        opacity: 1,
        rotate: 0,
        transition: {
          duration: 0.5,
          delay: 2,
        },
      }}
    >
      <Dropdown
        className={cn(
          appliedTheme === ThemeOptions.LIGHT
            ? "card-gradient-bg-light"
            : "card-gradient-bg-dark"
        )}
      >
        <DropdownTrigger>
          <Button
            isIconOnly
            variant="light"
            size="lg"
            className="border-foreground"
          >
            <FontAwesomeIcon icon={faPaintBrush}></FontAwesomeIcon>
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          selectionMode="single"
          closeOnSelect={false}
          selectedKeys={[themeOption]}
          onAction={(key) => {
            {
              switch (key) {
                case ThemeOptions.SYSTEM:
                  setTheme(ThemeOptions.SYSTEM);
                  break;
                case ThemeOptions.LIGHT:
                  setTheme(ThemeOptions.LIGHT);
                  break;
                case ThemeOptions.DARK:
                  setTheme(ThemeOptions.DARK);
                  break;
              }
            }
          }}
        >
          <DropdownItem
            startContent={<FontAwesomeIcon icon={faComputer}></FontAwesomeIcon>}
            key={ThemeOptions.SYSTEM}
            textValue="system"
          >
            System
          </DropdownItem>
          <DropdownItem
            startContent={<FontAwesomeIcon icon={faSun}></FontAwesomeIcon>}
            key={ThemeOptions.LIGHT}
            textValue="light"
          >
            Light
          </DropdownItem>
          <DropdownItem
            startContent={<FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>}
            key={ThemeOptions.DARK}
            textValue="dark"
          >
            Dark
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </motion.div>
  );
}
