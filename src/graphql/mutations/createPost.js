import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      body
      commentCount
      createdAt
      id
      likeCount
      username
      comments {
        body
        createdAt
        id
        username
      }
      likes {
        createdAt
        id
        username
      }
    }
  }
`;
