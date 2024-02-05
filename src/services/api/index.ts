import { GetServerSidePropsContext, NextPageContext } from "next";
import axios from "axios";
import { ProductsApi } from "./products";
import { UsersApi, accessToken } from "./user";
import { AromasApi } from "./aromas";


export type ApiReturnType = {
  products: ReturnType<typeof ProductsApi>;
  users:  ReturnType<typeof UsersApi>;
  aromas:  ReturnType<typeof AromasApi>;
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
    users:  UsersApi(instance),
    aromas:  AromasApi(instance)
  };
};