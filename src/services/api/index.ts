// import axios from "axios";



// // const token = localStorage.getItem("token")         

// // if (token) {
// //   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
// // } else {
// //   axios.defaults.headers.common['Authorization'] = ""
// // }

// export const instance = axios.create({
//   // withCredentials: true,
//   baseURL: "http://localhost:3001/api",
  
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     // Authorization: 'Bearer ' + token,
//   },
// });



// instance.interceptors.request.use(function (config) {
//   const token = localStorage.getItem("token");
//   console.log(token)
//   config.headers.token = token ? `${token}` : "";
//   console.log(config)
//   return config;
// });


// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     console.log(token)
//     const auth = token ? `Bearer ${token}` : '';
//     config.headers.common['Authorization'] = auth;
//     return config;
//   },
//   (error) => Promise.reject(error),
// );



import { GetServerSidePropsContext, NextPageContext } from "next";
import Cookies, { parseCookies } from "nookies";
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
    baseURL: "http://api.cadhome.ru/api",
    headers: {
      Authorization: token,
    },
  });

  return {
    products: ProductsApi(instance),
    users:  UsersApi(instance)
  };
};