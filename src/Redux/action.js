import * as types from "./action.types";
import axios from "axios";

const getProducts = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return axios
    .get("https://my-e-commerce-app-server.herokuapp.com/api/products")
    .then((res) =>
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data })
    )
    .catch((e) => dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: e }));
};

const addProductReview = (payload) => (dispatch) => {
  dispatch({ type: types.PATCH_PRODUCTS_REQUEST });
  return axios
    .patch(
      `https://my-e-commerce-app-server.herokuapp.com/api/products/${payload.id}`,
      { review: payload.review }
    )
    .then((res) => {
      dispatch({ type: types.PATCH_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((e) => dispatch({ type: types.PATCH_PRODUCTS_FAILURE, payload: e }));
};

export { getProducts, addProductReview };
