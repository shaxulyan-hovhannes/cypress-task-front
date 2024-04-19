import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import AuthLayout from "components/auth-layout";
import OutlinedTextInput from "components/ui/outlined-text-input/OutlinedTextInput";
import SubmitButton from "components/ui/submit-button/SubmitButton";

import { registerUser } from "api/user";

import useAuth from "hooks/useAuth";

import { ROUTES } from "constants/common";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignUp = () => {
  const { login } = useAuth();

  const { handleSubmit, handleChange, setFieldValue, values, errors } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: SignupSchema,
      onSubmit: async ({ username, password }) => {
        const response = await registerUser({
          username,
          password,
        });

        const user = response.data;

        if (!!user) {
          login(user);
        }
      },
    });

  return (
    <AuthLayout variation="sign-up">
      <form onSubmit={handleSubmit}>
        <div className="auth-layout-form-field">
          <OutlinedTextInput
            label="Username"
            name="username"
            onChange={handleChange}
            value={values.username}
            setFieldValue={setFieldValue}
            error={!!errors.username}
            helperText={errors.username}
          />
        </div>
        <div className="auth-layout-form-field">
          <OutlinedTextInput
            label="Password"
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            setFieldValue={setFieldValue}
            error={!!errors.password}
            helperText={errors.password}
          />
        </div>
        <div className="auth-layout-form-field">
          <OutlinedTextInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={values.confirmPassword}
            setFieldValue={setFieldValue}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
        </div>
        <div className="auth-layout-submit-button">
          <SubmitButton value="Register" />
        </div>
      </form>
      <Link to={ROUTES.signIn}>login</Link>
    </AuthLayout>
  );
};

export default SignUp;
