import React, { FC } from "react";
import styles from "./AuthPopup.module.scss";
import { Button, DialogContentText } from "@mui/material";

import YandexIcon from "../../../public/icons/yandex.svg";
import Image from "next/image";
import GoogleIcon from "../../../public/icons/google.svg";
import MailIcon from "../../../public/icons/mail.svg";
import TwitterIcon from "../../../public/icons/twitter.svg";
import FacebookIcon from "../../../public/icons/facebook.svg";
import AppleIcon from "../../../public/icons/apple.svg";

interface MainFormProps {
  onClickLoginEmail: () => void;
}
const Main: FC<MainFormProps> = ({ onClickLoginEmail }) => {
  return (
    <DialogContentText className={styles.popupContent}>
      <div className={styles.popupFields}>
        <Button fullWidth variant="outlined">
          <Image
            src={YandexIcon}
            alt="yandex icon"
            style={{ width: "30px", height: "30px" }}
          />
          Яндекс
        </Button>
        <Button fullWidth variant="outlined">
          <Image src={GoogleIcon} alt="google icon" />
          Google
        </Button>
        <Button onClick={onClickLoginEmail} fullWidth variant="outlined">
          <Image src={MailIcon} alt="mail icon" />
          Через почту
        </Button>
      </div>
    </DialogContentText>
  );
};

export default Main;
