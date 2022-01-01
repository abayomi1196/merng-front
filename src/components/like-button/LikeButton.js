import { useEffect, useState } from "react";
import { BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";
import { useMutation } from "@apollo/client";

import { IconButton } from "./LikeButton.styled";
import { LIKE_POST } from "graphql/mutations/likePost";

function LikeButton({ post }) {
  const [hasLiked, setHasLiked] = useState(false);

  const [likePost] = useMutation(LIKE_POST);

  useEffect(() => {
    if (
      post.user &&
      post.likes.find((like) => like.username === post.user.username)
    ) {
      setHasLiked(true);
    } else {
      setHasLiked(false);
    }
  }, [post.user, post.likes]);

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
