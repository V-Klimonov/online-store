import React from "react";
import { CURRENCY_TYPE } from "../../graphQl/query/currencies";
import { useQuery } from "@apollo/client";

const CurrencyDropdownMenu = () => {
  const { loading, error, data } = useQuery(CURRENCY_TYPE);
  if (loading) return null;
  if (error) return `Error! ${error}`;
  console.log(data);
  return <div>CurrencyDropdownMenu</div>;
};

export default CurrencyDropdownMenu;
