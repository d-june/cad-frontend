import { AppState } from "../../store";

export const selectCart = (state: AppState) => state.cartSlice;
export const selectCartProductById = (id: string) => (state: AppState) =>
  state.cartSlice.products.find((obj) => obj.id === id);
