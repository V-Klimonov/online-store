import { gql } from "@apollo/client";

export const CURRENCY_TYPE = gql`
  query GetCurrency {
    currencies {
      label
      symbol
    }
  }
`;
