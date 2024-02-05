import { ResponseUser } from "@/services/api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@/redux/store";


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
      state.user = action.payload;
    },
  },
    extraReducers: (builder) => {
  },
});

export const { setUserData } = userSlice.actions;

export const selectUserData = (state: AppState) => state.userReducer;

export const userReducer = userSlice.reducer;
