"use client";

import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearCart } from "../../redux/slices/cart/slice";
import CartItem from "./CartItem";
import CartEmpty from "../CartEmpty/CartEmpty";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import styles from "./Cart.module.scss";
import Link from "next/link";
import { selectCart } from "@/redux/slices/cart/selectors";
import { Button } from "@mui/material";
import OrderPopup from "../OrderPopup";

const CartBody: FC = () => {
  const { products, totalPrice } = useSelector(selectCart);
  const [orderFormVisible, setOrderFormVisible] = useState(false);

  const dispatch = useDispatch();

  const totalCount = products.reduce(
    (sum: number, product: any) => sum + product.aroma.count,
    0
  );
  const minOrder = 1500;

  const onClearCart = () => {
    if (window.confirm("Вы действительно хотите очистить корзину?")) {
      dispatch(clearCart());
    }
  };

  const openEditDialog = () => {
    setOrderFormVisible(true);
  };

  const closeEditDialog = () => {
    setOrderFormVisible(false);
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className={styles.cart}>
      <div className="container">
        <div className={styles.cartTop}>
          <h1 className={styles.cartTitle}>
            Корзина <span>(Товаров в корзине: {totalCount})</span>
            <div className={styles.cartClear} onClick={onClearCart}>
              <RemoveShoppingCartIcon />
              Очистить
            </div>
          </h1>
        </div>
        <div className={styles.cartProducts}>
          {products.map((product: any, index: number) => {
            return <CartItem key={product.id + index} {...product} />;
          })}
        </div>
        <div className={styles.cartBottomContainer}>
          <div className={styles.cartBottom}>
            <div className={styles.cartBottomBody}>
              <div className={styles.cartBottomPrice}>
                Итого: <span>{totalPrice} ₽</span>
              </div>
              {minOrder - totalPrice > 0 && (
                <div className={styles.cartMinOrder}>
                  <p>
                    До бесплатной доставки не хватает
                    <span>{minOrder - totalPrice} ₽</span>
                  </p>
                  <p>Минимальная сумма заказа {minOrder} ₽</p>
                </div>
              )}
            </div>
            <Button
              className={styles.cartOrderButton}
              onClick={() => setOrderFormVisible(true)}
            >
              Оформить заказ
            </Button>
          </div>
        </div>
      </div>
      <OrderPopup
        onClose={closeEditDialog}
        open={orderFormVisible}
        handleClose={closeEditDialog}
        products={products}
        totalPrice={totalPrice}
      />
    </div>
  );
};

export default CartBody;
