import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { LINKS_NAME } from "../../graphQl/query/links";
import { StyledNavLink } from "../styled/StyledNavLink";

const NavLinks = () => {
  const { loading, error, data } = useQuery(LINKS_NAME);
  const {pathname} = useLocation();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const { categories } = data;
  return (
    <>
      {categories.map((el) => {
        return (
          <StyledNavLink
            to={`category/${el.name}`}
            isActive={pathname === `/category/${el.name}`}
            key={el.name}
          >
            {el.name}
          </StyledNavLink>
        );
      })}
    </>
  );
};

export default NavLinks;
