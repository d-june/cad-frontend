import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { CartItemType } from "../../redux/slices/cart/types";
import {
  plusProduct,
  minusProduct,
  removeProduct,
} from "../../redux/slices/cart/slice";

import ClearIcon from "@mui/icons-material/Clear";

import styles from "./Cart.module.scss";

const CartItemBlock: FC<CartItemType> = ({
  id,
  imageUrl,
  title,
  description,
  price,
  availableCount,
  count,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(plusProduct({ id: id }));
  };

  const onClickMinus = () => {
    dispatch(minusProduct({ id: id }));
  };

  const onClickRemove = () => {
    if (window.confirm("Вы уверенны, что хотите удалить?")) {
      dispatch(removeProduct({ id: id }));
    }
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.itemImage}>
        <img
          src={`https://owa.cadhome.ru/api/products/product-image/${imageUrl}`}
          alt="ароматическая свеча"
        />
      </div>

      <div className={styles.itemAbout}>
        <h3 className={styles.itemTitle}>{title}</h3>
        <p className={styles.itemDescription}>
          {description.length > 50
            ? description.slice(0, 50) + "..."
            : description}
        </p>
      </div>
      <div className={styles.countBlock}>
        <button
          disabled={count === 1}
          className={styles.itemButton}
          onClick={onClickMinus}
        >
          -
        </button>
        {count}
        <button
          className={styles.itemButton}
          onClick={onClickPlus}
          disabled={count === availableCount}
        >
          +
        </button>
      </div>
      <div className={styles.itemPrice}>{price * count} ₽</div>
      <div className={styles.itemDelete} onClick={onClickRemove}>
        <ClearIcon />
      </div>
    </div>
  );
};

export default CartItemBlock;
