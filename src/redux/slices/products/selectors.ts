import { AppState } from "../../store";

export const selectProductsData = (state: AppState) => state.productsSlice;
