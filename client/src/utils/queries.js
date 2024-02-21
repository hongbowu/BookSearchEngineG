import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allUsers {
    users {
      _id
      name
      savedBooks
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      savedBooks
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      savedBooks
    }
  }
`;