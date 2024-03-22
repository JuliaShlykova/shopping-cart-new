import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,//top-level state object will have a field named counter and all data for state.counter will be updated by the counterReducer
  },
});