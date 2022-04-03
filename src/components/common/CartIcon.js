import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const CartBadge = styled.div`
  position: absolute;
  top: -8px;
  right: -10px;
  height: 14.29px;
  width: 14.29px;
  border-radius: 50%;
  padding: 2px;
  background: #5ece7b;
  color: #1d1f22;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartIcon = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.cartOverlay.cartOverlayIsOpen);

  const cartOpenHendler = () => {
    dispatch({ type: "CARTOVERLAY_ISOPEN" });
  };
  console.log(isOpen);

  return (
    <div onClick={cartOpenHendler} style={{ position: "relative" }}>
      <img
        src={process.env.PUBLIC_URL + "/assets/empty-cart.svg"}
        alt="Cart icon"
      ></img>
      <CartBadge>0</CartBadge>
    </div>
  );
};

export default CartIcon;
