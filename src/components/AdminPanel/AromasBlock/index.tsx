import { FC, useState } from "react";

import { AromaType } from "@/redux/slices/aromas/types";

import EditAroma from "./EditAroma";
import AddAroma from "./AddAroma";

import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import styles from "./AromasBlock.module.scss";

type AromasBlockProps = {
  aromas: AromaType[];
};

const AromasBlock: FC<AromasBlockProps> = ({ aromas }) => {
  const [addAromaFormVisible, setAromaFormVisible] = useState(false);

  return (
    <div className={styles.aromasBlock}>
      {addAromaFormVisible ? (
        <AddAroma setAromaFormVisible={setAromaFormVisible} />
      ) : (
        <Button
          onClick={() => setAromaFormVisible(!addAromaFormVisible)}
          className={styles.adminAddProductButton}
        >
          <AddIcon />
          Добавить аромат
        </Button>
      )}

      <div className={styles.editAromas}>
        {aromas.map((aroma) => {
          return <EditAroma aroma={aroma} key={aroma.id} />;
        })}
      </div>
    </div>
  );
};

export default AromasBlock;
