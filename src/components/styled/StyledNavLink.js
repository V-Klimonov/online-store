import { NavLink as NavbarLink } from "react-router-dom";
import styled from "styled-components";

const NavLink = ({ isActive, children, ...props }) => {
  return <NavbarLink {...props}>{children}</NavbarLink>;
};

export const StyledNavLink = styled(NavLink)`
  font-family: Raleway;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  line-height: 19.2px;
  padding: 16px;
  text-decoration: none;
  color: ${(prop) => (prop.isActive ? "#5ece7b" : "#1d1f22")};
  border-bottom: ${(prop) => (prop.isActive ? "3px solid #5ece7b" : "none")};
`;
