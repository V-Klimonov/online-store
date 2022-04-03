import React from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import ProductCard from "../common/ProductCard";

const CategoryWrapper = styled.div`
  padding: 50px 30px;
`;

const TitleCategory = styled.h1`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 160%;
  color: #1d1f22;
  margin: 0;
  &:first-letter {
    text-transform: uppercase;
  }
`;

const CategoryInner = styled.h1`
  display: flex;
  flex-wrap: wrap;
`;

const Category = () => {
  const params = useParams();
  let DATA_QUERY = gql`
    query {
      category(input: { title: "${params.category}" }) {
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
  const { loading, error, data } = useQuery(DATA_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const { name, products } = data.category;
  console.log(name, products);
  return (
    <CategoryWrapper>
      <TitleCategory>{name}</TitleCategory>
      <CategoryInner>
        {products.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </CategoryInner>
    </CategoryWrapper>
  );
};

export default Category;
