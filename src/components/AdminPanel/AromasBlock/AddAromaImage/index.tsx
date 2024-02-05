import { FC, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { useForm } from "react-hook-form";

import { updateAromaImage } from "@/redux/slices/aromas/asyncActions";

import { Alert, Button, TextField } from "@mui/material";
import styles from "./AddAromaImage.module.scss";

type AddImageProps = {
  aromaId: number;
};

const AddAromaImage: FC<AddImageProps> = ({ aromaId }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const dispatch = useAppDispatch();

  const onSubmit = async (dto: any) => {
    const data = await dispatch(
      updateAromaImage({ aromaId: aromaId, image: dto.file[0] })
    );

    if (data.type === "products/updateAromaImage/rejected") {
      setErrorMessage("Не удалось добавить картинку");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.editAromaImage}>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <TextField type="file" {...register("file", { required: true })} />
      <Button type="submit">Изменить картинку</Button>
    </form>
  );
};

export default AddAromaImage;
