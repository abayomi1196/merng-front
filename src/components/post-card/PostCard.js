import "twin.macro";
import "styled-components/macro";

import { ImageWrapper, TextContent, UserDetails } from "./PostCard.styled";

function PostCard({ post }) {
  return (
    <div tw='max-w-sm w-full mx-auto lg:(max-w-full flex)'>
      <ImageWrapper />

      <TextContent>
        <div>
          <p>{post.body}</p>
        </div>

        <UserDetails>
          <img
            src='https://images.unsplash.com/photo-1522512115668-c09775d6f424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt='Avatar of a fine babe'
          />

          <div>
            <p>Babe wey fine</p>
            <p>Today today</p>
          </div>
        </UserDetails>
      </TextContent>
    </div>
  );
}

export default PostCard;
