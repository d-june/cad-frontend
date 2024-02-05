"use client";

import LoadableImage from "../LoadableImage/LoadableImage";
import boxCandleWhitePhoto from "../../../public/candles/aroma-candle-11.jpg";
import boxCandleBlackPhoto from "../../../public/candles/aroma-candle-12.jpg";
import styles from "./DeliveryAndPayment.module.scss";

const DeliveryAndPayment = () => {
  return (
    <div className={styles.deliveryAndPayment}>
      <h1>Доставка и оплата</h1>

      <div className={styles.payment}>
        <div className={styles.paymentContent}>
          <h3>Оплата</h3>
          <ul>
            <li>Через Авито при оформлении заказа.</li>
            <li>
              Оплата наличными: доступна при самовывозе, личной встрече (по
              предварительной договоренности).
            </li>
            <li>Переводом на банковскую карту.</li>
            <li>Переводом по СБП по номеру телефона.</li>
          </ul>
        </div>

        <div className={styles.deliveryAndPaymentImage}>
          <LoadableImage
            src={boxCandleWhitePhoto.src}
            alt="свеча в белом подсвечнике в коробке"
          />
        </div>
      </div>

      <div className={styles.delivery}>
        <div className={styles.deliveryAndPaymentImage}>
          <LoadableImage
            src={boxCandleBlackPhoto.src}
            alt="свеча в черном подсвечнике в коробке"
          />
        </div>
        <div className={styles.deliveryContent}>
          <h3>Доставка</h3>
          <ul>
            <li>
              Авито Доставка (в пункты выдачи, почта России, курьеры,
              постаматы): доступна для всех свечей, размещенных в профиле на
              Авито.
            </li>
            <li>Доставка курьерскими службами: расчет стоимости по тарифам.</li>
            <li>Самовывоз: г. Санкт-Петербург, м. Дыбенко.</li>
            <li>
              Личная встреча в городе/метро (по предварительной договоренности).
            </li>
            <li>
              Доставка по Невскому району СПБ, Кудрово с дегустацией ароматов
              при заказе от 1000 руб. (по договоренности).
            </li>
          </ul>
          <p>
            Мы рекомендуем самый простой и удобный способ оформления заказа,
            оплаты и доставки – через Авито Доставку: это безопасная оплата,
            банк зарезервирует деньги на вашей карте, а мы получим их, когда вы
            проверите и примете посылку
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAndPayment;
