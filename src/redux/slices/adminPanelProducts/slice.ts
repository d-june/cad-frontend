import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLocalStorage } from "../../../utils/getCartFromLocalStorage";


import { HYDRATE } from "next-redux-wrapper";
import { AromaType, ProductType } from "@/app/types/types";

const initialState = {
    products: [] as ProductType[]
} 



const adminPanelProductsSlice = createSlice({
  name: "adminPanelProducts",
  initialState ,
  reducers: {
    
    setProductsData (state, action: PayloadAction<ProductType[]>)  {

        state.products = action.payload
    },
    addProductsData (state, action: PayloadAction<ProductType>)  {

        state.products = [...state.products, action.payload]
    },
    deleteProductData (state, action: PayloadAction<ProductType>)  {

        state.products = state.products.filter(product => { product.id !== action.payload.id})
    },
    updateProductImages (state, action: PayloadAction<ProductType>)  {
      state.products.map(product => {
            if(product.id === action.payload.id) {
                product.images = action.payload.images
            }
        })
    },
    deleteProductAroma (state, action: PayloadAction<AromaType>)  {
        state.products.map(product => {
            if(product.id === action.payload.productId) {
            
                product.aromas = product.aromas?.filter(aroma => aroma.id !== action.payload.id)
            }
        }
        )
        
      },

      addProductAroma (state, action: PayloadAction<AromaType>)  {
        state.products.map(product => {
            if(product.aromas && product.id === action.payload.productId) {
                product.aromas = [...product.aromas, action.payload]
            }
        }
           
        )
      },

  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      
      state = action.payload;
    },
  },
});

export const { setProductsData, addProductsData, deleteProductData, updateProductImages, addProductAroma, deleteProductAroma } =
adminPanelProductsSlice.actions;

export default adminPanelProductsSlice.reducer;
