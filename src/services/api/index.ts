import { GetServerSidePropsContext, NextPageContext } from "next";
import axios from "axios";
import { ProductsApi } from "./products";
import { UsersApi, accessToken } from "./user";


export type ApiReturnType = {
  products: ReturnType<typeof ProductsApi>;
  users:  ReturnType<typeof UsersApi>;
};

export const Api = (
  ctx?: NextPageContext | GetServerSidePropsContext
): ApiReturnType => {

  

    const token = localStorage.getItem("token");
  

  const instance = axios.create({
    baseURL: "https://owa.cadhome.ru/api",
    headers: {
      Authorization: token,
    },
  });

  return {
    products: ProductsApi(instance),
    users:  UsersApi(instance)
  };
};