import styles from "./Contacts.module.scss";

import map from "../../../public/map-2.jpg";
import vkIcon from "../../../public/icons/vk.svg";
import Image from "next/image";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";

import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const Contacts = () => {
  return (
    <div className={styles.contacts + " container"}>
      <div className={styles.contactsImage}>
        <Image src={map} alt="карта"></Image>
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
            <Image src={vkIcon} alt="vk иконка"></Image> cad_candles
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
