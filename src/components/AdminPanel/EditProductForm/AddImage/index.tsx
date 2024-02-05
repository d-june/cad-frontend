import { FC, useState } from "react";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "@/redux/hooks";
import { updateProductImages } from "@/redux/slices/products/asyncActions";

import { Alert, Button, TextField } from "@mui/material";

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
    const data = await dispatch(
      updateProductImages({ productId: productId, image: dto.file[0] })
    );

    if (data.type === "products/updateProductImages/rejected") {
      setErrorMessage("Ошибка при добавлении файла.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.editProductFormAddImage}
    >
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <TextField type="file" {...register("file", { required: true })} />
      <Button type="submit">Добавить картинку</Button>
    </form>
  );
};

export default AddImage;
