"use client";

import Link from "next/link";
import MTopProduct from "../Product";
import styles from "./Products.module.scss";
import { FC, useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";

import { motion } from "framer-motion";
import { ProductType } from "@/app/types/types";

type PropsType = {
  top?: boolean;
  products: ProductType[];
};

const productsAnimation = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.9,
    },
  }),
};

const Products: FC<PropsType> = ({ top, products }) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const { user } = useSelector((state: AppState) => state.userReducer);

  const topProducts = products.filter((product: any) => product.top === true);

  return (
    <div>
      {domLoaded && (
        <motion.section
          className={styles.topProducts + " container"}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <div className={styles.topProductsWrapper}>
            {top
              ? topProducts.map((product: any, index: number) => {
                  return (
                    <MTopProduct
                      custom={index + 1}
                      variants={productsAnimation}
                      key={product.id}
                      product={product}
                      user={user}
                    />
                  );
                })
              : products.map((product: any, index: number) => {
                  return (
                    <MTopProduct
                      custom={index + 1}
                      variants={productsAnimation}
                      key={product.id + index}
                      product={product}
                      user={user}
                    />
                  );
                })}
          </div>

          {top ? (
            <Link href="/catalog" className={styles.topProductsCatalog}>
              <p>Перейти в каталог</p>
            </Link>
          ) : null}
        </motion.section>
      )}
    </div>
  );
};

export default Products;
