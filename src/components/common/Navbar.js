import { useQuery } from "@apollo/client";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { LINKS_NAME } from "../../graphQl/query/links";
const Logo = styled(NavLink)`
  font-family: "Kaushan Script", cursive;
  font-size: 34px;
  color: #5ece7b;
  text-decoration: none;
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledNavLink = styled(NavLink)`
  font-family: Raleway;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  line-height: 19.2px;
  padding: 16px;
  text-decoration: none;
`;

const Navbar = () => {
  const { loading, error, data } = useQuery(LINKS_NAME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ...</p>;
  const { categories } = data;
  console.log(categories);
  return (
    <NavbarWrapper>
      <div>
        <Logo to="/">Lifestyle idea's</Logo>
        {categories.map((el) => {
          return (
            <StyledNavLink to={`category/${el.name}`} key={el.name}>
              {el.name}
            </StyledNavLink>
          );
        })}
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
