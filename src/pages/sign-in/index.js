import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import AuthLayout from "components/auth-layout";
import OutlinedTextInput from "components/ui/outlined-text-input/OutlinedTextInput";
import SubmitButton from "components/ui/submit-button/SubmitButton";

import { loginUser } from "api/user";
import useAuth from "hooks/useAuth";

import { ROUTES } from "constants/common";

const SigninSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
});

const SignIn = () => {
  const { login } = useAuth();

  const { handleSubmit, handleChange, setFieldValue, values, errors } =
    useFormik({
      initialValues: {
        // username: "Username1",
        username: "",
        password: "",
      },
      validationSchema: SigninSchema,
      onSubmit: async ({ username, password }) => {
        const response = await loginUser({
          username,
          password,
        });

        const user = response.data;

        login(user);
      },
    });

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit}>
        <div className="auth-layout-form-field">
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
        <div className="auth-layout-submit-button">
          <SubmitButton />
        </div>
      </form>
      <Link to={ROUTES.signUp}>register</Link>
    </AuthLayout>
  );
};

export default SignIn;
