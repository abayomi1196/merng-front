import { gql } from "@apollo/client";

export const FETCH_POSTS = gql`
  query fetchPosts {
    getPosts {
      id
      body
      username
      createdAt
      comments {
        id
        createdAt
        username
        body
      }
      likes {
        id
        createdAt
        username
      }
      likeCount
      commentCount
    }
  }
`;
