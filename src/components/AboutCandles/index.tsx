"use client";

import styles from "./AboutCandles.module.scss";
import Image from "next/image";

import { motion } from "framer-motion";

const animationImageRight = {
  hidden: {
    x: 200,
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

const animationImageLeft = {
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

const animationTextLeft = {
  hidden: {
    x: -200,
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

const animationTextRight = {
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

const AboutCandles = () => {
  return (
    <section className={styles.aboutCandles + " container"}>
      <motion.div
        className={styles.aboutCandlesTopContent}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <motion.div
          className={styles.aboutCandlesWrapper}
          variants={animationTextLeft}
        >
          <h2>Ароматические свечи - приятный подарок для ваших близких</h2>
          <p>
            Ароматические свечи – это прекрасный способ добавить немного тепла и
            уюта в ваш дом. Натуральный воск является одним из самых популярных
            ингредиентов для изготовления этих свечей. Он обладает приятным
            ароматом и легко плавится при нагревании. Кроме того, натуральный
            воск не содержит вредных химических веществ, которые могут
            присутствовать в синтетических материалах.
          </p>
        </motion.div>

        <motion.div
          className={styles.aboutCandlesImage}
          variants={animationImageRight}
        >
          <Image
            src={
              "https://res.cloudinary.com/dkmd58mmx/image/upload/v1702234344/pankjruimwxnrjyw14yy.jpg"
            }
            alt="ароматическая свеча"
            width={942}
            height={637}
            loading="lazy"
          ></Image>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.aboutCandlesAdvantages}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <motion.div
          className={styles.aboutCandlesImage}
          variants={animationImageLeft}
        >
          <Image
            src={
              "https://res.cloudinary.com/dkmd58mmx/image/upload/v1702234343/abcnvxguk8qdpayypzhg.jpg"
            }
            alt="ароматическая свеча"
            width={942}
            height={628}
            loading="lazy"
          ></Image>
        </motion.div>
        <motion.div
          className={styles.aboutCandlesWrapper}
          variants={animationTextRight}
        >
          <h2>Преимущества ароматических свечей из натурального воска:</h2>
          <ul>
            <li>
              Приятный запах: ароматические свечи из натурального воска имеют
              приятный аромат, который будет радовать вас и ваших гостей на
              протяжении длительного времени.
            </li>
            <li>
              Экологичность: использование натуральных компонентов вместо
              синтетических материалов помогает сохранить окружающую среду и
              устранить негативное воздействие на здоровье человека.
            </li>
            <li>
              Простота использования: ароматические свечи из натурального воска
              очень просты в использовании. Вы можете зажечь свечу, поставить ее
              на стол или полку и наслаждаться ее ароматом.
            </li>
            <li>
              Универсальность: ароматические свечи подходят для любого случая:
              они могут использоваться как украшение стола на вечеринке, так и
              для создания романтической атмосферы дома.
            </li>
          </ul>
          <p>
            В целом, ароматические свечи из натурального воска – это отличный
            выбор для тех, кто ценит качество, экологичность и простоту
            использования. Купить ароматические свечи вы можете на нашем сайте,
            выбрав понравившийся товар в каталоге.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutCandles;
