import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
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
  justify-content: space-around;
  height: 80px;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div>
        <Logo to="/">iShop</Logo>
        <NavLinks />
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
