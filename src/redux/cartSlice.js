import { createSlice } from "@reduxjs/toolkit";

const cartSlise = createSlice({
  name: "cart",
  initialState: {
    cartItems: {},
  },
  reducers: {
    addItem: (state, action) => {
      if (state.cartItems[action?.payload?.name]) {
        state.cartItems[action?.payload?.name]["count"] = ++state.cartItems[
          action?.payload?.name
        ]["count"];
      } else {
        state.cartItems[action?.payload?.name] = action?.payload;
        state.cartItems[action?.payload?.name]["count"] = 1;
      }
    },

    removeItem: (state, action) => {
      if (state.cartItems[action?.payload?.name]["count"] > 1) {
        state.cartItems[action?.payload?.name]["count"] = --state.cartItems[
          action?.payload?.name
        ]["count"];
      } else {
        delete state.cartItems[action?.payload?.name];
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlise.actions;
export default cartSlise.reducer;
