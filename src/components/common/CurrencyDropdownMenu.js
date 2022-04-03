import React from "react";
import { CURRENCY_TYPE } from "../../graphQl/query/currencies";
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  right: 16px;
  top: 60px;
  background: #fff;
  box-shadow: 0px 0px 15px rgba(211, 210, 210, 0.7);
`;

const CurrecyItem = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  padding: 5% 10px;
  &:hover {
    box-shadow: 0px 0px 15px rgba(211, 210, 210, 0.7);
    cursor: pointer;
  }
`;

const CurrencyDropdownMenu = () => {
  const { loading, error, data } = useQuery(CURRENCY_TYPE);
  const dispatch = useDispatch();
  if (loading) return null;
  if (error) return `Error! ${error}`;
  const { currencies } = data;

  const setCurrency = (sym) => {
    dispatch({ type: "SET_CURRENCY", payload: sym });
    dispatch({ type: "DROPDOWN_ISOPEN" });
  };

  return (
    <DropdownWrapper>
      {currencies.map((currency) => {
        return (
          <CurrecyItem
            onClick={() => setCurrency(currency.symbol)}
            key={currency.symbol}
          >
            {currency.symbol + " " + currency.label}
          </CurrecyItem>
        );
      })}
    </DropdownWrapper>
  );
};

export default CurrencyDropdownMenu;
