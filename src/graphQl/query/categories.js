import { gql } from "@apollo/client";

export const CATEGORY_ALL = gql`
  query {
    category(input: { title: "all" }) {
      name
      products {
        id
        brand
        name
        inStock
        prices {
          currency {
            symbol
          }
          amount
        }
        gallery
        attributes {
          id
          name
          type
          items {
            displayValue
            id
            value
          }
        }
      }
    }
  }
`;

export const CATEGORY_TECH = gql`
  query {
    category(input: { title: "tech" }) {
      name
      products {
        id
        brand
        name
        inStock
        prices {
          currency {
            symbol
          }
          amount
        }
        gallery
        attributes {
          id
          name
          type
          items {
            displayValue
            id
            value
          }
        }
      }
    }
  }
`;

export const CATEGORY_CLOTHES = gql`
  query {
    category(input: { title: "clothes" }) {
      name
      products {
        id
        brand
        name
        inStock
        prices {
          currency {
            symbol
          }
          amount
        }
        gallery
        attributes {
          id
          name
          type
          items {
            displayValue
            id
            value
          }
        }
      }
    }
  }
`;
