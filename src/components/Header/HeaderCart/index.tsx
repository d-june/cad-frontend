"use client";

import { selectCart } from "@/redux/slices/cart/selectors";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styles from "../Header.module.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Api } from "@/services/api";
import { useAppDispatch } from "@/redux/hooks";
import { setUserData } from "@/redux/slices/user";

const HeaderCart = () => {
  const { products, totalPrice } = useSelector(selectCart);

  const isMounted = useRef(false);

  const totalCount = products.reduce(
    (sum: number, product: any) => sum + product.aroma.count,
    0
  );

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(products);
      localStorage.setItem("cart", json);
    }

    isMounted.current = true;
  }, [products]);
  return (
    <Link href="/cart" className={styles.headerCart}>
      {totalPrice === 0 ? (
        <div className={styles.cartTitle}>
          Корзина <ShoppingCartIcon />
        </div>
      ) : (
        <div className={styles.cartTitle}>
          {totalPrice + " ₽"} <ShoppingCartIcon />
        </div>
      )}

      {totalCount > 0 && (
        <div className={styles.cartTotalCount}>
          <span>{totalCount}</span>
        </div>
      )}
    </Link>
  );
};

export default HeaderCart;
