/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  TextField,
  Label,
  FieldError,
  type TextFieldProps,
  type LabelProps,
  type FieldErrorProps,
  cn,
  TextArea,
  TextAreaProps,
} from "@heroui-v3/react";

interface ValidatedTextAreaProps {
  formik: any;
  name: string;
  textFieldProps?: TextFieldProps;
  labelProps?: LabelProps;
  textAreaProps?: TextAreaProps;
  fieldErrorProps?: FieldErrorProps;
}

export default function ValidatedTextArea({
  formik,
  name,
  textFieldProps: { className, ...textFieldProps } = {},
  labelProps,
  textAreaProps,
  fieldErrorProps,
}: ValidatedTextAreaProps) {
  return (
    <TextField
      variant="secondary"
      fullWidth
      name={name}
      isInvalid={formik.errors[name] !== undefined && formik.touched[name]}
      className={cn("flex flex-col", className)}
      {...textFieldProps}
    >
      <Label {...labelProps}></Label>

      <TextArea
        name={name}
        value={formik.values[name]}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        {...textAreaProps}
      ></TextArea>
      <FieldError {...fieldErrorProps}>{formik.errors[name]}</FieldError>
    </TextField>
  );
}
