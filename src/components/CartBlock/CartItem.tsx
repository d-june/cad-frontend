import React, { FC, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CartItemType } from "../../redux/slices/cart/types";

import ClearIcon from "@mui/icons-material/Clear";
import {
  plusProduct,
  minusProduct,
  removeProduct,
} from "../../redux/slices/cart/slice";

import styles from "./Cart.module.scss";
import { Button } from "@mui/material";
import Image from "next/image";

const CartItemBlock: FC<CartItemType> = ({
  id,
  imageUrl,
  title,
  description,
  price,
  aroma,
  availableCount,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(plusProduct({ id: id, aroma: aroma.name }));
  };

  const onClickMinus = () => {
    dispatch(minusProduct({ id: id, aroma: aroma.name }));
  };

  const onClickRemove = () => {
    if (window.confirm("Вы уверенны, что хотите удалить?")) {
      dispatch(removeProduct({ id: id, aroma: aroma.name }));
    }
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.itemImage}>
        <Image
          src={`http://api.cadhome.ru/api/products/product-image/${imageUrl}`}
          alt="ароматическая свеча"
          width={200}
          height={200}
        />
      </div>

      <div className={styles.itemAbout}>
        <h3 className={styles.itemTitle}>{title}</h3>
        <p className={styles.itemAroma}>Аромат: {aroma.name}</p>
        <p className={styles.itemDescription}>
          {description.length > 50
            ? description.slice(0, 50) + "..."
            : description}
        </p>
      </div>
      <div className={styles.countBlock}>
        <button
          disabled={aroma.count === 1}
          className={styles.itemButton}
          onClick={onClickMinus}
        >
          -
        </button>
        {aroma.count}
        <button
          className={styles.itemButton}
          onClick={onClickPlus}
          disabled={aroma.count === availableCount}
        >
          +
        </button>
      </div>
      <div className={styles.itemPrice}>{price * aroma.count} ₽</div>
      <div className={styles.itemDelete} onClick={onClickRemove}>
        <ClearIcon />
      </div>
    </div>
  );
};

export default CartItemBlock;
