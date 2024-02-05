import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { selectAromasData } from "@/redux/slices/aromas/selectors";
import { getAromas } from "@/redux/slices/aromas/asyncActions";

import LoadableImage from "@/components/LoadableImage/LoadableImage";

import { Dialog, DialogContent } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./AromaPopup.module.scss";

type AromaPopupProps = {
  aromaName: string;
};

const AromaPopup: FC<AromaPopupProps> = ({ aromaName }) => {
  const { aromas } = useAppSelector(selectAromasData);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getAromas());
  }, []);

  return (
    <div>
      <div className={styles.aromaPopupOpen} onClick={handleClickOpen}>
        <InfoOutlinedIcon className={styles.aromaPopupIcon} />
        <p>Описание аромата</p>
      </div>

      <Dialog open={open} onClose={handleClose} className={styles.aromaPopup}>
        <DialogContent className={styles.aromaPopupWrapper}>
          <CloseIcon onClick={handleClose} className={styles.aromaPopupClose} />
          <h3 className={styles.aromaPopupTitle}>{aromaName}</h3>
          {aromas.map((aroma: any) => {
            return (
              <div key={aroma.id}>
                {aroma.name.toLowerCase().trim() ===
                  aromaName.toLocaleLowerCase().trim() && (
                  <div className={styles.aromaPopupContent}>
                    <div className={styles.aromaPopupImage}>
                      <LoadableImage
                        src={`https://owa.cadhome.ru/api/products/product-image/${aroma.image}`}
                        alt={aroma.title}
                      />
                    </div>

                    <div className={styles.aromaPopupDescription}>
                      {aroma.description}
                    </div>
                    <div className={styles.aromaPopupNotes}>
                      <div className={styles.aromaPopupNote}>
                        <span>Верх: </span>
                        {aroma.top}
                      </div>
                      <div className={styles.aromaPopupNote}>
                        <span>Середина: </span>
                        {aroma.middle}
                      </div>
                      <div className={styles.aromaPopupNote}>
                        <span>База: </span>
                        {aroma.base}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AromaPopup;
