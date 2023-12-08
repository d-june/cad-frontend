import styles from "./Recomendations.module.scss";
import recomendationIcon1 from "../../../public/recomendations-icons/1.png";
import recomendationIcon2 from "../../../public/recomendations-icons/2.png";
import recomendationIcon3 from "../../../public/recomendations-icons/3.png";
import recomendationIcon4 from "../../../public/recomendations-icons/4.png";
import recomendationIcon5 from "../../../public/recomendations-icons/5.png";
import candleWithLetters from "../../../public/candles/stok-main/4.jpg";
import candleWithBooks from "../../../public/candles/stok-main/1.jpg";
import Image from "next/image";

import FireplaceIcon from "@mui/icons-material/Fireplace";
import PetsIcon from "@mui/icons-material/Pets";
import AirIcon from "@mui/icons-material/Air";

const Recomendations = () => {
  return (
    <div className={styles.recomendations}>
      <div className={styles.recomendationsBlock}>
        <div className={styles.recomendationsContent}>
          <h1>Рекомендации по использованию свечей</h1>
          <ul>
            <li>
              Чтобы свечи горели заявленное время, им нужно давать отдыхать,
              т.е. после 1-2 часов горения дать застыть и потом снова зажечь.
            </li>
            <li>
              При первом использовании свечи нужно подождать, пока ее
              поверхность полностью расплавится. Это поможет избежать
              образование туннеля, в котором свеча будет гореть хуже.
            </li>
            <li>
              Перед повторным использованием почерневший фитиль нужно подрезать,
              чтобы устранить запах гари. Длина фитиля должна быть не более 8
              мм.
            </li>
            <li>
              Не оставляйте свечу на продуваемом месте (на ветру или сквозняке),
              иначе возможно затухание свечи или она будет гореть неравномерно.
            </li>
            <li>Храните свечи в темном прохладном месте.</li>
          </ul>
        </div>
        <div className={styles.recomendationsImage}>
          <Image src={candleWithLetters} alt="свеча"></Image>
        </div>
      </div>
      <div className={styles.accidentPreventionBlock}>
        <div className={styles.recomendationsImage}>
          <Image src={candleWithBooks} alt="свеча"></Image>
        </div>
        <div className={styles.accidentPreventionContent}>
          <h2>Техника безопасности</h2>
          <ul>
            <li>
              <div className={styles.recomendationsIcon}>
                {/* <Image
                  src={recomendationIcon1}
                  alt="иконка: не оставляйте свечу без внимания"
                /> */}
                <PetsIcon />
              </div>
              <p>
                Не оставляйте свечу без внимания, особенно, если в комнате есть
                маленькие дети или животные.
              </p>
            </li>
            <li>
              <div className={styles.recomendationsIcon}>
                {/* <Image
                  src={recomendationIcon2}
                  alt="иконка: не задувайте свечу"
                /> */}
                <AirIcon />
              </div>
              Для того, чтобы погасить свечу, следует ее накрыть каким-либо
              предметом, исключив поступление кислорода, например, крышкой
              подсвечника.
            </li>
            <li>
              <div className={styles.recomendationsIcon}>
                <Image
                  src={recomendationIcon3}
                  alt="иконка: ставьте свечу ровно, устойчиво"
                />
              </div>
              <p> Ставьте свечу ровно, устойчиво, а не под наклоном.</p>
            </li>

            <li>
              <div className={styles.recomendationsIcon}>
                {/* <Image
                  src={recomendationIcon5}
                  alt="иконка: не ставьте горящую свечу на подоконник или рядом с
                легковоспламеняющимися предметами"
                /> */}
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
