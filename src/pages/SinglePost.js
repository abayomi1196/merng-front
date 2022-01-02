import "twin.macro";
import "styled-components/macro";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { formatDistanceToNow } from "date-fns";
import { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";

import { FETCH_POST } from "graphql/queries/fetchPost";
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

  const post = data?.getPost;

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
            </div>

            <p>
              {formatDistanceToNow(new Date(post.createdAt), {
                addSuffix: true,
                includeSeconds: true,
              })}
            </p>
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
                <DeleteButton id={post.id} />
              )}
            </div>

            {/* {comments} */}
          </PostWrapper>
        </Container>
      ) : loading ? (
        <p>loading...</p>
      ) : (
        <p>there was an error fetching the data. please retry</p>
      )}
    </div>
  );
}

export default SinglePost;
