import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    DELETE_ITEM: (state,action) => {
      state.quantity = 0;
      state.total = 0;
      while(state.products.length > 0) {
        state.products.pop(action.payload);
    }
    },
  },
});

export const { addProduct,DELETE_ITEM } = cartSlice.actions;
export default cartSlice.reducer;
