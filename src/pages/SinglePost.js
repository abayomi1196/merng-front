import "twin.macro";
import "styled-components/macro";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { formatDistanceToNow } from "date-fns";
import { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";

import { FETCH_POST } from "graphql/queries/fetchPost";
import { CREATE_COMMENT } from "graphql/mutations/createComment";
import { LikeButton, DeleteButton } from "components";
import { AuthContext } from "context/AuthContext";
import { ProfileWrapper, PostWrapper, Container } from "styles/Post.styled";
import { IconButton } from "components/post-card/PostCard.styled";

function SinglePost() {
  const { loggedIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { postId } = useParams();

  const { data, loading } = useQuery(FETCH_POST, {
    variables: {
      postId,
    },
  });

  const [createComment] = useMutation(CREATE_COMMENT);

  const post = data?.getPost;

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
        const res = await createComment({
          variables: {
            postId,
            body: values.body,
          },
        });
        toast.success("commented successfully");
      } catch (err) {
        toast.error("error dey!!");
      } finally {
        setSubmitting(true);
      }
    },
  });

  return (
    <div>
      <IconButton onClick={() => navigate("/")} tw='ml-8 lg:(ml-0)'>
        <BiArrowBack />
        <span>back to list.</span>
      </IconButton>

      {!loading && post ? (
        <Container>
          {/* lhs */}
          <ProfileWrapper>
            <div>
              <img
                src='https://images.unsplash.com/photo-1522512115668-c09775d6f424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                alt='Avatar of a fine babe'
              />
              <span>{post.username}</span>
              <p>
                {formatDistanceToNow(new Date(post.createdAt), {
                  addSuffix: true,
                  includeSeconds: true,
                })}
              </p>
            </div>
          </ProfileWrapper>

          <PostWrapper>
            <p>{post.body}</p>
            {/* {likes & delete} */}
            <div tw='flex flex-wrap justify-end gap-2'>
              <LikeButton
                post={{
                  id: post.id,
                  likes: post.likes,
                  likeCount: post.likeCount,
                  user,
                }}
              />

              {loggedIn && user.username === post.username && (
                <DeleteButton id={postId} />
              )}
            </div>

            {/* {comments} */}
            <div>
              {post.comments.map((comment) => (
                <div key={comment.id}>
                  <h5>
                    {comment.username}{" "}
                    <span>
                      -{" "}
                      {formatDistanceToNow(new Date(comment.createdAt), {
                        addSuffix: true,
                        includeSeconds: true,
                      })}
                    </span>
                  </h5>
                  <span>{comment.body}</span>
                </div>
              ))}

              {loggedIn && (
                <form onSubmit={formik.handleSubmit}>
                  <textarea
                    type='text'
                    placeholder='add your comment...'
                    {...formik.getFieldProps("body")}
                  />
                  {formik.touched.body && formik.errors.body ? (
                    <small>{formik.errors.body}</small>
                  ) : null}

                  <button type='submit' disabled={formik.isSubmitting}>
                    {formik.isSubmitting ? (
                      <span>loading..</span>
                    ) : (
                      <span>submit</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </PostWrapper>
          <ToastContainer />
        </Container>
      ) : loading ? (
        <div tw='h-28 flex flex-col items-center justify-center'>
          <Loader height={30} width={30} type='TailSpin' color='#e5e7eb' />
        </div>
      ) : (
        <p>there was an error fetching the data. please retry</p>
      )}
    </div>
  );
}

export default SinglePost;
