import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation createUser($registerInput: RegisterInput) {
    register(registerInput: $registerInput) {
      id
      token
      username
      email
      createdAt
    }
  }
`;
