import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, SortPropertyEnum } from "./types";

const initialState = {
  currentPage: 1,
  sortData: '',
  aromas: '' as string | undefined,
  colors: '' as string | undefined,
  forms: '' as string | undefined,
  volumes: '' as string | undefined,
  currentPrice: '' as string | undefined


};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortData(state, action: PayloadAction<string>) {
      state.sortData = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      if(action.payload.currentPage) {
        state.currentPage = action.payload.currentPage
      }
      if(action.payload.currentPrice) {
        state.currentPrice = action.payload.currentPrice.toString()
      }
      if(action.payload.aromas ) {
        state.aromas = action.payload.aromas.toString()
      }

      if(action.payload.colors) {
        state.colors = action.payload.colors.toString()
      }
      
      if(action.payload.forms) {
        state.forms = action.payload.forms.toString()
      }
      if(action.payload.volumes) {
        state.volumes = action.payload.volumes.toString()
      }
     
     
   
     
    
      // if (Object.keys(action.payload).length) {
      //   state.currentPage = Number(action.payload.currentPage);
      //   state.categoryId = Number(action.payload.categoryId);
      //   state.sort = action.payload.sort;
      // } else {
      //   state.currentPage = 1;
      //   state.categoryId = 0;
      //   state.sort = {
      //     name: "популярности",
      //     sortProperty: SortPropertyEnum.RATING_DESC,
      //   };
      // }
    },

  },
});

export const {

  setSortData,
  setCurrentPage,
  setFilters,

} = filterSlice.actions;

export default filterSlice.reducer;
