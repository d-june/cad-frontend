import styles from "./About.module.scss";
import Image from "next/image";

import candle from "../../../public/candles/aroma-candle-10.jpg";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutImage}>
        <img src={candle.src} alt="ароматическая свеча" />
      </div>
      <div className={styles.aboutContent}>
        <h1 className={styles.aboutTitle}>О нас</h1>
        <div className={styles.aboutText}>
          <p>
            Наша мастерская по изготовлению ароматических свечей – это место,
            где создаются настоящие произведения искусства из натурального воска
            и гипса.У нас можно заказать изготовление различных видов
            ароматических свечей, которые будут не только прекрасным украшением
            интерьера, но и отличным подарком для близких и друзей. Мы знаем все
            тонкости процесса создания свечей и используем экологичный
            натуральный соевый или кокосовый воск, а высококачественные отдушки
            создают неповторимый аромат.
          </p>
          <p>
            Каждая свеча изготавливается вручную, что позволяет создавать
            уникальные композиции со своим ароматом, формой и цветом. Кроме
            того, предлагаем услуги по созданию гипсовых подсвечников и подносов
            на заказ.
          </p>
          <p>
            Гипсовые изделия станут интересным элементом декора в интерьере
            вашей комнаты. Если вы хотите подарить своим близким и друзьям
            незабываемый подарок, то наша мастерская– это именно то место, где
            вы сможете купить ароматические свечи ручной работы, а также
            насладиться красотой и ароматом свечей.
          </p>
          <p>
            Мастерская находится в Санкт-Петербурге, недалеко от м. ул. Дыбенко,
            поэтому вы можете лично прийти и послушать ароматы, посмотреть
            «вживую» все свечи и выбрать понравившуюся. Мы продаем только те
            свечи, которые бы купили сами, надеемся, что и вам они тоже будут по
            душе 😊
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
