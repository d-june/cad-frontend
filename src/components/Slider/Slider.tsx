"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import Item from "./Item";

import candle1 from "../../../public/candles/aroma-candle-3.jpg";
import candle2 from "../../../public/candles/aroma-candle-4.jpg";
import candle3 from "../../../public/candles/aroma-candle-5.jpg";
import candle4 from "../../../public/candles/aroma-candle-6.jpg";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import styles from "./Slider.module.scss";

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
    image: candle1,
    title: "Ароматическая свеча",
    advantage: "Аромаотдача",
    advantageDescription: "Приятные ароматы создают уютную атмосферу",
  },
  {
    id: 2,
    image: candle2,
    title: "Ароматическая свеча",
    advantage: "Экологичность",
    advantageDescription: "Свечи сделаны из натурального воска",
  },
  {
    id: 3,
    image: candle3,
    title: "Ароматическая свеча",
    advantage: "Время горения",
    advantageDescription: "Свеча объемом 200 мл. горит ~ 40 часов",
  },
  {
    id: 4,
    image: candle4,
    title: "Ароматическая свеча",
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
