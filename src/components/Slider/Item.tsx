"use client";

import Image from "next/image";
import styles from "./Slider.module.scss";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Link from "next/link";

function Item({ item }: any) {
  return (
    <div className={styles.sliderItem}>
      <div className={styles.sliderContent}>
        <p className={styles.sliderTitle}>{item.advantage}</p>
        <p className={styles.sliderText}>{item.advantageDescription}</p>
      </div>
      <div className={styles.sliderMedia}>
        <div className={styles.sliderImage}>
          <div className={styles.sliderImageBody}>
            <Link href="/catalog" className={styles.catalogLink}>
              Перейти в каталог <ArrowRightAltIcon />
            </Link>
          </div>
          <Image
            src={item.image}
            alt={item.title}
            style={{ width: "100%", height: "60vh", objectFit: "cover" }}
            priority={true}
          />
        </div>
        <div className={styles.rigthSide}>
          <div className={styles.logo}>
            <div className={styles.logoTitle}>CAD</div>
            <div className={styles.logoAbbr}>
              <p>Candles</p>
              <p>Aroma</p>
              <p>DIY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
