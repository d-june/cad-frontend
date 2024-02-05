"use client";
import Link from "next/link";

import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import LoadableImage from "../LoadableImage/LoadableImage";
import vkIcon from "../../../public/icons/vk.svg";
import map from "../../../public/map.jpg";

import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={styles.contacts + " container"}>
      <div className={styles.contactsImage}>
        <LoadableImage src={map.src} alt="карта" />
      </div>
      <div className={styles.contactsContent}>
        <p>
          <FmdGoodOutlinedIcon />
          г. Санкт-Петербург, ул. Дыбенко, д. 7, к. 1
        </p>
        <div className={styles.contactsItem}>
          <Link href="tel:+79110851745">
            <WhatsAppIcon /> 8 911 085 17 45
          </Link>
          <Link href="https://vk.com/cad_candles" target="_blank">
            <img src={vkIcon.src} alt="vk иконка" /> cad_candles
          </Link>
          <Link href="https://t.me/cad_candles" target="_blank">
            <TelegramIcon />
            cad_candles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
