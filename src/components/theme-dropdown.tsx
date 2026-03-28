import {
  faComputer,
  faMoon,
  faPaintBrush,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, Button, Label } from "@heroui/react";
import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import { ThemeOptions } from "../types/theme-options";
import { motion } from "motion/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function OptionIcon({ icon }: { icon: IconProp }) {
  return (
    <div className="h-[1.8rem] w-[1.8rem] flex rounded-xl justify-center items-center bg-accent-gradient text-accent-foreground">
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
    </div>
  );
}

export default function ThemeDropdown() {
  const { themeOption, setTheme } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0, rotate: 90 }}
      animate={{
        opacity: 1,
        rotate: 0,
        transition: {
          duration: 0.5,
          delay: 3,
        },
      }}
    >
      <Dropdown>
        <Button isIconOnly variant="ghost" size="lg" aria-label="themes">
          <FontAwesomeIcon icon={faPaintBrush}></FontAwesomeIcon>
        </Button>
        <Dropdown.Popover className="min-w-[256px]">
          <Dropdown.Menu
            selectedKeys={new Set([themeOption])}
            selectionMode="single"
            onSelectionChange={(keys) => {
              for (const key of keys) {
                setTheme(key.toString() as ThemeOptions);
                break;
              }
            }}
          >
            <Dropdown.Section>
              <Dropdown.Item id={ThemeOptions.SYSTEM} textValue="System">
                <Dropdown.ItemIndicator />
                <OptionIcon icon={faComputer}></OptionIcon>
                <Label>System</Label>
              </Dropdown.Item>
              <Dropdown.Item id={ThemeOptions.LIGHT} textValue="Light">
                <Dropdown.ItemIndicator />
                <OptionIcon icon={faSun}></OptionIcon>
                <Label>Light</Label>
              </Dropdown.Item>
              <Dropdown.Item id={ThemeOptions.DARK} textValue="Dark">
                <Dropdown.ItemIndicator />
                <OptionIcon icon={faMoon}></OptionIcon>
                <Label>Dark</Label>
              </Dropdown.Item>
            </Dropdown.Section>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </motion.div>
  );
}
