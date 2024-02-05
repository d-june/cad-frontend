import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  ProductsSliceState,
  ResponseProductsType,
  StatusEnum,
} from "./types";
import { createProduct, deleteProductData, deleteProductImage, getProductBySlug, getProducts, getTopProducts, updateAvailableCountById, updateProduct, updateProductImages } from "./asyncActions";


const initialState: ProductsSliceState = {
  totalCount: 0,
  products: [],
  topProducts: [],
  currentProduct: null,
  currentPage: 1,
  status: StatusEnum.LOADING, //loading | success | error
  colors: [
    "прозрачная",
    "белый",
    "графит",
    "черный",
    "зеленый",
    "оранжевый",
    "голубой",
  ],

  gereralGroups: ["Свечи", "Подсвечники"],
  specifiedGroups: [
    "Свечи в гипсовых подсвечниках",
    "Свечи в банках",
    "Наборы",
  ],
  forms: [
    "восьмигранник",
    "стакан малый",
    "шар малый",
    "баночка с крышкой",
    "кашпо",
    "капсула",
    "стакан большой",
    "шар большой",
    "шкатулка",
    "банка стеклянная",
  ],
  burningTimes: ["10 часов", "20 часов", "30 часов", "35 часов", "40 часов"]
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ResponseProductsType>) {
      state.totalCount = action.payload.totalCount;
      state.products = action.payload.data;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
     state.currentPage = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.status = StatusEnum.LOADING;
      state.products = [];
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.totalCount = action.payload.totalCount;
      state.products = action.payload.data;
      state.status = StatusEnum.SUCCESS;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = StatusEnum.ERROR;
      state.products = [];
    });
    builder.addCase(getTopProducts.fulfilled, (state, action) => {
      state.topProducts = action.payload;
    });
    builder.addCase(updateAvailableCountById.fulfilled, (state, action) => {
      const changedProductIndex = state.products.findIndex(product => product.id === action.payload.id)
      state.products[changedProductIndex].available = action.payload.available
      
    });
    builder.addCase(getProductBySlug.fulfilled, (state, action) => {
      state.currentProduct = action.payload
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products.push(action.payload)
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.products.map(product => {
        if(product.id === action.payload.id) {
            product = action.payload
        }
    })
    });
    builder.addCase(deleteProductData.fulfilled, (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload.id)
    });
    builder.addCase(deleteProductImage.fulfilled, (state, action) => {
      state.products.map(product => {
        if(product.id === action.payload.id) {
            product.images = action.payload.images
        }
    })
    });
    builder.addCase(updateProductImages.fulfilled, (state, action) => {
      state.products.map(product => {
        if(product.id === action.payload.id) {
            product.images = action.payload.images
        }
    })
    });
  },
});

export const { setProducts, setCurrentPage } = productsSlice.actions;

export default productsSlice.reducer;
