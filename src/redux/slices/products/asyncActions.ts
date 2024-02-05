import { createAsyncThunk } from "@reduxjs/toolkit";
import {  OrderType, ProductFormType, ProductType, ResponseProductsType, SearchProductParamsThunkType } from "./types";
import { Api } from "@/services/api";




export const getProducts = createAsyncThunk<
  ResponseProductsType,
  SearchProductParamsThunkType | undefined
>("products/getProducts", async (params?) => {
    if (params) {
      const { orderBy, aromas, colors, volumes, forms, currentPrice, currentPage } = params;
    }


  const data = await Api().products.getAll(
    params 
  );
  return data;
});

export const getTopProducts = createAsyncThunk<
  ProductType[]
>("products/getTopProducts", async () => {
  const data = await Api().products.getTopProducts();
  return data;
});

export const updateAvailableCountById = createAsyncThunk<
  ProductType,
  {id: string, available: number}
>("products/updateAvailableCountById", async ({id, available}) => {

  const data = await Api().products.updateAvailableCountById( 
    id, available
  );
  return data;
});

export const sendOrderToMail = createAsyncThunk<
  ProductType,
  OrderType
>("products/sendOrderToMail", async (order) => {
  
  const data = await Api().products.sendOrder(
    order
  );
  return data;
});

export const getProductBySlug = createAsyncThunk<
  ProductType,
  string
>("products/getProductBySlug", async (slug) => {
  const data = await Api().products.getBySlug(
    slug
  );
  return data;
});

export const createProduct = createAsyncThunk<
  ProductType,
  ProductFormType
>("products/createProduct", async (productInfo) => {
  
  const data = await Api().products.createProductData(
    productInfo
  )
    if(productInfo.file) {
      Api().products.updateImages(data.id, productInfo.file[0]);
    }
    
  
  return data;
});

export const updateProduct = createAsyncThunk<
  ProductType,
  ProductFormType
>("products/updateProduct", async (productInfo) => {
  const data = await Api().products.updateProduct(
    productInfo
  );

  return data;
});

export const deleteProductData = createAsyncThunk<
  ProductType,
  string
>("products/deleteProductData", async (productId) => {
  const data = await Api().products.deleteProduct(
    productId
  );
  return data;
});

export const updateProductImages = createAsyncThunk<
  ProductType,
  {productId: string, image: File}
>("products/updateProductImages", async ({productId, image}) => {
  const data = await Api().products.updateImages(
    productId, image
  );
  return data;
});


export const deleteProductImage = createAsyncThunk<
  ProductType,
  {productId: string, filename: string}
>("products/deleteProductImage", async ({productId, filename}) => {
  const data = await Api().products.deleteImage(
    productId, filename
  );
  return data;
});









