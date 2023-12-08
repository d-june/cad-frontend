import { AromaType, ProductType } from "@/app/types/types";
import { useAppDispatch } from "@/redux/hooks";
import { addProductAroma } from "@/redux/slices/adminPanelProducts/slice";
import { Api } from "@/services/api";
import { Button, FormControl, TextField } from "@mui/material";
import React, { FC } from "react";
import { useForm } from "react-hook-form";

import styles from "../EditProduct.module.scss";

type AddImageProps = {
  productId: string;
};

const AddNewAroma: FC<AddImageProps> = ({ productId }) => {
  const [aromaName, setAromaName] = React.useState("");
  const [aromaCount, setAromaCount] = React.useState<number>(0);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async () => {
    const newAroma = {
      name: aromaName,
      count: Number(aromaCount),
    };
    try {
      const data = await Api().products.createAroma(productId, newAroma);
      dispatch(addProductAroma(data));
    } catch (err: any) {
      console.warn("Ошибка при добавлении файла", err);
      if (err.response) {
        // setErrorMessage(err.response.data.message);
      }
    }
  };

  const onChangeAromaName = (e: any) => {
    setAromaName(e.target.value);
  };

  const handlePlusAromaCount = () => {
    setAromaCount(aromaCount + 1);
  };

  const handleMinusAromaCount = () => {
    setAromaCount(aromaCount - 1);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.editProductAddAroma}
      >
        <TextField
          placeholder="Введите аромат..."
          value={aromaName}
          onChange={(e) => onChangeAromaName(e)}
        />

        <Button onClick={handleMinusAromaCount} disabled={aromaCount === 0}>
          -
        </Button>
        {aromaCount}
        <Button onClick={handlePlusAromaCount}>+</Button>

        <Button type="submit" variant="contained">
          Добавить новый аромат
        </Button>
      </form>
    </div>
  );
};

export default AddNewAroma;
