import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AromaType } from "./types";
import { createAroma, deleteAroma, getAromas, updateAroma, updateAromaImage } from "./asyncActions";


const initialState = {
  aromas: [] as AromaType[],
  error: "" as string | undefined
};

const productsSlice = createSlice({
  name: "aromas",
  initialState,

  reducers: {
    setAromas(state, action: PayloadAction<AromaType[]>) {
      state.aromas = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAromas.pending, (state, action) => {
      state.aromas = [];
    });
    builder.addCase(getAromas.fulfilled, (state, action) => {
      state.aromas = action.payload;
    });
    builder.addCase(getAromas.rejected, (state, action) => {
      state.aromas = [];
    });
    builder.addCase(updateAroma.fulfilled, (state, action) => {
      state.aromas.map(aroma => {
        if(aroma.id === action.payload.id) {
          aroma = action.payload
        }
    })
    });
    builder.addCase(deleteAroma.fulfilled, (state, action) => {
      state.aromas = state.aromas.filter(aroma => aroma.id !== action.payload.id)
    });
    builder.addCase(createAroma.rejected, (state, action) => {
      state.error = action.error.message
    });
    builder.addCase(createAroma.fulfilled, (state, action) => {
      state.aromas = [...state.aromas, action.payload]
    });
    builder.addCase(updateAromaImage.fulfilled, (state, action) => {
      state.aromas.map(aroma => {
        if(aroma.id === action.payload.id) {
          aroma.image = action.payload.image
        }
    })
    });

  },
});

export const { setAromas } = productsSlice.actions;

export default productsSlice.reducer;
