import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const CurrencyWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 15px;
`;
const CurrencySymbol = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin-right: 3px;
`;

const CurrencyMenu = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency.currency);
  const isOpen = useSelector(
    (state) => state.currencyDropdown.currencyDropdownIsOpen
  );
  console.log(isOpen);
  const dropdownOpenHandler = () => {
    dispatch({ type: "DROPDOWN_ISOPEN" });
  };

  return (
    <CurrencyWrapper onClick={() => dropdownOpenHandler()}>
      <CurrencySymbol>{currency}</CurrencySymbol>
      <img
        style={{
          transform: isOpen ? "rotate(180deg)" : null,
          marginLeft: "5px",
        }}
        src={process.env.PUBLIC_URL + "/assets/arrow.svg"}
        alt="Arrow"
      ></img>
    </CurrencyWrapper>
  );
};

export default CurrencyMenu;
