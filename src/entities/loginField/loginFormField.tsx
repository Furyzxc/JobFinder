import { Field } from "formik";

interface LoginFormFieldProps {
  name: string;
  type: string;
  placeholder?: string;
  classes?: string;
}

export const LoginFormField = ({
  name,
  type,
  placeholder,
  classes,
}: LoginFormFieldProps) => {
  return (
    <Field
      name={name}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      className={classes}
    />
  );
};
