const defaultState = {
  currencyDropdownIsOpen: false,
};

const DROPDOWN_ISOPEN = "DROPDOWN_ISOPEN";

export const currencyDropdownReduser = (state = defaultState, action) => {
  switch (action.type) {
    case DROPDOWN_ISOPEN:
      return {
        ...state,
        currencyDropdownIsOpen: !state.currencyDropdownIsOpen,
      };

    default:
      return state;
  }
};
