"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Item from "./Item";

import styles from "./Slider.module.scss";

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
    image:
      "https://res.cloudinary.com/dkmd58mmx/image/upload/v1702234343/vlax0ic1kqx7dhfwnyn5.jpg",
    title: "Ароматическая свеча",
    advantage: "Аромаотдача",
    advantageDescription: "Приятные ароматы создают уютную атмосферу",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dkmd58mmx/image/upload/v1702234344/s8kq1l2l6qq4nh2sjwcj.jpg",
    title: "Ароматическая свеча",
    advantage: "Экологичность",
    advantageDescription: "Свечи сделаны из натурального воска",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dkmd58mmx/image/upload/v1702234344/ssq05gel71tm7ght2600.jpg",
    title: "Ароматическая свеча",
    advantage: "Время горения",
    advantageDescription: "Свеча объемом 200 мл. горит ~ 40 часов",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dkmd58mmx/image/upload/v1702234344/jgp06s024xssxruo6fus.jpg",
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
