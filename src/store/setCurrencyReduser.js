const defaultState = {
  currency: JSON.parse(localStorage["currency"] || '"$"'),
};

const SET_CURRENCY = "SET_CURRENCY";

export const setCurrencyReduser = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      };

    default:
      return state;
  }
};
