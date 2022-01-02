import "twin.macro";
import "styled-components/macro";

import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "react-loader-spinner";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

import { CREATE_POST } from "../../graphql/mutations/createPost";
import { FETCH_POSTS } from "../../graphql/queries/fetchPosts";
import {
  ModalContent,
  ModalOverlay,
  ModalWrapper,
  ModalButton,
  InputWrapper,
} from "./Modal.styled";

function Modal({ setShowModal }) {
  const [submitPost] = useMutation(CREATE_POST);

  const formik = useFormik({
    initialValues: {
      body: "",
    },
    validationSchema: Yup.object({
      body: Yup.string().required("required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        await submitPost({
          variables: { body: values.body },
          update: (proxy, result) => {
            const data = proxy.readQuery({ query: FETCH_POSTS });

            proxy.writeQuery({
              query: FETCH_POSTS,
              data: {
                getPosts: [result.data.createPost, ...data.getPosts],
              },
            });
          },
        });

        toast.success("Post created successfully");
        setShowModal(false);
      } catch (err) {
        toast.error(err.message || "Please try again");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div
      tw='fixed z-10 inset-0 overflow-y-auto'
      aria-labelledby='modal-title'
      role='dialog'
    >
      <ModalWrapper>
        <ModalOverlay />

        <span
          tw='hidden sm:(inline-block align-middle h-screen)'
          aria-hidden='true'
        ></span>

        <ModalContent>
          <div tw='bg-gray-50 px-4 pt-5 pb-4 sm:(p-6 pb-4)'>
            <form onSubmit={formik.handleSubmit}>
              <div tw='mt-3 text-center sm:(mt-0 ml-4 text-left)'>
                <h3
                  tw='text-lg leading-6 font-medium text-gray-900'
                  id='modal-title'
                >
                  add a post
                </h3>

                {/* TODO add image upload later */}
                <InputWrapper tw='mt-4 text-sm'>
                  <textarea
                    type='text'
                    placeholder='hello world...'
                    {...formik.getFieldProps("body")}
                  />

                  {formik.touched.body && formik.errors.body ? (
                    <small>{formik.errors.body}</small>
                  ) : null}
                </InputWrapper>
              </div>

              {/* btn wrapper */}
              <div tw='mt-3 flex gap-2 sm:(flex-row-reverse)'>
                <ModalButton
                  type='submit'
                  disabled={formik.isSubmitting}
                  tw='border-transparent bg-green-600 text-white  hover:bg-green-700 focus:ring-green-500 '
                >
                  {formik.isSubmitting ? (
                    <Loader
                      type='TailSpin'
                      color='#e5e7eb'
                      height={20}
                      width={20}
                    />
                  ) : (
                    <span>submit</span>
                  )}
                </ModalButton>

                <ModalButton
                  type='button'
                  onClick={() => setShowModal(false)}
                  tw='border-gray-300 bg-white text-gray-700 hover:(bg-gray-500 text-white) focus:(outline-none ring-gray-500)'
                >
                  cancel
                </ModalButton>
              </div>
            </form>
          </div>
        </ModalContent>
      </ModalWrapper>
    </div>
  );
}

export default Modal;
