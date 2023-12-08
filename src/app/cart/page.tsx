import CartBody from "@/components/CartBlock/CartBody";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Корзина товаров | CAD",
  description: "Корзина заказа, список ваших товаров для оформления",
  robots: {
    index: false,
  },
};

const CartPage = () => {
  return (
    <main>
      <CartBody />
    </main>
  );
};

export default CartPage;
