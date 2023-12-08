import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLocalStorage = () => {
  let data: string | null = ''
 
  if(typeof localStorage !== 'undefined') {
    data = localStorage.getItem("cart");
  }

  const products = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(products);

  return {
    products,
    totalPrice,
  };
};
