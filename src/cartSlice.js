import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      let i = state.findIndex(el=>el.title===action.payload.title);
      if (i===-1) {
        state.push({title: action.payload.title, amount: action.payload.amount, price: action.payload.price});
      } else {
        state[i].amount+=action.payload.amount;
      }
    },
    removeItem: (state, action) => {
      let i = state.findIndex(el=>el.title===action.payload);
      let newState = [...state.slice(0, i), ...state.slice(i+1)];
      console.log(newState);
      return newState;
  }
}
})

export const { addItem, removeItem } = cartSlice.actions;

export const selectAmount = (state) => state.cart.length?state.cart.reduce((sum,el) => sum+el.amount, 0):0;
export const selectCart = (state) => state.cart;

export default  cartSlice.reducer;