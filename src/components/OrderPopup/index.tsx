import React, { FC, useState } from "react";
import {
  Alert,
  Button,
  Checkbox,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";

import { ProductType } from "@/app/types/types";
import { Api } from "@/services/api";
import { CartItemType } from "@/redux/slices/cart/types";

import styles from "./OrderPopup.module.scss";
import { Montserrat } from "next/font/google";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { useAppDispatch } from "@/redux/hooks";
import { clearCart } from "@/redux/slices/cart/slice";

interface AuthPopupProps {
  onClose: () => void;
  open: boolean;
  handleClose: () => void;
  products: CartItemType[];
  totalPrice: number;
}

const OrderPopup: FC<AuthPopupProps> = ({
  onClose,
  open,
  handleClose,
  products,
  totalPrice,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [addressVisible, setAddressVisible] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const text = products
    .map((product) => {
      return ` ${product.color} ${product.title} ${product.volume} мл. (Аромат: ${product.aroma.name}): ${product.aroma.count} шт.`.toLowerCase();
    })
    .toLocaleString();

  const onSubmit = async (dto: any) => {
    const delivery = dto.delivery === "pickup" ? "самовывоз" : "доставка";
    try {
      const data = await Api().products.sendOrder(
        dto.name,
        dto.phone,
        dto.email,
        delivery,
        dto.address,
        text,
        totalPrice
      );
      setErrorMessage("");
    } catch (err: any) {
      console.warn("Ошибка при регистрации", err);
      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
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
                {...register("phone", { required: true })}
                fullWidth
                className={styles.orderInput}
              />
              <TextField
                label="email"
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
              Менеджер связется с Вами как только мы соберем заказ.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OrderPopup;
