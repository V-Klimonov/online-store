import { gql } from "@apollo/client";
export const LINKS_NAME = gql`
  query {
    categories {
      name
    }
  }
`;
