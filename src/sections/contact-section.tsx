import { faAt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, Input, Textarea, Button } from "@heroui/react";
import { motion } from "motion/react";
import { Heading } from "../components/heading";
import { useContext } from "react";
import { NavigationContext } from "../context/navigation-context";

export default function ContactSection() {
  const { navigationData } = useContext(NavigationContext);

  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      ref={navigationData.sectionRefs.current.CONTACT}
    >
      <div className="flex text-[30pt] font-bold py-[2rem] primary-bg bg-clip-text text-transparent">
        Get in touch
      </div>
      <motion.div
        className="max-w-screen-md w-full"
        initial="hidden"
        whileInView="visible"
      >
        <Card
          shadow="none"
          className="card-gradient-bg-light-100 card-outline-light dark:card-gradient-bg-dark-100 dark:card-outline-dark"
          fullWidth
        >
          <CardBody className="p-[1.5rem] space-y-3 overflow-hidden">
            <Heading icon={faAt}>Contact me</Heading>
            <Input
              classNames={{
                inputWrapper:
                  "border border-divider card-gradient-bg-light-200 dark:card-gradient-bg-dark-200",
              }}
              label="Email"
              placeholder="Enter your email"
              type="email"
            />
            <Textarea
              isClearable
              classNames={{
                inputWrapper:
                  "border border-divider card-gradient-bg-light-200 dark:card-gradient-bg-dark-200",
              }}
              label="Description"
              placeholder="Enter your description"
            />

            <Button
              color="primary"
              className="primary-bg"
              startContent={
                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
              }
            >
              Submit
            </Button>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}
