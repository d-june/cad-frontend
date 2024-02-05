import { FC } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

import { translit } from "../utils/translit";
import LoadableImage from "../LoadableImage/LoadableImage";
import { ProductType } from "@/redux/slices/products/types";

import { Button } from "@mui/material";

import styles from "./Product.module.scss";

import "swiper/swiper-bundle.css";

type ProductPropsType = {
  product: ProductType;
};

const Product: FC<ProductPropsType> = ({ product }) => {
  const {
    formState: { errors },
  } = useForm();

  return (
    <>
      <article
        className={
          product.available > 0
            ? styles.product
            : styles.product + " " + styles.productEmpty
        }
      >
        <Link
          href={`/catalog/${String(translit(`/${product.generalGroup}`))}/${
            product.slug
          }/`}
        >
          <Swiper
            modules={[Navigation, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            className={styles.swiper}
          >
            {product?.images?.map((image: any, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={styles.productImage}>
                    <LoadableImage
                      src={`https://owa.cadhome.ru/api/products/product-image/${image}`}
                      alt={product.title}
                      className={styles.productImage}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Link>

        <div className={styles.productContent}>
          <Link
            href={`/catalog/${String(translit(`/${product.generalGroup}`))}/${
              product.slug
            }/`}
          >
            <h2 className={styles.productTitle}>{product.title}</h2>
          </Link>
          {product.description && (
            <p className={styles.productDescription}>
              {product.description.length > 115
                ? product.description.slice(0, 115) + "..."
                : product.description}
            </p>
          )}
          <div className={styles.productVolumeAndPrice}>
            {product.available > 0 ? (
              <p className={styles.productPrice}>{product.price} ₽</p>
            ) : (
              <p>Нет в наличии</p>
            )}
            {product.volume && (
              <p className={styles.productVolume}>{product.volume} мл.</p>
            )}
          </div>

          <Button>
            <Link
              href={`/catalog/${String(translit(`/${product.generalGroup}`))}/${
                product.slug
              }/`}
              className={styles.productLinkMore}
            >
              Подробнее
            </Link>
          </Button>
        </div>
      </article>
    </>
  );
};

export default Product;
