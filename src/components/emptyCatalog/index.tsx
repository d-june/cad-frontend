import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";

import styles from "./EmptyCatalog.module.scss";

const EmptyCatalog = () => {
  return (
    <div className={styles.emptyCatalog}>
      <div className={styles.emptyCatalogIcon}>
        <SentimentDissatisfiedOutlinedIcon />
      </div>
      <p className={styles.emptyCatalogText}>Ничего не нашлось...</p>
    </div>
  );
};

export default EmptyCatalog;
