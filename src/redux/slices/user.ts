import { ResponseUser } from "@/services/api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@/redux/store";
import { HYDRATE } from "next-redux-wrapper";

export interface UserState {
  user: ResponseUser | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<ResponseUser | null>) => {
      console.log(action.payload)
      state.user = action.payload;
    },
  },
    extraReducers: (builder) => {
      // [HYDRATE]: (state, action) => {
      //   state.user = action.payload.user.data;
      // },
 
  },
});

export const { setUserData } = userSlice.actions;

export const selectUserData = (state: AppState) => state.userReducer;

export const userReducer = userSlice.reducer;
