import { useAppDispatch } from "@/redux/hooks";
import { updateProductImages } from "@/redux/slices/adminPanelProducts/slice";
import { Api } from "@/services/api";
import { Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";

import styles from "../EditProduct.module.scss";

type AddImageProps = {
  productId: string;
};

const AddImage: FC<AddImageProps> = ({ productId }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const dispatch = useAppDispatch();

  const onSubmit = async (dto: any) => {
    try {
      const data = await Api().products.updateImages(productId, dto.file[0]);
      dispatch(updateProductImages(data));
    } catch (err: any) {
      console.warn("Ошибка при добавлении файла", err);
      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.editProductFormAddImage}
    >
      <TextField type="file" {...register("file", { required: true })} />
      <Button type="submit">Добавить картинку</Button>
    </form>
  );
};

export default AddImage;
