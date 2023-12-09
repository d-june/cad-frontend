import Image from "next/image";
import Link from "next/link";

import styles from "./Product.module.scss";
import { Button, Input, TextField, dividerClasses } from "@mui/material";

import { motion } from "framer-motion";

import { forwardRef, useEffect, useState } from "react";
import { Api } from "@/services/api";
import { useForm } from "react-hook-form";

import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { translit } from "../utils/translit";

const TopProduct = forwardRef(({ product, user }: any, ref: any) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (dto: any) => {
    try {
      const data = await Api().products.updateImages(product.id, dto.file[0]);
    } catch (err: any) {
      console.warn("Ошибка при добавлении файла", err);
      if (err.response) {
        // setErrorMessage(err.response.data.message);
      }
    }
  };

  const [popupVisible, setPopupVisible] = useState(false);

  const openEditDialog = () => {
    setPopupVisible(true);
  };

  const closeEditDialog = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <article ref={ref} className={styles.product}>
        <Link
          href={`/catalog/${String(translit(`/${product.generalGroup}`))}/${
            product.slug
          }/`}
        >
          {domLoaded && (
            <Swiper
              modules={[Navigation, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={true}
              className={styles.swiper}
            >
              {product.images.map((image: any) => {
                return (
                  <SwiperSlide key={image.id}>
                    <img
                      src={`http://api.cadhome.ru/api/products/product-image/${image}`}
                      alt={product.title}
                      className={styles.productImage}
                    ></img>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
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
            {product.price && (
              <p className={styles.productPrice}>{product.price} ₽</p>
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
});

const MTopProduct = motion(TopProduct);

export default MTopProduct;
