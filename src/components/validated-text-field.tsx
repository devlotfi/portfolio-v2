/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  TextField,
  Label,
  FieldError,
  type TextFieldProps,
  type LabelProps,
  type InputProps,
  type FieldErrorProps,
  InputGroup,
  cn,
  InputGroupProps,
} from "@heroui-v3/react";
import type { ReactElement } from "react";

interface ValidatedTextFieldProps {
  formik: any;
  name: string;
  prefix?: ReactElement;
  suffix?: ReactElement;
  textFieldProps?: TextFieldProps;
  labelProps?: LabelProps;
  inputProps?: InputProps;
  inputGroupProps?: InputGroupProps;
  fieldErrorProps?: FieldErrorProps;
}

export default function ValidatedTextField({
  formik,
  name,
  prefix,
  suffix,
  textFieldProps: { className, ...textFieldProps } = {},
  labelProps,
  inputProps,
  inputGroupProps,
  fieldErrorProps,
}: ValidatedTextFieldProps) {
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

      <InputGroup {...inputGroupProps}>
        {prefix ? <InputGroup.Prefix>{prefix}</InputGroup.Prefix> : null}
        <InputGroup.Input
          name={name}
          value={formik.values[name]}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          {...inputProps}
        />
        {suffix ? <InputGroup.Suffix>{suffix}</InputGroup.Suffix> : null}
      </InputGroup>
      <FieldError {...fieldErrorProps}>{formik.errors[name]}</FieldError>
    </TextField>
  );
}
