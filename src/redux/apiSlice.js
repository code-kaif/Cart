import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  success: "Success",
  loading: "Loading",
  error: "Error",
});
export const apiSlice = createSlice({
  name: "Api",
  initialState: {
    apis: [],
    status: STATUS.success,
    apisById: {},
  },
  reducers: {
    setProduct: (state, action) => {
      state.apis = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setProductById: (state, action) => {
      state.apisById = action.payload;
    },
  },
});

export const { setProduct, setStatus, setProductById } = apiSlice.actions;
export default apiSlice.reducer;

// middleware thunk

export function getProducts() {
  return async function fetchProduct(dispatch) {
    dispatch(setStatus(STATUS.loading));
    try {
      async function getData() {
        let data = await fetch("https://fakestoreapi.com/products");
        let products = await data.json();
        products = products.map((item) => ({ ...item, quantity: 1 }));
        dispatch(setProduct(products));
        dispatch(setStatus(STATUS.success));
      }
      getData();
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUS.error));
    }
  };
}

export function getProductById(id) {
  return async function fetchProduct(dispatch) {
    dispatch(setStatus(STATUS.loading));
    try {
      async function getData() {
        let data = await fetch(`https://fakestoreapi.com/products/${id}`);
        let products = await data.json();
        dispatch(setProductById(products));
        dispatch(setStatus(STATUS.success));
      }
      getData();
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUS.error));
    }
  };
}
