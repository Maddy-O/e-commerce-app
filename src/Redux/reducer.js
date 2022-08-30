import * as types from "./action.types";

const initialState = {
  isLoading: false,
  products: [],
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //---------------get Products------------------
    case types.GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case types.GET_PRODUCTS_SUCCESS:
      // console.log(payload);
      return { ...state, isLoading: false, products: payload, isError: false };
    case types.GET_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, products: [], isError: true };
    default:
      return state;
  }
};

export default reducer;
