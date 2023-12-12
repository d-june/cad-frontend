"use client";

import styles from "./Advantages.module.scss";
import ForestIcon from "@mui/icons-material/Forest";

import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

import { motion } from "framer-motion";

const advantagesAnimation = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: 50,
  },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 1,
    },
  }),
};

const titleAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 1,
    },
  }),
};

const Advantages = () => {
  return (
    <motion.section
      className={styles.advantages + " container"}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
    >
      <div className={styles.advantagesWrapper}>
        <div className={styles.advantagesContainer}>
          <motion.h2
            className={styles.advantagesTitle}
            custom={1}
            variants={titleAnimation}
          >
            Наши преимущества
          </motion.h2>

          <ul className={styles.advantagesList}>
            <motion.li
              className={
                styles.advantagesItem + " " + styles.advantagesItemLeft
              }
              custom={2}
              variants={advantagesAnimation}
            >
              <ForestIcon />
              Натуральные материалы
            </motion.li>
            <motion.li
              className={styles.advantagesItem}
              custom={3}
              variants={advantagesAnimation}
            >
              <LocalShippingOutlinedIcon />
              Удобная доставка
            </motion.li>
            <motion.li
              className={
                styles.advantagesItem + " " + styles.advantagesItemLeft
              }
              custom={4}
              variants={advantagesAnimation}
            >
              <VolunteerActivismOutlinedIcon />
              Ручная работа
            </motion.li>
            <motion.li
              className={styles.advantagesItem}
              custom={5}
              variants={advantagesAnimation}
            >
              <RestoreOutlinedIcon />
              30 дней на обмен и возврат
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Advantages;
