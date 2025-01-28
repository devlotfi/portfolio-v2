import { ComponentProps, useContext } from "react";
import { NavigationContext } from "../context/navigation-context";
import SectionTitleH1 from "../components/section-title-h1";
import {
  faAt,
  faEnvelope,
  faEnvelopeOpenText,
  faFont,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { motion, Variants } from "motion/react";
import { Heading } from "../components/heading";
import { Alert, Button, Input, Textarea } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "motion";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { ContactDTO } from "../types/contact-dto";
import { supabaseClient } from "../supabase-client";

function AtSVG({ ...props }: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 498 535"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <motion.path
        initial={{
          strokeWidth: 38,
          strokeDasharray: 2335,
          strokeDashoffset: 2335,
        }}
        whileInView={{
          strokeDashoffset: 0,
          transition: {
            duration: 2,
            ease: "easeInOut",
          },
        }}
        exit={{
          strokeDashoffset: 2335,
        }}
        d="M361 141C352.917 167.096 342.372 202.693 334.334 238.5M334.334 238.5C341.405 207 322.4 141 260 141C197.6 141 165.333 206 157 238.5C147 277.5 145 370.6 203 381C261 391.4 319.585 334 324.493 293.5M334.334 238.5C330.132 257.219 326.615 275.994 324.493 293.5M324.493 293.5C318.958 339.178 322.922 376.206 349 381C417 393.5 485.319 307.187 478.292 197C471.5 90.5 389.972 19 271.5 19C128.458 19 19 129.958 19 273C19 416.042 112.958 511.5 256 511.5C300.527 511.5 339.474 501.669 372 483.813"
        stroke="url(#paint0_linear_343_556)"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_343_556"
          x1="15"
          y1="508"
          x2="475"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3F6394" />
          <stop offset="1" stopColor="#2DBFE0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const variants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const transition: Transition = {
  duration: 1,
  type: "spring",
  stiffness: 70,
};

export default function ContactSection() {
  const { sectionRefs } = useContext(NavigationContext);

  const { values, touched, errors, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        subject: "",
        text: "",
      },
      validationSchema: yup.object({
        email: yup.string().email().required(),
        subject: yup.string().min(1).max(512).required(),
        text: yup.string().min(1).max(4096).required(),
      }),
      onSubmit(values) {
        mutate(values);
      },
    });

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: async (contactDto: ContactDTO) => {
      const response = await supabaseClient.functions.invoke("contact", {
        body: contactDto,
        method: "POST",
      });
      if (response.error) {
        throw new Error();
      }
    },
  });

  return (
    <div
      ref={sectionRefs.current.CONTACT}
      className="flex flex-col px-[1rem] py-[5rem] items-center"
    >
      <SectionTitleH1 icon={faEnvelope} secondaryTitle="Get in touch">
        Contact
      </SectionTitleH1>
      <div className="flex flex-col-reverse xl:flex-row gap-16 justify-center items-center w-full">
        <motion.form
          variants={variants}
          transition={transition}
          initial="hidden"
          whileInView="visible"
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 max-w-screen-sm w-full rounded-lg p-[1.5rem] overflow-hidden bg-background-light-100 card-outline-light dark:bg-background-dark-100 dark:card-outline-dark"
        >
          <Heading icon={faEnvelope}>Send e-mail</Heading>
          <Input
            isRequired
            startContent={<FontAwesomeIcon icon={faAt}></FontAwesomeIcon>}
            classNames={{
              inputWrapper:
                "border border-divider bg-background-light-200 dark:bg-background-dark-200",
            }}
            label="E-mail"
            placeholder="E-mail"
            type="email"
            name="email"
            value={values.email}
            errorMessage={errors.email}
            isInvalid={touched.email && errors.email !== undefined}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            isRequired
            startContent={<FontAwesomeIcon icon={faFont}></FontAwesomeIcon>}
            classNames={{
              inputWrapper:
                "border border-divider bg-background-light-200 dark:bg-background-dark-200",
            }}
            label="Subject"
            placeholder="Subject"
            type="text"
            name="subject"
            value={values.subject}
            errorMessage={errors.subject}
            isInvalid={touched.subject && errors.subject !== undefined}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Textarea
            isRequired
            startContent={
              <FontAwesomeIcon icon={faEnvelopeOpenText}></FontAwesomeIcon>
            }
            classNames={{
              inputWrapper:
                "border border-divider bg-background-light-200 dark:bg-background-dark-200",
            }}
            label="Text"
            placeholder="Text"
            name="text"
            value={values.text}
            errorMessage={errors.text}
            isInvalid={touched.text && errors.text !== undefined}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {isSuccess ? (
            <Alert
              variant="faded"
              color="success"
              title={"E-mail sent seccessfully"}
            />
          ) : null}
          {isError ? (
            <Alert variant="faded" color="danger" title={"An error occured"} />
          ) : null}

          <Button
            type="submit"
            endContent={<FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>}
            className="bg-primary-gradient"
            color="primary"
            isLoading={isPending}
          >
            Send
          </Button>
        </motion.form>

        <div className="flex xl:flex-col gap-5 justify-center max-w-screen-sm xl:max-w-[20rem]">
          <div className="flex">
            <AtSVG className="flex self-start h-[5rem] w-[5rem] xl:h-[7rem] xl:w-[7rem]"></AtSVG>
          </div>
          <motion.div
            variants={variants}
            transition={transition}
            initial="hidden"
            whileInView="visible"
            className="flex"
          >
            Whether you're looking to collaborate on a project, share an
            opportunity, or just have a friendly chat, I’m always happy to
            connect. Feel free to reach out!
          </motion.div>
        </div>
      </div>
    </div>
  );
}
