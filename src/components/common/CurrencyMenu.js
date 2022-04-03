import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const CurrencyWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 10px;
`;

const CurrencyMenu = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency);
  const isOpen = useSelector((state) => state.currencyDropdownIsOpen);
  console.log(isOpen);
  const dropdownOpenHandler = () => {
    dispatch({ type: "DROPDOWN_HANDLE" });
  };

  return (
    <CurrencyWrapper onClick={() => dropdownOpenHandler()}>
      <div>{currency}</div>
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
