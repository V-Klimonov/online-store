const defaultState = {
  cartOverlayIsOpen: false,
};

const CARTOVERLAY_ISOPEN = "CARTOVERLAY_ISOPEN";

export const cartOverlayReduser = (state = defaultState, action) => {
  switch (action.type) {
    case CARTOVERLAY_ISOPEN:
      return {
        ...state,
        cartOverlayIsOpen: !state.cartOverlayIsOpen,
      };

    default:
      return state;
  }
};
