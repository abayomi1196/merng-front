import "twin.macro";
import "styled-components/macro";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";

import { InputWrapper, SubmitButton } from "../styles/Register.styled";
import { REGISTER_USER } from "../graphql/mutations/registerUser";
import { LoggedInContext } from "../context/LoggedInContext";

function Register() {
  const { setLoggedIn } = useContext(LoggedInContext);

  const navigate = useNavigate();

  const [addUser] = useMutation(REGISTER_USER);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("required"),
      email: Yup.string().email("invalid email address").required("required"),
      password: Yup.string()
        .required("required")
        .min(6, "password is too short - should be 6 chars minimum."),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "passwords must match"
      ),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      try {
        const res = await addUser({
          variables: { registerInput: { ...values } },
        });
        toast.success("successfully registered");
        localStorage.setItem(
          "merng-token",
          JSON.stringify(res.data?.register.token)
        );
        setLoggedIn(true);
        navigate("/");
      } catch (err) {
        toast.error(err.message || "Please try again");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div tw='min-h-screen flex flex-col'>
      <div tw='container max-w-sm mx-auto flex-1 flex flex-col items-center px-2'>
        <div tw='bg-gray-200 px-6 py-8 max-w-2xl rounded shadow-md text-black w-full mt-16'>
          <h1 tw='mb-8 text-3xl text-center'>sign up.</h1>

          <form onSubmit={formik.handleSubmit}>
            <InputWrapper>
              <input
                type='text'
                placeholder='username'
                {...formik.getFieldProps("username")}
              />

              {formik.touched.username && formik.errors.username ? (
                <small>{formik.errors.username}</small>
              ) : null}
            </InputWrapper>

            <InputWrapper>
              <input
                type='text'
                placeholder='email'
                {...formik.getFieldProps("email")}
              />

              {formik.touched.email && formik.errors.email ? (
                <small>{formik.errors.email}</small>
              ) : null}
            </InputWrapper>

            <InputWrapper>
              <input
                type='password'
                placeholder='password'
                {...formik.getFieldProps("password")}
              />

              {formik.touched.password && formik.errors.password ? (
                <small>{formik.errors.password}</small>
              ) : null}
            </InputWrapper>

            <InputWrapper>
              <input
                type='password'
                placeholder='confirm password'
                {...formik.getFieldProps("confirmPassword")}
              />

              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <small>{formik.errors.confirmPassword}</small>
              ) : null}
            </InputWrapper>
            <SubmitButton type='submit' disabled={formik.isSubmitting}>
              {formik.isSubmitting ? (
                <Loader
                  type='TailSpin'
                  color='#e5e7eb'
                  height={20}
                  width={20}
                />
              ) : (
                <span>create account</span>
              )}
            </SubmitButton>

            <div tw='text-gray-600 text-center'>
              already have an account?{" "}
              <Link
                tw='no-underline text-blue-400 
                  hocus:(border-b border-blue-400)'
                to='/login'
              >
                log in
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
