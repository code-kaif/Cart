import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.js";
import apiSlice from "./apiSlice.js";

export default configureStore({
  reducer: {
    cart: cartSlice,
    api: apiSlice,
  },
});
