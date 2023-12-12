"use client";
import styles from "./AboutUs.module.scss";
import Image from "next/image";

import { motion } from "framer-motion";

import candle from "../../../public/candles/aroma-candle-7.jpg";

const imageAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  }),
};

const textAnimation = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 0.7,
    },
  }),
};

const AboutUs = () => {
  return (
    <motion.section
      className={styles.about + " container"}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.div className={styles.aboutImage} variants={imageAnimation}>
        <img src={candle.src} alt="ароматическая свеча" />
      </motion.div>
      <motion.div className={styles.aboutText} variants={textAnimation}>
        <h2>Тепло и уют в ваш дом</h2>
        <p>
          Хотите создать уютную и романтическую атмосферу в своем доме или
          сделать приятный подарок для своих близких? Тогда вам обязательно
          стоит обратить внимание на ароматические свечи. Мы предлагаем широкий
          выбор ароматических свечей с ароматами на любой вкус.
        </p>
        <p>
          Каждая свеча уникальна и создается вручную. В ассортименте свечи с
          ароматом лаванды, горячего хлеба, бабл гам, ванили, манго и другие.
          Свечи залиты в гипсовые подсвечники, которые также изготовлены
          вручную. Деревянный фитиль свечи будет потрескивать при горении и
          наполнять дом уютом и теплом. Кроме того, мы можем изготовить свечи на
          заказ в необходимом количестве, вы сами сможете выбрать дизайн
          подсвечника и аромат.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutUs;
