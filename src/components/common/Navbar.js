import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CartIcon from "./CartIcon";
import CurrencyMenu from "./CurrencyMenu";
import NavLinks from "./NavLinks";

const Logo = styled(NavLink)`
  font-family: "Kaushan Script", cursive;
  font-size: 34px;
  color: #5ece7b;
  text-decoration: none;
  margin-right: 40px;
`;

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
