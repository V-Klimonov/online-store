import React from "react";
import styled from "styled-components";
import CartIcon from "./CartIcon";
import CurrencyMenu from "./CurrencyMenu";
import NavLinks from "./NavLinks";
import { Logo } from "../styled/Logo";

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 30px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Wrapper>
        <Logo to="/">iShop</Logo>
        <NavLinks />
      </Wrapper>
      <Wrapper>
        <CurrencyMenu />
        <CartIcon />
      </Wrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
