import "twin.macro";
import "styled-components/macro";

import { formatDistanceToNow } from "date-fns";

import { ImageWrapper, TextContent, UserDetails } from "./PostCard.styled";

function PostCard({ post }) {
  console.log(post);
  return (
    <div tw='w-full mx-auto shadow-xl lg:(flex )'>
      <ImageWrapper />

      <TextContent>
        <div>
          <p>{post.body}</p>
        </div>

        <div tw='flex justify-between md:(flex-col-reverse gap-1)'>
          <UserDetails>
            <img
              src='https://images.unsplash.com/photo-1522512115668-c09775d6f424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              alt='Avatar of a fine babe'
            />

            <div>
              <p>{post.username}</p>
              <p>
                {formatDistanceToNow(new Date(post.createdAt), {
                  addSuffix: true,
                  includeSeconds: true,
                })}
              </p>
            </div>
          </UserDetails>

          <div>likes & comments</div>
        </div>
      </TextContent>
    </div>
  );
}

export default PostCard;
