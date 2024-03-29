"use client";

import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearCart } from "../../redux/slices/cart/slice";
import { selectCart } from "@/redux/slices/cart/selectors";
import CartItem from "./CartItem";
import CartEmpty from "../CartEmpty/CartEmpty";
import OrderPopup from "../OrderPopup";

import { Button } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import styles from "./Cart.module.scss";

const CartBody: FC = () => {
  const { products, totalPrice } = useSelector(selectCart);
  const [orderFormVisible, setOrderFormVisible] = useState(false);

  const dispatch = useDispatch();

  const totalCount = products.reduce(
    (sum: number, product: any) => sum + product.count,
    0
  );
  const minOrder = 1500;

  const onClearCart = () => {
    if (window.confirm("Вы действительно хотите очистить корзину?")) {
      dispatch(clearCart());
    }
  };

  const closeEditDialog = () => {
    setOrderFormVisible(false);
  };

  return (
    <div>
      {totalPrice ? (
        <div className={styles.cart}>
          <div className={styles.cartTop}>
            <div className="title"></div>
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

                <div className={styles.cartBottomText}>
                  <p>
                    Стоимость доставки расчитывается отдельно согласно тарифам
                    транспортной компании (СДЭК)
                  </p>
                </div>
              </div>
              <Button
                className={styles.cartOrderButton}
                onClick={() => setOrderFormVisible(true)}
              >
                Оформить заказ
              </Button>
            </div>
          </div>
          <OrderPopup
            onClose={closeEditDialog}
            open={orderFormVisible}
            handleClose={closeEditDialog}
            productsCart={products}
            totalPrice={totalPrice}
          />
        </div>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};

export default CartBody;
