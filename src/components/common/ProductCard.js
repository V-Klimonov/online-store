import React from "react";
import styled from "styled-components";

const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-right: 40px;
  margin-top: 80px;
  width: 373px;
  height: 444px;
  &:hover {
    box-shadow: 0px 0px 15px rgba(211, 210, 210, 0.7);
  }
`;

const ProductImgWrapper = styled.div`
  width: 330px;
  height: 330px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductCard = ({ item }) => {
  console.log(item);
  return (
    <ProductCardWrapper>
      <ProductImgWrapper>
        <img
          src={item.gallery[0]}
          alt={item.id}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        ></img>
      </ProductImgWrapper>
    </ProductCardWrapper>
  );
};

export default ProductCard;
