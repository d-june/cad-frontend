"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Item from "./Item";

import styles from "./Slider.module.scss";

import product1 from "../../../public/candles/stok-main/photo-1612179518346-cf36e6695c6c.jpg";
import product2 from "../../../public/candles/stok-main/loon-image-original (4).jpg";
import product3 from "../../../public/candles/stok-main/loon-image-original.jpg";
import product4 from "../../../public/candles/stok-main/6.jpg";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sliderAnimation = {
  hidden: {
    y: -150,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: 0.5 },
  },
};

const carouselImages = [
  {
    id: 1,
    image: product1,
    title: "hello",
    advantage: "Аромаотдача",
    advantageDescription: "Приятные ароматы создают уютную атмосферу",
  },
  {
    id: 2,
    image: product2,
    title: "hi",
    advantage: "Экологичность",
    advantageDescription: "Свечи сделаны из натурального воска",
  },
  {
    id: 3,
    image: product3,
    title: "so",
    advantage: "Время горения",
    advantageDescription: "Свеча объемом 200 мл. горит ~ 40 часов",
  },
  {
    id: 4,
    image: product4,
    title: "yes",
    advantage: "Ручная работа",
    advantageDescription: "Каждая свеча уникальна",
  },
];

const Slider = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <motion.div
      className={styles.slider + " container"}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
    >
      <motion.div className={styles.swiperWrapper} variants={sliderAnimation}>
        {domLoaded && (
          <Swiper
            modules={[Navigation, A11y, Autoplay]}
            autoplay={true}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            className={styles.swiper}
          >
            {carouselImages.map((slide: any) => {
              return (
                <SwiperSlide key={slide.id}>
                  <Item item={slide}></Item>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
