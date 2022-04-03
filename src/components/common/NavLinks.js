import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { LINKS_NAME } from "../../graphQl/query/links";

const StyledNavLink = styled(NavLink)`
  font-family: Raleway;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  line-height: 19.2px;
  padding: 16px;
  text-decoration: none;
  color: #1d1f22;
  &.active {
    color: #5ece7b;
    border-bottom: 3px solid #5ece7b;
  }
`;

const NavLinks = () => {
  const { loading, error, data } = useQuery(LINKS_NAME);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const { categories } = data;
  return (
    <>
      {categories.map((el) => {
        return (
          <StyledNavLink to={`category/${el.name}`} key={el.name}>
            {el.name}
          </StyledNavLink>
        );
      })}
    </>
  );
};

export default NavLinks;
