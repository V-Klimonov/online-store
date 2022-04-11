import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { OutOfStock } from "../styled/OutOfStock";
import { ProductImgWrapper } from "../styled/ProductImgWrapper";
import { ProductImage } from "../styled/ProductImage";

const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  margin-right: 40px;
  margin-top: 80px;
  width: 373px;
  height: 444px;
  &:hover {
    box-shadow: 0px 0px 15px rgba(211, 210, 210, 0.7);
  }
`;

const StyledLink = styled(Link)`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
  margin-top: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
  color: #1d1f22;
`;

const ProductCard = ({ item }) => {
  const {pathname} = useLocation();
  const { gallery, id, brand, name, inStock, prices } = item;
  console.log(item);
  const currency = useSelector((state) => state.currency.currency);
  const price = prices.find((el) => el.currency.symbol === currency);
  console.log(price);
  return (
    <ProductCardWrapper>
      <ProductImgWrapper size="330px">
        <ProductImage
          src={gallery[0]}
          alt={id}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        ></ProductImage>
      </ProductImgWrapper>
      {inStock ? <OutOfStock>Stock</OutOfStock> : null}
      <StyledLink to={`${pathname}/product/${id}`}>
        <span>{brand + " " + name}</span>
        <span style={{ fontWeight: "500" }}>
          {currency + " " + price.amount}
        </span>
      </StyledLink>
    </ProductCardWrapper>
  );
};

export default ProductCard;
