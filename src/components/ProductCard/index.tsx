"use client";

import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { CartItemType } from "@/redux/slices/cart/types";
import {
  addProduct,
  minusProduct,
  plusProduct,
  removeProduct,
} from "@/redux/slices/cart/slice";
import { getProductBySlug } from "@/redux/slices/products/asyncActions";
import { selectProductsData } from "@/redux/slices/products/selectors";
import { selectCart } from "@/redux/slices/cart/selectors";

import Breadcrumbs from "../Breadcrumbs";
import AromaPopup from "./AromaPopup";
import LoadableImage from "../LoadableImage/LoadableImage";

import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import styles from "./ProductCard.module.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

type ProductCardProps = {
  slug: string;
};

const ProductCard: FC<ProductCardProps> = ({ slug }) => {
  const { currentProduct } = useAppSelector(selectProductsData);
  const dispatch = useAppDispatch();

  const [cartDisabled, setCartDisabled] = useState(true);

  const { products } = useAppSelector(selectCart);

  const checkedProductInCart = products.filter(
    (cartProduct: CartItemType) => cartProduct.slug === slug
  );
  const [addedCount, setAddedCount] = useState(
    checkedProductInCart.length !== 0 ? checkedProductInCart[0].count : 0
  );

  const onClickAddToCart = () => {
    let addedProduct: CartItemType;
    if (currentProduct) {
      addedProduct = {
        id: currentProduct.id,
        slug: currentProduct.slug,
        title: currentProduct.title,
        description: currentProduct.description,
        price: currentProduct.price,
        imageUrl: currentProduct.images && currentProduct.images[0],
        aroma: currentProduct.aroma,
        count: addedCount,
        availableCount: currentProduct.available,
        color: currentProduct?.color,
        volume: currentProduct?.volume,
      };
      dispatch(addProduct(addedProduct));
    }
  };

  useEffect(() => {
    dispatch(getProductBySlug(slug));
  }, [slug]);

  useEffect(() => {
    if (addedCount === 0) {
      setCartDisabled(true);
    } else if (addedCount > 0) {
      setCartDisabled(false);
    }
  }, [addedCount]);

  useEffect(() => {
    if (checkedProductInCart.length !== 0) {
      setAddedCount(checkedProductInCart[0].count);
    } else {
      setAddedCount(1);
    }
  }, [checkedProductInCart]);

  const onClickPlus = () => {
    if (currentProduct) {
      dispatch(plusProduct({ id: currentProduct.id }));
    }
  };

  const onClickMinus = () => {
    if (currentProduct) {
      if (checkedProductInCart[0].count === 1) {
        dispatch(removeProduct({ id: currentProduct.id }));
      }
      dispatch(minusProduct({ id: currentProduct.id }));
    }
  };

  return (
    <div>
      <Breadcrumbs
        textItems={[
          { text: "Каталог", link: "/catalog" },
          { text: `${currentProduct && currentProduct.title}` },
        ]}
      />
      <div className={styles.productCard}>
        <div className={styles.productCardSwiper}>
          <Swiper
            modules={[Navigation, A11y, Autoplay]}
            autoplay={true}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            className={styles.swiper}
          >
            {currentProduct?.images?.map((image: string, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <LoadableImage
                    src={`https://owa.cadhome.ru/api/products/product-image/${image}`}
                    alt={currentProduct.title}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={styles.productCardAbout}>
          <div className={styles.productTitle}>
            <h1>{currentProduct?.title}</h1>
          </div>

          <div className={styles.productCardContent}>
            {currentProduct?.generalGroup === "Свечи" && (
              <p>Ароматическая свеча из соевого воска</p>
            )}
            {currentProduct?.generalGroup === "Подсвечники" && (
              <p>Подсвечник из гипса</p>
            )}

            {currentProduct && (
              <AromaPopup
                key={currentProduct.id}
                aromaName={currentProduct?.aroma}
              />
            )}

            <p className={styles.productCardPrice}>
              Цена: {currentProduct?.price} ₽
            </p>

            {currentProduct && currentProduct.available > 0 ? (
              <>
                <div className={styles.productCardAvailable}>
                  В наличии: {currentProduct?.available} шт.
                </div>

                <div className={styles.productAddToCart}>
                  <div className={styles.productAddToCartButton}>
                    {checkedProductInCart.length ? (
                      <div className={styles.productChangeCount}>
                        <Button
                          onClick={onClickMinus}
                          className={styles.productButton}
                          disabled={addedCount === 0}
                        >
                          -
                        </Button>
                        <span className={styles.productCount}>
                          {addedCount}
                        </span>
                        <Button
                          onClick={onClickPlus}
                          className={styles.productButton}
                          disabled={addedCount === currentProduct.available}
                        >
                          +
                        </Button>
                      </div>
                    ) : (
                      <Button
                        onClick={onClickAddToCart}
                        className={styles.productCart}
                        disabled={currentProduct.available < 1}
                      >
                        В корзину
                        <ShoppingCartIcon />
                      </Button>
                    )}
                  </div>
                </div>
              </>
            ) : (
              "Товара нет в наличии"
            )}
          </div>
        </div>
      </div>
      <div className={styles.productCardBottom}>
        <div className={styles.productCardCharacteristics}>
          <h3>Характеристики:</h3>
          <ul>
            <li>Объем: {currentProduct?.volume} мл.</li>
            <li>Вес: {currentProduct?.weight} гр.</li>
            <li>
              Размеры ШхВхГ: {currentProduct?.width}x{currentProduct?.height}x
              {currentProduct?.depth}
            </li>
            <li>Время горения: {currentProduct?.burningTime}</li>
          </ul>
        </div>
        <p>{currentProduct?.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
