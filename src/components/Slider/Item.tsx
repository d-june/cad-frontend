"use client";
import Link from "next/link";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import styles from "./Slider.module.scss";

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
          <img
            src={item.image.src}
            alt={item.title}
            style={{ width: "100%", height: "60vh", objectFit: "cover" }}
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
