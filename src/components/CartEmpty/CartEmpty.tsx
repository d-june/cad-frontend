import React, { FC } from "react";
import Link from "next/link";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import styles from "./CartEmpty.module.scss";

const CartEmpty: FC = () => {
  return (
    <div className={styles.cartEmpty}>
      <ShoppingCartOutlinedIcon />
      <div className={styles.cartEmptyTitle}>Корзина пуста</div>
      <Link className={styles.cartEmptyBack} href="/catalog">
        Вернуться к списку товаров
      </Link>
    </div>
  );
};

export default CartEmpty;
