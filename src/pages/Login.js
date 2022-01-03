import "twin.macro";
import "styled-components/macro";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import { useContext, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { InputWrapper, SubmitButton } from "../styles/Register.styled";
import { LOGIN_USER } from "../graphql/mutations/loginUser";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const [passwordType, setPasswordType] = useState("password");

  function changePasswordType() {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  }

  const navigate = useNavigate();

  const [loginUser] = useMutation(LOGIN_USER);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("required"),
      password: Yup.string()
        .required("required")
        .min(6, "password is too short - should be 6 chars minimum."),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      try {
        const res = await loginUser({
          variables: { username: values.username, password: values.password },
        });
        toast.success("Logged in successfully");
        login(res.data.login);
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
      <div tw='container mx-auto flex-1 flex flex-col items-center px-2'>
        <div tw='bg-gray-200 px-6 py-8 max-w-xl rounded shadow-md text-black w-full mt-16'>
          <h1 tw='mb-8 text-3xl text-center'>log in.</h1>

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
                type={passwordType}
                placeholder='password'
                {...formik.getFieldProps("password")}
              />
              {passwordType === "password" ? (
                <AiFillEye onClick={changePasswordType} />
              ) : (
                <AiFillEyeInvisible onClick={changePasswordType} />
              )}

              {formik.touched.password && formik.errors.password ? (
                <small>{formik.errors.password}</small>
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
                <span>login</span>
              )}
            </SubmitButton>

            <div tw='text-gray-600 text-center'>
              first time here?{" "}
              <Link
                tw='no-underline text-blue-400 
                  hocus:(border-b border-blue-400)'
                to='/register'
              >
                register
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
