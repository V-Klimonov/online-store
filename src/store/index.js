import { createStore, combineReducers } from "redux";
import { currencyDropdownReduser } from "./currencyDropdownReduser";
import { cartOverlayReduser } from "./cartOverlayReduser";
import { setCurrencyReduser } from "./setCurrencyReduser";

const rootReduser = combineReducers({
  currencyDropdown: currencyDropdownReduser,
  cartOverlay: cartOverlayReduser,
  currency: setCurrencyReduser,
});

export const store = createStore(rootReduser);
