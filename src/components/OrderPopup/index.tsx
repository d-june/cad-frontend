import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useForm } from "react-hook-form";

import { CartItemType } from "@/redux/slices/cart/types";
import { clearCart } from "@/redux/slices/cart/slice";
import {
  sendOrderToMail,
  updateAvailableCountById,
} from "@/redux/slices/products/asyncActions";
import { selectProductsData } from "@/redux/slices/products/selectors";

import TextMaskCustom from "./TextMaskCustom";

import {
  Alert,
  Button,
  Dialog,
  DialogContent,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./OrderPopup.module.scss";

interface AuthPopupProps {
  onClose: () => void;
  open: boolean;
  handleClose: () => void;
  productsCart: CartItemType[];
  totalPrice: number;
}

const OrderPopup: FC<AuthPopupProps> = ({
  onClose,
  open,
  handleClose,
  productsCart,
  totalPrice,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [addressVisible, setAddressVisible] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const { products } = useAppSelector(selectProductsData);

  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const text = productsCart
    .map((product) => {
      return ` ${product.color} ${product.title} ${product.volume} мл.: ${product.count} шт.`.toLowerCase();
    })
    .toLocaleString();

  const changeCount = async () => {
    productsCart.map((productCart) => {
      products.map((product) => {
        if (product.id === productCart.id) {
          dispatch(
            updateAvailableCountById({
              id: productCart.id,
              available: Number(product.available) - Number(productCart.count),
            })
          );
        }
      });
    });
  };

  const onSubmit = async (dto: any) => {
    dto.delivery = dto.delivery === "pickup" ? "самовывоз" : "доставка";
    const order = { ...dto, text, totalPrice };
    try {
      dispatch(sendOrderToMail(order));
      setErrorMessage("");
    } catch (err: any) {
      console.warn("Ошибка при отправлении письма", err);
      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }

    changeCount();

    onClose();

    setOrderSuccess(true);
  };

  const closeSuccessDialog = () => {
    setOrderSuccess(false);
    dispatch(clearCart());
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth className={styles.order}>
        <DialogContent className={styles.orderContent}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.orderForm}>
            <div className={styles.orderClose}>
              <CloseIcon onClick={onClose} />
            </div>
            <div className={styles.orderTitle}>Форма заказа</div>
            <div className={styles.orderInputs}>
              <TextField
                label="Ваше имя"
                {...register("name", { required: true })}
                fullWidth
                className={styles.orderInput}
              />

              <TextField
                label="Номер телефона"
                type="tel"
                {...register("phone", {
                  required: true,
                })}
                fullWidth
                className={styles.orderInput}
                InputProps={{
                  inputComponent: TextMaskCustom,
                }}
              />

              <TextField
                label="email"
                type="email"
                {...register("email", { required: false })}
                fullWidth
                className={styles.orderInput}
              />

              {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            </div>

            <div className={styles.orderTotal}>
              <div>Ваш заказ:</div>
              <div className={styles.orderTotalList}>
                <div className={styles.orderTotalItems}>{text}</div>
              </div>
            </div>

            <div className={styles.orderDelivery}>
              <RadioGroup
                defaultValue="pickup"
                className={styles.orderRadioButtons}
                {...register("delivery", { required: true })}
              >
                <FormControlLabel
                  value="pickup"
                  control={<Radio />}
                  label="Самовывоз (Вы можете забрать заказ по адресу ул. Дыбенко, д. 7, корп. 1)"
                  onClick={() => setAddressVisible(false)}
                  {...register("delivery", { required: true })}
                  className={styles.orderRadioButton}
                />
                <FormControlLabel
                  value="delivery"
                  control={<Radio />}
                  label="Доставка"
                  onClick={() => setAddressVisible(true)}
                  {...register("delivery", { required: true })}
                  className={styles.orderRadioButton}
                />
              </RadioGroup>
              {addressVisible && (
                <TextField
                  label="Адрес доставки"
                  {...register("address", {
                    required: addressVisible ? true : false,
                  })}
                  fullWidth
                  className={styles.orderInput}
                />
              )}
            </div>

            <div className={styles.orderTotalPrice}>
              К оплате: <span>{totalPrice} руб.</span>
            </div>

            <Button
              variant="outlined"
              type="submit"
              className={styles.orderSubmit}
            >
              Оформить заказ
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog open={orderSuccess} onClose={closeSuccessDialog} fullWidth>
        <DialogContent className={styles.orderSuccess}>
          <div className={styles.orderSuccessBody}>
            <div className={styles.orderSuccessClose}>
              <CloseIcon onClick={closeSuccessDialog} />
            </div>
            <p className={styles.orderSuccessText}>Спасибо за заказ!</p>
            <div>
              <SentimentSatisfiedAltIcon className={styles.orderSuccessIcon} />
            </div>
            <p className={styles.orderSuccessText}>
              Менеджер свяжется с Вами, как только мы соберем заказ.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OrderPopup;
