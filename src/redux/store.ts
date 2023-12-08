import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import productsReducer from './features/products-slice'
import sliderReducer from './features/slider-slice'
import {userReducer} from "./slices/user";
import { createWrapper } from "next-redux-wrapper";
import  cartSlice  from './slices/cart/slice'
import adminPanelProductsSlice from './slices/adminPanelProducts/slice'


export function makeStore() {
    return configureStore({
    reducer: {
        productsReducer,
        sliderReducer,
        userReducer,
        cartSlice,
        adminPanelProductsSlice
    }
});
}

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });