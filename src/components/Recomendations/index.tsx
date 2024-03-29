"use client";

import FireplaceIcon from "@mui/icons-material/Fireplace";
import PetsIcon from "@mui/icons-material/Pets";
import AirIcon from "@mui/icons-material/Air";

import candle1 from "../../../public/candles/aroma-candle-1.jpg";
import candle2 from "../../../public/candles/aroma-candle-2.jpg";
import LoadableImage from "../LoadableImage/LoadableImage";

import styles from "./Recomendations.module.scss";

const Recomendations = () => {
  return (
    <div className={styles.recomendations}>
      <div className={styles.recomendationsBlock}>
        <div className={styles.recomendationsContent}>
          <h1>Рекомендации по использованию свечей</h1>
          <ul>
            <li>
              Первое горение свечи должно длиться до полного расплавления ее
              верхушки, чтобы в дальнейшем не образовывалось туннеля, в котором
              свеча будет гореть хуже и для того, чтобы аромат смог полностью
              раскрыться.
            </li>
            <li>
              Деревянный фитиль возможно нужно будет поджигать несколько раз до
              тех пор, пока огонь не доберется до воска, это нормально.
            </li>
            <li>
              Чтобы свечи горели заявленное время, им нужно давать отдых, т.е.
              после 1-2 часов горения дать застыть и потом снова зажечь.
            </li>
            <li>
              Перед повторным использованием свечи отгоревший фитиль нужно
              подрезать, чтобы устранить запах гари от фитиля. Длина фитиля
              должна быть не более 5-8 мм.
            </li>
            <li>
              Не оставляйте свечу на продуваемом месте, иначе возможно затухание
              свечи, или она будет гореть неравномерно.
            </li>
            <li>
              Храните свечу в темном, сухом, прохладном месте. Высокая влажность
              в помещении может негативно сказаться на качестве горения
              деревянного фитиля.
            </li>
          </ul>
        </div>
        <div className={styles.recomendationsImage}>
          <LoadableImage src={candle1.src} alt="свеча" />
        </div>
      </div>
      <div className={styles.accidentPreventionBlock}>
        <div className={styles.recomendationsImage}>
          <LoadableImage src={candle2.src} alt="свеча" />
        </div>
        <div className={styles.accidentPreventionContent}>
          <h2>Техника безопасности</h2>
          <ul>
            <li>
              <div className={styles.recomendationsIcon}>
                <PetsIcon />
              </div>
              <p>
                Не оставляйте свечу без внимания, особенно, если в комнате есть
                маленькие дети или животные.
              </p>
            </li>
            <li>
              <div className={styles.recomendationsIcon}>
                <AirIcon />
              </div>
              Для того, чтобы погасить свечу, следует ее накрыть каким-либо
              предметом, исключив поступление кислорода, например, крышкой
              подсвечника.
            </li>

            <li>
              <div className={styles.recomendationsIcon}>
                <FireplaceIcon />
              </div>
              <p>
                Не ставьте горящую свечу на подоконник или рядом с
                легковоспламеняющимися предметами (книги, газеты и др.).
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recomendations;
