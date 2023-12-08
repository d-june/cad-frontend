import { AromaType, ProductType } from "@/app/types/types";
import { Api } from "@/services/api";
import { Button, FormControl, TextField } from "@mui/material";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../EditProduct.module.scss";
import { useAppDispatch } from "@/redux/hooks";
import { deleteProductAroma } from "@/redux/slices/adminPanelProducts/slice";

type AddImageProps = {
  aroma: AromaType;
  productId: string;
};

const UpdateAroma: FC<AddImageProps> = ({ aroma, productId }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (dto: any) => {
    console.log(dto);
    const newAroma = {
      id: aroma.id,
      name: dto.name,
      count: Number(dto.count),
      productId: productId,
    };
    try {
      Api().products.updateAroma(newAroma);
      window.confirm("Аромат успешно изменен");
    } catch (err: any) {
      console.warn("Не удалось обновить аромат", err);
      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  const removeAroma = async (aromaId: number | undefined) => {
    if (aromaId) {
      const data = await Api().products.deleteAroma(aromaId);
      dispatch(deleteProductAroma(data));
      console.log(data, "aromaDtaa");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.editProductChangeAroma}
      >
        <FormControl>
          <TextField
            defaultValue={aroma.name}
            type="string"
            {...register("name", { required: true })}
          />
        </FormControl>
        <FormControl>
          <TextField
            defaultValue={aroma.count}
            type="number"
            {...register("count", { required: true })}
          />
        </FormControl>

        <Button type="submit">Изменить аромат</Button>
        <Button
          type="button"
          onClick={() => removeAroma(aroma.id)}
          className={styles.editProductDeleteAroma}
        >
          Удалить аромат
        </Button>
      </form>
    </div>
  );
};

export default UpdateAroma;
