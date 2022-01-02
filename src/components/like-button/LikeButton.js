import { useEffect, useState, useContext } from "react";
import { BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";
import { useMutation } from "@apollo/client";

import { IconButton } from "./LikeButton.styled";
import { LIKE_POST } from "graphql/mutations/likePost";
import { AuthContext } from "context/AuthContext";

function LikeButton({ post }) {
  const [hasLiked, setHasLiked] = useState(false);
  const { user } = useContext(AuthContext);

  const [likePost] = useMutation(LIKE_POST);

  useEffect(() => {
    if (user && post.likes.find((like) => like.username === user.username)) {
      setHasLiked(true);
    } else {
      setHasLiked(false);
    }
  }, [user, post.likes]);

  return (
    <IconButton
      onClick={() =>
        likePost({
          variables: {
            postId: post.id,
          },
        })
      }
    >
      {hasLiked ? <BsHandThumbsUpFill /> : <BsHandThumbsUp />}

      <span>
        {post.likeCount} {post.likeCount === 1 ? "Like" : "Likes"}
      </span>
    </IconButton>
  );
}

export default LikeButton;
