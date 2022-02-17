import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wish",
  initialState: {
    products: [],
    quantityWish: 0,
   
  },
  reducers: {
    addWish: (state, action) => {
      state.quantityWish+=1;
      state.products.push(action.payload);
    },
    deleteWish: (state,action) => {
      state.quantityWish=0;
      while(state.products.length > 0) {
        state.products.pop(action.payload);
    }
    },
  },
});

export const { addWish,deleteWish } = wishSlice.actions;
export default wishSlice.reducer;