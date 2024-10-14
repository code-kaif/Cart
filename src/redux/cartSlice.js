import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      let exist = state.find((item) => item.id == action.payload);
      if (exist) {
        exist.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    remove: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
    removeAll: (state, action) => {
      return [];
    },
    inc: (state, action) => {
      const item = state.find((item) => item.id == action.payload);
      if (item) item.quantity += 1;
    },
    dic: (state, action) => {
      const item = state.find((item) => item.id == action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      else if (item) {
        state = state.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const { add, remove, removeAll, inc, dic } = cartSlice.actions;
export default cartSlice.reducer;
