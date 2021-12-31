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
import { REGISTER_USER } from "../graphql/mutations/registerUser";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const { setLoggedIn } = useContext(AuthContext);
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  function changePasswordType() {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  }

  function changeConfirmPasswordType() {
    setConfirmPasswordType((prev) =>
      prev === "password" ? "text" : "password"
    );
  }

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
        localStorage.setItem("merng-token", JSON.stringify(res.data.register));
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
      <div tw='container mx-auto flex-1 flex flex-col items-center px-2'>
        <div tw='bg-gray-200 px-6 py-8 max-w-xl rounded shadow-md text-black w-full mt-16'>
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

            <InputWrapper>
              <input
                type={confirmPasswordType}
                placeholder='confirm password'
                {...formik.getFieldProps("confirmPassword")}
              />

              {confirmPasswordType === "password" ? (
                <AiFillEye onClick={changeConfirmPasswordType} />
              ) : (
                <AiFillEyeInvisible onClick={changeConfirmPasswordType} />
              )}
              {formik.touched.password && formik.errors.password ? (
                <small>{formik.errors.password}</small>
              ) : null}

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
