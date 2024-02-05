import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLocalStorage } from "../../../utils/getCartFromLocalStorage";
import { calcTotalPrice } from "../../../utils/calcTotalPrice";
import { CartItemType, CartSliceState } from "./types";

const { products, totalPrice } = getCartFromLocalStorage();
const initialState: CartSliceState = {
  totalPrice,
  products,
};



const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<CartItemType>) {
        state.products.push({ ...action.payload });
        state.totalPrice = calcTotalPrice(state.products);
    },
    plusProduct(state, action: PayloadAction<{id: string}>) {
      const findProduct = state.products.find(
        obj => obj.id === action.payload.id 
      );
      if (findProduct) {
        findProduct.count++;
        state.totalPrice = calcTotalPrice(state.products);
      }
    },
    minusProduct(state, action: PayloadAction<{id: string}>) {
      const findProduct = state.products.find(
        obj => obj.id === action.payload.id 
      );
      if (findProduct) {
        findProduct.count--;
        state.totalPrice = calcTotalPrice(state.products);
      }
    },
    removeProduct(state, action: PayloadAction<{id: string}>) {

      state.products = state.products.filter(obj => obj.id !== action.payload.id );

      state.totalPrice = calcTotalPrice(state.products);
    },
    clearCart(state) {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, removeProduct, minusProduct, plusProduct, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
