"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  getProducts,
  getTopProducts,
} from "@/redux/slices/products/asyncActions";
import { selectProductsData } from "@/redux/slices/products/selectors";
import { ProductType } from "@/redux/slices/products/types";

import Product from "../Product";

import styles from "./TopProducts.module.scss";

const productsAnimation = {
  hidden: {
    opacity: 0,
  },

  visible: (custom: number) => ({
    opacity: 1,

    transition: {
      delay: 0,
      duration: 1.8,
    },
  }),
};

const TopProducts = () => {
  const { topProducts, status } = useSelector(selectProductsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTopProducts());
  }, []);

  return (
    <>
      <motion.div
        className={styles.topProductsWrapper}
        variants={productsAnimation}
      >
        {topProducts.map((product: ProductType, index: number) => {
          return <Product key={product.slug} product={product} />;
        })}
      </motion.div>
      <Link href="/catalog" className={styles.topProductsCatalog}>
        <p>Перейти в каталог</p>
      </Link>
    </>
  );
};

export default TopProducts;
