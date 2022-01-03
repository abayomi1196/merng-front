import "twin.macro";
import "styled-components/macro";
import { Link, useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { FaRegComments } from "react-icons/fa";
import { useContext } from "react";

import { TextContent, UserDetails, IconButton } from "./PostCard.styled";
import { AuthContext } from "context/AuthContext";
import LikeButton from "../like-button/LikeButton";
import DeleteButton from "../delete-button/DeleteButton";

function PostCard({ post }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <div tw='w-full h-full mx-auto shadow-xl lg:(flex)'>
      <TextContent>
        <div>
          <p>{post.body}</p>
        </div>

        <div tw='flex justify-between space-x-4 border-gray-300 border-t-2 pt-4 items-center lg:(mt-4 flex-col space-x-0 gap-4 items-start border-none)'>
          <UserDetails>
            <img
              src='https://images.unsplash.com/photo-1522512115668-c09775d6f424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              alt='Avatar of a fine babe'
            />

            <div>
              <p>{post.username}</p>
              <Link to={`/posts/${post.id}`}>
                {formatDistanceToNow(new Date(post.createdAt), {
                  addSuffix: true,
                  includeSeconds: true,
                })}
              </Link>
            </div>
          </UserDetails>

          <div tw='flex flex-wrap justify-end gap-2'>
            <LikeButton
              post={{
                id: post.id,
                likes: post.likes,
                likeCount: post.likeCount,
                user,
              }}
            />

            <IconButton onClick={() => navigate(`/posts/${post.id}`)}>
              <FaRegComments />
              <span>
                {post.commentCount}{" "}
                {post.commentCount === 1 ? "Comment" : "Comments"}
              </span>
            </IconButton>

            {user && user.username === post.username && (
              <DeleteButton id={post.id} />
            )}
          </div>
        </div>
      </TextContent>
    </div>
  );
}

export default PostCard;
