"use client";

import { FC, useEffect, useState } from "react";
import { ProductType } from "@/app/types/types";
import Breadcrumbs from "../Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ProductCard.module.scss";
import Image from "next/image";
import { Button, dividerClasses } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Api } from "@/services/api";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { CartItemType } from "@/redux/slices/cart/types";
import { addProduct } from "@/redux/slices/cart/slice";
import { AppState } from "@/redux/store";

type ProductCardProps = {
  slug: string;
};

const ProductCard: FC<ProductCardProps> = ({ slug }) => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState<ProductType>();
  const [checkedAroma, setCheckedAroma] = useState("");
  const [cartDisabled, setCartDisabled] = useState(true);

  const cartProducts = useSelector(
    (state: AppState) => state.cartSlice.products
  );

  const checkedProduct: any = product?.aromas?.find((aromas) => {
    return aromas.name === checkedAroma;
  });

  const checkedProductInCart = cartProducts.filter(
    (cartProduct: CartItemType) =>
      cartProduct.slug === slug &&
      cartProduct.aroma.name === checkedProduct?.name
  );
  const [addedCount, setAddedCount] = useState(
    checkedProductInCart.length !== 0 ? checkedProductInCart[0].aroma.count : 0
  );

  const onClickAddToCart = () => {
    let addedProduct: CartItemType;
    if (product) {
      addedProduct = {
        id: product.id,
        slug: product.slug,
        title: product.title,
        description: product.description,
        price: product.price,
        imageUrl: product.images && product.images[0],
        aroma: { name: checkedAroma, count: addedCount },
        availableCount: checkedProduct?.count,
        color: product?.color,
        volume: product?.volume,
      };
      dispatch(addProduct(addedProduct));
    }
  };

  useEffect(() => {
    Api()
      .products.getBySlug(slug)
      .then((res) => {
        setProduct(res);
      });
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
      setAddedCount(checkedProductInCart[0].aroma.count);
    } else {
      setAddedCount(0);
    }
  }, [checkedAroma]);

  const onClickPlus = () => {
    setAddedCount(addedCount + 1);
  };

  const onClickMinus = () => {
    setAddedCount(addedCount - 1);
  };

  const handleAromaCheck = (aroma: string) => {
    setCheckedAroma(aroma);
  };

  return (
    <div>
      <Breadcrumbs
        textItems={[
          { text: "Каталог", link: "/catalog" },
          { text: `${product && product.title}` },
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
            {product?.images?.map((image: any) => {
              return (
                <SwiperSlide key={image.id}>
                  <img
                    src={`http://api.cadhome.ru/api/products/product-image/${image}`}
                    alt={product.title}
                  ></img>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={styles.productCardAbout}>
          <h1>{product?.title}</h1>
          <div className={styles.productCardContent}>
            {product?.generalGroup === "Свечи" && (
              <p>Ароматическая свеча из соевого воска</p>
            )}
            {product?.generalGroup === "Подсвечники" && (
              <p>Подсвечник из гипса</p>
            )}

            <p className={styles.productCardPrice}>Цена: {product?.price} ₽</p>
            <div className={styles.productCardAroma}>
              <div className={styles.productCardAromaItems}>
                {product?.aromas?.map((aroma) => {
                  return (
                    <div
                      key={aroma.id}
                      className={
                        checkedAroma === aroma.name
                          ? styles.productCardAromaItem +
                            " " +
                            styles.productCardAromaItemChecked
                          : styles.productCardAromaItem
                      }
                    >
                      <input
                        id={aroma.name}
                        type="radio"
                        name="aroma"
                        onClick={() => handleAromaCheck(aroma.name)}
                      />
                      <label htmlFor={aroma.name}>{aroma.name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            {product?.aromas?.length ? (
              <div>
                {checkedProductInCart.length !== 0 ? (
                  <Button disabled={true}>Товар в корзине</Button>
                ) : (
                  <div className={styles.card}>
                    {checkedAroma ? (
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
                          disabled={addedCount === checkedProduct?.count}
                        >
                          +
                        </Button>
                      </div>
                    ) : (
                      <div>Выберите пожалуйста аромат</div>
                    )}

                    <div className={styles.productAddToCart}>
                      <div className={styles.productAddToCartButton}>
                        <Button
                          onClick={onClickAddToCart}
                          className={styles.productCart}
                          disabled={cartDisabled}
                        >
                          В корзину
                          <ShoppingCartIcon />
                        </Button>
                      </div>

                      {checkedProduct && (
                        <div>
                          {checkedProductInCart.length !== 0
                            ? "В наличии " +
                              (checkedProduct.count -
                                checkedProductInCart[0]?.aroma.count) +
                              "  шт."
                            : "В наличии " + checkedProduct.count + "  шт."}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
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
            <li>Объем: {product?.volume} мл.</li>
            <li>Вес: {product?.weight} гр.</li>
            <li>
              Размеры ШхВхГ: {product?.width}x{product?.height}x{product?.depth}
            </li>
            <li>Время горения: {product?.burningTime}</li>
          </ul>
        </div>
        <p>{product?.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
